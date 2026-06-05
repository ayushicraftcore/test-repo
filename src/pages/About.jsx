import "./About.css";
import { useEffect, useRef, useState } from "react";

// Import your custom platform section sheets
import Process from "../components/Process"; 
import Model from "../components/Models"; 
import Industries from "../components/Industries";
import { IndianRupee } from "lucide-react";
import { FaIndustry } from "react-icons/fa";

const whyChooseText = "We build custom software tailored to your business needs. Our focus is on creating fast, scalable and user-friendly applications with modern UI/UX design. By optimizing performance and streamlining data processing, we ensure your platform runs smoothly, loads quickly and delivers a reliable experience for your users. Our solutions are designed to support business growth while maintaining stability and efficiency.";

function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  
  // Splits text block cleanly into separate traceable word arrays
  const words = whyChooseText.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (window.innerWidth <= 768) return; // Disables calculation calculations on small screens

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Triggers focus actions inside the target center matrix view screen bounds
      const triggerStart = windowHeight * 0.85; 
      const triggerEnd = windowHeight * 0.25;   

      const totalActiveRange = triggerStart - triggerEnd;
      const currentElementPos = triggerStart - rect.top;

      let progress = currentElementPos / (totalActiveRange + rect.height * 0.4);
      progress = Math.max(0, Math.min(1, progress)); // Lock progress vector precisely between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Fire immediate initial tracking render coordinate check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="container">
        
        {/* CENTER-ALIGNED HERO SECTION */}
        <header className="about-hero">
          <span className="section-tag">WHO WE ARE</span>
          <h1 className="about-hero-title">
            We engineer high-performance <br />
            <span className="gradient-text">digital foundations for global scale.</span>
          </h1>
          
          <div className="about-hero-frame">
            <img 
              src="/images/about-hero.avif" 
              alt="CraftCore Collaborative Workstation Grid" 
              className="about-hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="about-frame-overlay" />
          </div>

          <p className="section-description about-hero-desc">
            CraftCore is a premium technology partner dedicated to empowering startups and enterprises. 
            We blend cutting-edge front-end animations, cloud engineering solutions, and advanced 
            automation systems into flawless market advantages.
          </p>
        </header>

        {/* SIDE-BY-SIDE VISION & MISSION LAYOUT */}
        <section className="about-statement-section">
          <div className="statement-split-grid">
            
            {/* VISION CARD */}
            <div className="statement-premium-card card-hover">
              <div className="statement-meta">
                <span className="statement-index">01</span>
                <span className="statement-label">THE FUTURE ARCHITECTURE</span>
              </div>
              <h2 className="statement-card-title">Our Vision</h2>
              <p className="card-text statement-card-body">
                To become the definitive worldwide launchpad for digital acceleration. We aim to redefine 
                how organizations build software by engineering intuitive design frameworks, bulletproof multi-tenant structures, 
                and clean state-management flows that effortlessly sustain millions of real-time connections.
              </p>
            </div>

            {/* MISSION CARD */}
            <div className="statement-premium-card card-hover">
              <div className="statement-meta">
                <span className="statement-index">02</span>
                <span className="statement-label">THE EXECUTION ENGINE</span>
              </div>
              <h2 className="statement-card-title">Our Mission</h2>
              <p className="card-text statement-card-body">
                To ship production-grade code bases that grant businesses measurable structural advantages. 
                We eliminate operational friction by fusing high-performance front-end visuals with secure cloud native systems, 
                turning complex corporate bottlenecks into seamless, high-converting customer experiences.
              </p>
            </div>

          </div>
        </section>

        {/* CRED-STYLE SCROLL-DRIVEN WORD TYPING REVEAL TRACK */}
        <section ref={sectionRef} className="about-why-choose-section">
          <span className="section-tag">WHY CHOOSE US</span>
          <div className="cred-text-viewport">
            <p className="cred-paragraph-container">
              {words.map((word, idx) => {
                // Calculate incremental highlighting metrics for individual words
                const wordWeight = 1 / words.length;
                const wordStartThreshold = idx * wordWeight;
                
                let wordOpacity = (scrollProgress - wordStartThreshold) / wordWeight;
                wordOpacity = Math.max(0, Math.min(1, wordOpacity)); // Clamps single word visibility bounds

                return (
                  <span 
                    key={idx} 
                    className="cred-scroll-word"
                    style={{
                      // Fluid translation from washed slate grey into solid pitch black
                      color: `rgba(17, 17, 24, ${0.18 + wordOpacity * 0.82})`,
                      transform: `translateY(${5 - (wordOpacity * 5)}px)`
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          </div>
        </section>

      </div>

      {/* SUBSEQUENT INTERACTIVE TEMPLATE CORE APPENDS */}
      <Process />
      <Industries />
      <Model />

    </div>
  );
}

export default About;