import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

import blogPosts from "../data/blogPosts";
import "./BlogDetail.css";

function BlogDetail() {
  const { slug } = useParams();

  const post = blogPosts.find((blog) => blog.slug === slug);

  /* =========================================
     BLOG NOT FOUND
  ========================================= */

  if (!post) {
    return (
      <main className="blog-detail-page">
        <div className="container">
          <div className="blog-not-found">
            <span className="section-tag">BLOG</span>

            <h1>Article Not Found</h1>

            <p>
              The article you are looking for does not exist or may have been
              moved.
            </p>

            <Link to="/blog" className="blog-back-button">
              <FiArrowLeft />
              Back to Blogs
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-detail-page">
      <div className="container">

        {/* =========================================
            BACK TO BLOG
        ========================================= */}

        <div className="blog-detail-back">
          <Link to="/blog">
            <FiArrowLeft />
            Back to Insights
          </Link>
        </div>


        {/* =========================================
            BLOG HEADER
        ========================================= */}

        <header className="blog-detail-header">

          <span className="section-tag">
            {post.category}
          </span>

          <h1 className="blog-detail-title">
            {post.title}
          </h1>

          <p className="blog-detail-description">
            {post.desc}
          </p>


          {/* META */}

          <div className="blog-detail-meta">

            <span>
              <FiCalendar />
              {post.date}
            </span>

            <span>
              <FiClock />
              {post.readTime}
            </span>

          </div>

        </header>


        {/* =========================================
            FEATURED IMAGE
        ========================================= */}

        <div className="blog-detail-image-wrapper">
          <img
            src={post.image}
            alt={post.title}
            className="blog-detail-image"
          />
        </div>


        {/* =========================================
            ARTICLE CONTENT
        ========================================= */}

        <article className="blog-detail-content">

          {/* INTRODUCTION */}

          {post.introduction && (
            <div className="blog-detail-introduction">
              <p>{post.introduction}</p>
            </div>
          )}


          {/* ARTICLE SECTIONS */}

          {post.sections?.map((section, index) => (
            <section
              className="blog-content-section"
              key={index}
            >

              <h2>{section.heading}</h2>


              {/* PARAGRAPHS */}

              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}


              {/* BULLETS */}

              {section.bullets?.length > 0 && (
                <ul>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

            </section>
          ))}


          {/* =========================================
              FAQ
          ========================================= */}

          {post.faqs?.length > 0 && (
            <section className="blog-faq-section">

              <div className="blog-faq-heading">

                <span className="section-tag">
                  FAQ
                </span>

                <h2>
                  Frequently Asked Questions
                </h2>

              </div>


              <div className="blog-faq-list">

                {post.faqs.map((faq, index) => (
                  <div
                    className="blog-faq-item"
                    key={index}
                  >

                    <h3>
                      {faq.question}
                    </h3>

                    <p>
                      {faq.answer}
                    </p>

                  </div>
                ))}

              </div>

            </section>
          )}


          {/* =========================================
              AUTHOR DETAILS
          ========================================= */}

          {post.author && (
            <section className="blog-author-section">

              <div className="blog-author-divider" />

              <h2 className="blog-author-heading">
                AUTHOR DETAILS
              </h2>


              <div className="blog-author">

                {/* AUTHOR IMAGE */}

                <div className="blog-author-image-wrapper">

                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="blog-author-image"
                  />

                </div>


                {/* AUTHOR INFORMATION */}

                <div className="blog-author-info">

                  <h3 className="blog-author-name">
                    {post.author.name}
                  </h3>


                  {post.author.role && (
                    <span className="blog-author-role">
                      {post.author.role}
                    </span>
                  )}


                  <p className="blog-author-bio">
                    {post.author.bio}
                  </p>

                </div>

              </div>

            </section>
          )}


          {/* =========================================
              BLOG CTA
          ========================================= */}

          <section className="blog-detail-cta">

            <div className="blog-cta-content">

              <span className="section-tag">
                HAVE A PROJECT?
              </span>

              <h2>
                Let's Build Something That Scales.
              </h2>

              <p>
                Looking to modernize your IT infrastructure, automate
                operations or build a scalable digital solution? Let's
                discuss how we can help.
              </p>

              <Link
                to="https://booking.techrometric.com/appointments/craftcore"
                className="blog-cta-button"
              >
                Book a Free Consultation
                <span>
                  <FiArrowRight />
                </span>
              </Link>

            </div>

          </section>

        </article>

      </div>
    </main>
  );
}

export default BlogDetail;