'use client';
// components/BlogCard.jsx
import Link from "next/link";

const categoryColors = {
  "Next.js": { bg: "#0f1a2e", text: "#60a5fa", border: "#1e3a5f" },
  Backend:   { bg: "#1a1200", text: "#fbbf24", border: "#3d2d00" },
  Freelancing: { bg: "#0d1f17", text: "#34d399", border: "#134e31" },
  Auth:      { bg: "#1a0d26", text: "#c084fc", border: "#3b1f5c" },
  CSS:       { bg: "#1a0d14", text: "#f472b6", border: "#5c1f3a" },
};

export default function BlogCard({ post, featured = false }) {
  const color = categoryColors[post.category] || {
    bg: "#1a1a2e",
    text: "#a78bfa",
    border: "#3b3b6b",
  };

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="blog-card-featured">
        <div className="featured-inner">
          <div className="featured-top">
            <span
              className="category-badge"
              style={{
                background: color.bg,
                color: color.text,
                border: `1px solid ${color.border}`,
              }}
            >
              {post.category}
            </span>
            <span className="featured-label">Featured</span>
          </div>
          <h2 className="featured-title">{post.title}</h2>
          <p className="featured-excerpt">{post.excerpt}</p>
          <div className="card-meta">
            <span>{post.date}</span>
            <span className="meta-dot">·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="read-link">
            Read Article
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <style jsx>{`
          .blog-card-featured {
            display: block;
            background: #0d0d14;
            border: 1px solid #1e1e2e;
            border-radius: 16px;
            padding: 36px;
            text-decoration: none;
            transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
            position: relative;
            overflow: hidden;
          }
          .blog-card-featured::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
              ellipse at 20% 20%,
              rgba(139, 92, 246, 0.07) 0%,
              transparent 60%
            );
            pointer-events: none;
          }
          .blog-card-featured:hover {
            border-color: #7c3aed;
            transform: translateY(-3px);
            box-shadow: 0 16px 40px rgba(124, 58, 237, 0.15);
          }
          .featured-top {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 18px;
          }
          .featured-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #7c3aed;
          }
          .featured-title {
            font-size: 26px;
            font-weight: 700;
            color: #f1f0ff;
            line-height: 1.3;
            margin: 0 0 14px 0;
            letter-spacing: -0.3px;
          }
          .featured-excerpt {
            font-size: 15px;
            color: #8b8a9e;
            line-height: 1.7;
            margin: 0 0 22px 0;
          }
          .card-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #5c5b6e;
            margin-bottom: 20px;
          }
          .meta-dot {
            color: #3a3a50;
          }
          .read-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            font-weight: 600;
            color: #7c3aed;
            transition: gap 0.2s;
          }
          .blog-card-featured:hover .read-link {
            gap: 10px;
          }
          .category-badge {
            display: inline-block;
            font-size: 11px;
            font-weight: 600;
            padding: 3px 10px;
            border-radius: 20px;
            letter-spacing: 0.04em;
          }
        `}</style>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div
        className="category-badge"
        style={{
          background: color.bg,
          color: color.text,
          border: `1px solid ${color.border}`,
        }}
      >
        {post.category}
      </div>
      <h3 className="card-title">{post.title}</h3>
      <p className="card-excerpt">{post.excerpt}</p>
      <div className="card-footer">
        <div className="card-meta">
          <span>{post.date}</span>
          <span className="meta-dot">·</span>
          <span>{post.readTime}</span>
        </div>
        <svg
          className="arrow-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style jsx>{`
        .blog-card {
          display: flex;
          flex-direction: column;
          background: #0d0d14;
          border: 1px solid #1e1e2e;
          border-radius: 14px;
          padding: 24px;
          text-decoration: none;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          height: 100%;
        }
        .blog-card:hover {
          border-color: #7c3aed;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(124, 58, 237, 0.12);
        }
        .category-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.04em;
          width: fit-content;
          margin-bottom: 14px;
        }
        .card-title {
          font-size: 17px;
          font-weight: 700;
          color: #f1f0ff;
          line-height: 1.4;
          margin: 0 0 10px 0;
          letter-spacing: -0.2px;
          flex: 1;
        }
        .card-excerpt {
          font-size: 14px;
          color: #6b6a7e;
          line-height: 1.65;
          margin: 0 0 20px 0;
          flex: 1;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #4a4a5e;
        }
        .meta-dot {
          color: #3a3a50;
        }
        .arrow-icon {
          color: #7c3aed;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
        }
        .blog-card:hover .arrow-icon {
          opacity: 1;
          transform: translateX(3px);
        }
      `}</style>
    </Link>
  );
}