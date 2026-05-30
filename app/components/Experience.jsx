"use client";
import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Full Stack Developer / Technical Manager",
    company: "Freelance",
    location: "Kabul, Afghanistan",
    date: "2022 – Present",
    current: true,
    description:
      "Working as a freelance full-stack developer and technical manager — building modern web and mobile applications for local and international clients.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "MongoDB", "TailwindCSS","Project Management"],
    color: "teal",
  },
  {
    title: "Front-End Developer / IT Specialist",
    company: "Fanoos · Talia",
    location: "Kabul, Afghanistan",
    date: "2019 – 2022",
    current: false,
    description:
      "Worked as a front-end developer across two organizations over 3 years, progressively upskilling into full-stack development and IT support roles.",
    tags: ["HTML", "CSS", "JavaScript", "React", "IT Support", "System Maintenance", "Client Communication"],
    color: "blue",
  },
  {
    title: "IT Specialist",
    company: "Election Commission of Afghanistan",
    location: "Kabul, Afghanistan",
    date: "2018 – 2019",
    current: false,
    description:
      "Provided technical IT support and system management for one of Afghanistan's most critical government institutions during national election operations.",
    tags: ["Networking", "System Admin", "IT Support","Windows Server", "Linux", "Cisco", "Hardware Maintenance"],
    color: "amber",
  },
  {
    title: "B.Sc. Computer Science",
    company: "Kabul University",
    location: "Kabul, Afghanistan",
    date: "2015 – 2018",
    current: false,
    description:
      "Completed a 4-year Bachelor's degree in Computer Science. Built a strong foundation in algorithms, data structures, software engineering, and networking.",
    tags: ["Computer Science", "Algorithms", "Networking","AI & Machine Learning", "Graduated with Honors"],
    color: "purple",
  },
  {
    title: "Shahid Balkhi High School",
    company: "Top Student · Kankor Exam",
    location: "Malistan District, Ghazni, Afghanistan",
    date: "2001 – 2014",
    current: false,
    description:
      "Completed 12 years of schooling from grade 1 to 12, consistently achieving first position in class throughout all years. Ranked as top student in the national Kankor university entrance exam. Excelled in core subjects with outstanding academic performance.",
    tags: ["1st Position · All Years", "Top Kankor Score", "Mathematics", "Physics", "Dari Language"],
    color: "green",
    achievement: true,
  },
]

const dotColors = {
  teal:   "border-teal-500",
  blue:   "border-blue-600",
  amber:  "border-amber-600",
  purple: "border-purple-600",
  green:  "border-green-600",
}

const dotInnerColors = {
  teal:   "bg-teal-500",
  blue:   "bg-blue-600",
  amber:  "bg-amber-500",
  purple: "bg-purple-600",
  green:  "bg-green-600",
}

const tagColors = {
  teal:   "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  blue:   "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  amber:  "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  purple: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  green:  "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
}

export default function Experience() {
  return (
    <section id="experience" className="w-full px-[8%] py-10 scroll-mt-20">

      <motion.h4
        className="text-center mb-2 text-xs tracking-widest uppercase text-gray-400"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My journey
      </motion.h4>

      <motion.h1
        className="text-center text-5xl mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Experience
      </motion.h1>

      <motion.p
        className="text-center text-sm text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        From Shahid Balkhi High School in Malistan (2001) to present (2026) —
        over 7 years in IT, software development, and technical management.
      </motion.p>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto pl-8">

        {/* Vertical line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-8 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Dot */}
            <div className={`absolute -left-6 top-4 w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-900 flex items-center justify-center ${dotColors[exp.color]}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${dotInnerColors[exp.color]}`} />
            </div>

            {/* Card */}
            <div className={`border rounded-xl p-5 bg-white dark:bg-gray-900 hover:translate-x-1 transition-all duration-300
              ${exp.achievement
                ? 'border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  {exp.current && (
                    <span className="flex items-center gap-1 text-xs font-medium text-teal-700 bg-teal-50 dark:bg-teal-950 dark:text-teal-400 rounded-full px-2.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      Current
                    </span>
                  )}
                  {exp.achievement && (
                    <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 dark:bg-green-950 dark:text-green-400 rounded-full px-2.5 py-0.5">
                      🏆 Top Student
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-0.5 whitespace-nowrap">
                  {exp.date}
                </span>
              </div>

              <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {exp.location} · {exp.company}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-0.5 rounded font-medium ${tagColors[exp.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}