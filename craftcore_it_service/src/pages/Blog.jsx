import "./Blog.css";
import { FiPlay, FiBookOpen } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    type: "video",
    category: "IT Infrastructure",
    title: "Modernizing Your IT Infrastructure: Systems That Actually Scale",
    desc: "Learn how manufacturing enterprises modernize their IT with cloud migration, server optimization, and network security — so your systems grow as fast as you do.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134155/blog-automation_dhavjt.avif",
    date: "May 28, 2026"
  },
  {
    id: 2,
    type: "article",
    category: "ERP & Systems",
    title: "ERP Integration Done Right: Connecting Your Operations for Real-Time Visibility",
    desc: "Discover best practices for ERP integration — data synchronization, workflow automation, and real-time reporting that actually help you make better decisions.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134156/blog-design_yr1e56.avif",
    date: "May 24, 2026"
  },
  {
    id: 3,
    type: "video",
    category: "Cloud & DevOps",
    title: "Cloud Migration Without the Headache: AWS, Azure & GCP for Manufacturing",
    desc: "Explore secure cloud migration strategies, infrastructure-as-code, and DevOps practices that work — without disrupting your day-to-day operations.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134157/blog-fintech_qiyhy3.avif",
    date: "May 18, 2026"
  },
  {
    id: 4,
    type: "article",
    category: "Cybersecurity",
    title: "Cybersecurity That Protects What Matters: Securing Your Manufacturing Operations",
    desc: "Learn essential cybersecurity practices — threat detection, access control, data encryption, and compliance — so you can sleep better at night.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134156/blog-dev_u7sv1y.avif",
    date: "May 12, 2026"
  },
  {
    id: 5,
    type: "video",
    category: "AI & Automation",
    title: "AI That Actually Works: Automating Your Manufacturing Operations",
    desc: "Discover how AI and automation are revolutionizing manufacturing — predictive maintenance, quality control, and intelligent process optimization that deliver real results.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134157/blog-proptech_gpmugy.avif",
    date: "May 05, 2026"
  },
  {
    id: 6,
    type: "article",
    category: "IT Strategy",
    title: "Building Your IT Roadmap: A Practical Guide for Mid-Market Manufacturers",
    desc: "Strategic IT planning — from digital transformation to technology governance — so you can grow with confidence, not chaos.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134155/blog-business_piayvh.avif",
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
            Practical IT Insights for <br />
            <span className="gradient-text">Manufacturing Leaders</span>
          </h1>
          <p className="section-description blog-hero-desc">
            Expert insights on IT infrastructure, cloud migration, ERP integration, cybersecurity, 
            and AI automation — built for the people who actually run these systems.
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