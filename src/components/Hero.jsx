import "./Hero.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const words = ["AI Systems", "SaaS Platforms", "Cloud Products", "AI Apps"];
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

  const whatsappUrl = "https://wa.me/919898711229?text=Hi%20Craftcore!%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <section className="hero">
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
              Software Company
            </div>

            <div className="hero-typing">
              {displayText}
              <span className="cursor">|</span>
            </div>

            <h1 className="hero-title">
              Building Premium
              <div className="animated-word-wrapper">
                <span key={wordIndex} className="animated-word">
                  {words[wordIndex]}
                </span>
              </div>
              For Modern Businesses
            </h1>

            <p className="hero-description">
              We craft scalable AI products, cloud-native applications and digital experiences engineered for startups and enterprises.
            </p>

            <div className="hero-buttons">
              <Link to="/book-call" className="primary-btn hero-primary-btn">
                Book Free Consultation
                <FaArrowRight />
              </Link>

              <a 
                href={whatsappUrl}
                className="secondary-btn hero-secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                Chat with Us
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
              >
                <source src="/videos/logo-reveal.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="hero-float-card hero-card-one">
              <div className="hero-card-dot"></div>
              AI Powered Solutions
            </div>

            <div className="hero-float-card hero-card-three">
              <h4>24/7</h4>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;