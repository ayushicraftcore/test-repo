import "./Process.css";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiLayers, FiCode, FiCloud, FiCheckSquare, FiSettings, FiShield } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "DISCOVERY & AUDIT",
    icon: <FiSearch />,
    description:
      "We start by understanding your business — your systems, your pain points, and your goals. We audit your current IT stack, security posture, and operational gaps, then build a roadmap that actually fits where you're going."
  },
  {
    number: "02",
    title: "SOLUTION DESIGN",
    icon: <FiLayers />,
    description:
      "We design the complete architecture — cloud infrastructure, integrations, security, and deployment. Every system is built to scale with you, align with your business goals, and meet the standards your industry demands."
  },
  {
    number: "03",
    title: "BUILD & DEPLOY",
    icon: <FiCode />,
    description:
      "We build custom software, set up your infrastructure, implement security controls, and configure everything to work together. We deploy in phases with regular check-ins and testing at every milestone — so you always know where things stand."
  },
  {
    number: "04",
    title: "TESTING & VALIDATION",
    icon: <FiCheckSquare />,
    description:
      "We rigorously test for security, performance, and compliance — because your business can't afford surprises. We run user acceptance testing and verify every requirement is met before you even touch the system."
  },
  {
    number: "05",
    title: "SUPPORT & AMC",
    icon: <FiSettings />,
    description:
      "We stay with you — 24/7 managed support, proactive monitoring, regular maintenance, and annual contracts that keep your systems running. Flexible models including fixed-price, T&M, and retainer-based support to fit how you work."
  }
];

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const maxScroll = rect.height - viewportHeight;

      if (scrolled < 0) {
        setActiveStep(0);
      } else if (scrolled > maxScroll) {
        setActiveStep(steps.length - 1);
      } else {
        const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
        const currentStep = Math.min(
          steps.length - 1,
          Math.floor(progress * steps.length)
        );
        setActiveStep(currentStep);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="process section-space">
      <div className="container">
        
        {/* HEADER */}
        <div className="process-top">
          <span className="section-tag">HOW WE WORK</span>
          <h2 className="section-title">Your Success, Step by Step</h2>
          <p className="section-description">
            A proven process for IT infrastructure, custom software, and managed services — designed to reduce risk, 
            keep you informed, and deliver outcomes you can count on.
          </p>
        </div>

        {/* MAIN WRAPPER */}
        <div className="process-main-wrapper" ref={wrapperRef}>
          
          {/* STICKY WRAPPER */}
          <div className="process-sticky-wrapper">
            <div className="process-card">
              
              {/* CONTENT SLIDER */}
              <div className="process-content-slider">
                {steps.map((step, index) => {
                  let positionClass = "";
                  if (index === activeStep) positionClass = "active";
                  else if (index < activeStep) positionClass = "prev";
                  else positionClass = "next";

                  return (
                    <div key={`content-${index}`} className={`process-card-content ${positionClass}`}>
                      
                      {/* FIXED: Lock icon to the absolute right side of the card layout */}
                      <div className="process-bg-right-icon">
                        {step.icon}
                      </div>

                      <div className="process-header-row">
                        <span className="process-badge">
                          STEP {step.number}
                        </span>
                      </div>

                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* PROGRESS BAR */}
              <div className="process-progress-wrapper">
                {steps.map((step, index) => (
                  <div className="progress-item" key={index}>
                    <div
                      className={`progress-circle ${
                        activeStep >= index ? "active" : ""
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index !== steps.length - 1 && (
                      <div
                        className={`progress-line ${
                          activeStep > index ? "active" : ""
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;