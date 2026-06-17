"use client";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featuredPost = {
  title: "Building My Developer Portfolio with Next.js",
  description:
    "A practical look at how I designed, built, and deployed my portfolio while improving my frontend development skills.",
  date: "June 2026",
  readTime: "6 min read",
  category: "Next.js",
  href: "/blog/building-my-developer-portfolio",
};

const posts = [
  {
    title: "How I Started Learning Next.js",
    description:
      "The roadmap I followed, the mistakes I made, and the lessons that helped me understand modern React apps.",
    date: "June 2026",
    readTime: "4 min read",
    category: "Learning",
    href: "/blog/how-i-started-learning-nextjs",
  },
  {
    title: "Why Every Developer Needs a Portfolio",
    description:
      "A portfolio helps you prove your skills, present your projects, and create trust with clients or employers.",
    date: "June 2026",
    readTime: "3 min read",
    category: "Career",
    href: "/blog/why-developers-need-a-portfolio",
  },
  {
    title: "My Favorite Tools for Web Development",
    description:
      "The tools I use for coding, designing, debugging, and deploying professional websites.",
    date: "June 2026",
    readTime: "5 min read",
    category: "Tools",
    href: "/blog/my-favorite-web-dev-tools",
  },
  {
    title: "What I Learned from Building Real Projects",
    description:
      "Why project-based learning is the fastest way to become confident with frontend development.",
    date: "June 2026",
    readTime: "4 min read",
    category: "Projects",
    href: "/blog/what-i-learned-from-projects",
  },
];

const categories = [
  "All",
  "Next.js",
  "Learning",
  "Career",
  "Tools",
  "Projects",
];

const categoryColors = {
  "Next.js": {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
  },
  Learning: { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
  Career: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  Tools: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  Projects: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen text-slate-900"
        style={{
          backgroundColor: "#FAFAF8",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* ─── Hero Header ─── */}
        <section
          style={{
            borderBottom: "1px solid #fffdd0",
            backgroundColor: "#edece6",
            paddingTop: "7rem",
            paddingBottom: "4rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            {/* Label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "2rem",
                  height: "1px",
                  backgroundColor: "#6366f1",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#091442",
                }}
              >
                Writing
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#0a0900",
                maxWidth: "52rem",
                marginBottom: "1.5rem",
              }}
            >
              Ideas, lessons &amp; notes from my developer journey.
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: "#0a0900",
                maxWidth: "38rem",
                marginBottom: "2.5rem",
              }}
            >
              I write about web development, Next.js, projects, tools, and the
              things I learn while building modern digital experiences.
            </p>

            {/* Filter + Search row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {categories.map((cat, i) => (
                  <button
                    key={cat}
                    type="button"
                    style={{
                      padding: "0.4rem 1rem",
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      border:
                        i === 0 ? "1px solid #6366f1" : "1px solid #2D2D2B",
                      backgroundColor: i === 0 ? "#6366f1" : "transparent",
                      color: i === 0 ? "#fff" : "#0a0900",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.5rem 1.1rem",
                  borderRadius: "999px",
                  border: "1px solid #0a0900",
                  backgroundColor: "#1A1A18",
                  width: "16rem",
                }}
              >
                <Search
                  style={{
                    width: "0.9rem",
                    height: "0.9rem",
                    color: "#6B7280",
                    flexShrink: 0,
                  }}
                />
                <input
                  type="text"
                  placeholder="Search articles…"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: "0.85rem",
                    color: "#E5E7EB",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Featured + Sidebar ─── */}
        <section style={{ padding: "4rem 1.5rem 0" }}>
          <div
            style={{
              maxWidth: "72rem",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {/* Featured card */}
            <Link
              href={featuredPost.href}
              style={{
                position: "relative",
                borderRadius: "1rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2.25rem",
                minHeight: "420px",
                backgroundColor: "#0F0F0E",
                border: "1px solid #1F1F1D",
                textDecoration: "none",
                transition: "transform 0.25s, box-shadow 0.25s",
                gridColumn: "span 2",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 48px rgba(0,0,0,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Background accent */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(ellipse 60% 55% at 90% 10%, rgba(99,102,241,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 85%, rgba(20,184,166,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Dot grid texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative" }}>
                {/* Badges */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <span
                    style={{
                      padding: "0.25rem 0.85rem",
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      backgroundColor: "rgba(99,102,241,0.18)",
                      color: "#a5b4fc",
                      border: "1px solid rgba(99,102,241,0.3)",
                    }}
                  >
                    Featured
                  </span>
                  <span
                    style={{
                      padding: "0.25rem 0.85rem",
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "#0a0900",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {featuredPost.category}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    color: "#FAFAF8",
                    maxWidth: "28rem",
                    marginBottom: "1rem",
                  }}
                >
                  {featuredPost.title}
                </h2>

                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "#0a0900",
                    maxWidth: "32rem",
                  }}
                >
                  {featuredPost.description}
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginTop: "2rem",
                }}
              >
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      color: "#6B7280",
                    }}
                  >
                    <CalendarDays
                      style={{ width: "0.85rem", height: "0.85rem" }}
                    />
                    {featuredPost.date}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      color: "#6B7280",
                    }}
                  >
                    <Clock style={{ width: "0.85rem", height: "0.85rem" }} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#a5b4fc",
                    transition: "gap 0.2s",
                  }}
                >
                  Read article
                  <ArrowRight style={{ width: "0.9rem", height: "0.9rem" }} />
                </span>
              </div>
            </Link>

            {/* Sidebar posts */}
            {posts.slice(0, 2).map((post) => (
              <SidebarCard key={post.title} post={post} />
            ))}
          </div>
        </section>

        {/* ─── Divider ─── */}
        <section style={{ padding: "3rem 1.5rem 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  whiteSpace: "nowrap",
                }}
              >
                More articles
              </span>
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "#E4E4DE" }}
              />
            </div>

            {/* Bottom 2 cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
                paddingBottom: "5rem",
              }}
            >
              {posts.slice(2).map((post) => (
                <BottomCard key={post.title} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SidebarCard({ post }) {
  const color = categoryColors[post.category] || {
    bg: "bg-slate-50",
    text: "text-slate-600",
    border: "border-slate-200",
  };

  return (
    <Link
      href={post.href}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "1rem",
        border: "1px solid #E4E4DE",
        backgroundColor: "#fff",
        padding: "1.75rem",
        textDecoration: "none",
        transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.08)";
        e.currentTarget.style.borderColor = "#6366f1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#E4E4DE";
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.25rem",
          }}
        >
          <CategoryBadge category={post.category} />
          <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
            {post.readTime}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            color: "#0F0F0E",
            marginBottom: "0.75rem",
          }}
        >
          {post.title}
        </h3>

        <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#6B7280" }}>
          {post.description}
        </p>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.78rem",
            color: "#9CA3AF",
          }}
        >
          <CalendarDays style={{ width: "0.8rem", height: "0.8rem" }} />
          {post.date}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#6366f1",
          }}
        >
          Read more
          <ArrowRight style={{ width: "0.8rem", height: "0.8rem" }} />
        </span>
      </div>
    </Link>
  );
}

function BottomCard({ post }) {
  return (
    <Link
      href={post.href}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "1rem",
        border: "1px solid #E4E4DE",
        backgroundColor: "#fff",
        padding: "1.75rem",
        textDecoration: "none",
        transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.08)";
        e.currentTarget.style.borderColor = "#6366f1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#E4E4DE";
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          borderRadius: "999px",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          marginBottom: "1.5rem",
          width: "2.5rem",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <CategoryBadge category={post.category} />
        <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
          {post.readTime}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          lineHeight: 1.3,
          letterSpacing: "-0.015em",
          color: "#0F0F0E",
          marginBottom: "0.75rem",
          flex: 1,
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.65,
          color: "#6B7280",
          marginBottom: "1.5rem",
        }}
      >
        {post.description}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #F0F0EC",
          paddingTop: "1rem",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.78rem",
            color: "#9CA3AF",
          }}
        >
          <CalendarDays style={{ width: "0.8rem", height: "0.8rem" }} />
          {post.date}
        </span>

        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#6366f1",
          }}
        >
          Read more
          <ArrowRight style={{ width: "0.8rem", height: "0.8rem" }} />
        </span>
      </div>
    </Link>
  );
}

function CategoryBadge({ category }) {
  const palettes = {
    "Next.js": { bg: "#EEF2FF", color: "#4338CA" },
    Learning: { bg: "#E0F2FE", color: "#0369A1" },
    Career: { bg: "#DCFCE7", color: "#166534" },
    Tools: { bg: "#FEF9C3", color: "#854D0E" },
    Projects: { bg: "#FFF1F2", color: "#9F1239" },
  };
  const p = palettes[category] || { bg: "#F1F5F9", color: "#475569" };

  return (
    <span
      style={{
        padding: "0.25rem 0.75rem",
        borderRadius: "999px",
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        backgroundColor: p.bg,
        color: p.color,
      }}
    >
      {category}
    </span>
  );
}
