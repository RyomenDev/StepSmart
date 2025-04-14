import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../InputField";
import PasswordField from "../PasswordField";

const SignUpForm = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox

  const { name, phone, email, password, confirmPassword } = formData;

  const passwordValidation = {
    minLength: password.length >= 8,
    hasLowerCase: /[a-z]/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasNumberOrSymbol: /[\d!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const validatePassword = () =>
    Object.values(passwordValidation).every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    let newErrors = { ...errors };

    switch (name) {
      case "name":
        newErrors.name = !value.trim() ? "Name is required." : null;
        break;
      case "phone":
        newErrors.phone = !/^\d{10}$/.test(value)
          ? "Please enter a valid 10-digit phone number."
          : null;
        break;
      case "email":
        newErrors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address."
          : null;
        break;
      case "password":
        setIsTypingPassword(value !== "");
        newErrors.password = !validatePassword()
          ? "Password must meet all criteria."
          : null;
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          value !== password ? "Passwords do not match." : null;
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Object.keys(errors).filter((key) => errors[key]);
    if (validationErrors.length > 0 || !isChecked) {
      alert("Please fix the errors before submitting and agree to the terms.");
    } else {
      onSignUp(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      {/* Input-field */}
      <InputField
        type="text"
        name="name"
        placeholder="Full Name"
        value={name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={handleChange}
        error={errors.email}
      />
      {/* Password-field */}
      <PasswordField
        name="password"
        placeholder="Create Password"
        value={password}
        onChange={handleChange}
        error={errors.password}
        showChecklist={isTypingPassword}
        passwordValidation={passwordValidation}
      />
      <PasswordField
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        showChecklist={false}
      />
      {/* Consent checkbox */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="h-5 w-5 rounded-full border border-black appearance-none checked:bg-slate-700"
        />

        <span className="">
          By continuing, you agree to StepSmart's{" "}
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {/* sign-up */}
      <button
        type="submit"
        className="w-full bg-purple-300 text-white rounded-full py-2 font-semibold hover:bg-purple-600 transition"
        disabled={Object.keys(errors).some((key) => errors[key]) || !isChecked}
      >
        Continue
      </button>
    </form>
  );
};

SignUpForm.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;
