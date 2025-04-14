import { useState } from "react";
import PropTypes from "prop-types";
import PasswordChecklist from "./signUp/PasswordChecklist";
import ErrorDisplay from "./ErrorDisplay.jsx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordField = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  showChecklist,
  passwordValidation = {}, // Default to an empty object to prevent undefined
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false); // Track if user is typing

  const handleChange = (e) => {
    onChange(e);
    setIsTypingPassword(!!e.target.value);
  };

  const handleBlur = () => {
    setIsTypingPassword(false);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full border-b rounded px-2 pb-2 bg-inherit ${
          error && !isTypingPassword ? "border-red-500" : "border-gray-500"
        } focus:outline-none focus:border-purple-500 transition`}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600"
      >
        {showPassword ? (
          <AiOutlineEye className="w-5 h-5" />
        ) : (
          <AiOutlineEyeInvisible className="w-5 h-5" />
        )}
      </button>

      {error && !isTypingPassword && <ErrorDisplay error={error} />}
      {isTypingPassword && showChecklist && (
        <PasswordChecklist passwordValidation={passwordValidation} />
      )}
    </div>
  );
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  showChecklist: PropTypes.bool.isRequired,
  passwordValidation: PropTypes.shape({
    minLength: PropTypes.bool.isRequired,
    hasLowerCase: PropTypes.bool.isRequired,
    hasUpperCase: PropTypes.bool.isRequired,
    hasNumberOrSymbol: PropTypes.bool.isRequired,
  }),
};

export default PasswordField;
