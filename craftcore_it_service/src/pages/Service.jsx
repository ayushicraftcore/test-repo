// Service.jsx
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
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785736916/Dashboard_Dark_Mode_1_frasph.png",
    icon: <FiLayers />,
    caption: "Whatever runs your business — a customer portal, a SaaS product, your CRM, your ERP — we build it around how you actually work, not the other way around.",
    metrics: { label: "Uptime Rate", value: "99.9%" },
    techStack: ["React", "Next.js & Node.js", "CRM Systems", "ERP Solutions", "API Integrations"],
    points: [
      "We'll build you a custom web application or a multi-tenant SaaS platform, shaped around your product, not a template.",
      "Your sales team gets a CRM built for how they actually chase leads and manage customers — not a generic pipeline tool.",
      "One ERP system to run your inventory, finance, HR, and day-to-day operations, so you're not juggling five different tools.",
      "We connect the third-party APIs, payment gateways, and e-commerce features you need, secured properly from the start."
    ]
  },
  {
    smallTitle: "Cloud & DevOps",
    title: "CLOUD & DEVOPS ENGINEERING",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133774/cloud_fhd71g.avif",
    icon: <FiCloud />,
    caption: "Your cloud infrastructure, managed securely, with deployments that run on autopilot instead of eating your weekend.",
    metrics: { label: "Deployment", value: "Auto-Scaling" },
    techStack: ["AWS", "GCP", "Docker", "Kubernetes"],
    points: [
      "We manage your infrastructure across AWS, GCP, or Azure — whichever fits your stack — and keep it secure while we're at it.",
      "Automated CI/CD pipelines mean your team ships updates fast, without the manual deployment grind.",
      "When it's time to scale containers or move to the cloud, we handle it without breaking what's already working for you."
    ]
  },
  {
    smallTitle: "Cybersecurity",
    title: "CYBERSECURITY & COMPLIANCE",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133877/security_pdcr9o.avif",
    icon: <FiShield />,
    caption: "Protect your data and stay compliant — because trust isn't optional.",
    metrics: { label: "Standards", value: "GDPR / HIPAA" },
    techStack: ["Security Audits", "Pen Testing", "Encryption", "Incident Response"],
    points: [
      "We run deep security audits and penetration testing on your systems, finding the gaps before someone else does.",
      "Whether you need GDPR, HIPAA, or another industry standard, we get your business compliant and keep it that way.",
      "Your data gets locked down with strong encryption, and you get an incident response plan ready before you ever need it."
    ]
  },
  {
    smallTitle: "Mobile Apps",
    title: "MOBILE APP DEVELOPMENT",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785757538/mobile_dev_fcytbj.png",
    icon: <FiSmartphone />,
    caption: "Native or cross-platform, your app lands on Android and iOS without you having to build it twice.",
    metrics: { label: "Platforms", value: "iOS & Android" },
    techStack: ["Flutter", "React Native", "Kotlin", "Swift"],
    points: [
      "We build high-performance apps for Android and iOS that feel fast on your customers' devices, not just in a demo.",
      "Need one codebase for both platforms? We build hybrid apps in Flutter or React Native to get you there faster.",
      "Real-time features, AI-powered experiences — whatever makes your app feel smart, we build it in."
    ]
  },
  {
    smallTitle: "UI/UX Design",
    title: "UI/UX DESIGN & ARCHITECTURE",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785147471/gradient-ui-ux-background_23-2149052117_v8eurp.avif",
    icon: <FiEdit3 />,
    caption: "Design that starts with your users, not a mood board — clean wireframes and a design system that scales as your product grows.",
    metrics: { label: "Accessibility", value: "WCAG Standards" },
    techStack: ["Figma", "Wireframing", "Design Systems", "Motion Design"],
    points: [
      "We dig into real user research before we sketch a single wireframe, so what we design actually solves your users' problems.",
      "You get a UI design system built to scale, so new features look consistent instead of bolted on.",
      "Layouts built to WCAG accessibility standards, with motion design that feels smooth instead of gimmicky."
    ]
  },
  {
    smallTitle: "AI & Automation",
    title: "AI & AUTOMATION",
    image: "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785133977/automation_sm760t.avif",
    icon: <FiCpu />,
    caption: "Practical AI, not hype — automation that takes real work off your team's plate and gives you better data to decide with.",
    metrics: { label: "Efficiency Gain", value: "80%" },
    techStack: ["AI Chatbots", "Predictive Analytics", "Document Processing", "ML & NLP"],
    points: [
      "AI chatbots and virtual assistants deployed on WhatsApp, your website, or your internal tools — wherever your customers or team already are.",
      "Predictive analytics that forecast your demand, catch defects early, and tighten up your supply chain.",
      "Your invoices, purchase orders, and delivery challans get processed automatically with intelligent document extraction — no more manual data entry.",
      "Custom ML models and NLP pipelines built for your pricing optimization, inventory forecasting, support ticket classification, and customer feedback analysis."
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
          <span className="section-tag">ENGINEERING EXCELLENCE</span>
          <h1 className="service-page-title">
            Production-Grade Software, <br />
            <span className="gradient-text">Architected to Scale With You.</span>
          </h1>
          <p className="section-description">
            You get high-performance codebases, sharp algorithmic thinking, and cloud automation working together — 
            the kind of technical edge that separates a product that just launches from one that actually holds up at scale.
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
                
                <span className="card-pre-title">
                  {String(index + 1).padStart(2, '0')} — {service.smallTitle}
                </span>
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