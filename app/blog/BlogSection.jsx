"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
//import { blogPosts, categories } from "./page";

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  const filteredRest =
    activeCategory === "All"
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  const visiblePosts = filteredRest.slice(0, visibleCount);
  const hasMore = visibleCount < filteredRest.length;

  return (
    <section id="blog" className="blog-section">
      {/* Header */}
      <div className="section-header">
        <div className="label-row">
          <span className="section-label">WRITING</span>
          <div className="label-line" />
        </div>
        <h2 className="section-title">
          Thoughts &amp; <span className="title-accent">Tutorials</span>
        </h2>
        <p className="section-desc">
          I write about what I learn — Next.js, full-stack architecture,
          freelancing, and developer workflows.
        </p>
      </div>

      {/* Category Filter */}
      <div className="filter-row">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(5);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featured && (activeCategory === "All" || activeCategory === featured.category) && (
        <div className="featured-wrapper">
          <BlogCard post={featured} featured={true} />
        </div>
      )}

      {/* Grid */}
      {visiblePosts.length > 0 ? (
        <div className="blog-grid">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>No posts in this category yet.</span>
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="load-more-row">
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount((c) => c + 4)}
          >
            Load More Posts
          </button>
        </div>
      )}

      <style jsx>{`
        .blog-section {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        /* Header */
        .section-header {
          margin-bottom: 48px;
        }
        .label-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #7c3aed;
        }
        .label-line {
          flex: 1;
          max-width: 60px;
          height: 1px;
          background: linear-gradient(to right, #7c3aed, transparent);
        }
        .section-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #f1f0ff;
          margin: 0 0 14px 0;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }
        .title-accent {
          color: #7c3aed;
        }
        .section-desc {
          font-size: 16px;
          color: #6b6a7e;
          line-height: 1.7;
          max-width: 520px;
          margin: 0;
        }

        /* Filter */
        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
        }
        .filter-btn {
          padding: 7px 18px;
          border-radius: 99px;
          border: 1px solid #1e1e2e;
          background: transparent;
          color: #6b6a7e;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .filter-btn:hover {
          border-color: #7c3aed;
          color: #a78bfa;
        }
        .filter-btn.active {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
        }

        /* Featured */
        .featured-wrapper {
          margin-bottom: 28px;
        }

        /* Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        /* Empty */
        .empty-state {
          text-align: center;
          padding: 60px 0;
          color: #4a4a5e;
          font-size: 15px;
        }

        /* Load more */
        .load-more-row {
          display: flex;
          justify-content: center;
        }
        .load-more-btn {
          padding: 12px 32px;
          border-radius: 99px;
          border: 1px solid #2a2a3e;
          background: transparent;
          color: #a78bfa;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .load-more-btn:hover {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .blog-section {
            padding: 70px 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}