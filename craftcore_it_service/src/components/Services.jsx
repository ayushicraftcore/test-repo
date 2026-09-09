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
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isDesktop = window.innerWidth > 1024;

          if (isDesktop) {
            if (!trackRef.current) return;
            const rect = trackRef.current.getBoundingClientRect();
            const totalScrollDistance = rect.height - window.innerHeight;

            if (totalScrollDistance > 0) {
              const scrolled = -rect.top;
              if (scrolled <= 0) {
                setActiveService(0);
              } else if (scrolled >= totalScrollDistance) {
                setActiveService(servicesData.length - 1);
              } else {
                const progress = scrolled / totalScrollDistance;
                const targetIndex = Math.min(
                  servicesData.length - 1,
                  Math.floor(progress * servicesData.length)
                );
                setActiveService(targetIndex);
              }
            }
          } else {
            // Mobile & iPad Proximity Scroll Logic
            const vh = window.innerHeight;
            const triggerLine = vh * 0.68;

            let closestIndex = 0;
            let minDistance = Infinity;

            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              const rect = card.getBoundingClientRect();
              const cardCenter = rect.top + rect.height / 2;
              const distance = Math.abs(triggerLine - cardCenter);

              if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
              }
            });

            setActiveService(closestIndex);
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

  const handleCardClick = (index) => {
    setActiveService(index);

    if (window.innerWidth <= 1024) {
      const element = cardsRef.current[index];
      if (!element) return;

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offset = elementRect - bodyRect - 340;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={trackRef} className="services-pinned-container">
      <div className="services-sticky-viewport">
        <div className="container services-inner-container">
          
          {/* Header */}
          <div className="services-header">
            <span className="section-tag">WHAT WE BUILD</span>
            <h2 className="section-title">Everything Your IT Stack Needs, Under One Roof</h2>
            <p className="section-description">
              You get production-grade solutions engineered for scalability, high performance and results you can actually measure.
            </p>
          </div>

          <div className="services-wrapper">
            
            {/* LEFT PREVIEW CARD */}
            <div className="services-left">
              <div className="service-preview-card">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className={`service-preview-layer ${activeService === index ? "active" : ""}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-preview-image"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="service-preview-overlay" />
                    
                    <div className="service-preview-content">
                      <span className="preview-tag">{service.smallTitle}</span>
                      <h3>{service.title}</h3>
                      <ul className="preview-points">
                        {service.points.map((point, pIdx) => (
                          <li key={pIdx}>
                            <span className="check-circle"><FiCheck /></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COMPACT LIST */}
            <div className="services-right">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`service-item ${activeService === index ? "active" : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="active-indicator-bar" />
                  <span className="service-small-title">{service.smallTitle}</span>
                  <h3 className="card-title">{service.title}</h3>
                </div>
              ))}
            </div>
            
          </div>

          {/* CTA Button */}
          <div className="services-button-wrap">
            <button className="primary-btn" onClick={() => navigate("/service")}>
              VIEW ALL SERVICES
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;