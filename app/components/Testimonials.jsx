"use client";
import React from "react";
import { motion } from "motion/react";

// ─── YOUR TESTIMONIALS ────────────────────────────────────────────────────────
// Replace these with real client quotes. Each field:
//   name     → client's name (or "Anonymous Client" if they prefer)
//   role     → their job title or description
//   country  → their country / flag emoji
//   project  → which project you built for them
//   quote    → their actual words — keep it honest and specific
//   platform → where they hired you: "Upwork" | "Fiverr" | "Direct" | "LinkedIn"
//   accent   → border color — pick one that fits the vibe of the quote
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Startup Founder",
    country: "🇺🇸 United States",
    project: "SaaS Landing Page",
    quote:
      "Amanullah delivered a polished, fast Next.js site that exceeded every expectation. Communication was clear throughout, and he flagged issues before they became problems. I'd hire him again without hesitation.",
    platform: "Upwork",
    accent: "#2563eb",
  },
  {
    id: 2,
    name: "Omar Rahimi",
    role: "Business Owner",
    country: "🇦🇫 Afghanistan",
    project: "Corporate Website",
    quote:
      "The website he built for our company looks completely professional. He understood exactly what we needed even when we couldn't fully explain it. Very patient, very skilled.",
    platform: "Direct",
    accent: "#0d9488",
  },
  {
    id: 3,
    name: "Lena Hoffmann",
    role: "Product Manager",
    country: "🇩🇪 Germany",
    project: "Web App Dashboard",
    quote:
      "Clean code, responsive design, and he actually reads the brief. The dashboard he built handles real data beautifully. Highly recommend for any Next.js project.",
    platform: "Fiverr",
    accent: "#7c3aed",
  },
  {
    id: 4,
    name: "James Okafor",
    role: "E-commerce Owner",
    country: "🇳🇬 Nigeria",
    project: "E-commerce Platform",
    quote:
      "Fast delivery, zero bugs on handoff, and he stayed available for a week after launch to handle any issues. That kind of support is rare. Truly professional.",
    platform: "Upwork",
    accent: "#d97706",
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    role: "NGO Director",
    country: "🇦🇪 UAE",
    project: "Organization Website",
    quote:
      "He built our multilingual website with Arabic RTL support perfectly. The attention to detail with the Dari and English toggling was impressive. Will definitely work with him again.",
    platform: "Direct",
    accent: "#0284c7",
  },
  {
    id: 6,
    name: "Carlos Mendez",
    role: "Tech Lead",
    country: "🇲🇽 Mexico",
    project: "API Integration",
    quote:
      "Solid TypeScript, clean Prisma schema, well-documented code. He thinks like a senior developer. The Supabase setup he built has been running in production for 6 months without a single issue.",
    platform: "Upwork",
    accent: "#ea580c",
  },
  {
    id: 7,
    name: "Priya Nair",
    role: "Marketing Director",
    country: "🇮🇳 India",
    project: "Portfolio & Blog",
    quote:
      "Beautiful animations, fast load times, and he got the Framer Motion transitions exactly right on the first try. The blog section with category filtering is exactly what I needed.",
    platform: "Fiverr",
    accent: "#7c3aed",
  },
  {
    id: 8,
    name: "Ahmad Karimi",
    role: "ISP Manager",
    country: "🇦🇫 Afghanistan",
    project: "Finance Management System",
    quote:
      "The internal system he built for us manages hundreds of customers, payments, and subscriptions flawlessly. Four different user roles all working perfectly. Exceptional technical work.",
    platform: "Direct",
    accent: "#0d9488",
  },
];

// Split into two rows for the double marquee
const ROW_1 = TESTIMONIALS.slice(0, 4);
const ROW_2 = TESTIMONIALS.slice(4, 8);

const platformColors = {
  Upwork:   "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
  Fiverr:   "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  Direct:   "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  LinkedIn: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-400",
};

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div
      className="relative shrink-0 w-[320px] sm:w-[360px] border border-gray-100 dark:border-gray-800
        rounded-2xl p-6 bg-white dark:bg-gray-900 mx-3
        hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30
        hover:border-gray-200 dark:hover:border-gray-700
        transition-all duration-300 select-none"
    >
      {/* Colored left accent bar */}
      <div
        className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full"
        style={{ backgroundColor: t.accent }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        {/* Avatar initials */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: t.accent }}
          >
            {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-white leading-none mb-0.5">
              {t.name}
            </p>
            <p className="text-[10px] text-gray-400 dark:text-gray-500">
              {t.role} · {t.country}
            </p>
          </div>
        </div>

        {/* Platform badge */}
        <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full shrink-0 ${platformColors[t.platform] || platformColors.Direct}`}>
          {t.platform}
        </span>
      </div>

      {/* Stars */}
      <StarRating />

      {/* Quote */}
      <p className="mt-3 text-sm font-serif italic text-gray-600 dark:text-gray-300 leading-relaxed">
        "{t.quote}"
      </p>

      {/* Project tag */}
      <div className="mt-4 pt-3 border-t border-gray-50 dark:border-gray-800">
        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">
          Project → {t.project}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  // Duplicate items to create seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ willChange: "transform" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 scroll-mt-20 overflow-hidden">

      {/* ── Header ── */}
      <div className="px-[6%] text-center mb-14">
        <motion.p
          className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-4 font-medium"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client feedback
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-serif text-gray-900 dark:text-white mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          What clients say<br />
          <span className="italic font-normal text-gray-400 dark:text-gray-500">
            about working with me
          </span>
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Real feedback from clients across Afghanistan, Europe, and the US —
          on Upwork, Fiverr, and direct projects.
        </motion.p>
      </div>

      {/* ── Double marquee ── */}
      <div className="flex flex-col gap-4 [--pause-on-hover:running]">
        {/* Row 1 — left to right */}
        <div className="group">
          <div className="overflow-hidden w-full">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...ROW_1, ...ROW_1].map((t, i) => (
                <TestimonialCard key={`r1-${t.id}-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="group">
          <div className="overflow-hidden w-full">
            <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
              {[...ROW_2, ...ROW_2].map((t, i) => (
                <TestimonialCard key={`r2-${t.id}-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        className="px-[6%] mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-2xl mx-auto border border-gray-100 dark:border-gray-800 rounded-2xl p-6
          bg-white dark:bg-gray-900 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: "5.0★", label: "Avg. rating"      },
            { num: "20+",  label: "Happy clients"     },
            { num: "100%", label: "Job success"       },
            { num: "3",    label: "Platforms"         },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-1">{num}</p>
              <p className="text-xs text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        className="px-[6%] text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="/#contact"
          className="inline-flex items-center gap-2.5 text-sm font-Ovo
            px-7 py-3 rounded-full border border-gray-300 dark:border-gray-600
            text-gray-600 dark:text-gray-300
            hover:bg-black hover:text-white hover:border-black
            dark:hover:bg-white dark:hover:text-black dark:hover:border-white
            transition-all duration-300"
        >
          Work with me
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>

    </section>
  );
}