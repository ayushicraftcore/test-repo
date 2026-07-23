import "./Solution.css";
import { useEffect, useRef, useState } from "react";
import { FiGrid, FiMoon, FiBarChart2, FiFileText } from "react-icons/fi";

const projectFeatures = [
  {
    icon: <FiGrid />,
    tag: "MODULE 01 — COMMAND HUD",
    title: "Clean Dashboard Overview",
    desc: "An enterprise-grade orchestration command center aggregating running collection pipelines. Tracks total outstanding balances, active case registries and recovery metrics seamlessly at a single look.",
    image: "/images/dashboard-core.avif",
    floatingTags: ["Live Ledger Sync", "Telemetry Node Active", "₹2.60Cr Tracked"],
    pills: ["Active Cases: 6", "Recovery: 35.8%"]
  },
  {
    icon: <FiMoon />,
    tag: "MODULE 02 — ADAPTIVE ENGINE",
    title: "Seamless Light to Dark Theme Toggle",
    desc: "Instant interface architecture scaling built for continuous accessibility. Shift flawlessly from a clean daylight layout to a low-fatigue dark terminal workspace without layout reflows.",
    image: "/images/dashboard-dark.avif",
    floatingTags: ["Low-Fatigue Matrix", "Adaptive Canvas", "Token Isolation"],
    pills: ["May: ₹1.45Cr", "+100.0% Velocity"]
  },
  {
    icon: <FiBarChart2 />,
    tag: "MODULE 03 — METRIC TELEMETRY",
    title: "Advanced Collection Analytics & Reports",
    desc: "Granular diagnostics tracking parsed by distinct operational parameters. Real-time visual data displays map historical performance metrics directly against target baselines to flag efficiency shifts.",
    image: "/images/reports-dark.avif",
    floatingTags: ["Target Mesh Active", "Bank-Wise Query", "Bucket Analytics"],
    pills: ["Output: Synchronized", "Data Format: CSV"]
  },
  {
    icon: <FiFileText />,
    tag: "MODULE 04 — CONTROL FLOWS",
    title: "User-Friendly Interface Allocation Sheets",
    desc: "Streamlined operational orchestration modals and creation dialogs engineered for low data overhead. Input original amounts, toggle priority targets and assign dedicated field agents instantly.",
    image: "/images/form-modal.avif",
    floatingTags: ["Validation Node OK", "Agent Mapping Engine", "AES-256 Vaulted"],
    pills: ["Form Status: Ready", "SLA Guard Active"]
  }
];

function Solution() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureBlocksRef = useRef([]);
  const stickyPreviewRef = useRef(null);

  useEffect(() => {
    // Dynamic execution configuration setup rules
    const observerOptions = {
      root: null,
      // Uses a balanced center-focused trigger line across both mobile and desktop environments
      rootMargin: window.innerWidth <= 1100 ? "-30% 0px -40% 0px" : "-45% 0px -45% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = featureBlocksRef.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveFeature(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    featureBlocksRef.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  const handleBlockSelection = (index) => {
    setActiveFeature(index);
    
    // Smooth scroll positioning execution on mobile device clicks
    if (window.innerWidth <= 1100 && featureBlocksRef.current[index]) {
      featureBlocksRef.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <div className="solution-page">
      <div className="container">
        
        {/* HERO SECTION */}
        <header className="solution-hero">
          <span className="section-tag">SOLUTION WE PROVIDE</span>
          <h1 className="solution-hero-title">
            Innovative Technology Solutions <br />
            <span className="gradient-text">for Every Industry</span>
          </h1>
          
          <div className="solution-hero-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="solution-hero-video"
              poster="/images/solution-main-hero.avif"
            >
              <source src="/videos/solution-hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-frame-overlay" />
          </div>

          <p className="section-description solution-hero-desc">
            We deliver tailored digital transformation, AI integrations and cloud native infrastructure 
            engineered to solve complex technical challenges across diverse global market sectors.
          </p>
        </header>

        {/* INTERACTIVE FEATURE SHOWCASE TRACK */}
        <section className="product-tour-container">
          <div className="solution-split-wrapper">
            
            {/* LEFT SIDE: STICKY INTERFACE CONSOLE DESK */}
            <div className="tour-visual-sticky" ref={stickyPreviewRef}>
              <div className="tour-mockup-frame">
                
                {/* Unified Studio Browser Header */}
                <div className="browser-mockup-header">
                  <div className="browser-dot dot-red" />
                  <div className="browser-dot dot-yellow" />
                  <div className="browser-dot dot-green" />
                  <div className="browser-mockup-address">debtcollect.io/platform/features</div>
                </div>

                {/* Dashboard Screenshot Core Area */}
                <div className="mockup-image-canvas">
                  <img 
                    src={projectFeatures[activeFeature].image} 
                    alt="Ecosystem Interface Feature" 
                    className="tour-mockup-image"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="tour-mockup-overlay" />

                  {/* HIGH INTERACTION HUD TAG GENERATOR DECK */}
                  <div className="mockup-hud-tags-layer">
                    
                    {/* Floating Code Protocol String Badges */}
                    {projectFeatures[activeFeature].floatingTags.map((tagText, idx) => (
                      <div 
                        key={`hud-tag-${activeFeature}-${idx}`}
                        className="hud-floating-tag"
                        style={{ 
                          animationDelay: `${idx * 0.12}s`,
                          top: `${22 + idx * 24}%` 
                        }}
                      >
                        <div className="hud-pulse-dot" />
                        <span className="hud-tag-string">{tagText}</span>
                      </div>
                    ))}

                    {/* Holographic Performance Metric Chips */}
                    {projectFeatures[activeFeature].pills.map((pillText, idx) => (
                      <div 
                        key={`hud-pill-${activeFeature}-${idx}`}
                        className="hud-floating-pill"
                        style={{ 
                          animationDelay: `${(idx + 1) * 0.18}s`,
                          bottom: "20px",
                          left: idx === 0 ? "20px" : "auto",
                          right: idx === 1 ? "20px" : "auto"
                        }}
                      >
                        <span className="hud-pill-string">{pillText}</span>
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: SCROLLING EXPLANATION TIMELINE */}
            <div className="tour-timeline-scroller">
              {projectFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  ref={(el) => (featureBlocksRef.current[idx] = el)}
                  className={`tour-timeline-block ${activeFeature === idx ? "active" : "inactive"}`}
                  onClick={() => handleBlockSelection(idx)}
                >
                  <div className="timeline-badge-row">
                    <div className="timeline-icon-box">{feat.icon}</div>
                    <span className="timeline-step-number">FEATURE 0{idx + 1}</span>
                  </div>
                  
                  <span className="timeline-block-pretag">{feat.tag}</span>
                  <h2 className="timeline-block-title">{feat.title}</h2>
                  <p className="card-text timeline-block-desc">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Solution;