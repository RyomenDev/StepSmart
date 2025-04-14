import PropTypes from "prop-types";

const InputField = ({ type, name, placeholder, value, onChange, error }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border-b rounded  px-2 pb-1 bg-inherit ${
        error ? "border-red-500" : "border-gray-500"
      } focus:outline-none focus:border-purple-500 transition`}
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InputField;
