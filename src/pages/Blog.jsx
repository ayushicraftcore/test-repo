import "./Blog.css";
import { FiPlay, FiBookOpen } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    type: "video",
    category: "Automation",
    title: "Business Process Automation: Reducing Manual Workflows with AI",
    desc: "Learn how AI-powered automation streamlines operations, reduces human errors, and improves productivity through intelligent workflow management.",
    image: "/images/blog-automation.avif",
    date: "May 28, 2026"
  },
  {
    id: 2,
    type: "article",
    category: "UI/UX Design",
    title: "Light Mode vs Dark Mode: UI/UX Design Best Practices for Modern Applications",
    desc: "Explore proven UI/UX design techniques for creating accessible, visually consistent, and user-friendly light and dark mode experiences.",
    image: "/images/blog-design.avif",
    date: "May 24, 2026"
  },
  {
    id: 3,
    type: "video",
    category: "Cloud & DevOps",
    title: "Building Scalable Cloud Infrastructure for High-Performance Applications",
    desc: "Discover cloud architecture strategies, secure data management practices, and scalable infrastructure solutions for modern businesses.",
    image: "/images/blog-fintech.avif",
    date: "May 18, 2026"
  },
  {
    id: 4,
    type: "article",
    category: "Web Development",
    title: "React Performance Optimization for Fast and Interactive Web Applications",
    desc: "Learn how to optimize React applications using efficient rendering techniques, scroll performance improvements, and modern development practices.",
    image: "/images/blog-dev.avif",
    date: "May 12, 2026"
  },
  {
    id: 5,
    type: "video",
    category: "UI/UX Design",
    title: "Creating Responsive UI/UX Designs for Complex Business Applications",
    desc: "Best practices for designing scalable, responsive interfaces that improve user engagement across enterprise and SaaS platforms.",
    image: "/images/blog-proptech.avif",
    date: "May 05, 2026"
  },
  {
    id: 6,
    type: "article",
    category: "Software Development",
    title: "Why Clean Code and Scalable Architecture Matter for Business Growth",
    desc: "Understand how maintainable code, scalable software architecture, and development best practices contribute to long-term business success.",
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