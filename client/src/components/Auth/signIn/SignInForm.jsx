import { useState } from "react";
import PropTypes from "prop-types";
import ErrorDisplay from "../ErrorDisplay";
import InputField from "../InputField";
import PasswordField from "../PasswordField";

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      setError(""); // Clear previous errors
      await onSignIn(email, password);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <div>
          <InputField
            type="email"
            name="Email Address"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            error={error.name}
          />
        </div>
        <div className="relative">
          <PasswordField
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            error={error.name}
            showChecklist={false}
          />
        </div>
        <div className="text-left">
          <ErrorDisplay error={error} />
          {/* <a
            href="/forgot-password"
            className="text-red-500 text-sm hover:underline flex items-center gap-2"
          >
            <div className="border-2 rounded-full border-red-500 w-2 p-2"/>
            Forgot password?
          </a> */}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-300 text-white rounded-full py-2 font-semibold hover:bg-purple-600 transition"
        >
          Continue
        </button>
      </form>
    </>
  );
};

SignInForm.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default SignInForm;
