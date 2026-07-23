import "./Models.css";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiUsers, FiTarget, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const modelsData = [
  {
    title: "DEDICATED TEAM",
    icon: <FiUsers />,
    bestFor: "Long-term projects requiring a dedicated engineering team",
    billing: "Monthly Retainer",
    points: [
      "Dedicated developers & PM",
      "Full transparency & daily standups",
      "Scale team up/down flexibly",
    ],
    recommended: false,
  },
  {
    title: "PROJECT-BASED DELIVERY",
    icon: <FiTarget />,
    bestFor: "Fixed-scope projects with defined requirements and timelines",
    billing: "Milestone-Based Payments",
    points: [
      "Defined scope & timeline",
      "Risk-free fixed pricing",
      "Guaranteed delivery with warranty",
    ],
    recommended: true,
  },
  {
    title: "CTO-AS-A-SERVICE",
    icon: <FiTrendingUp />,
    bestFor: "Startups and businesses needing strategic technical leadership",
    billing: "Hourly / Weekly Advisory",
    points: [
      "Architecture & tech strategy",
      "Team hiring & mentorship",
      "Investor-ready tech roadmap",
    ],
    recommended: false,
  },
];

function Models() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-surround-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getRevealDirection = (index) => {
    if (index === 0) return "reveal-left";
    if (index === 1) return "reveal-bottom";
    return "reveal-right";
  };

  const getWhatsappUrl = (modelTitle) => {
    const defaultText = `Hi Craftcore! I'd like to discuss a project regarding the ${modelTitle} model.`;
    return `https://wa.me/919898711229?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <section className="models section-space">
      
      {/* HEADER */}
      <div className="models-header">
        <span className="section-tag">WORK WITH US</span>
        <h2 className="section-title">Engagement Models</h2>
        <p className="section-description">
          Flexible engagement models designed to support startups, enterprises
          and growing businesses with scalable development and strategic
          technology solutions.
        </p>
      </div>

      {/* GRID */}
      <div className="models-grid">
        {modelsData.map((model, index) => (
          
          <div
            className={`model-card-wrapper ${getRevealDirection(index)}`}
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <div className={`model-card ${model.recommended ? "recommended-card" : ""}`}>
              
              {model.recommended && (
                <div className="recommended-badge">RECOMMENDED</div>
              )}

              {/* UNIFIED INTERACTIVE GRAPHIC CORE */}
              <div className="model-card-body">
                
                {/* Visual Anchor Area before hover */}
                <div className="model-visual-anchor">
                  <div className="model-icon-shield">
                    {model.icon}
                  </div>
                  <h3 className="model-title">{model.title}</h3>
                </div>

                {/* Smooth Morphing Details Grid */}
                <div className="model-interactive-details">
                  <div className="model-info">
                    <p><span>Best for:</span> {model.bestFor}</p>
                    <p><span>Billing:</span> {model.billing}</p>
                  </div>

                  <ul className="model-points">
                    {model.points.map((point, i) => (
                      <li key={i} style={{ "--stagger-index": i }}>
                        <FaCheckCircle className="check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Premium Action Trigger Button */}
                <div className="model-action-area">
                  <a 
                    href={getWhatsappUrl(model.title)}
                    className="primary-btn model-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-text-string">Discuss This Model</span>
                    <FiArrowRight className="btn-arrow-icon" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Models;