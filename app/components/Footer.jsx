"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { assets } from "@/assets/assets";
import Image from "next/image";

const socials = [
  { label: "GitHub", href: "https://github.com/Amanullah23" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanullah-yawari/" },
  { label: "X", href: "https://x.com/theyawari" },
  { label: "Facebook", href: "https://www.facebook.com/share/17tGSi8eNF/" },
  { label: "Instagram", href: "https://www.instagram.com/amanullah_yawari" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/amanullahyawari" },
  { label: "Fiverr", href: "https://www.fiverr.com/amanullahyawari" },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const email = "an20kx@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="mt-20">
      {/* Top section */}
      <div className="text-center px-6 pb-10">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Amanullah Yawari"
          width={128}
          height={40}
          className="mx-auto mb-3"
        />

        <p className="text-sm text-gray-500 mb-4">
          Full Stack Developer · IT Specialist · Kabul, Afghanistan
        </p>

        {/* Email copy button */}
        <div
          onClick={handleCopy}
          className="relative inline-flex items-center gap-2 text-sm text-gray-500 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-white transition-all duration-200"
        >
          <Image
            src={assets.mail_icon}
            alt="Mail"
            width={16}
            height={16}
          />
          {email}

          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-1 rounded-full whitespace-nowrap">
              Copied!
            </span>
          )}
        </div>

        {/* Upwork + Fiverr buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap mt-5">
          <a
            href="https://www.upwork.com/freelancers/amanullahyawari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-green-700 bg-green-50 dark:bg-green-950 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-full px-5 py-2 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire me on Upwork
          </a>

          <a
            href="https://www.fiverr.com/amanullahyawari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full px-5 py-2 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 hover:-translate-y-0.5"
          >
            Order on Fiverr
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 mx-[8%]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">
          <p className="text-xs text-gray-700">
            © 2026 Amanullah Yawari. All rights reserved.
          </p>

          <nav className="flex items-center gap-1 flex-wrap justify-center">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-700 hover:text-black dark:hover:text-white border border-transparent hover:border-gray-700 dark:hover:border-gray-700 rounded-full px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;