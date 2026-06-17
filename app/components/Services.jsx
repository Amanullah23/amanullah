"use client";
import React from "react";
import { motion } from "framer-motion";
import { serviceData } from "../../assets/assets";

// ─── Per-service config ───────────────────────────────────────────────────────
// Edit titles to match exactly what's in your assets/assets.js serviceData array.
const serviceConfig = {
  "Web Development": {
    slug: "/services/web-development",
    accent: "#2563eb",
    accentLight: "rgba(37,99,235,0.08)",
    stack: ["Next.js", "TypeScript", "Supabase"],
    num: "01",
  },
  "Mobile Development": {
    slug: "/services/mobile-apps",
    accent: "#0d9488",
    accentLight: "rgba(13,148,136,0.08)",
    stack: ["Flutter", "Dart", "Firebase"],
    num: "02",
  },
  "UI/UX Design": {
    slug: "/services/ui-ux-design",
    accent: "#7c3aed",
    accentLight: "rgba(124,58,237,0.08)",
    stack: ["Figma", "Framer Motion", "GSAP"],
    num: "03",
  },
  "Management Systems": {
    slug: "/services/management-systems",
    accent: "#d97706",
    accentLight: "rgba(217,119,6,0.08)",
    stack: ["Prisma", "PostgreSQL", "Roles"],
    num: "04",
  },
  "Telegram Bots": {
    slug: "/services/telegram-bots",
    accent: "#0284c7",
    accentLight: "rgba(2,132,199,0.08)",
    stack: ["Telegraf", "Node.js", "Supabase"],
    num: "05",
  },
  "Networking": {
    slug: "/services/networking",
    accent: "#ea580c",
    accentLight: "rgba(234,88,12,0.08)",
    stack: ["Cisco", "MikroTik", "Linux"],
    num: "06",
  },
};

const getConfig = (title) => {
  if (serviceConfig[title]) return serviceConfig[title];
  for (const key of Object.keys(serviceConfig)) {
    if (title.toLowerCase().includes(key.toLowerCase())) return serviceConfig[key];
  }
  return {
    slug: "/services",
    accent: "#6b7280",
    accentLight: "rgba(107,114,128,0.08)",
    stack: [],
    num: "—",
  };
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="services" className="w-full px-[6%] py-20 scroll-mt-20">

      {/* ── Asymmetric two-column header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

        <div className="max-w-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-4 font-medium">
            What I offer
          </p>
          <h2 className="text-5xl sm:text-6xl font-serif leading-[1.05] text-gray-900 dark:text-white">
            Services built<br />
            <span className="italic font-normal text-gray-400 dark:text-gray-500">
              for real impact
            </span>
          </h2>
        </div>

        <div className="lg:max-w-xs xl:max-w-sm">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            7+ years across web, mobile, systems, and networking — every service
            listed here has shipped in a real product for a real client.
          </p>
          <div className="flex gap-8">
            {[["7+", "Years"], ["20+", "Projects"], ["6", "Services"]].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-serif font-bold text-gray-900 dark:text-white leading-none">{n}</p>
                <p className="text-xs text-gray-400 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thin divider */}
      <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-12" />

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceData.map(({ icon, title, description }, index) => {
          const { slug, accent, accentLight, stack, num } = getConfig(title);

          return (
            <motion.a
              key={index}
              href={slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative flex flex-col gap-5 p-7 rounded-2xl border border-gray-100 dark:border-gray-800
                bg-white dark:bg-gray-900 overflow-hidden
                hover:-translate-y-1 hover:border-gray-200 dark:hover:border-gray-700
                hover:shadow-lg dark:hover:shadow-black/30
                transition-all duration-300 cursor-pointer"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full transition-all duration-300 group-hover:top-3 group-hover:bottom-3"
                style={{ backgroundColor: accent }}
              />

              {/* Watermark number */}
              <span
                className="absolute top-3 right-5 text-7xl font-serif font-bold leading-none select-none pointer-events-none"
                style={{ color: `${accent}15` }}
                aria-hidden="true"
              >
                {num}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: accentLight }}
              >
                <img
                  src={typeof icon === "string" ? icon : icon?.src}
                  alt={title}
                  className="w-5 h-5"
                />
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Stack pills */}
              {stack.length > 0 && (
                <div className="flex gap-1.5 flex-wrap mt-auto">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded-md font-mono font-medium
                        bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400
                        border border-gray-100 dark:border-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA row */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                  Learn more
                </span>
                <div
                  className="w-7 h-7 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center
                    transition-all duration-300 group-hover:scale-110"
                  style={{ ["--accent"]: accent }}
                >
                  <svg
                    className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* ── Footer row ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-14 pt-10 border-t border-gray-100 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed text-center sm:text-left">
          Not sure which service fits?{" "}
          <a
            href="/#contact"
            className="underline underline-offset-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Let's talk
          </a>{" "}
          and I'll guide you.
        </p>

        <a
          href="/services"
          className="shrink-0 inline-flex items-center gap-2.5 text-sm font-Ovo
            px-7 py-3 rounded-full border border-gray-300 dark:border-gray-600
            text-gray-600 dark:text-gray-300
            hover:bg-black hover:text-white hover:border-black
            dark:hover:bg-white dark:hover:text-black dark:hover:border-white
            transition-all duration-300"
        >
          View all services
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Services;