import "./Blog.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "IT Infrastructure",
    "ERP & Systems",
    "Cloud & DevOps",
    "Cybersecurity",
    "AI & Automation",
    "IT Strategy",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === activeCategory
        );

  return (
    <div className="blog-page">
      <div className="container">

        {/* HERO SECTION */}
        <header className="blog-hero">
          <span className="section-tag">
            INSIGHTS & MEDIA
          </span>

          <h1 className="blog-hero-title">
            Practical IT Insights for <br />
            <span className="gradient-text">
              Manufacturing Leaders
            </span>
          </h1>

          <p className="section-description blog-hero-desc">
            Expert insights on IT infrastructure, cloud migration,
            ERP integration, cybersecurity and AI automation,
            built for the people who actually run these systems.
          </p>
        </header>

        {/* CATEGORY FILTERS */}
        <div className="blog-filters-wrapper">
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blog-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="blog-card-link"
            >
              <article className="blog-card card-hover">

                {/* IMAGE */}
                <div className="blog-card-media">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-media-img"
                    loading="lazy"
                  />

                  <div className="blog-media-overlay" />

                  <span className="blog-category-tag">
                    {post.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="blog-card-content">

                  {/* DATE + READ TIME */}
                  <div className="blog-card-meta">
                    <span className="blog-card-date">
                      {post.date}
                    </span>

                    <span className="blog-card-read-time">
                      {post.readTime}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="blog-card-title">
                    {post.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="card-text blog-card-desc">
                    {post.desc}
                  </p>

                  {/* READ MORE */}
                  <div className="blog-card-footer">
                    <span className="blog-read-more">
                      Read Article
                      <span className="read-arrow">
                        →
                      </span>
                    </span>
                  </div>

                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredPosts.length === 0 && (
          <div className="blog-empty-state">
            <h3>No articles found</h3>

            <p>
              More insights will be available soon.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Blog;