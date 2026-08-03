import "./Models.css";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiUsers, FiTarget, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const modelsData = [
  {
    title: "DEDICATED TEAM",
    icon: <FiUsers />,
    bestFor: "Long-term IT infrastructure and software projects requiring a dedicated engineering team with domain expertise",
    billing: "Monthly Retainer",
    points: [
      "Dedicated developers, IT engineers & project managers",
      "Full transparency with daily standups and weekly reports",
      "Flexible team scaling up or down based on project needs",
      "Seamless integration with your existing IT workflows"
    ],
    recommended: false,
  },
  {
    title: "PROJECT-BASED DELIVERY",
    icon: <FiTarget />,
    bestFor: "Fixed-scope IT projects including ERP implementation, cloud migration, and custom software development",
    billing: "Milestone-Based Payments",
    points: [
      "Clearly defined scope with detailed deliverables and timelines",
      "Risk-free fixed pricing with guaranteed project outcomes",
      "Complete project warranty and post-deployment support",
      "Comprehensive documentation and knowledge transfer"
    ],
    recommended: true,
  },
  {
    title: "CTO-AS-A-SERVICE",
    icon: <FiTrendingUp />,
    bestFor: "Manufacturing enterprises and growing businesses needing strategic IT leadership and technology direction",
    billing: "Hourly / Weekly Advisory",
    points: [
      "IT infrastructure strategy and technology roadmap development",
      "Cloud migration planning, security architecture and vendor evaluation",
      "ERP selection guidance, implementation oversight and IT governance",
      "Team hiring, training, and technology mentorship"
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
    const defaultText = `Hi Craftcore! I'm interested in your ${modelTitle} engagement model. I'd like to discuss an IT assessment and technology solutions for my manufacturing business.`;
    return `https://wa.me/919898711229?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <section className="models section-space">
      
      {/* HEADER */}
      <div className="models-header">
        <span className="section-tag">WORK WITH US</span>
        <h2 className="section-title">Engagement Models</h2>
        <p className="section-description">
          Flexible engagement models designed for manufacturing enterprises, mid-market companies, 
          and growing businesses — from dedicated IT teams and project-based delivery to strategic 
          technology advisory and consulting services.
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