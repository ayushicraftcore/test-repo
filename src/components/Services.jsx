import "./Services.css";
import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    smallTitle: "Web & SaaS Dev",
    title: "WEB & SAAS DEVELOPMENT",
    image: "/images/saas.avif",
    points: [
      "Custom Web Applications",
      "Multi-Tenant Platforms & E-Commerce",
      "API Integrations & PWAs",
    ],
  },
  {
    smallTitle: "Cloud & DevOps",
    title: "CLOUD & DEVOPS ENGINEERING",
    image: "/images/cloud.avif",
    points: [
      "AWS, GCP and Azure Management",
      "CI/CD Pipelines & Auto-Scaling",
      "Docker, Kubernetes & Cloud Migration",
    ],
  },
  {
    smallTitle: "Cybersecurity",
    title: "CYBERSECURITY & COMPLIANCE",
    image: "/images/security.avif",
    points: [
      "Security Audits & Pen Testing",
      "GDPR & HIPAA Compliance",
      "Data Encryption & Incident Response",
    ],
  },
  {
    smallTitle: "AI & Automation",
    title: "AI & AUTOMATION SOLUTIONS",
    image: "/images/automation.avif",
    points: [
      "AI Chatbots & NLP Pipelines",
      "Machine Learning Models & IDP",
      "Workflow Automation & Predictive Analytics",
    ],
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollTracking = () => {
      const isMobile = window.innerWidth <= 992;
      // On mobile, track cards right below the sticky preview area
      const trackingLine = isMobile ? window.innerHeight * 0.75 : window.innerHeight / 2;
      
      let closestIndex = 0;
      let smallestDistance = Infinity;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(trackingLine - cardCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveService(closestIndex);
    };

    window.addEventListener("scroll", handleScrollTracking, { passive: true });
    handleScrollTracking();

    return () => window.removeEventListener("scroll", handleScrollTracking);
  }, []);

  return (
    <section className="services section-space">
      <div className="container">
        
        <div className="services-header">
          <span className="section-tag">WHAT WE BUILD</span>
          <h2 className="section-title">Everything Your IT Stack Needs — One Partner</h2>
          <p className="section-description">
            Production-grade solutions built for scalability, high performance and measurable business impact.
          </p>
        </div>

        <div className="services-wrapper">
          
          <div className="services-left">
            <div className="service-preview-card">
              <img
                src={servicesData[activeService].image}
                alt="service"
                className="service-preview-image"
                loading="eager"
                decoding="async"
              />
              <div className="service-preview-overlay" />
              
              <div className="service-preview-content">
                <span className="preview-tag">
                  {servicesData[activeService].smallTitle}
                </span>
                <h3>{servicesData[activeService].title}</h3>
                <ul className="preview-points">
                  {servicesData[activeService].points.map((point, i) => (
                    <li key={i}>
                      <span className="check-circle"><FiCheck /></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="services-right">
            {servicesData.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`service-item ${activeService === index ? "active" : ""}`}
                onClick={() => {
                  setActiveService(index);
                  
                  if (window.innerWidth <= 992) {
                    // FIXED: Mobile scrolling calculation to safely position card completely below the sticky view
                    const element = cardsRef.current[index];
                    if (element) {
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      // Subtracts the layout height of your sticky header and preview block
                      const offsetPosition = elementPosition - 490; 

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  } else {
                    cardsRef.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
              >
                <div className="active-indicator-bar" />
                <span className="service-small-title">{service.smallTitle}</span>
                <h3 className="card-title">{service.title}</h3>
              </div>
            ))}
          </div>
          
        </div>

        <div className="services-button-wrap">
          <button className="primary-btn" onClick={() => navigate("/service")}>
            VIEW ALL SERVICES
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;