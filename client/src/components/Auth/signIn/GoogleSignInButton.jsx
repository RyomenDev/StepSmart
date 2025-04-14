import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = ({ onGoogleSignIn }) => {
  return (
    <button
      onClick={onGoogleSignIn}
      className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 mb-4 bg-slate-100 hover:bg-gray-200 transition"
    >
      <FcGoogle className="w-5 h-5 mr-2" />
      Sign In with Google
    </button>
  );
};

GoogleSignInButton.propTypes = {
  onGoogleSignIn: PropTypes.func.isRequired,
};

export default GoogleSignInButton;
