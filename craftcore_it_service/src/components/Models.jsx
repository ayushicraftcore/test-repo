import "./Models.css";
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiUsers, FiTarget, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const modelsData = [
  {
    id: 0,
    title: "DEDICATED TEAM",
    icon: <FiUsers />,
    headlineTop: "HOW WE",
    headlineAccent: "BUILT",
    headlineBottom: "DEDICATED TEAMS.",
    tagLabel: "LONG-TERM PARTNERSHIP",
    bestFor: "You need a dedicated engineering team with real domain expertise for long-term IT infrastructure and software projects.",
    billing: "Monthly Retainer",
    recommended: false,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Your own developers, IT engineers and project managers",
      "Full transparency - daily standups and weekly reports, so you always know where things stand",
      "Scale your team up or down as your project needs change",
      "Seamless integration into the IT workflows you already run"
    ]
  },
  {
    id: 1,
    title: "PROJECT-BASED DELIVERY",
    icon: <FiTarget />,
    headlineTop: "HOW WE",
    headlineAccent: "DELIVER",
    headlineBottom: "FIXED SCOPES.",
    tagLabel: "GUARANTEED OUTCOMES",
    bestFor: "You have a fixed-scope IT project - ERP implementation, cloud migration or custom software development.",
    billing: "Milestone-Based Payments",
    recommended: true,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    points: [
      "A clearly defined scope with deliverables and timelines you can hold us to",
      "Risk-free fixed pricing with outcomes guaranteed",
      "A complete project warranty plus support after deployment",
      "Full documentation and knowledge transfer, handed straight to your team"
    ]
  },
  {
    id: 2,
    title: "CTO-AS-A-SERVICE",
    icon: <FiTrendingUp />,
    headlineTop: "HOW WE",
    headlineAccent: "GUIDE",
    headlineBottom: "TECH ROADS.",
    tagLabel: "EXECUTIVE ADVISORY",
    bestFor: "You need strategic IT leadership and technology direction without hiring a full-time CTO.",
    billing: "Hourly / Weekly Advisory",
    recommended: false,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    points: [
      "An IT infrastructure strategy and technology roadmap built for where your business is headed",
      "Cloud migration planning, security architecture and vendor evaluation, done for you",
      "ERP selection guidance, implementation oversight and IT governance you can lean on",
      "Help hiring, training and mentoring your own technology team"
    ]
  }
];

export default function Models() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (window.innerWidth <= 768) return; // Keep sticky scroll focused on desktop/tablets

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollDistance = rect.height - window.innerHeight;

      if (totalScrollDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollDistance));
      const index = Math.min(modelsData.length - 1, Math.floor(progress * modelsData.length));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getWhatsappUrl = (modelTitle) => {
    const defaultText = `Hi Craftcore! I'm interested in your ${modelTitle} engagement model. I'd like to discuss IT solutions for my business.`;
    return `https://wa.me/919898711229?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <section ref={containerRef} className="models-pinned-container">
      <div className="models-sticky-viewport">
        
        {/* Dedicated Tag Header */}
        <div className="models-header-tag-wrap">
          <span className="section-tag">HOW WE WORK</span>
        </div>

        <div className="models-grid-stage">
          
          {/* LEFT COLUMN: Clean Typography */}
          <div className="models-left-col">
            <div className="models-story-label">
              <span className="models-story-text">{modelsData[activeIndex].tagLabel}</span>
              <div className="models-accent-divider" />
            </div>

            <h2 className="models-title-heavy">
              {modelsData[activeIndex].headlineTop}<br />
              <span className="models-purple-word">
                {modelsData[activeIndex].headlineAccent}
              </span><br />
              {modelsData[activeIndex].headlineBottom}
            </h2>

            <p className="models-description">
              {modelsData[activeIndex].bestFor}
            </p>

            <div className="models-billing-chip">
              <span className="billing-prefix">Billing:</span>
              <span className="billing-val">{modelsData[activeIndex].billing}</span>
            </div>
          </div>

          {/* CENTER COLUMN: Stacked Layered Photo Deck */}
          <div className="models-center-col">
            <div className="models-stacked-deck">
              {modelsData.map((item, idx) => {
                let offset = idx - activeIndex;
                let transformStyle = "";
                let zIndex = 10 - Math.abs(offset);
                let opacity = 1;

                if (offset === 0) {
                  transformStyle = "translate3d(0, 0, 0) scale(1) rotate(0deg)";
                  opacity = 1;
                } else if (offset === 1) {
                  transformStyle = "translate3d(18px, 10px, 0) scale(0.94) rotate(3deg)";
                  opacity = 0.65;
                } else if (offset === -1) {
                  transformStyle = "translate3d(-18px, -10px, 0) scale(0.94) rotate(-3deg)";
                  opacity = 0.5;
                } else {
                  transformStyle = "translate3d(0, 20px, 0) scale(0.88) rotate(0deg)";
                  opacity = 0;
                }

                return (
                  <div
                    key={item.id}
                    className={`models-card-layer ${activeIndex === idx ? "active-layer" : ""}`}
                    style={{
                      transform: transformStyle,
                      zIndex: zIndex,
                      opacity: opacity
                    }}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <img src={item.image} alt={item.title} className="models-deck-img" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Accordion Rows */}
          <div className="models-right-col">
            {modelsData.map((model, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={model.id}
                  className={`model-row-item ${isActive ? "active" : "inactive"}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="model-row-header">
                    <h4 className="model-row-title">{model.title}</h4>
                    {model.recommended && (
                      <span className="model-pill-badge">RECOMMENDED</span>
                    )}
                  </div>

                  {isActive && (
                    <div className="model-row-expand">
                      <ul className="model-bullets-list">
                        {model.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="model-bullet-item">
                            <FaCheckCircle className="model-check-icon" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a 
                        href={getWhatsappUrl(model.title)}
                        className="primary-btn model-btn-flex"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Discuss This Model</span>
                        <FiArrowRight className="btn-arrow-end" />
                      </a>
                    </div>
                  )}

                  <div className="model-item-separator" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}