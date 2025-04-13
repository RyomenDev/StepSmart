import React from "react";
import { FooterData } from "../../Data";

const FooterCTA = () => {
  const { heading, description, buttonText } = FooterData.cta;

  return (
    <>
      <div className="relative z-10 text-center py-2 sm:py-5 md:py-7 px-4  bg-[#27ae60]/10 ">
        <h2 className="text-4xl font-bold mb-4 tracking-wide text-white drop-shadow-lg">
          {heading}
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base mb-6 text-white/90">
          {description}
        </p>
        <button className="bg-white text-[#2ecc71] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default FooterCTA;