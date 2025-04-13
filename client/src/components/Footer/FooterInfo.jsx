import React from "react";
import FooterData from "../../Data/FooterData";
import { SocialMedia } from "../../utility";
import { AboutUsData } from "../../Data";

const FooterInfo = () => {
  const { branding, copyright, devSupport } = FooterData;
  const { email, number } = AboutUsData;

  return (
    <div className="relative z-10 bg-[#27ae60]/60 border-t border-white/30 py-2 sm:py-6 md:py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Branding Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-2xl font-semibold tracking-wide mb-1 text-white">
          {branding.title}
        </h3>
        <p className="text-sm text-white/80">{branding.tagline}</p>
      </div>

      {/* Copyright & Privacy */}
      <div className="text-sm text-white/80 text-center md:text-left leading-snug">
        <p>{copyright.text}</p>
        <a
          href={copyright.privacyPolicy.link}
          className="underline hover:text-white"
        >
          {copyright.privacyPolicy.label}
        </a>
      </div>

      {/* Contact Info */}
      <div className="space-y-1 text-center md:text-left">
        {number && (
          <div>
            <a
              href={`tel:${number}`}
              className="hover:underline text-yellow-400"
            >
              {number}
            </a>
          </div>
        )}
        {email && (
          <div>
            <a
              href={`mailto:${email}`}
              className="hover:underline text-yellow-400"
            >
              {email}
            </a>
          </div>
        )}
      </div>

      {/* Social Media Icons */}
      <div>
        <SocialMedia />
      </div>

      {/* Developer Support */}
      <div className="flex flex-col items-center md:items-end text-white/80 text-center md:text-right">
        <span className="text-sm">{devSupport.label}</span>
        <span className="text-md font-semibold">{devSupport.name}</span>
      </div>
    </div>
  );
};

export default FooterInfo;
