import Character_Png from "../../assets/images/Character_Png.png";

const LeftSection = () => {
  return (
    <div
      className="relative w-4/5 bg-gradient-to-br from-green-600 via-teal-500 to-emerald-400
 flex flex-col items-start text-white p-8"
    >
      <div className="flex flex-col gap-12">
        <h1 className="text-3xl font-bold mb-4">StepSmart</h1>
        <p className="text-5xl font-semibold mb-6">
          Unlock a world of knowledge and possibilities!
        </p>
      </div>
      <img
        src={Character_Png}
        alt="Character"
        className="absolute bottom-0 right-0 w-2/3 h-auto"
      />
    </div>
  );
};

export default LeftSection;
