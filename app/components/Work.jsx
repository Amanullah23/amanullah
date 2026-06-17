"use client";
import { assets } from '../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// ─── YOUR REAL PROJECTS ───────────────────────────────────────────────────────
// Replace bgImage values with your actual screenshot paths once you have them.
// e.g. bgImage: '/projects/afghanroutes.png'
export const workData = [
  {
    title: "AfghanRoutes",
    description: "Tourism Platform",
    bgImage: "/projects/afghanroutes.jpg",   // ← replace with your screenshot
    liveUrl: "https://afghanroutes.vercel.app",
    stack: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    cat: ["web"],
  },
  {
    title: "KabulHire",
    description: "Job Portal",
    bgImage: "/projects/kabulhire.jpg",   // ← replace with your screenshot
    liveUrl: "https://kabul-job.vercel.app",
    stack: ["Next.js", "TypeScript", "Supabase"],
    cat: ["web"],
  },
  {
    title: "Flowe",
    description: "SaaS UI/UX Platform",
    bgImage: "/projects/flowe.png",   // ← replace with your screenshot
    liveUrl: "https://flowe.vercel.app",
    stack: ["Next.js", "Supabase", "Framer Motion"],
    cat: ["web"],
  },
  {
    title: "NOVA INC.",
    description: "Construction Company Site",
    bgImage: "/projects/nova.jpeg",   // ← replace with your screenshot
    liveUrl: "https://nova-one-gamma.vercel.app",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    cat: ["web"],
  },
  {
    title: "Flutix.org",
    description: "ISP Corporate Website",
    bgImage: "/projects/flutix.png",   // ← replace with your screenshot
    liveUrl: "https://flutix.vercel.app",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4"],
    cat: ["web"],
  },
  {
    title: "KarJo (کارجو)",
    description: "Telegram Job Bot",
    bgImage: "/projects/karjo.jpg",
    liveUrl: "https://t.me/karjo_bot",
    stack: ["Node.js", "Telegraf", "Supabase"],
    cat: ["web", "other"],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Work = () => {
  return (
    <div id='work' className='w-full px-[6%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-md text-gray-500 tracking-widest uppercase text-sm'>
        My portfolio
      </h4>
      <h1 className='text-center text-5xl font-serif mb-4'>My latest works</h1>
      <p className='text-center mb-2 mt-4 mx-auto max-w-2xl text-gray-500 leading-relaxed'>
        From tourism platforms to ISP management systems — real products built
        for real Afghan organizations and international clients.
      </p>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] my-10 gap-5'>
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative cursor-pointer group hover:-translate-y-1 transition-transform duration-300 block'
          >
            {/* Screenshot area */}
            <div className='aspect-[4/3] bg-gray-100 dark:bg-gray-800 relative overflow-hidden'>
              {/* When bgImage exists this renders the screenshot */}
              <div
                className='absolute inset-0 bg-no-repeat bg-cover bg-top transition-transform duration-500 group-hover:scale-105'
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />

              {/* Fallback shown only when image hasn't loaded / placeholder */}
              <div className='absolute inset-0 flex flex-col items-center justify-center opacity-30 dark:opacity-20 pointer-events-none select-none'>
                <span className='text-4xl mb-2'>🖼️</span>
                <span className='text-xs text-gray-400'>Screenshot coming soon</span>
              </div>

              {/* Hover overlay */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300' />
            </div>

            {/* Card footer */}
            <div className='bg-white dark:bg-black px-4 py-3 flex items-center justify-between border-t border-gray-100 dark:border-gray-800'>
              <div>
                <h3 className='font-medium text-sm'>{project.title}</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400'>{project.description}</p>
              </div>
              <div className='border border-gray-300 dark:border-gray-600 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-black group-hover:border-black dark:group-hover:bg-white transition-all duration-300 shrink-0'>
                <Image
                  src={assets.send_icon}
                  alt='open project'
                  className='w-4 group-hover:invert dark:invert'
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer row */}
      <div className='flex items-center justify-center gap-10 flex-wrap'>
        <div className='flex gap-8'>
          {[['7+', 'Years exp.'], ['20+', 'Projects'], ['8+', 'Tech stacks']].map(([num, label]) => (
            <div key={label} className='text-center'>
              <p className='text-2xl font-serif font-bold'>{num}</p>
              <p className='text-xs text-gray-500 mt-0.5'>{label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/worksdetails"
          className="flex items-center gap-2 px-6 py-2.5 border border-gray-400 rounded-full text-sm hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black transition-all duration-300"
        >
          Show more
          <Image src={assets.right_arrow_bold} alt="" className="w-4" />
        </Link>
      </div>
    </div>
  )
}

export default Work;