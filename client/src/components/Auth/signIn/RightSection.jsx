// import { googleSignIn, emailPasswordSignIn } from "../../../api";
import GoogleSignInButton from "../GoogleButton.jsx";
import SignInForm from "./SignInForm";
// import conf from "../../../conf/conf.js";
// const SERVER_URL = conf.SERVER_URL;

const RightSection = () => {
  const handleGoogleSignIn = async () => {
    // try {
    //   console.log("Redirecting to Google OAuth...");
    //   if (!SERVER_URL) {
    //     throw new Error("SERVER_URL is not defined.");
    //   }
    //   window.location.href = `${SERVER_URL}/auth/oauth/login/google-oauth2/`;
    // } catch (err) {
    //   console.error("Google Sign-In Error:", err.message);
    // }
  };

  const handleEmailPasswordSignIn = async (email, password) => {
    // try {
    //   const response = await emailPasswordSignIn(email, password);
    //   //   alert(response.message);
    //   console.log(response.data);
    //   const { access_token, refresh_token } = response.data;
    //   localStorage.setItem("accessToken", access_token);
    //   localStorage.setItem("refreshToken", refresh_token);
    // } catch (err) {
    //   console.error("Sign-in failed:", err.message);
    //   //   alert("Something went wrong. Please try again.");
    //   throw err;
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-2/3">
        <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
        <p className="text-gray-500 mb-6">
          Let's sign in quickly to get started
        </p>
        <GoogleSignInButton
          onButtonClick={handleGoogleSignIn}
          topic="Sign In with Google"
        />
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <SignInForm onSignIn={handleEmailPasswordSignIn} />
        <p className="text-center mt-6 text-gray-500">
          Don't Have an account?{" "}
          <a href="/signup" className="text-red-500 hover:underline">
            Click Here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default RightSection;
