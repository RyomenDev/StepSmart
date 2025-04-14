import PropTypes from "prop-types";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs"; // Filled = green, outline = slate

const PasswordChecklist = ({ passwordValidation }) => {
  return (
    <div className="mt-2 text-xs space-y-1">
      {/* Minimum length */}
      <div className="flex items-center space-x-2">
        {passwordValidation.minLength ? (
          <BsCheckCircleFill className="text-green-600 w-4 h-4" />
        ) : (
          <BsCheckCircle className="text-gray-400 w-4 h-4" />
        )}
        <p
          className={
            passwordValidation.minLength ? "text-green-600" : "text-gray-400"
          }
        >
          At least 8 characters
        </p>
      </div>

      {/* Lowercase */}
      <div className="flex items-center space-x-2">
        {passwordValidation.hasLowerCase ? (
          <BsCheckCircleFill className="text-green-600 w-4 h-4" />
        ) : (
          <BsCheckCircle className="text-gray-400 w-4 h-4" />
        )}
        <p
          className={
            passwordValidation.hasLowerCase ? "text-green-600" : "text-gray-400"
          }
        >
          One lowercase character
        </p>
      </div>

      {/* Uppercase */}
      <div className="flex items-center space-x-2">
        {passwordValidation.hasUpperCase ? (
          <BsCheckCircleFill className="text-green-600 w-4 h-4" />
        ) : (
          <BsCheckCircle className="text-gray-400 w-4 h-4" />
        )}
        <p
          className={
            passwordValidation.hasUpperCase ? "text-green-600" : "text-gray-400"
          }
        >
          One uppercase character
        </p>
      </div>

      {/* Number or symbol */}
      <div className="flex items-center space-x-2">
        {passwordValidation.hasNumberOrSymbol ? (
          <BsCheckCircleFill className="text-green-600 w-4 h-4" />
        ) : (
          <BsCheckCircle className="text-gray-400 w-4 h-4" />
        )}
        <p
          className={
            passwordValidation.hasNumberOrSymbol
              ? "text-green-600"
              : "text-gray-400"
          }
        >
          One number or symbol
        </p>
      </div>
    </div>
  );
};

PasswordChecklist.propTypes = {
  passwordValidation: PropTypes.shape({
    minLength: PropTypes.bool.isRequired,
    hasLowerCase: PropTypes.bool.isRequired,
    hasUpperCase: PropTypes.bool.isRequired,
    hasNumberOrSymbol: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PasswordChecklist;

// import PropTypes from "prop-types";
// import { GreenTickIcon, SlateTickIcon } from "../Icons.jsx";
// const PasswordChecklist = ({ passwordValidation }) => {
//   return (
//     <div className="mt-2 text-xs space-y-1">
//       {/* Check for minimum length */}
//       <div className="flex items-center space-x-2">
//         {passwordValidation.minLength ? (
//           <img src={GreenTickIcon} alt="Green Tick Icon" className="w-4 h-4" />
//         ) : (
//           <img src={SlateTickIcon} alt="Slate Tick Icon" className="w-4 h-4" />
//         )}
//         <p
//           className={
//             passwordValidation.minLength ? "text-green-600" : "text-gray-400"
//           }
//         >
//           At least 8 characters
//         </p>
//       </div>

//       {/* Check for lowercase letter */}
//       <div className="flex items-center space-x-2">
//         {passwordValidation.hasLowerCase ? (
//           <img src={GreenTickIcon} alt="Green Tick Icon" className="w-4 h-4" />
//         ) : (
//           <img src={SlateTickIcon} alt="Slate Tick Icon" className="w-4 h-4" />
//         )}
//         <p
//           className={
//             passwordValidation.hasLowerCase ? "text-green-600" : "text-gray-400"
//           }
//         >
//           One lowercase character
//         </p>
//       </div>

//       {/* Check for uppercase letter */}
//       <div className="flex items-center space-x-2">
//         {passwordValidation.hasUpperCase ? (
//           <img src={GreenTickIcon} alt="Green Tick Icon" className="w-4 h-4" />
//         ) : (
//           <img src={SlateTickIcon} alt="Slate Tick Icon" className="w-4 h-4" />
//         )}
//         <p
//           className={
//             passwordValidation.hasUpperCase ? "text-green-600" : "text-gray-400"
//           }
//         >
//           One uppercase character
//         </p>
//       </div>

//       {/* Check for number or symbol */}
//       <div className="flex items-center space-x-2">
//         {passwordValidation.hasNumberOrSymbol ? (
//           <img src={GreenTickIcon} alt="Green Tick Icon" className="w-4 h-4" />
//         ) : (
//           <img src={SlateTickIcon} alt="Slate Tick Icon" className="w-4 h-4" />
//         )}
//         <p
//           className={
//             passwordValidation.hasNumberOrSymbol
//               ? "text-green-600"
//               : "text-gray-400"
//           }
//         >
//           One number or symbol
//         </p>
//       </div>
//     </div>
//   );
// };

// PasswordChecklist.propTypes = {
//   passwordValidation: PropTypes.shape({
//     minLength: PropTypes.bool.isRequired, // True if password length is >= 8
//     hasLowerCase: PropTypes.bool.isRequired,
//     hasUpperCase: PropTypes.bool.isRequired,
//     hasNumberOrSymbol: PropTypes.bool.isRequired,
//   }).isRequired,
// };

// export default PasswordChecklist;
