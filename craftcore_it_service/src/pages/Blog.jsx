import "./Blog.css";
import { FiPlay, FiBookOpen } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    type: "video",
    category: "IT Infrastructure",
    title: "IT Infrastructure Modernization: Building Scalable Systems for Manufacturing",
    desc: "Learn how manufacturing enterprises modernize their IT infrastructure with cloud migration, server optimization, and network security strategies for operational excellence.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134155/blog-automation_dhavjt.avif",
    date: "May 28, 2026"
  },
  {
    id: 2,
    type: "article",
    category: "ERP & Systems",
    title: "ERP Integration: Connecting Manufacturing Operations for Real-Time Visibility",
    desc: "Discover best practices for ERP integration in manufacturing, including data synchronization, workflow automation, and real-time reporting for better decision-making.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134156/blog-design_yr1e56.avif",
    date: "May 24, 2026"
  },
  {
    id: 3,
    type: "video",
    category: "Cloud & DevOps",
    title: "Cloud Migration Strategies for Manufacturing Enterprises: AWS, Azure & GCP",
    desc: "Explore secure cloud migration strategies, infrastructure-as-code, and DevOps best practices for manufacturing companies moving to the cloud.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134157/blog-fintech_qiyhy3.avif",
    date: "May 18, 2026"
  },
  {
    id: 4,
    type: "article",
    category: "Cybersecurity",
    title: "Cybersecurity for Manufacturing: Protecting Critical Infrastructure & Data",
    desc: "Learn essential cybersecurity practices for manufacturers, including threat detection, access control, data encryption, and compliance with industry standards.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134156/blog-dev_u7sv1y.avif",
    date: "May 12, 2026"
  },
  {
    id: 5,
    type: "video",
    category: "AI & Automation",
    title: "AI-Powered Automation: Transforming Manufacturing Operations with Smart Technology",
    desc: "Discover how AI and automation solutions are revolutionizing manufacturing operations with predictive maintenance, quality control, and intelligent process optimization.",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785134157/blog-proptech_gpmugy.avif",
    date: "May 05, 2026"
  },
  {
    id: 6,
    type: "article",
    category: "IT Strategy",
    title: "IT Strategy for Mid-Market Manufacturers: Building a Technology Roadmap",
    desc: "Strategic IT planning for manufacturing enterprises — from digital transformation to technology roadmap development and IT governance for sustainable growth.",
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
            IT Knowledge Hub for Manufacturing <br />
            <span className="gradient-text">Enterprises & Growing SMEs</span>
          </h1>
          <p className="section-description blog-hero-desc">
            Explore expert insights on IT infrastructure, cloud migration, ERP integration, cybersecurity, 
            and AI automation — designed for CIOs, CTOs, and IT Managers at manufacturing and mid-market enterprises.
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