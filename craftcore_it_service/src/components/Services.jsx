import "./Services.css";
import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    smallTitle: "Web & SaaS Dev",
    title: "WEB & SAAS DEVELOPMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    points: [
      "Custom web applications, built around the way your team actually works",
      "Multi-tenant platforms and e-commerce that scale as your customer base grows",
      "API integrations and PWAs that connect the systems you already rely on"
    ],
  },
  {
    smallTitle: "Cloud & DevOps",
    title: "CLOUD & DEVOPS ENGINEERING",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133774/cloud_fhd71g.avif",
    points: [
      "AWS, GCP and Azure managed for you, end to end",
      "CI/CD pipelines and auto-scaling that get your code to production faster",
      "Docker, Kubernetes and cloud migration handled without disrupting your operations"
    ],
  },
  {
    smallTitle: "Cybersecurity",
    title: "CYBERSECURITY & COMPLIANCE",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133877/security_pdcr9o.avif",
    points: [
      "Security audits and penetration testing that expose your real risk, before someone else finds it",
      "GDPR and HIPAA compliance built into your systems, not bolted on afterward",
      "Data encryption and incident response ready the moment you need them"
    ],
  },
  {
    smallTitle: "AI & Automation",
    title: "AI & AUTOMATION SOLUTIONS",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133977/automation_sm760t.avif",
    points: [
      "AI chatbots and NLP pipelines that keep working on your business after hours",
      "Machine learning models and intelligent document processing built around your data",
      "Workflow automation and predictive analytics that help you stay ahead of demand"
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
        
        {/* Header - Updated Content */}
        <div className="services-header">
          <span className="section-tag">WHAT WE BUILD</span>
          <h2 className="section-title">Everything Your IT Stack Needs, Under One Roof</h2>
          <p className="section-description">
            You get production-grade solutions engineered for scalability, high performance and results you can actually measure.
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
                    const element = cardsRef.current[index];
                    if (element) {
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
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

        {/* CTA Button - Updated */}
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