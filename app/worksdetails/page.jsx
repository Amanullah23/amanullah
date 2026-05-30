"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const projects = [
  {
    title: "Django REST API",
    desc: "A full-featured backend REST API with JWT auth, role-based access, and PostgreSQL.",
    stack: ["Django", "PostgreSQL", "JWT"],
    cat: ["python", "web"],
    icon: "🐍",
    bg: "bg-green-50"
  },
  {
    title: "Flutter Mobile App",
    desc: "Cross-platform mobile app with Flutter and Dart, featuring real-time data sync.",
    stack: ["Flutter", "Dart", "Firebase"],
    cat: ["flutter"],
    icon: "📱",
    bg: "bg-blue-50"
  },
  {
    title: "TensorFlow ML Model",
    desc: "Machine learning project for image classification with custom training pipeline.",
    stack: ["TensorFlow", "Python", "NumPy"],
    cat: ["ml", "python"],
    icon: "🧠",
    bg: "bg-purple-50"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with Next.js 15, Tailwind CSS, deployed on Vercel.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    cat: ["web"],
    icon: "🌐",
    bg: "bg-amber-50"
  },
  {
    title: "Network Infrastructure",
    desc: "Enterprise network design including routing, switching, and system administration.",
    stack: ["Cisco", "Linux", "Mikrotik"],
    cat: ["network"],
    icon: "🔌",
    bg: "bg-orange-50"
  },
  {
    title: "Web Management System",
    desc: "Complete management system with Django backend and interactive dashboard.",
    stack: ["Django", "Bootstrap", "SQLite"],
    cat: ["python", "web"],
    icon: "🖥️",
    bg: "bg-teal-50"
  },
]

const filters = ["all", "python", "flutter", "web", "ml", "network"]

const page = () => {
  const [active, setActive] = useState("all")

  const filtered = projects.filter(p =>
    active === "all" || p.cat.includes(active)
  )

  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg text-gray-500'>All my works details here!</h4>
      <h1 className='text-center text-5xl mb-5'>My latest works</h1>
      <p className='text-center mb-8 mt-5 mx-auto max-w-2xl text-gray-500'>
        I'm Amanullah Yawari, an experienced IT professional with over six years
        in networking, programming, and system management.
      </p>

      {/* Filter Buttons */}
      <div className='flex gap-3 justify-center flex-wrap mb-10'>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full text-sm border capitalize transition-all duration-300
              ${active === f
                ? 'bg-black text-white border-black dark:bg-white dark:text-black'
                : 'border-gray-300 text-gray-500 hover:border-gray-500'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {filtered.map((project, i) => (
          <div key={i} className='border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300'>
            <div className={`${project.bg} h-36 flex items-center justify-center text-5xl`}>
              {project.icon}
            </div>
            <div className='p-5'>
              <h3 className='text-lg font-medium mb-2'>{project.title}</h3>
              <p className='text-sm text-gray-500 mb-4'>{project.desc}</p>
              <div className='flex gap-2 flex-wrap'>
                {project.stack.map((s, j) => (
                  <span key={j} className='text-xs px-2 py-1 bg-gray-100 rounded text-gray-600'>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href="/#work" className='flex items-center gap-2 w-max mx-auto text-gray-500 border border-gray-300 px-6 py-2 rounded-full hover:border-gray-600 hover:text-black transition-all duration-300'>
        ← Back home
      </Link>
    </div>
  )
}

export default page