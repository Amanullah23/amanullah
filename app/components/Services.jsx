"use client";
import { serviceData } from "@/assets/assets";
import React from "react";

const iconColors = [
  { bg: "bg-blue-50", text: "text-blue-700" },
  { bg: "bg-teal-50", text: "text-teal-700" },
  { bg: "bg-purple-50", text: "text-purple-700" },
  { bg: "bg-amber-50", text: "text-amber-700" },
  { bg: "bg-orange-50", text: "text-orange-700" },
  { bg: "bg-green-50", text: "text-green-700" },
  { bg: "bg-pink-50", text: "text-pink-700" },
  { bg: "bg-gray-50", text: "text-gray-600" },
];

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-xs tracking-widest uppercase text-gray-400">
        What I offer
      </h4>

      <h1 className="text-center text-5xl font-serif mb-4">My services</h1>

      <p className="text-center mb-10 mt-4 mx-auto max-w-2xl text-gray-500 leading-relaxed text-sm">
        Over 7 years in IT and software development — turning ideas into
        high-impact digital solutions through collaboration, innovation, and a
        wide network of local and international partners.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 my-8">
        {serviceData.map(({ icon, title, description, link }, index) => {
          const color = iconColors[index % iconColors.length];

          return (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-6 flex flex-col gap-3 hover:-translate-y-1 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer bg-white dark:bg-gray-900"
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${color.bg}`}
              >
                <img
                  src={typeof icon === "string" ? icon : icon?.src}
                  alt={title}
                  className="w-5 h-5"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                {description}
              </p>

              {/* Read more link */}
              <a
                href={link || "/services"}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200 mt-1"
              >
                Read more
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          );
        })}
      </div>

      {/* View all services */}
      <div className="text-center mt-6">
        <a
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-gray-500 border border-gray-300 rounded-full px-6 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          View all services
        </a>
      </div>
    </div>
  );
};

export default Services;
