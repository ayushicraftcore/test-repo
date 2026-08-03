import "./Services.css";
import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    smallTitle: "Custom Software",
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    points: [
      "Custom web & mobile applications built for your business workflows",
      "Scalable SaaS platforms and multi-tenant solutions",
      "Legacy system modernization and API integrations"
    ],
  },
  {
    smallTitle: "AI & Automation",
    title: "AI & AUTOMATION SOLUTIONS",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133977/automation_sm760t.avif",
    points: [
      "Intelligent chatbots and virtual assistants for customer engagement",
      "Workflow automation to reduce manual effort and errors",
      "Predictive analytics for data-driven business decisions"
    ],
  },
  {
    smallTitle: "Cloud & Infrastructure",
    title: "CLOUD MIGRATION & MANAGEMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133774/cloud_fhd71g.avif",
    points: [
      "Seamless cloud migration to AWS, Azure, or Google Cloud",
      "Scalable infrastructure setup including servers and networks",
      "Optimized cloud costs with auto-scaling and managed services"
    ],
  },
  {
    smallTitle: "Cybersecurity",
    title: "CYBERSECURITY SOLUTIONS",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133877/security_pdcr9o.avif",
    points: [
      "Comprehensive security audits and vulnerability assessments",
      "Data encryption and access control implementation",
      "Ongoing monitoring and incident response planning"
    ],
  },
  {
    smallTitle: "ERP Integration",
    title: "ERP & SYSTEM INTEGRATION",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    points: [
      "Seamless integration of ERP systems with your existing tools",
      "Unified data flow across departments and operations",
      "Custom dashboards and reports for complete visibility"
    ],
  },
  {
    smallTitle: "IT Support & AMC",
    title: "MANAGED IT SUPPORT & AMC",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133877/security_pdcr9o.avif",
    points: [
      "24/7 IT support to keep your business operations running",
      "Proactive monitoring and maintenance of your IT infrastructure",
      "Annual maintenance contracts with predictable costs"
    ],
  },
  {
    smallTitle: "SaaS Platforms",
    title: "SAAS PLATFORM DEVELOPMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133774/cloud_fhd71g.avif",
    points: [
      "Multi-tenant SaaS solutions ready for global scale",
      "Subscription management and billing integrations",
      "White-labeled platforms for your brand and customers"
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
          <span className="section-tag">WHAT WE DO</span>
          <h2 className="section-title">Complete IT Solutions — One Trusted Partner</h2>
          <p className="section-description">
            Full-service IT infrastructure and technology solutions for manufacturing and growing businesses.
          </p>
        </div>

        <div className="services-wrapper">
          
          <div className="services-left">
            <div className="service-preview-card">
              <img
                src={servicesData[activeService].image}
                alt={servicesData[activeService].smallTitle}
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
            VIEW ALL IT SERVICES
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;