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
    smallTitle: "Custom Software",
    title: "CUSTOM SOFTWARE & PLATFORMS",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    icon: <FiLayers />,
    caption:
      "Custom web applications, SaaS platforms, and business systems built to streamline how you work.",
    metrics: { label: "Uptime", value: "99.9%" },
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "CRM",
      "ERP",
      "API Integrations"
    ],
    points: [
      "Custom web applications and multi-tenant SaaS platforms built for your workflow",
      "CRM systems that actually help you manage sales, leads, and customers",
      "ERP solutions for inventory, finance, HR, and operations — all in one place",
      "Secure third-party APIs, payment gateways, and e-commerce features that connect everything"
    ]
  },
  {
    smallTitle: "Cloud Infrastructure",
    title: "CLOUD INFRASTRUCTURE & DEVOPS",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133774/cloud_fhd71g.avif",
    icon: <FiCloud />,
    caption:
      "Secure cloud infrastructure and automated deployment pipelines that keep you running.",
    metrics: { label: "Scalability", value: "Auto-Scaling" },
    techStack: ["AWS", "GCP", "Docker", "Kubernetes"],
    points: [
      "Secure infrastructure on AWS, GCP, and Azure — we manage it all",
      "Automated CI/CD pipelines so you can deploy faster, with confidence",
      "Container orchestration and cloud migration that just works"
    ]
  },
  {
    smallTitle: "Security & Compliance",
    title: "SECURITY & COMPLIANCE",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133877/security_pdcr9o.avif",
    icon: <FiShield />,
    caption:
      "Protect your data and stay compliant — because trust isn't optional.",
    metrics: { label: "Standards", value: "GDPR / HIPAA" },
    techStack: [
      "Security Audits",
      "Pen Testing",
      "Encryption",
      "Incident Response"
    ],
    points: [
      "Security audits and penetration testing that find issues before they find you",
      "Full GDPR, HIPAA, and industry compliance — we handle the paperwork",
      "Data encryption and incident response plans you can actually trust"
    ]
  },
  {
    smallTitle: "Mobile Apps",
    title: "MOBILE APP DEVELOPMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785757538/mobile_dev_fcytbj.png",
    icon: <FiSmartphone />,
    caption:
      "Native and cross-platform mobile apps that your users will actually love.",
    metrics: { label: "Platforms", value: "iOS & Android" },
    techStack: ["Flutter", "React Native", "Kotlin", "Swift"],
    points: [
      "High-performance apps for Android and iOS — built for real people",
      "Hybrid apps using Flutter and React Native that work everywhere",
      "Real-time features and AI-powered experiences that keep users engaged"
    ]
  },
  {
    smallTitle: "UI/UX Design",
    title: "UI/UX DESIGN & ARCHITECTURE",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785147471/gradient-ui-ux-background_23-2149052117_v8eurp.avif",
    icon: <FiEdit3 />,
    caption:
      "User-centered design that makes complex systems feel simple and intuitive.",
    metrics: { label: "Accessibility", value: "WCAG Standards" },
    techStack: [
      "Figma",
      "Wireframing",
      "Design Systems",
      "Motion Design"
    ],
    points: [
      "User research and wireframes that actually reflect how your users think",
      "Scalable, responsive design systems that work across every device",
      "Accessible layouts with smooth motion design that feels polished"
    ]
  },
 {
  smallTitle: "AI & Automation",
  title: "AI & AUTOMATION",
  image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133977/automation_sm760t.avif",
  icon: <FiCpu />,
  caption:
    "Practical AI solutions that automate the repetitive stuff so your team can focus on what matters.",
  metrics: { label: "Efficiency", value: "80%" },
  techStack: [
    "AI Chatbots",
    "Predictive Analytics",
    "Document Processing",
    "ML & NLP"
  ],
  points: [
    "AI chatbots and virtual assistants that actually understand your customers",
    "Predictive analytics for demand forecasting, defect detection, and supply chain optimization",
    "Automated document processing for invoices, purchase orders, and delivery challans",
    "ML models and NLP pipelines that make sense of your data — from pricing to customer feedback"
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
          <span className="section-tag">WHAT WE BUILD</span>
          <h1 className="service-page-title">
            Solutions that scale with you — <br />
            <span className="gradient-text">built to last, not just launch.</span>
          </h1>
          <p className="section-description">
            We combine clean code, smart automation, and cloud-native architecture to deliver 
            technology that actually works for your business — today and tomorrow.
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