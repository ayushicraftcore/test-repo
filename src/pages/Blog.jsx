import "./Blog.css";
import { FiPlay, FiBookOpen } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    type: "video",
    category: "Automation",
    title: "How We Automated Operational Workflows for Next-Gen Debt Recovery",
    desc: "A deep-dive look into building zero-latency data stream engines that eliminate manual allocation errors and streamline case dunning pipelines.",
    image: "/images/blog-automation.avif",
    date: "May 28, 2026"
  },
  {
    id: 2,
    type: "article",
    category: "UI/UX Design",
    title: "The Mechanics of Seamless Light to Dark Mode Interface Conversions",
    desc: "Architecting atomic design systems using CSS variable maps and theme tokens to preserve visual contrast without layout flashes.",
    image: "/images/blog-design.avif",
    date: "May 24, 2026"
  },
  {
    id: 3,
    type: "video",
    category: "Fintech",
    title: "Architecting High-Frequency Transaction Vaults with Cloud Infrastructure",
    desc: "Analyzing secure token isolation techniques and cloud-native databases configured to run scalable backend ledger operations under load.",
    image: "/images/blog-fintech.avif",
    date: "May 18, 2026"
  },
  {
    id: 4,
    type: "article",
    category: "Development",
    title: "Optimizing Intersection Observers for Fluid Scroll-Driven Web Animations",
    desc: "How to safely handle scroll event vectors in React to drive complex UI states without causing frame drops on low-end mobile devices.",
    image: "/images/blog-dev.avif",
    date: "May 12, 2026"
  },
  {
    id: 5,
    type: "video",
    category: "UI/UX Design",
    title: "Designing for High Connection Loads: Immersive Visual PropTech Systems",
    desc: "Structuring responsive layout viewports that display heavy 3D spatial properties without degrading core customer engagement metrics.",
    image: "/images/blog-proptech.avif",
    date: "May 05, 2026"
  },
  {
    id: 6,
    type: "article",
    category: "Automation",
    title: "Why Clean Code Architecture is Your Business's Absolute Core Asset",
    desc: "A business leader's blueprint for treating technical development pipelines as high-yield structural investments instead of overhead expenses.",
    image: "/images/blog-business.avif",
    date: "Apr 29, 2026"
  }
];

function Blog() {
  return (
    <div className="blog-page">
      <div className="container">
        
        {/* CENTER-ALIGNED HERO SECTION */}
        <header className="blog-hero">
          <span className="section-tag">INSIGHTS & MEDIA</span>
          <h1 className="blog-hero-title">
            Knowledge Hub & <br />
            <span className="gradient-text">Ecosystem Perspectives</span>
          </h1>
          <p className="section-description blog-hero-desc">
            Explore our latest engineered insights, tech overviews, vlog documentation and 
            architectural blueprints designed to solve operational friction.
          </p>
        </header>

        {/* HIGH-PERFORMANCE POST MATRIX GRID */}
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card card-hover">
              
              {/* MEDIA PREVIEW CHASSIS */}
              <div className="blog-card-media">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-media-img"
                  loading="lazy"
                />
                <div className="blog-media-overlay" />

                <span className="blog-category-tag">{post.category}</span>
              </div>

              {/* CARD DETAILS WRAPPER */}
              <div className="blog-card-content">
                <span className="blog-card-date">{post.date}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="card-text blog-card-desc">{post.desc}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Blog;