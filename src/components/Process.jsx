import "./Process.css";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiLayers, FiCode, FiCloud, FiCheckSquare } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "DISCOVERY",
    icon: <FiSearch />,
    description:
      "Week 1–2: Understand business requirements, identify project goals and define the product scope to create a clear development roadmap.",
  },
  {
    number: "02",
    title: "ARCHITECTURE",
    icon: <FiLayers />,
    description:
      "Week 2–3: Design the system architecture, database structure and technical framework to ensure scalability, security, and performance.",
  },
  {
    number: "03",
    title: "DEVELOPMENT",
    icon: <FiCode />,
    description:
      "Build and deploy high-quality software through agile development sprints, with regular progress reviews and interactive product demonstrations.",
  },
  {
    number: "04",
    title: "UAT & QA",
    icon: <FiCheckSquare />,
    description:
      "Perform comprehensive quality assurance testing and user acceptance testing to validate functionality, usability and system reliability.",
  },
  {
    number: "05",
    title: "GO-LIVE",
    icon: <FiCloud />,
    description:
      "Launch the solution on secure cloud infrastructure with performance monitoring, deployment validation and ongoing operational support.",
  },
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
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-description">
            A focused delivery model that turns business goals into systems, launches and long-term growth.
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