/*
===================================
IMPORT CSS
===================================
*/
import "./Hero.css";

/*
===================================
IMPORT REACT
===================================
*/
import { useEffect, useState } from "react";

/*
===================================
IMPORT REACT ROUTER LINKS
===================================
*/
import { Link } from "react-router-dom"; 

/*
===================================
IMPORT ICONS
===================================
*/
import {
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

/*
===================================
HERO COMPONENT
===================================
*/
function Hero() {

  /*
  ===================================
  TYPING EFFECT
  ===================================
  */
  const text = "CRAFTCORE";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex((prev) => prev + 1);
      }, 140);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  /*
  ===================================
  ANIMATED WORDS
  ===================================
  */
  const words = [
    "AI Systems",
    "SaaS Platforms",
    "Cloud Products",
    "AI Apps"
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Encoded WhatsApp URL API String
  const whatsappUrl = "https://wa.me/919898711229?text=Hi%20Craftcore!%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <section className="hero">

      {/* GRID PATTERN */}
      <div className="hero-grid"></div>

      {/* FLOATING DOTS */}
      <div className="hero-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* CONTAINER */}
      <div className="container">
        <div className="hero-wrapper">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            {/* BADGE */}
            <div className="hero-badge">
              <span></span>
              Software Company
            </div>

            {/* TYPING TEXT */}
            <div className="hero-typing">
              {displayText}
              <span className="cursor">|</span>
            </div>

            {/* HEADING */}
            <h1 className="hero-title">
              Building Premium
              <div className="animated-word-wrapper">
                <span key={wordIndex} className="animated-word">
                  {words[wordIndex]}
                </span>
              </div>
              For Modern Businesses
            </h1>

            {/* DESCRIPTION */}
            <p className="hero-description">
              We craft scalable AI products, cloud-native applications and
              digital experiences engineered for startups and enterprises.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">
              <Link 
                to="/book-call" 
                className="primary-btn hero-primary-btn"
                style={{ textDecoration: 'none' }}
              >
                Book Free Consultation
                <FaArrowRight />
              </Link>

              {/* CHANGED: Converted to a secure external hyperlink targeting WhatsApp */}
              <a 
                href={whatsappUrl}
                className="secondary-btn hero-secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <FaWhatsapp />
                Chat with Us
              </a>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual">

            {/* VIDEO CARD */}
            <div className="hero-video-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero-poster.avif" 
                preload="auto" 
                className="hero-video"
              >
                <source src="/videos/logo-reveal.mp4" type="video/mp4" />
              </video>
            </div>

            {/* FLOAT CARDS */}
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