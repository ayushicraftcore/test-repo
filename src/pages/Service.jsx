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
  FiUsers
} from "react-icons/fi";

const serviceDataExtended = [
  {
    smallTitle: "Web & SaaS Dev",
    title: "WEB & SAAS DEVELOPMENT",
    image: "/images/saas.avif",
    icon: <FiLayers />,
    caption:
      "Custom web applications, SaaS platforms, CRM systems and ERP solutions built to streamline your business.",
    metrics: { label: "Uptime Rate", value: "99.9%" },
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "CRM Systems",
      "ERP Solutions",
      "API Integrations"
    ],
    points: [
      "Build custom web applications and multi-tenant SaaS platforms.",
      "Develop CRM systems for sales, lead and customer management.",
      "Create ERP solutions for inventory, finance, HR and operations.",
      "Integrate secure third-party APIs, payment gateways and e-commerce features."
    ]
  },
  {
    smallTitle: "Cloud & DevOps",
    title: "CLOUD & DEVOPS ENGINEERING",
    image: "/images/cloud.avif",
    icon: <FiCloud />,
    caption:
      "Secure cloud management and automated deployment pipelines.",
    metrics: { label: "Deployment", value: "Auto-Scaling" },
    techStack: ["AWS", "GCP", "Docker", "Kubernetes"],
    points: [
      "Manage secure infrastructure on AWS, GCP and Azure.",
      "Set up automated CI/CD pipelines for fast deployments.",
      "Handle container scaling and safe cloud migrations."
    ]
  },
  {
    smallTitle: "Cybersecurity",
    title: "CYBERSECURITY & COMPLIANCE",
    image: "/images/security.avif",
    icon: <FiShield />,
    caption:
      "Protect your data and stay compliant with global standards.",
    metrics: { label: "Compliance", value: "GDPR / HIPAA" },
    techStack: [
      "Security Audits",
      "Pen Testing",
      "Encryption",
      "Incident Response"
    ],
    points: [
      "Run deep security audits and penetration testing.",
      "Ensure full GDPR, HIPAA and industry compliance.",
      "Set up strong data encryption and incident response plans."
    ]
  },
  {
    smallTitle: "Mobile Apps",
    title: "MOBILE APP DEVELOPMENT",
    image: "/images/mobile.avif",
    icon: <FiSmartphone />,
    caption:
      "Native and cross-platform mobile apps for Android and iOS.",
    metrics: { label: "Platforms", value: "iOS & Android" },
    techStack: ["Flutter", "React Native", "Kotlin", "Swift"],
    points: [
      "Build high-performance apps for Android and iOS devices.",
      "Create hybrid apps using Flutter and React Native.",
      "Add real-time features and AI-powered mobile experiences."
    ]
  },
  {
    smallTitle: "UI/UX Design",
    title: "UI/UX DESIGN & ARCHITECTURE",
    image: "/images/uiux.avif",
    icon: <FiEdit3 />,
    caption:
      "User-centered designs, clean wireframes and scalable design systems.",
    metrics: { label: "Accessibility", value: "WCAG Standards" },
    techStack: [
      "Figma",
      "Wireframing",
      "Design Systems",
      "Motion Design"
    ],
    points: [
      "Conduct deep user research and create clear wireframes.",
      "Build scalable, responsive UI design systems.",
      "Implement accessible layouts with smooth motion design."
    ]
  },
 {
  smallTitle: "AI & Automation",
  title: "AI & AUTOMATION",
  image: "/images/automation.avif",
  icon: <FiCpu />,
  caption:
    "Practical AI solutions that automate operations, improve decision-making and reduce manual work.",
  metrics: { label: "Efficiency Gain", value: "80%" },
  techStack: [
    "AI Chatbots",
    "Predictive Analytics",
    "Document Processing",
    "ML & NLP"
  ],
  points: [
    "Deploy AI chatbots and virtual assistants on WhatsApp, web platforms and internal business tools.",
    "Build predictive analytics solutions for demand forecasting, defect detection and supply chain optimization.",
    "Automate invoice, purchase order and delivery challan processing with intelligent document extraction.",
    "Develop ML models and NLP pipelines for pricing optimization, inventory forecasting, ticket classification and customer feedback analysis."
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
          <span className="section-tag">ENGINEERING EXCELLENCE</span>
          <h1 className="service-page-title">
            Production-grade solutions <br />
            <span className="gradient-text">architected for global scale.</span>
          </h1>
          <p className="section-description">
            We combine high-performance codebases, deep algorithmic intelligence and 
            cloud automation to deliver technical advantages for modern organizations.
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
                  alt="Service Visualization"
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