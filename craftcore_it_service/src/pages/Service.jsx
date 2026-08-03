import "./Service.css";
import { useEffect, useRef, useState } from "react";
import { 
  FiCheck, 
  FiCpu, 
  FiLayers, 
  FiCloud, 
  FiShield, 
  FiSmartphone, 
  FiEdit3, 
  FiZap,
  FiSettings,
  FiCode,
  FiUsers,
  FiServer,
  FiDatabase
} from "react-icons/fi";

const serviceDataExtended = [
  {
    smallTitle: "Custom Software",
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    icon: <FiCode />,
    caption:
      "Custom web and mobile applications built to automate your workflows and scale with your business.",
    metrics: { label: "Uptime Rate", value: "99.9%" },
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Java",
      "API Integrations"
    ],
    points: [
      "Build custom web applications that streamline your unique business workflows.",
      "Develop scalable SaaS platforms that grow with your customer base.",
      "Modernize legacy systems with secure, maintainable code.",
      "Create seamless integrations between your existing tools and new solutions."
    ]
  },
  {
    smallTitle: "AI & Automation",
    title: "AI & AUTOMATION SOLUTIONS",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133977/automation_sm760t.avif",
    icon: <FiCpu />,
    caption:
      "AI-powered automation that reduces manual work, improves accuracy and drives data-driven decisions.",
    metrics: { label: "Efficiency Gain", value: "80%" },
    techStack: [
      "AI Chatbots",
      "Predictive Analytics",
      "Document Processing",
      "ML & NLP"
    ],
    points: [
      "Deploy intelligent chatbots for customer engagement and support.",
      "Automate document processing for invoices, orders and challans.",
      "Build predictive models for demand forecasting and defect detection.",
      "Implement workflow automation to reduce manual errors and costs."
    ]
  },
  {
    smallTitle: "Cloud & Infrastructure",
    title: "CLOUD MIGRATION & IT INFRASTRUCTURE",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133774/cloud_fhd71g.avif",
    icon: <FiCloud />,
    caption:
      "Secure cloud migration, server setup and network infrastructure for reliable business operations.",
    metrics: { label: "Deployment", value: "Auto-Scaling" },
    techStack: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform"
    ],
    points: [
      "Migrate your infrastructure to AWS, Azure or Google Cloud seamlessly.",
      "Set up and manage servers, networks and data centers.",
      "Implement auto-scaling to handle peak loads efficiently.",
      "Optimize cloud costs with right-sizing and managed services."
    ]
  },
  {
    smallTitle: "Cybersecurity",
    title: "CYBERSECURITY & DATA PROTECTION",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133877/security_pdcr9o.avif",
    icon: <FiShield />,
    caption:
      "Protect your business data, systems and reputation with enterprise-grade security.",
    metrics: { label: "Compliance", value: "GDPR / ISO" },
    techStack: [
      "Security Audits",
      "Pen Testing",
      "Encryption",
      "Incident Response",
      "Access Control"
    ],
    points: [
      "Conduct comprehensive security audits to identify vulnerabilities.",
      "Implement encryption and access controls to protect sensitive data.",
      "Ensure compliance with GDPR, HIPAA and industry standards.",
      "Create incident response plans for quick threat mitigation."
    ]
  },
  {
    smallTitle: "ERP Integration",
    title: "ERP & SYSTEM INTEGRATION",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    icon: <FiDatabase />,
    caption:
      "Connect your ERP, CRM and business systems for unified operations and real-time visibility.",
    metrics: { label: "Integration", value: "100+ Systems" },
    techStack: [
      "SAP",
      "Oracle",
      "Microsoft Dynamics",
      "Custom ERP",
      "API Management"
    ],
    points: [
      "Integrate ERP systems with your existing tools and processes.",
      "Unify data flow across finance, inventory, HR and operations.",
      "Enable real-time reporting with connected dashboards.",
      "Automate data synchronization between all business systems."
    ]
  },
  {
    smallTitle: "IT Support & AMC",
    title: "MANAGED IT SUPPORT & AMC",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133877/security_pdcr9o.avif",
    icon: <FiSettings />,
    caption:
      "24/7 IT support and annual maintenance contracts to keep your business running smoothly.",
    metrics: { label: "Support", value: "24/7" },
    techStack: [
      "IT Helpdesk",
      "Proactive Monitoring",
      "Patch Management",
      "Backup & Recovery"
    ],
    points: [
      "Get 24/7 IT support to resolve issues quickly and minimize downtime.",
      "Ensure proactive monitoring and maintenance of your infrastructure.",
      "Keep systems updated with regular patches and security updates.",
      "Plan predictable IT costs with annual maintenance contracts."
    ]
  },
  {
    smallTitle: "SaaS Platforms",
    title: "SAAS PLATFORM DEVELOPMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    icon: <FiUsers />,
    caption:
      "Multi-tenant SaaS platforms ready for global scale with subscription management and white-labeling.",
    metrics: { label: "Multi-Tenant", value: "Global Scale" },
    techStack: [
      "React",
      "Node.js",
      "Stripe",
      "PayPal",
      "Auth0",
      "White-Labeling"
    ],
    points: [
      "Launch multi-tenant SaaS platforms for your customers and partners.",
      "Integrate subscription management and billing systems.",
      "Enable white-labeling for your brand and customer branding.",
      "Support global scale with multi-currency and multi-language features."
    ]
  }
];

function Service() {
  const [activeService, setActiveService] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ticking = false;

    const handleScrollTracking = () => {
      const isMobile = window.innerWidth <= 1100;
      // Adjust center baseline target slightly lower on mobile due to the fixed sticky block area
      const viewportCenter = isMobile ? window.innerHeight * 0.65 : window.innerHeight / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveService(closestIndex);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScrollTracking);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScrollTracking(); 

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="service-page">
      <div className="container">
        
        {/* PAGE HERO */}
        <header className="service-page-hero reveal">
          <span className="section-tag">WHAT WE DO</span>
          <h1 className="service-page-title">
            Complete IT Infrastructure & Technology Solutions<br />
            <span className="gradient-text">for Manufacturing & Growing SMEs</span>
          </h1>
          <p className="section-description">
            From custom software development to cloud migration, cybersecurity, ERP integration and managed IT support — 
            end-to-end enterprise IT services for mid-market manufacturers and growing businesses.
          </p>
        </header>

        {/* INTERACTIVE TRACK WRAPPER */}
        <div className="service-page-wrapper">
          
          {/* LEFT SIDE: STICKY TECHNICAL DISPLAY CONSOLE */}
          <div className="service-page-left">
            <div className="tech-display-console">
              
              {/* Image Frame */}
              <div className="console-image-frame">
                <img
                  src={serviceDataExtended[activeService].image}
                  alt={serviceDataExtended[activeService].smallTitle}
                  className="console-main-image"
                  loading="eager" 
                  decoding="async"
                />
                <div className="console-image-overlay" />
                
                {/* FLOATING CAPSULE BADGE */}
                <div className="console-floating-badge">
                  <div className="badge-icon-core">
                    {serviceDataExtended[activeService].icon}
                  </div>
                  <span className="badge-text-core">
                    {serviceDataExtended[activeService].smallTitle}
                  </span>
                </div>
              </div>

              {/* Dynamic Information Panel */}
              <div className="console-meta-panel">
                <p className="console-caption">{serviceDataExtended[activeService].caption}</p>
                
                {/* Micro Metrics Row */}
                <div className="console-metric-row">
                  <span className="metric-label">{serviceDataExtended[activeService].metrics.label}</span>
                  <span className="metric-value">{serviceDataExtended[activeService].metrics.value}</span>
                </div>

                {/* Live Technologies Used */}
                <div className="console-tech-stack">
                  {serviceDataExtended[activeService].techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: SCROLLING DEEP DIVE CARDS */}
          <div className="service-page-right">
            {serviceDataExtended.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`service-deep-card card-hover ${activeService === index ? "active" : ""}`}
                onClick={() => setActiveService(index)}
              >
                <div className="card-indicator-line" />
                
                <span className="card-pre-title">0{index + 1} — {service.smallTitle}</span>
                <h3 className="card-title card-main-title">{service.title}</h3>
                
                <ul className="card-features-list">
                  {service.points.map((point, i) => (
                    <li key={i}>
                      <span className="card-check-box">
                        <FiCheck />
                      </span>
                      <p className="card-text">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Service;