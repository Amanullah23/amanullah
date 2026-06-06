"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"; // Change to "framer-motion" if needed

const techStack = [
  "React",
  "Next.js",
  "Flutter",
  "Node.js",
  "PostgreSQL",
  "Networking",
  "Git",
  "Prisma ORM"
];

const stats = [
  { num: "7+", label: "Years exp." },
  { num: "20+", label: "Projects" },
  { num: "4", label: "Organizations" },
  { num: "5", label: "Tech stacks" },
];

const Header = () => {
  return (
    <div className="w-full max-w-9xl text-center mx-auto min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 mb-10 px-4">
      {/* Avatar */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Amanullah Yawari"
          width={152}
          height={142}
          className="rounded-full border-2 border-gray-200 dark:border-gray-700"
        />
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-teal-500 rounded-full border-2 border-white dark:border-gray-900" />
      </motion.div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 dark:bg-teal-950 dark:text-teal-400 rounded-full px-4 py-1.5 mb-5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
        Available for new projects
      </motion.div>

      {/* Greeting */}
      <motion.p
        className="text-base text-gray-500 mb-1"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-red-500 font-medium">Hi</span>, I am Amanullah
        Yawari
      </motion.p>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold mb-3 leading-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Full Stack Developer
        <br />
        based in Kabul
      </motion.h1>

      {/* Role */}
      <motion.p
        className="text-sm text-gray-500 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          IT Specialist
        </span>{" "}
        · Afghanistan · GELA Cohort-12
      </motion.p>

      {/* Description */}
      <motion.p
        className="max-w-xl mx-auto text-sm text-gray-500 leading-relaxed mb-6"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        7+ years across the Election Commission of Afghanistan, Fanoos,
        Talia, and Quika — building modern, responsive, and user-focused
        web and mobile applications.
      </motion.p>

      {/* Tech stack pills */}
      <motion.div
        className="flex flex-wrap gap-2 justify-center mb-7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 w-full"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <a
          href="#contact"
          className="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium flex items-center justify-center gap-2 hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="Arrow"
            width={16}
            height={16}
            className="dark:invert"
          />
        </a>

        <a
          href="/my-resume.pdf"
          download
          className="w-full sm:w-auto text-center px-8 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-sm flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300"
        >
          My resume
          <Image
            src={assets.download_icon}
            alt="Download"
            width={16}
            height={16}
          />
        </a>
      </motion.div>

      {/* Divider */}
      <div className="w-10 h-px bg-gray-200 dark:bg-gray-700 mb-6" />

      {/* Stats */}
      <motion.div
        className="flex items-center justify-center flex-wrap gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{s.num}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>

            {i < stats.length - 1 && (
              <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
            )}
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-1.5 mt-10">
        <div className="w-px h-7 bg-gray-200 dark:bg-gray-700" />
        <span className="text-xs tracking-widest uppercase text-gray-400">
          scroll
        </span>
      </div>
    </div>
  );
};

export default Header;