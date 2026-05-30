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

  return (
    <section className="hero">

      {/* BACKGROUND GLOW
      <div className="hero-blur hero-blur-purple"></div>
      <div className="hero-blur hero-blur-blue"></div> */}

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
              <button className="primary-btn hero-primary-btn">
                Book Free Consultation
                <FaArrowRight />
              </button>

              <button className="secondary-btn hero-secondary-btn">
                <FaWhatsapp />
                Chat with Us
              </button>
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
                /* 1. Instant fallback frame prevents white flashes while loading */
                poster="/images/hero-poster.avif" 
                /* 2. Loads structural properties immediately to prioritize execution rendering */
                preload="auto" 
                className="hero-video"
              >
                {/* 3. Pulls smoothly from the unbundled asset stream directory */}
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