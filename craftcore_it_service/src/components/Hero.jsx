import "./Hero.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const words = ["IT Supports", "AI & Automation", "Cloud Security", "Custom ERP", "SAAS Products"];
const text = "CRAFTCORE";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (index <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex((prev) => prev + 1);
      }, 140);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = "https://wa.me/919898711229?text=Hi%20Craftcore!%20I'd%20like%20to%20discuss%20an%20IT%20assessment%20for%20my%20business.";

  return (
    <section className="hero" aria-label="IT Infrastructure and Technology Solutions for Manufacturing">
      <div className="hero-grid"></div>
      <div className="hero-blur hero-blur-purple"></div>
      <div className="hero-blur hero-blur-blue"></div>

      <div className="hero-particles">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-badge">
              <span></span>
              IT Infrastructure & Technology Partner
            </div>

            <div className="hero-typing">
              {displayText}
              <span className="cursor">|</span>
            </div>

            <h1 className="hero-title">
              Enterprise IT Infrastructure & 
              <div className="animated-word-wrapper">
                <span key={wordIndex} className="animated-word">
                  {words[wordIndex]}
                </span>
              </div>
              Solutions for Manufacturing & SMEs
            </h1>

            <p className="hero-description">
              Enterprise IT solutions including custom software development, AI automation, 
              cloud migration, cybersecurity, ERP integration and managed IT support for 
              mid-market manufacturers and growing businesses.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="primary-btn hero-primary-btn">
                Get an IT Assessment
                <FaArrowRight />
              </Link>

              <a 
                href={whatsappUrl}
                className="secondary-btn hero-secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp for IT consultation"
              >
                <FaWhatsapp />
                Chat with Our Experts
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-video-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                width="460"
                height="560"
                poster="/images/hero-poster.avif" 
                preload="auto" 
                className="hero-video"
                aria-label="Craftcore technology solutions showcase"
              >
                <source src="https://res.cloudinary.com/dpxl6jy4t/video/upload/v1785134695/logo-reveal_sr1xov.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="hero-float-card hero-card-one">
              <div className="hero-card-dot"></div>
              Enterprise IT Solutions
            </div>

            <div className="hero-float-card hero-card-three">
              <h4>24/7</h4>
              <p>Managed IT Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;