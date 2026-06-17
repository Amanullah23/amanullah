'use client';
// data/blogPosts.js
// Replace these with your real blog posts

export const blogPosts = [
  {
    id: 1,
    slug: "next-js-app-router-guide",
    title: "Mastering Next.js App Router: A Deep Dive",
    excerpt:
      "The App Router changed everything. Here's how I rebuilt my mental model around layouts, server components, and data fetching — and what actually matters.",
    category: "Next.js",
    date: "May 28, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "prisma-postgres-tips",
    title: "5 Prisma + PostgreSQL Patterns I Use in Every Project",
    excerpt:
      "From schema design to query optimization — the patterns that saved me hours on every full-stack project I've shipped.",
    category: "Backend",
    date: "April 14, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "freelancing-as-developer",
    title: "How I Land Clients on Upwork as a Full-Stack Dev",
    excerpt:
      "Proposal writing, niche positioning, and the mindset shift that took me from zero responses to consistent project offers.",
    category: "Freelancing",
    date: "March 3, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "supabase-auth-nextjs",
    title: "Supabase Auth in Next.js 14: The Right Way",
    excerpt:
      "Cookie-based sessions, middleware protection, and OAuth — a complete setup guide that actually works in production.",
    category: "Auth",
    date: "February 20, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tricks That Improved My Workflow",
    excerpt:
      "Custom tokens, reusable utilities, and the specific patterns I use to keep large projects clean and consistent.",
    category: "CSS",
    date: "January 10, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "jwt-auth-express",
    title: "JWT Authentication with Express.js: From Scratch",
    excerpt:
      "Access tokens, refresh tokens, secure cookies — a step-by-step walkthrough of building auth the right way in Express.",
    category: "Backend",
    date: "December 5, 2024",
    readTime: "9 min read",
    featured: false,
  },
];

export const categories = ["All", "Next.js", "Backend", "Freelancing", "Auth", "CSS"];