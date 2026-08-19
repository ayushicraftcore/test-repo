import "./Models.css";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiUsers, FiTarget, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const modelsData = [
  {
    title: "DEDICATED TEAM",
    icon: <FiUsers />,
    bestFor: "You need a dedicated engineering team with real domain expertise for long-term IT infrastructure and software projects",
    billing: "Monthly Retainer",
    points: [
      "Your own developers, IT engineers and project managers",
      "Full transparency - daily standups and weekly reports, so you always know where things stand",
      "Scale your team up or down as your project needs change",
      "Seamless integration into the IT workflows you already run"
    ],
    recommended: false,
  },
  {
    title: "PROJECT-BASED DELIVERY",
    icon: <FiTarget />,
    bestFor: "You have a fixed-scope IT project - ERP implementation, cloud migration, or custom software development",
    billing: "Milestone-Based Payments",
    points: [
      "A clearly defined scope with deliverables and timelines you can hold us to",
      "Risk-free fixed pricing with outcomes guaranteed",
      "A complete project warranty plus support after deployment",
      "Full documentation and knowledge transfer, handed straight to your team"
    ],
    recommended: true,
  },
  {
    title: "CTO-AS-A-SERVICE",
    icon: <FiTrendingUp />,
    bestFor: "You need strategic IT leadership and technology direction without hiring a full-time CTO",
    billing: "Hourly / Weekly Advisory",
    points: [
      "An IT infrastructure strategy and technology roadmap built for where your business is headed",
      "Cloud migration planning, security architecture and vendor evaluation, done for you",
      "ERP selection guidance, implementation oversight and IT governance you can lean on",
      "Help hiring, training and mentoring your own technology team"
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
    const defaultText = `Hi Craftcore! I'm interested in your ${modelTitle} engagement model. I'd like to discuss IT solutions for my business.`;
    return `https://wa.me/919898711229?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <section className="models section-space">
      
      {/* HEADER - Updated Content */}
      <div className="models-header">
        <span className="section-tag">WORK WITH US</span>
        <h2 className="section-title">How You Can Work With Us</h2>
        <p className="section-description">
          Choose the engagement model that fits how you operate - whether you're a manufacturing enterprise, a mid-market company, or a growing business that needs a dedicated IT team, project-based delivery, or strategic technology advisory on demand.
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