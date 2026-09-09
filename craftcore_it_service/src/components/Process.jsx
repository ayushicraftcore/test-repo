import "./Process.css";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiLayers, FiCode, FiCheckSquare, FiSettings } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "DISCOVERY & AUDIT",
    icon: <FiSearch />,
    description: "Weeks 1–3: We start by auditing your IT infrastructure end to end - assessing your current systems, surfacing your pain points and defining what your business actually needs. Your technology stack, your security posture, your operational gaps: all mapped into one roadmap built specifically for you."
  },
  {
    number: "02",
    title: "SOLUTION DESIGN",
    icon: <FiLayers />,
    description: "Weeks 2–4: We design your complete solution architecture - cloud infrastructure, system integrations, security framework and deployment strategy - so what gets built is scalable, secure and aligned with your business goals and IT standards from day one."
  },
  {
    number: "03",
    title: "BUILD & DEPLOY",
    icon: <FiCode />,
    description: "Weeks 4–12: This is where your custom software gets built, your IT infrastructure gets set up and your security controls go live. We deploy in phases, with regular reviews alongside your team and thorough testing at every milestone."
  },
  {
    number: "04",
    title: "TESTING & VALIDATION",
    icon: <FiCheckSquare />,
    description: "Weeks 10–14: Before anything goes fully live, we put it through rigorous security testing, performance validation, user acceptance testing and compliance verification - so what you receive meets every requirement, every security standard and every operational expectation you set."
  },
  {
    number: "05",
    title: "SUPPORT & AMC",
    icon: <FiSettings />,
    description: "Week 14+: We stay with you - 24/7 managed support, proactive monitoring, regular maintenance and annual contracts that keep your systems running. Flexible models including fixed-price, T&M and retainer-based support to fit how you work."
  }
];

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!wrapperRef.current) return;

          const rect = wrapperRef.current.getBoundingClientRect();
          const maxScroll = rect.height - window.innerHeight;

          if (maxScroll <= 0) return;

          const scrolled = -rect.top;

          if (scrolled <= 0) {
            setActiveStep(0);
          } else if (scrolled >= maxScroll) {
            setActiveStep(steps.length - 1);
          } else {
            const progress = scrolled / maxScroll;
            const targetStep = Math.min(
              steps.length - 1,
              Math.floor(progress * steps.length)
            );
            setActiveStep(targetStep);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="process section-space">
      <div className="container">
        
        {/* HEADER */}
        <div className="process-top">
          <span className="section-tag">HOW WE WORK</span>
          <h2 className="section-title">How We Get Your IT Infrastructure Live</h2>
          <p className="section-description">
            A proven process for IT infrastructure deployment, custom software development and managed services - built to reduce your risk and give you predictable outcomes, whether you run a manufacturing floor or a fast-growing business.
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