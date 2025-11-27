"use client";
// components/Experience.js
const experiences = [
  {
    title: "Computer Science",
    location: "Kabul, Afghanistan",
    date: "2022- present",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: "🎓",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    date: "2019 - 2022",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to full stack.",
    icon: "💼",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    date: "2018 - 2019",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Open to full-time opportunities.",
    icon: "⚛️",
  },
];

export default function Experience() {
  return (
    <section className="px-6 py-2 max-w-4xl mx-auto dark:text-white dark:bg-black">
      <h2 className="text-3xl font-bold text-center mb-3">My Experience</h2>
        <p className="text-center">From Shahid Balkhi high school, at Malistan district to Kabul University (2018) – Present (2026) | ~7 Years Experience in IT, Software Development, and Technical Management.</p>
      <div className="relative border-l-2 border-gray-300 dark:text-white">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Icon */}
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-300 rounded-full text-xl">
              {exp.icon}
            </span>

            {/* Date */}
            <span className="text-gray-500 text-sm dark:text-gray-100">{exp.date}</span>

            {/* Card */}
            <div className="mt-2 p-4 bg-gray-100 rounded-md shadow-sm dark:bg-gray-800 dark:text-white">
              <h3 className="font-semibold text-lg dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 italic dark:text-white">{exp.location}</p>
              <p className="mt-2 text-gray-700 dark:text-white">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
