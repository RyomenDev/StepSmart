import { useState } from "react";
import {
  India_GateIcon,
  Chemistry_LightIcon,
  Medical_OutLineIcon,
  Light_BankIcon,
  Clarity_PlaneIcon,
  Octicon_LawIcon,
  User_AccountIcon,
  Quill_PaperIcon,
} from "../iconsCustom.jsx";
import InputField from "../InputField";

const styles = {
  container: "min-h-screen flex items-center justify-center bg-gray-100",
  card: "w-3/5 bg-white rounded-lg p-8",
  heading: "text-2xl font-bold text-gray-800 mb-6",
  button:
    "flex items-center text-gray-800 w-fit justify-start gap-3 border p-2 rounded-lg hover:border-purple-600 focus:border-purple-600 hover:bg-slate-100 hover:text-red-500 transition-colors",
  buttonText: "text-sm font-medium",
  inputContainer: "mb-6 w-3/4",
  inputLabel: "block text-xl font-bold text-gray-600 mb-4",
  inputField:
    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none",
  actionButtons: "flex items-center justify-between gap-3",
  skipButton:
    "w-full  py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300",
  nextButton:
    "w-full  py-2 bg-purple-950 text-white rounded-full hover:bg-purple-900",
};

const options = [
  { icon: India_GateIcon, label: "UPSE CSE-GS" },
  { icon: Chemistry_LightIcon, label: "IIT JEE" },
  { icon: Medical_OutLineIcon, label: "NEET UG" },
  { icon: Light_BankIcon, label: "Bank Exams" },
  { icon: Clarity_PlaneIcon, label: "NDA" },
  { icon: Octicon_LawIcon, label: "CLAT" },
  { icon: User_AccountIcon, label: "CFA" },
  { icon: Quill_PaperIcon, label: "CAT" },
];

const SignUpLearningSetup = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [field, setField] = useState("");
  const [fieldInput, setFieldInput] = useState("");
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    setFieldInput(e.target.value);
    setField(""); // Clear the selected option if user types a custom field
  };

  // Handle option selection
  const handleOptionSelect = (label) => {
    setFieldInput(""); // Clear custom input if an option is selected
    setField(label);
    setErrors({}); // Clear any errors
  };

  // Handle Next button click
  const handleNextClick = () => {
    const selectedField = field || fieldInput; // Prioritize selected option over custom input
    if (!selectedField.trim()) {
      setErrors({ name: "Field cannot be empty." });
    } else {
      setErrors({});
      console.log("User input field:", selectedField);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Header */}
        <h2 className={styles.heading}>What field are you learning for?</h2>

        {/* Options */}
        <div className="flex flex-wrap gap-4 mb-3">
          {options.map((option, index) => (
            <label
              key={index}
              htmlFor={`option-${index}`}
              className={styles.button}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleOptionSelect(option.label)}
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="selectedOption"
                checked={field === option.label}
                value={option.label}
                onChange={() => handleOptionSelect(option.label)}
                // className="hidden"
              />
              <option.icon
                color={hoveredIndex === index ? "#ff6347" : ""}
                className="transition-colors"
              />
              <span className={styles.buttonText}>{option.label}</span>
            </label>
          ))}
        </div>

        {/* Custom Input */}
        <div className={styles.inputContainer}>
          <label htmlFor="customField" className={styles.inputLabel}>
            Enter any other field
          </label>
          <InputField
            type="text"
            name="fieldInput"
            placeholder="Type your field"
            value={fieldInput}
            onChange={handleInputChange}
            error={errors.name}
          />
        </div>

        {/* Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.skipButton}>Skip</button>
          <button className={styles.nextButton} onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpLearningSetup;

//   const [iconColor, setIconColor] = useState("");
{
  /* <option.icon color={iconColor} /> */
}
