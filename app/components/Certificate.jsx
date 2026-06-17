"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../assets/assets";

// ─── Certificate data ─────────────────────────────────────────────────────────
// Replace image values with your actual asset imports or public paths.
// Fix: each certificate now has its own unique image — no more duplicates.
const CERTIFICATES = [
  {
    id: 1,
    title: "World English Institute (WEI) Certificate",
    issuer: "Andy Cassidy",
    year: 2022,
    tags: ["English"],
    image: assets.certificate_eng,         // your WEI cert image
    description: "Completed an advanced English communication program through the World English Institute.",
  },
  {
    id: 2,
    title: "FEMSTECH Worldwide Certificate",
    issuer: "Prof. Somaia Zabihi",
    year: 2024,
    tags: ["Laravel", "PHP"],
    image: assets.cert_4,                  // FEMSTECH cert image
    description: "Recognized by FEMSTECH Worldwide for web development skills in Laravel and PHP.",
  },
  {
    id: 3,
    title: "CISCO Networking Academy",
    issuer: "CISCO Academy",
    year: 2025,
    tags: ["Networking"],
    image: assets.certificate,             // ← replace with your CISCO cert image (not cert.jpg if that's Real Star)
    description: "Completed Cisco Networking Academy coursework covering routing, switching, and network fundamentals.",
  },
  {
    id: 4,
    title: "HP Certificate of Completion",
    issuer: "HP",
    year: 2025,
    tags: ["Data"],
    image: assets.cert_hp_1,
    description: "HP certification covering data fundamentals and digital literacy.",
  },
  {
    id: 5,
    title: "HP Certificate of Completion",
    issuer: "HP",
    year: 2025,
    tags: ["PHP", "Data"],
    image: assets.cert_hp_2,
    description: "Second HP certification covering advanced data and technology topics.",
  },
  {
    id: 6,
    title: "Real Star Educational Society",
    issuer: "Real Star",
    year: 2020,
    tags: ["Networking"],
    image: assets.cert_3,                  // ← use a unique image, NOT cert.jpg again
    description: "Certificate of achievement from Real Star Educational Society for networking coursework.",
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(CERTIFICATES.flatMap((c) => c.tags)))];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function Certificate() {
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const filtered = CERTIFICATES
    .filter((c) => activeTag === "All" || c.tags.includes(activeTag))
    .sort((a, b) => b.year - a.year || b.id - a.id);

  return (
    <section id="certificates" className="w-full px-[6%] py-20 scroll-mt-20">

      {/* ── Header ── */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-4 font-medium">
          Awards & Recognitions
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 dark:text-white mb-5">
          Achievements &<br />
          <span className="italic font-normal text-gray-400 dark:text-gray-500">
            Certifications
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Over seven years I've earned certificates from global organizations —
          Cisco, HP, WEI, FEMSTECH Worldwide, and more — reflecting continuous
          growth in networking, development, and technology.
        </p>
      </div>

      {/* ── Filter tags ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            aria-pressed={tag === activeTag}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 font-Ovo
              ${tag === activeTag
                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-300 bg-white dark:bg-transparent"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert, i) => (
            <motion.article
              key={cert.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              layout
              onClick={() => setSelected(cert)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(cert)}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title} from ${cert.issuer}`}
              className="group border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden
                bg-white dark:bg-gray-900 cursor-pointer
                hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30 hover:border-gray-200 dark:hover:border-gray-700
                transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
            >
              {/* Image */}
              <div className="relative h-52 bg-gray-50 dark:bg-gray-800 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={`${cert.title} — ${cert.issuer}`}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Hover overlay with year badge */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full
                  bg-white/90 dark:bg-black/70 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
                  {cert.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                  {cert.issuer}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md font-mono
                        bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400
                        border border-gray-100 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-gray-400 py-16">
          No certificates found for this filter.
        </p>
      )}

      {/* ── Modal / Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              className="relative z-10 w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl
                shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Modal header */}
              <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                    {selected.title}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {selected.issuer} · {selected.year}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="ml-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white
                    hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal body */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Certificate image */}
                <div className="relative h-64 md:h-auto bg-gray-50 dark:bg-gray-800 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Issued by</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{selected.issuer}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Year</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{selected.year}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Category</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md font-mono
                            bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400
                            border border-gray-100 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selected.description && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">About</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {selected.description}
                      </p>
                    </div>
                  )}

                  {/* Close button */}
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-auto w-full py-2.5 rounded-xl border border-gray-200 dark:border-gray-700
                      text-sm text-gray-600 dark:text-gray-300 font-Ovo
                      hover:bg-black hover:text-white hover:border-black
                      dark:hover:bg-white dark:hover:text-black dark:hover:border-white
                      transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}