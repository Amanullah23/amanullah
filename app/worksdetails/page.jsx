"use client";
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── REAL PROJECTS DATA ───────────────────────────────────────────────────────
const projects = [
  {
    title: "AfghanRoutes",
    desc: "Tourism discovery platform for Afghanistan — multilingual (English + Dari/Pashto RTL), animated hero with canvas particle network, destination cards with Framer Motion scroll reveals. Built for local and international travelers.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    cat: ["web"],
    liveUrl: "https://afghanroutes.vercel.app",
    githubUrl: "https://github.com/Amanullah23",
    image: "/projects/afghanroutes.jpg",   // ← replace with screenshot
    accent: "#0A3D4A",                      // lapis deep brand color
    tag: "Tourism · Multilingual",
  },
  {
    title: "KabulHire",
    desc: "Afghan job portal connecting local companies with job seekers. Full component redesign with real Afghan company listings, blue-600 design system, TypeScript, and a custom NavFooterWrapper for conditional nav on auth routes.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    cat: ["web"],
    liveUrl: "https://kabul-job.vercel.app",
    githubUrl: "https://github.com/Amanullah23",
    image: "/projects/kabulhire.jpg",   // ← replace with screenshot
    accent: "#2563eb",
    tag: "Job Portal · Afghanistan",
  },
  {
    title: "Flowe",
    desc: "SaaS UI/UX design platform with a full landing page, 2-step registration flow, onboarding dashboard, and 7-section settings page with Supabase auth, profile saves, and type-to-confirm account deletion.",
    stack: ["Next.js", "Supabase", "Framer Motion", "GSAP ScrollTrigger", "Tailwind CSS"],
    cat: ["web", "saas"],
    liveUrl: "https://flowe.vercel.app",
    githubUrl: "https://github.com/Amanullah23",
    image: "/projects/flowe.png",   // ← replace with screenshot
    accent: "#6C5CE7",
    tag: "SaaS · Design Platform",
  },
  {
    title: "NOVA INC.",
    desc: "Dark industrial website for a Kabul-based construction and engineering company. Full redesign with amber/gold accent, Web3Forms contact integration, animated sections, and project showcase gallery.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Web3Forms"],
    cat: ["web"],
    liveUrl: "https://nova-one-gamma.vercel.app",
    githubUrl: "https://github.com/Amanullah23",
    image: "/projects/nova.jpeg",   // ← replace with screenshot
    accent: "#d4a348",
    tag: "Corporate · Construction",
  },
  {
    title: "Flutix.org",
    desc: "Corporate website for Quika, a licensed ISP in Afghanistan. Features an animated canvas particle network hero, brand-accurate teal color system, and a multi-page structure (Home, About, Services, Coverage, Partners, Careers).",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS v4"],
    cat: ["web"],
    liveUrl: "https://flutix.vercel.app",
    githubUrl: "https://github.com/Amanullah23",
    image: "/projects/flutix.png",
    accent: "#15737c",
    tag: "ISP · Corporate",
  },
  {
    title: "AQ Finance System",
    desc: "Internal ISP financial management system for ~500 wireless internet customers. Four user roles (Admin, Finance, Registration, Collector), automated billing, WhatsApp notifications, and a full Supabase + Prisma backend.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Supabase", "Prisma", "PostgreSQL"],
    cat: ["web", "saas"],
    liveUrl: "https://company-theta-ten.vercel.app/",
    githubUrl: null,
    image: "/projects/aq.png",
    accent: "#054247",
    tag: "Finance · Internal Tool",
  },
  {
    title: "KarJo (کارجو)",
    desc: "Telegram-based smart job assistant bot for Afghan job seekers. Deep-link attribution tracking, Supabase user storage with telegram_id, and AI-powered job matching. Built with Telegraf and Node.js.",
    stack: ["Node.js", "Telegraf", "Supabase", "PostgreSQL"],
    cat: ["bot", "other"],
    liveUrl: "https://t.me/karjo_bot",
    githubUrl: null,
    image: "/projects/karjo.jpg",
    accent: "#229ED9",
    tag: "Telegram Bot · AI",
  },
  {
    title: "Portfolio Website",
    desc: "This very portfolio — built with Next.js 15, Turbopack, Tailwind CSS v4, and React 19. Features dark/light mode, animated blog with category filtering, vertical experience timeline, Web3Forms contact, and Framer Motion throughout.",
    stack: ["Next.js 15", "React 19", "Tailwind CSS v4", "Framer Motion", "Web3Forms"],
    cat: ["web"],
    liveUrl: "https://yawari.vercel.app",
    githubUrl: "https://github.com/Amanullah23",
    image: "/projects/portfolio.png",
    accent: "#7c3aed",
    tag: "Portfolio · Personal",
  },
]

const filters = [
  { key: "all",   label: "All" },
  { key: "web",   label: "Web" },
  { key: "saas",  label: "SaaS" },
  { key: "bot",   label: "Bot" },
  { key: "other", label: "Other" },
]

// ─────────────────────────────────────────────────────────────────────────────

const Page = () => {
  const [active, setActive] = useState("all")

  const filtered = projects.filter(p =>
    active === "all" || p.cat.includes(active)
  )

  return (
    <div className='w-full px-[8%] py-20 scroll-mt-20 min-h-screen'>

      {/* Header */}
      <div className='text-center mb-12'>
        <h4 className='text-sm tracking-widest uppercase text-gray-400 mb-3'>All my works</h4>
        <h1 className='text-4xl md:text-5xl font-serif mb-4 dark:text-white'>My latest works</h1>
        <p className='max-w-xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed text-sm'>
          Real products — built for Afghan organizations, international clients,
          and personal ventures. Every project here is live or in active development.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className='flex gap-3 justify-center flex-wrap mb-12'>
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 font-Ovo
              ${active === key
                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-300'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mb-16'>
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className='group border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden
                hover:-translate-y-1 transition-transform duration-300 flex flex-col bg-white dark:bg-neutral-900'
            >
              {/* Screenshot / Image */}
              <div className='relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800'>
                <div
                  className='absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105'
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Colored top accent bar using the project's brand color */}
                <div
                  className='absolute top-0 left-0 right-0 h-1'
                  style={{ backgroundColor: project.accent }}
                />

                {/* Tag badge */}
                <div className='absolute top-3 left-3'>
                  <span
                    className='text-[10px] font-medium px-2.5 py-1 rounded-full text-white'
                    style={{ backgroundColor: project.accent + 'cc' }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Fallback placeholder shown before screenshot is added */}
                <div className='absolute inset-0 flex flex-col items-center justify-center opacity-20 pointer-events-none select-none'>
                  <span className='text-3xl mb-1'>🖼️</span>
                  <span className='text-[10px] text-gray-400'>Add screenshot to /public/projects/</span>
                </div>

                {/* Hover overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300' />
              </div>

              {/* Content */}
              <div className='p-5 flex flex-col flex-1'>
                <h3 className='text-base font-semibold mb-2 dark:text-white'>{project.title}</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1'>
                  {project.desc}
                </p>

                {/* Stack tags */}
                <div className='flex gap-1.5 flex-wrap mb-5'>
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className='text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-mono'
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className='flex gap-3 pt-3 border-t border-gray-100 dark:border-gray-800'>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 text-center text-xs py-2 rounded-lg border border-gray-300 dark:border-gray-600
                        hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black
                        transition-all duration-200 font-medium'
                    >
                      Live ↗
                    </a>
                  ) : (
                    <span className='flex-1 text-center text-xs py-2 rounded-lg border border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'>
                      In Development
                    </span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 text-center text-xs py-2 rounded-lg border border-gray-300 dark:border-gray-600
                        hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black
                        transition-all duration-200 font-medium'
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className='flex-1 text-center text-xs py-2 rounded-lg border border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'>
                      Private
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Back home */}
      <div className='flex justify-center'>
        <Link
          href='/#work'
          className='flex items-center gap-2 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600
            px-6 py-2.5 rounded-full text-sm hover:border-gray-600 hover:text-black dark:hover:text-white
            transition-all duration-300 font-Ovo'
        >
          ← Back home
        </Link>
      </div>
    </div>
  )
}

export default Page