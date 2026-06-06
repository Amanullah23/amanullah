"use client";
import { assets, infoList, toolsData } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const skills = [
  "React", "Next.js", "Flutter", "Django",
  "Python", "TensorFlow", "TailwindCSS", "Figma", "PostgreSQL"
]

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[8%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h4
        className="text-center mb-2 text-xs tracking-widest uppercase text-gray-400"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Introduction
      </motion.h4>
      <motion.h1
        className="text-center text-5xl mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        About me
      </motion.h1>

      {/* Body */}
      <div className="flex flex-col lg:flex-row items-start gap-12 w-full">

        {/* Image column */}
        <motion.div
          className="flex flex-col items-start gap-3 shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-56 sm:w-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image
              src={assets.user_image}
              alt="Amanullah Yawari"
              width={300}
              height={350}
              className="rounded-2xl w-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 dark:bg-teal-950 dark:text-teal-400 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Available for work
          </div>
        </motion.div>

        {/* Content column */}
        <div className="flex-1">

          {/* Bio */}
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 max-w-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I am a{" "}
            <span className="text-gray-800 dark:text-white font-medium">
              Full Stack Developer & IT Specialist
            </span>{" "}
            from Kabul, Afghanistan, with over{" "}
            <span className="text-gray-800 dark:text-white font-medium">
              7 years of experience
            </span>{" "}
            in networking, programming, and system management. I hold a{" "}
            <span className="text-gray-800 dark:text-white font-medium">
              Bachelor's degree in Computer Science
            </span>{" "}
            and have worked with the Election Commission of Afghanistan, Fanoos,
            Talia, and Quika. Member of{" "}
            <span className="text-gray-800 dark:text-white font-medium">
              GELA Cohort-12
            </span>
            . Fluent in Dari and English.
          </motion.p>

          {/* Skills pills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Info cards */}
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-900"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mb-3"
                />
                <h3 className="text-sm font-medium text-gray-800 dark:text-white mb-1">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">
              Tools I use
            </p>
            <ul className="flex items-center gap-2 flex-wrap">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="w-10 h-10 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-900"
                >
                  <Image src={tool} alt="Tool" className="w-6" />
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default About