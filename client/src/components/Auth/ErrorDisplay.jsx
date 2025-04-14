
import PropTypes from "prop-types";
import { AiOutlineWarning } from "react-icons/ai";

const ErrorDisplay = ({ error }) => {
  return error ? (
    <div className="flex items-center text-red-500 text-sm">
      <AiOutlineWarning className="w-4 h-4 mr-1" />
      <span>{error}</span>
    </div>
  ) : null;
};

ErrorDisplay.propTypes = {
  error: PropTypes.string,
};

export default ErrorDisplay;


