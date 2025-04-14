import { signupApi } from "../../../api";
import SignUpForm from "./SignUpForm";

const RightSection = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await signupApi(formData);
      console.log(response);

      //   alert(response.message);
    } catch (error) {
      console.log("Something went Wrong", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-2/3">
        <h2 className="text-3xl font-bold">Sign up for free</h2>
        <p className=" text-gray-400 mb-6">
          Let's sign up quickly to get started
        </p>

        {/* SignUpForm Component */}
        <SignUpForm onSignUp={handleSubmit} />

        {/* Already have an account */}
        <p className="mt-3 text-gray-600 flex justify-center">
          Already have an account?{" "}
          <a href="/signin" className="text-red-500 hover:underline">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RightSection;
