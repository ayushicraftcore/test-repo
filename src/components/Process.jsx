import "./Process.css";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiLayers, FiCode, FiCloud, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    icon: <FiSearch />,
    description: "Understand your business goals, product vision and user expectations through deep research and strategic planning.",
  },
  {
    number: "02",
    title: "ARCHITECT",
    icon: <FiLayers />,
    description: "Design scalable system architecture, seamless workflows and modern technical foundations for long-term growth.",
  },
  {
    number: "03",
    title: "DEVELOP",
    icon: <FiCode />,
    description: "Build high-performance digital products using agile sprints, scalable codebases and modern technologies.",
  },
  {
    number: "04",
    title: "DEPLOY",
    icon: <FiCloud />,
    description: "Launch secure cloud-native applications with CI/CD pipelines, monitoring and optimized infrastructure.",
  },
  {
    number: "05",
    title: "SCALE",
    icon: <FiTrendingUp />,
    description: "Continuously optimize performance, workflows and infrastructure to support future business expansion.",
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
            A streamlined and scalable process focused on building reliable,
            high-performance digital products.
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