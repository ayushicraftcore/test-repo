import "./CraftcoreLanding.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Added for routing redirect operations
import { 
  FiCpu, 
  FiBox, 
  FiTrendingUp, 
  FiArrowRight, 
  FiLayers, 
  FiCommand,
  FiChevronLeft,
  FiChevronRight 
} from "react-icons/fi";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import footerLogo from "../assets/logo.png";
import slideIT from "../assets/digital.avif";      
import slide3D from "../assets/3d.avif";          
import slideGrowth from "../assets/growth.avif";  

// Appended target paths to map redirects accurately
const verticalsData = [
  {
    id: "it-services",
    number: "01",
    title: "IT SERVICES",
    tag: "DIGITAL SYSTEMS",
    icon: <FiCpu />,
    summary: "Custom software, AI solutions, SaaS platforms and enterprise systems.",
    chips: ["Custom Codebases", "AI Integration", "Cloud Architecture"],
    path: "/home" 
  },
  {
    id: "3d-printing",
    number: "02",
    title: "3D PRINTING",
    tag: "PHYSICAL INNOVATION",
    icon: <FiBox />,
    summary: "Rapid prototyping, product design and manufacturing solutions.",
    chips: ["Rapid Prototypes", "Production Run", "Industrial CAD"],
    path: "/#" 
  },
  {
    id: "growth-accelerator",
    number: "03",
    title: "GROWTH ACCELERATOR",
    tag: "SCALABLE EXPANSION",
    icon: <FiTrendingUp />,
    summary: "Digital marketing, automation and startup scaling programs.",
    chips: ["Performance Marketing", "Startup Programs", "Scale Mapping"],
    path: "/#" 
  },
];

const highlightsData = [
  {
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: "Unified Tech + Manufacturing + Growth",
    desc: "One ecosystem covering every need"
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"></path>
      </svg>
    ),
    title: "AI-First Approach",
    desc: "Intelligent solutions at every layer"
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3-2.5 5 2-1.25 4.25-1 5.5-2.5M13.5 10.5l6-6M17 3.5c1-1 2.5-.5 3.5.5s1.5 2.5.5 3.5l-5 5-5-5 6-6z"></path>
        <path d="M12 12l-4 4v3l3-1 1-3-1-3z"></path>
      </svg>
    ),
    title: "Built for Startups & Enterprises",
    desc: "Scalable from day one to IPO"
  }
];

const heroSlides = [slideIT, slide3D, slideGrowth];

function CraftcoreLanding() {
  const [activeNode, setActiveNode] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate(); // Instantiated SPA navigator mechanism

  // AUTOMATIC VERTICAL NODES LOOP
  useEffect(() => {
    const loopInterval = setInterval(() => {
      setActiveNode((prevNode) => (prevNode + 1) % verticalsData.length);
    }, 4500);
    return () => clearInterval(loopInterval);
  }, []);

  // AUTOMATIC HERO IMAGE SLIDESHOW LOOP
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [carouselIndex]);

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setCarouselIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setCarouselIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleScrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ccg-landing-wrapper">
      
      {/* ================= HERO HUD VIEWPORT ================= */}
      <section className="ccg-hero-section">
        <div className="container ccg-hero-grid">
          
          <div className="ccg-hero-left">
            <span className="section-tag">CRAFTCORE GROUP</span>
            <h1 className="ccg-hero-title">
              Engineering Digital, <br />
              Physical & <span className="gradient-text">Scalable Growth</span>
            </h1>
            <p className="ccg-hero-desc section-description">
              We operate at the intersection of technology, manufacturing, and growth. 
              We build scalable systems, physical products and market expansion engines.
            </p>
            
            <div className="ccg-hero-actions">
              <button className="primary-btn ccg-btn" onClick={() => handleScrollToSection("group-verticals-panel")}>
                <span>Explore Our Verticals</span>
                <FiArrowRight style={{ marginLeft: "8px", verticalAlign: "middle" }} />
              </button>
            </div>
          </div>

          <div className="ccg-hero-right">
            <div className="ccg-console-mesh-box ccg-hero-carousel-container">
              
              {heroSlides.map((slideUrl, idx) => (
                <img
                  key={idx}
                  src={slideUrl}
                  alt={`Ecosystem Architecture Frame ${idx + 1}`}
                  className={`ccg-carousel-slide-img ${idx === carouselIndex ? "slide-active" : ""}`}
                />
              ))}

              <div className="mesh-layer grid-overlay" />
              <div className="ambient-radial-glow glow-orb orb-1" />
              
              <div className="center-node-shield">
                <FiCommand className="node-spinner-icon" />
                <span>ECOSYSTEM LIVE</span>
              </div>

              <button className="ccg-carousel-nav-btn nav-btn-left" onClick={handlePrevSlide} aria-label="Previous Slide">
                <FiChevronLeft />
              </button>
              <button className="ccg-carousel-nav-btn nav-btn-right" onClick={handleNextSlide} aria-label="Next Slide">
                <FiChevronRight />
              </button>

              <div className="ccg-carousel-dots-deck">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`ccg-carousel-dot-pill ${idx === carouselIndex ? "dot-pill-active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); setCarouselIndex(idx); }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= ECOSYSTEM VERTICALS SECTION ================= */}
      <section id="group-verticals-panel" className="ccg-verticals-section section-space">
        <div className="container">
          
          <div className="ccg-section-header">
            <span className="section-tag">THE ARCHITECTURE</span>
            <h2 className="section-title">Ecosystem Verticals</h2>
            <p className="section-description">
              One unified ecosystem covering every technical, manufacturing and scaling demand of modern enterprises.
            </p>
          </div>

          {/* SINGLE ROW CONSOLE MATRIX GRID */}
          <div className="ccg-vertical-cards-single-row">
            {verticalsData.map((vertical, index) => {
              const isCurrentFocus = activeNode === index;

              return (
                <div 
                  key={vertical.id}
                  className={`ccg-single-row-vertical-card card-hover ${isCurrentFocus ? "card-node-active" : ""}`}
                  onMouseEnter={() => setActiveNode(index)}
                >
                  
                  <div className="single-card-top-meta-row">
                    <span className="single-card-tag-badge">{vertical.tag}</span>
                  </div>

                  <div className="single-card-brand-identity-row">
                    <div className="tab-brand-icon-shield animated-icon-glow">
                      {vertical.icon}
                    </div>
                    <div className="tab-brand-text-block">
                      <h4 className="tab-brand-title">{vertical.title}</h4>
                    </div>
                  </div>

                  <div className="single-card-content-deck">
                    <p className="single-card-summary-highlight">{vertical.summary}</p>
                  </div>

                  <div className="single-card-metrics-strip">
                    {vertical.chips.map((chip, idx) => (
                      <span key={idx} className="single-card-pill-node">
                        <FiLayers className="pill-node-micro-icon" />
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* REDIRECTS USER TO CHOSEN SUBROUTE CONSOLE */}
                  <div className="single-card-action-footer">
                    <button 
                      className="primary-btn single-card-action-btn"
                      onClick={() => navigate(vertical.path)}
                    >
                      <span>Explore</span>
                      <FiArrowRight className="action-btn-arrow-icon" />
                    </button>
                  </div>

                  <div className="single-card-countdown-timeline" />

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= STRATEGY HIGHLIGHTS SECTION ================= */}
      <section className="ccg-highlights-section section-space">
        <div className="container">
          <div className="ccg-highlights-matrix-grid">
            {highlightsData.map((highlight, index) => (
              <div key={index} className="ccg-highlight-console-card card-hover">
                <div className="highlight-icon-center-shield">
                  {highlight.icon}
                </div>
                <h3 className="highlight-card-title">{highlight.title}</h3>
                <p className="highlight-card-subtitle">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTEGRATED FOOTER FORMAT ================= */}
      <footer id="about-craftcore-footer" className="footer">

        <div className="footer-top-line"></div>

        <div className="footer-blur footer-blur-1"></div>
        <div className="footer-blur footer-blur-2"></div>

        <div className="container">

          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <div className="footer-logo-bg"></div>
              <img
                src={footerLogo}
                alt="Craftcore"
                className="footer-logo"
              />
            </div>

            <h1 className="footer-title">
              About Craftcore
            </h1>

            <p className="footer-description">
              Craftcore operates at the intersection of technology, manufacturing, and growth. We build 
              scalable systems, physical products, and market expansion engines — empowering startups and 
              enterprises to move faster.
            </p>
          </div>

          <div className="footer-cta-capsule-card">
            <div className="cta-capsule-arrow-icon grid-overlay" />
            <p className="cta-capsule-message-string">Not sure where to start? Explore all Craftcore capabilities.</p>
            <button className="primary-btn cta-capsule-trigger" onClick={() => handleScrollToSection("group-verticals-panel")}>
              <span>View All Services</span>
              <FiArrowRight className="cta-capsule-arrow-icon" />
            </button>
          </div>

          {/* TWO CENTERED SYMMETRICAL COLUMNS WITH ROUTE REDIRECT CONTROLS */}
          <div className="footer-grid elements-centered-footer-grid">

            <div className="footer-column">
              <h4>VERTICALS</h4>
              <ul>
                {verticalsData.map((vertical) => (
                  <li key={vertical.id} onClick={() => navigate(vertical.path)}>
                    {vertical.title.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>CONTACT</h4>
              <ul className="footer-contact">
                <li>
                  <FaEnvelope />
                  <a href="mailto:sales@craftcore.in" className="contact-action-link">
                    sales@craftcore.in
                  </a>
                </li>
                <li>
                  <FaPhoneAlt />
                  <a href="tel:+919898711229" className="contact-action-link">
                    +91 98987 11229
                  </a>
                </li>
                <li>
                  <FaMapMarkerAlt />
                  <span>
                    OFFICE NO.: 202, “OM SAI” Apartment Masjid Road Adajan Gaam, Surat (GUJARAT) 395009
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 Craftcore. All Rights Reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}

export default CraftcoreLanding;