import "./Process.css";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiLayers, FiCode, FiCloud, FiCheckSquare, FiSettings, FiShield } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "DISCOVERY & AUDIT",
    icon: <FiSearch />,
    description:
      "Week 1–3: Conduct comprehensive IT infrastructure audit, assess current systems, identify pain points, and define business requirements. We evaluate your technology stack, security posture, and operational gaps to create a tailored roadmap.",
  },
  {
    number: "02",
    title: "SOLUTION DESIGN",
    icon: <FiLayers />,
    description:
      "Week 2–4: Design the complete solution architecture including cloud infrastructure, system integrations, security framework, and deployment strategy. We create a scalable, secure design that aligns with your business goals and IT standards.",
  },
  {
    number: "03",
    title: "BUILD & DEPLOY",
    icon: <FiCode />,
    description:
      "Week 4–12: Build custom software, set up IT infrastructure, implement security controls, and configure systems. We deploy solutions in phases with regular stakeholder reviews and comprehensive testing at each milestone.",
  },
  {
    number: "04",
    title: "TESTING & VALIDATION",
    icon: <FiCheckSquare />,
    description:
      "Week 10–14: Conduct rigorous security testing, performance validation, user acceptance testing, and compliance verification. We ensure the solution meets all requirements, security standards, and operational expectations.",
  },
  {
    number: "05",
    title: "SUPPORT & AMC",
    icon: <FiSettings />,
    description:
      "Ongoing: Provide 24/7 managed IT support, proactive monitoring, regular maintenance, and annual maintenance contracts (AMC). We offer flexible commercial models including fixed-price, T&M, and retainer-based support.",
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
          <h2 className="section-title">Our IT Implementation Process</h2>
          <p className="section-description">
            A proven methodology for IT infrastructure deployment, custom software development, and 
            managed services that reduces risk and ensures predictable outcomes for manufacturing enterprises.
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