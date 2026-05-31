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
  FiZap 
} from "react-icons/fi";

const serviceDataExtended = [
  {
    smallTitle: "Web & SaaS Dev",
    title: "WEB & SAAS DEVELOPMENT",
    image: "/images/saas.avif",
    icon: <FiLayers />,
    caption: "Multi-tenant architecture built for high concurrent availability.",
    metrics: { label: "Scalability Limit", value: "10M+ Users" },
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    points: [
      "Launch production-grade multi-tenant SaaS structures with 99.9% uptime.",
      "Integrated subscription billing systems and robust user management.",
      "Engineered clean state-management layouts scalable from 10 to millions of entries.",
    ],
  },
  {
    smallTitle: "Mobile Apps",
    title: "MOBILE APP DEVELOPMENT",
    image: "/images/mobile.avif",
    icon: <FiSmartphone />,
    caption: "Cross-platform mobile environments with fluid user flows.",
    metrics: { label: "App Store SLA", value: "99.99%" },
    techStack: ["Flutter", "React Native", "Swift", "Kotlin"],
    points: [
      "Native device compilation for blazing-fast responses on Android and iOS.",
      "Offline-first system designs matching seamless local database synchronizations.",
      "Deep integration of unified background streams and micro-push indicators.",
    ],
  },
  {
    smallTitle: "AI & Automation",
    title: "AI & AUTOMATION SOLUTIONS",
    image: "/images/automation.avif",
    icon: <FiCpu />,
    caption: "Autonomous intelligence frameworks optimizing operational lag.",
    metrics: { label: "Workflow Efficiency", value: "+40% Time saved" },
    techStack: ["Python", "OpenAI API", "LangChain", "Vector DBs"],
    points: [
      "Deploy intelligent multi-agent conversational chatbots and virtual systems.",
      "Implement predictive diagnostic tracking pipelines and metric monitoring rows.",
      "Automated workflow orchestration loops saving more than 40% manually spent time.",
    ],
  },
  {
    smallTitle: "Cloud & DevOps",
    title: "CLOUD & DEVOPS ENGINEERING",
    image: "/images/cloud.avif",
    icon: <FiCloud />,
    caption: "Cloud infrastructure deployment completely isolated from failures.",
    metrics: { label: "Release Integrity", value: "Zero Downtime" },
    techStack: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
    points: [
      "Modern cloud-native configurations operating securely across AWS, Azure, and GCP.",
      "Fully responsive pipelines handling automated continuous testing and deployments.",
      "Secure Infrastructure as Code states preventing environment variable leaks.",
    ],
  },
  {
    smallTitle: "UI/UX Design",
    title: "UI/UX DESIGN & ARCHITECTURE",
    image: "/images/uiux.avif",
    icon: <FiEdit3 />,
    caption: "Pixel-perfect mockups engineered for rapid digital onboarding.",
    metrics: { label: "Design Blueprinting", value: "High Fidelity" },
    techStack: ["Figma", "Adobe CC", "Wireframing", "Design Systems"],
    points: [
      "User-centric conversion paths tailored explicitly to business conversion goals.",
      "Interactive vector structural mockups built completely inside modular Figma ecosystems.",
      "Scalable corporate typography tokens, UI kits, and comprehensive asset blocks.",
    ],
  },
  {
    smallTitle: "Cybersecurity",
    title: "CYBERSECURITY & COMPLIANCE",
    image: "/images/security.avif",
    icon: <FiShield />,
    caption: "Ironclad end-to-end perimeter defenses and penetration mapping.",
    metrics: { label: "Security Readiness", value: "ISO Standards" },
    techStack: ["Pen-Testing", "AES-256", "OAuth2", "Data Audits"],
    points: [
      "End-to-end continuous infrastructure vulnerability mapping and architectural code audits.",
      "Advanced structural symmetric and asymmetric encryption covering sensitive customer pipelines.",
      "Secure data parsing configurations matching global data authorization standards.",
    ],
  },
  {
    smallTitle: "MVP for Startups",
    title: "MVP DEVELOPMENT & LAUNCH",
    image: "/images/mvp.avif",
    icon: <FiZap />,
    caption: "Fast-tracked product engineering loops engineered for startup execution.",
    metrics: { label: "Time To Market", value: "4-8 Weeks" },
    techStack: ["TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    points: [
      "Accelerated prototype schedules turning concepts into fully deployable software.",
      "Investor-ready clickable validation prototypes optimized for fundraising loops.",
      "Lean code patterns set up cleanly to easily support secondary feature branches.",
    ],
  },
];

function Service() {
  const [activeService, setActiveService] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    // 1. DUAL-PURPOSE VIEWPORT MONITORING ENGINE
    // Shrinks tracking boundaries to a tight center window to trigger seamless state swaps
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardsRef.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveService(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
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
                {/* 2. STABLE IMAGE COMPILATION CONTAINER */}
                {/* Freeing this from node-key updates enables fluid, instant source switching on screens */}
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