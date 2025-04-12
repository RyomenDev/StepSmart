import React from "react";
import FooterData from "../../Data/FooterData";

const FooterInfo = () => {
  const { branding, copyright, devSupport } = FooterData;

  return (
    <div className="relative z-10 border-t border-white/30 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#27ae60]/80">
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-2xl font-semibold tracking-wide mb-1">
          {branding.title}
        </h3>
        <p className="text-sm text-white/80 text-center md:text-left">
          {branding.tagline}
        </p>
      </div>

      <div className="text-sm text-center text-white/80 leading-snug">
        <p>{copyright.text}</p>
        <a
          href={copyright.privacyPolicy.link}
          className="underline hover:text-white"
        >
          {copyright.privacyPolicy.label}
        </a>
      </div>

      <div className="flex flex-col items-center md:items-end text-white/80">
        <span className="text-sm">{devSupport.label}</span>
        <span className="text-md font-semibold">{devSupport.name}</span>
      </div>
    </div>
  );
};

export default FooterInfo;