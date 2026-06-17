"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── BLOG POSTS DATA ──────────────────────────────────────────────────────────
// Edit these posts with your real content.
// slug must match the folder name under /app/blog/[slug]/page.jsx
const POSTS = [
  {
    id: 1,
    slug: "building-my-developer-portfolio",
    title: "Building My Developer Portfolio with Next.js 15",
    excerpt:
      "A practical look at how I designed, built, and deployed my portfolio — the decisions I made, the mistakes I fixed, and what I learned about modern React architecture.",
    date: "June 2026",
    readTime: "6 min read",
    category: "Next.js",
    featured: true,
  },
  {
    id: 2,
    slug: "how-i-started-learning-nextjs",
    title: "How I Started Learning Next.js",
    excerpt:
      "The roadmap I followed, the mistakes I made, and the lessons that helped me understand modern React apps — from a developer based in Kabul.",
    date: "June 2026",
    readTime: "4 min read",
    category: "Learning",
    featured: false,
  },
  {
    id: 3,
    slug: "why-developers-need-a-portfolio",
    title: "Why Every Developer Needs a Portfolio",
    excerpt:
      "A portfolio helps you prove your skills, present your projects, and build trust with international clients. Here's why I built mine and what changed after.",
    date: "June 2026",
    readTime: "3 min read",
    category: "Career",
    featured: false,
  },
  {
    id: 4,
    slug: "my-favorite-web-dev-tools",
    title: "My Favorite Tools for Web Development in 2026",
    excerpt:
      "The tools I use daily for coding, designing, debugging, and deploying — from VS Code extensions to Supabase, Vercel, and everything in between.",
    date: "June 2026",
    readTime: "5 min read",
    category: "Tools",
    featured: false,
  },
  {
    id: 5,
    slug: "what-i-learned-from-projects",
    title: "What I Learned from Building Real Projects",
    excerpt:
      "Why project-based learning beats tutorials every time — and the specific lessons I took from AfghanRoutes, KabulHire, Flowe, and the Quika Finance System.",
    date: "June 2026",
    readTime: "4 min read",
    category: "Projects",
    featured: false,
  },
  {
    id: 6,
    slug: "freelancing-from-afghanistan",
    title: "Freelancing Internationally from Afghanistan",
    excerpt:
      "How I'm building a remote freelance career on Upwork and Fiverr from Kabul — the challenges, the wins, and what I'd tell any Afghan developer starting out.",
    date: "June 2026",
    readTime: "5 min read",
    category: "Career",
    featured: false,
  },
];

const CATEGORIES = ["All", "Next.js", "Learning", "Career", "Tools", "Projects"];

const CATEGORY_STYLES = {
  "Next.js":  { badge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",   bar: "bg-blue-500"   },
  Learning:   { badge: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",       bar: "bg-sky-500"    },
  Career:     { badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300", bar: "bg-emerald-500" },
  Tools:      { badge: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300", bar: "bg-amber-500" },
  Projects:   { badge: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",   bar: "bg-rose-500"   },
};

const DEFAULT_STYLE = { badge: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300", bar: "bg-gray-400" };

function CategoryBadge({ category, size = "sm" }) {
  const style = CATEGORY_STYLES[category] || DEFAULT_STYLE;
  return (
    <span className={`inline-block font-medium rounded-full px-3 py-0.5 ${size === "xs" ? "text-[10px]" : "text-xs"} ${style.badge}`}>
      {category}
    </span>
  );
}

function FeaturedCard({ post }) {
  const style = CATEGORY_STYLES[post.category] || DEFAULT_STYLE;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-gray-100 dark:border-gray-800
        bg-white dark:bg-gray-900 p-8 overflow-hidden
        hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/30 hover:border-gray-200 dark:hover:border-gray-700
        transition-all duration-300 min-h-[280px]"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(99,102,241,0.06) 0%, transparent 70%)" }}
      />

      {/* Top accent bar */}
      <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-full ${style.bar} opacity-60`} />

      <div>
        {/* Badges */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-0.5">
            Featured
          </span>
          <CategoryBadge category={post.category} size="xs" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white leading-tight mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-50 dark:border-gray-800">
        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300
          group-hover:text-black dark:group-hover:text-white transition-colors">
          Read article
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }) {
  const style = CATEGORY_STYLES[post.category] || DEFAULT_STYLE;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900
        hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30 hover:border-gray-200 dark:hover:border-gray-700
        transition-all duration-300"
    >
      {/* Colored top bar */}
      <div className={`w-8 h-[3px] rounded-full mb-5 ${style.bar} group-hover:w-12 transition-all duration-300`} />

      <div className="flex items-center justify-between mb-3">
        <CategoryBadge category={post.category} size="xs" />
        <span className="text-[11px] text-gray-400 dark:text-gray-500">{post.readTime}</span>
      </div>

      <h3 className="text-base font-semibold text-gray-800 dark:text-white leading-snug mb-2 flex-1
        group-hover:text-black dark:group-hover:text-white transition-colors">
        {post.title}
      </h3>

      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-5 line-clamp-2">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800 mt-auto">
        <span className="text-[11px] text-gray-400 dark:text-gray-500">{post.date}</span>
        <span className="flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500
          group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
          Read more
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = POSTS.find((p) => p.featured);

  const filtered = POSTS.filter((p) => {
    if (p.featured) return false; // featured shown separately
    return activeCategory === "All" || p.category === activeCategory;
  });

  // If filtering by a category that the featured post belongs to, show it inline too
  const showFeaturedInline = featured && activeCategory !== "All" && featured.category === activeCategory;
  const allFiltered = showFeaturedInline ? [featured, ...filtered] : filtered;

  const visible = allFiltered.slice(0, visibleCount);
  const hasMore = visibleCount < allFiltered.length;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">

        {/* ── Header ── */}
        <section className="w-full px-[8%] pt-28 pb-16 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-4xl">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-px bg-gray-300 dark:bg-gray-600" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500">
                Writing
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ideas, lessons &<br />
              <span className="italic font-normal text-gray-400 dark:text-gray-500">
                notes from the journey.
              </span>
            </motion.h1>

            <motion.p
              className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I write about Next.js, full-stack development, freelancing from
              Afghanistan, and the things I learn while building real products.
            </motion.p>

            {/* Category filters */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                  aria-pressed={cat === activeCategory}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 font-Ovo
                    ${cat === activeCategory
                      ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                      : "border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-400 bg-white dark:bg-transparent"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="w-full px-[8%] py-14">

          {/* Featured post — only shown when on "All" */}
          <AnimatePresence mode="wait">
            {activeCategory === "All" && featured && (
              <motion.div
                key="featured"
                className="mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <FeaturedCard post={featured} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Section label */}
          {activeCategory === "All" && (
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {activeCategory === "All" ? "All articles" : activeCategory}
              </span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            </div>
          )}

          {/* Posts grid */}
          <AnimatePresence mode="wait">
            {visible.length > 0 ? (
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {visible.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  No posts in this category yet — check back soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Load more */}
          {hasMore && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="px-7 py-3 rounded-full border border-gray-300 dark:border-gray-700
                  text-sm text-gray-500 dark:text-gray-400 font-Ovo
                  hover:bg-black hover:text-white hover:border-black
                  dark:hover:bg-white dark:hover:text-black dark:hover:border-white
                  transition-all duration-300"
              >
                Load more articles
              </button>
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}