import "./Models.css";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const modelsData = [
  {
    title: "DEDICATED TEAM",
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
            // Trigger the new animation class
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

  // Helper function to assign entry directions
  const getRevealDirection = (index) => {
    if (index === 0) return "reveal-left";
    if (index === 1) return "reveal-bottom";
    return "reveal-right";
  };

  return (
    <section className="models section-space">
      {/* HEADER */}
      <div className="models-header">
        <span className="section-tag">WORK WITH US</span>
        <h2 className="section-title">Engagement Models</h2>
        <p className="section-description">
          Flexible engagement models designed to support startups, enterprises,
          and growing businesses with scalable development and strategic
          technology solutions.
        </p>
      </div>

      {/* GRID */}
      <div className="models-grid">
        {modelsData.map((model, index) => (
          
          /* ANIMATION WRAPPER WITH DYNAMIC DIRECTION */
          <div
            className={`model-card-wrapper ${getRevealDirection(index)}`}
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* CARD CONTENT */}
            <div
              className={`model-card ${
                model.recommended ? "recommended-card" : ""
              }`}
            >
              {/* RECOMMENDED TAG */}
              {model.recommended && (
                <div className="recommended-badge">RECOMMENDED</div>
              )}

              {/* DEFAULT VIEW */}
              <div className="model-default">
                <h3 className="model-title">{model.title}</h3>
                <button className="primary-btn model-btn">
                  Discuss This Model
                </button>
              </div>

              {/* HOVER OVERLAY */}
              <div className="model-overlay">
                <h3 className="model-title">{model.title}</h3>

                <div className="model-info">
                  <p>
                    <span>Best for:</span>
                    {model.bestFor}
                  </p>
                  <p>
                    <span>Billing:</span>
                    {model.billing}
                  </p>
                </div>

                <ul className="model-points">
                  {model.points.map((point, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      {point}
                    </li>
                  ))}
                </ul>

                <button className="primary-btn model-btn">
                  Discuss This Model
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Models;