import "./Models.css";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiUsers, FiTarget, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const modelsData = [
  {
    title: "DEDICATED TEAM",
    icon: <FiUsers />,
    bestFor: "Long-term projects where you need a dedicated engineering team that knows your systems inside out",
    billing: "Monthly Retainer",
    points: [
      "A dedicated team of developers, engineers & project managers — fully focused on you",
      "Full transparency with daily standups and weekly progress reports",
      "Scale your team up or down as your needs change",
      "Seamlessly integrates with your existing workflows and tools"
    ],
    recommended: false,
  },
  {
    title: "PROJECT-BASED DELIVERY",
    icon: <FiTarget />,
    bestFor: "Fixed-scope projects like ERP implementation, cloud migration, or custom software development",
    billing: "Milestone-Based Payments",
    points: [
      "Clear scope with defined deliverables and realistic timelines",
      "Fixed pricing — no surprises, guaranteed outcomes",
      "Complete project warranty and post-deployment support",
      "Full documentation and knowledge transfer so you own everything"
    ],
    recommended: true,
  },
  {
    title: "CTO-AS-A-SERVICE",
    icon: <FiTrendingUp />,
    bestFor: "Growing businesses needing strategic IT leadership without hiring a full-time CTO",
    billing: "Hourly / Weekly Advisory",
    points: [
      "Strategic IT roadmap and technology planning aligned with your goals",
      "Cloud migration planning, security architecture, and vendor evaluation",
      "ERP selection guidance, implementation oversight, and IT governance",
      "Help hiring, training, and mentoring your internal tech team"
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
      
      {/* HEADER */}
      <div className="models-header">
        <span className="section-tag">WORK WITH US</span>
        <h2 className="section-title">Choose How We Work Together</h2>
        <p className="section-description">
          Flexible engagement models designed for the way your business actually runs — from dedicated IT teams 
          and project-based delivery to strategic technology advisory. Pick the one that fits your needs, and we'll 
          handle the rest.
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