import "./Solution.css";
import { useEffect, useRef, useState } from "react";
import { 
  FiGrid, FiBarChart2, FiCode, FiDatabase, FiCloud, FiUsers, 
  FiTrendingUp, FiCpu, FiLock, FiServer, FiZap, FiShield, 
  FiGlobe, FiLayers, FiArrowRight, FiHome, FiCreditCard, 
  FiDollarSign, FiPieChart, FiActivity, FiBriefcase, FiSmartphone,
  FiSearch, FiFilter, FiChevronDown, FiChevronLeft, FiChevronRight,
  FiCheckCircle, FiClock, FiAlertCircle, FiStar, FiTarget,
  FiChevronRight as FiChevronRightAlt,
  FiZoomIn, FiMaximize2, FiMinimize2
} from "react-icons/fi";

// Project 1 - Goal Management Dashboard
const project1Features = [
  {
    id: 1,
    icon: <FiTarget />,
    label: "Goal Tracking",
    title: "Project Goal & OKR Management",
    description: "Define, track, and manage project goals and OKRs across all projects. Monitor progress in real-time, automate status updates, and track milestone achievements for successful project delivery.",
    images: [
      "/images/craftcore1.avif",
      "/images/Project Report.avif",
      "/images/Task Kanban.avif",
      "/images/Project Card.avif",
      "/images/Customer Support Ticketing System Project Details.avif"
    ],
    tags: ["Project Goals", "OKR Tracking", "Real-Time Progress", "Milestone Management"]
  },
  {
    id: 2,
    icon: <FiTrendingUp />,
    label: "Recruitment Analytics",
    title: "Recruitment Performance Dashboard",
    description: "Track recruitment metrics including candidate pipelines, time-to-hire, source effectiveness, and hiring success rates with interactive dashboards and real-time analytics.",
    images: [
      "/images/Recruitment/Recruitment Dashboard.avif",
      "/images/Recruitment/Job Postings.avif",
      "/images/Recruitment/Job Postings Details.avif",
      "/images/Recruitment/Interviews.avif",
      "/images/Recruitment/Interview Rounds.avif",
      "/images/Recruitment/Candidate.avif",
      "/images/Recruitment/Candidate Details.avif"
    ],
    tags: ["Candidate Pipeline", "Time-to-Hire", "Source Analytics", "Hiring Success Rate"]
  },
  {
    id: 3,
    icon: <FiUsers />,
    label: "CRM Management",
    title: "Customer Relationship Management",
    description: "Manage leads, track deals, and nurture customer relationships with a comprehensive CRM system. Visualize sales pipelines, monitor lead activities, and generate detailed reports for better customer insights.",
    images: [
      "/images/CRM/CRM Dashboard.avif",
      "/images/CRM/Deals Kanban.avif",
      "/images/CRM/Lead Activity.avif",
      "/images/CRM/Leads General Details.avif",
      "/images/CRM/Leads Kanban.avif",
      "/images/CRM/Leads List.avif",
      "/images/CRM/Leads Report General.avif",
      "/images/CRM/Leads Report Staff.avif"
    ],
    tags: ["Lead Management", "Sales Pipeline", "Activity Tracking", "CRM Analytics"]
  }
];

// Project 2 - Budget & Finance
const project2Features = [
  {
    id: 1,
    icon: <FiDollarSign />,
    label: "Admin Dashboard",
    title: "Collection Admin Dashboard",
    description: "Comprehensive admin dashboard for collection management with real-time tracking of outstanding payments, recovery analytics, bank reconciliation, defaulter monitoring, and team performance metrics.",
    images: [
      "/images/collection_admin/Dashboard.avif",
      "/images/collection_admin/Dashboard Dark.avif",
      "/images/collection_admin/Bank.avif",
      "/images/collection_admin/Defaulter.avif",
      "/images/collection_admin/Permission.avif"
    ],
    tags: ["Recovery Analytics", "Bank Reconciliation", "Defaulter Tracking", "Team Performance"]
  },
  {
    id: 2,
    icon: <FiUsers />,
    label: "Agent Dashboard",
    title: "Collection Agent Dashboard",
    description: "Agent-focused dashboard for daily task management, call logging, customer follow-ups, and notification tracking. Streamline collection activities with real-time task assignments and performance monitoring.",
    images: [
      "/images/collection_agent/dashboard.avif",
      "/images/collection_agent/daily task.avif",
      "/images/collection_agent/call logs.avif",
      "/images/collection_agent/notification.avif"
    ],
    tags: ["Task Management", "Call Logging", "Follow-ups", "Notifications"]
  },
  {
    id: 3,
    icon: <FiSmartphone />,
    label: "Mobile App",
    title: "Collection Mobile Application",
    description: "Mobile-first collection application for field agents with case management, daily task tracking, customer interaction logging, and real-time sync for on-the-go collection operations.",
    images: [
      "/images/collection_mobile/dashboard.avif",
      "/images/collection_mobile/my cases.avif",
      "/images/collection_mobile/daily task.avif"
    ],
    tags: ["Case Management", "Field Operations", "Real-Time Sync", "Mobile Tasks"]
  }
];

// Project 3 - Project Management
const project3Features = [
  {
    id: 1,
    icon: <FiTrendingUp />,
    label: "Operations Dashboard",
    title: "Textile Operations Dashboard",
    description: "Real-time operations dashboard for textile manufacturing with inventory monitoring, production tracking, job work management, financial insights, and WIP monitoring across the textile production lifecycle.",
    images: [
      "/images/Textile_Dashboard/Dashboar.jpeg",
      "/images/Textile_Dashboard/DashboardMobileVie.jpeg",
      "/images/Textile_Dashboard/ManagementControlTowe.jpeg"
    ],
    tags: ["Inventory Monitoring", "Production Tracking", "Financial Insights", "WIP Monitoring"]
  },
  {
    id: 2,
    icon: <FiGrid />,
    label: "Master Management",
    title: "Textile Master Data Management",
    description: "Centralized master data management for textile operations including customer management, employee records, product catalogs, vendor tracking, and warehouse management for streamlined textile production.",
    images: [
      "/images/Textile_ERP_Master/Custome.jpeg",
      "/images/Textile_ERP_Master/Designatio.jpeg",
      "/images/Textile_ERP_Master/Product.jpeg",
      "/images/Textile_ERP_Master/User.jpeg",
      "/images/Textile_ERP_Master/Vendor.jpeg",
      "/images/Textile_ERP_Master/Warehouse.jpeg"
    ],
    tags: ["Customer Management", "Vendor Tracking", "Product Catalog", "Warehouse Management"]
  },
  {
    id: 3,
    icon: <FiClock />,
    label: "Operations Reports",
    title: "Textile Operations & Reports",
    description: "Comprehensive textile operations reports including grey material procurement, inventory status, job work reports, mill process tracking, and financial payment monitoring for complete operational visibility.",
    images: [
      "/images/TextileOperations/Finances Payment-1000kb.jpg",
      "/images/TextileOperations/Grey Material Procurement Fully Dilivered Report-1000kb.jpg",
      "/images/TextileOperations/Grey Material Procurement Report-1000kb.jpg",
      "/images/TextileOperations/INVENTOR-1000kb.jpg",
      "/images/TextileOperations/Job Work Report-1000kb.jpg",
      "/images/TextileOperations/MILL PROCES-1000kb.jpg",
      "/images/TextileOperations/Mill Process Report-1000kb.jpg",
      "/images/TextileOperations/WIP MONITOR -1000kb.jpg"
    ],
    tags: ["Material Procurement", "Inventory Reports", "Job Work Reports", "Financial Monitoring"]
  }
];

// All projects grouped
const projects = [
  {
    id: 1,
    title: "Craftcore ERP",
    subtitle: "Enterprise Resource Planning",
    tag: "PROJECT 01",
    icon: <FiGrid />,
    description: "A comprehensive enterprise resource planning platform with integrated modules for goals management, recruitment analytics, CRM, and project management capabilities.",
    features: project1Features,
    stats: ["Active Modules: 4", "Users: 256", "Integration: 12"],
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)"
  },
  {
    id: 2,
    title: "Collection CRM",
    subtitle: "Debt Recovery Management",
    tag: "PROJECT 02",
    icon: <FiDollarSign />,
    description: "A comprehensive collection CRM platform for managing debt recovery, agent workflows, and collection analytics. Streamline collection operations across admin, agent, and mobile interfaces.",
    features: project2Features,
    stats: ["Active Cases: 1.2K", "Recovery Rate: 78%", "Agents: 45"],
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669, #047857)"
  },
  {
    id: 3,
    title: "Textile ERP",
    subtitle: "Textile Manufacturing Management",
    tag: "PROJECT 03",
    icon: <FiBriefcase />,
    description: "A comprehensive textile ERP solution for managing master data, operations, and reporting across the textile manufacturing lifecycle. Streamline production, procurement, and inventory management.",
    features: project3Features,
    stats: ["Production: 2.8K", "Inventory: 15K", "Reports: 24"],
    color: "#2563EB",
    gradient: "linear-gradient(135deg, #2563EB, #1D4ED8)"
  }
];

function Solution() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cardsRef = useRef([]);
  const projectRefs = useRef([]);
  const stickyPreviewRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Handle project filter click
  const handleProjectFilter = (index) => {
    setActiveProject(index);
    setActiveFeature(0);
    setCurrentImageIndex(0);
    
    if (projectRefs.current[index]) {
      projectRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Handle feature selection
  const handleFeatureSelection = (index) => {
    setActiveFeature(index);
    setCurrentImageIndex(0);
    if (window.innerWidth <= 1100 && cardsRef.current[index]) {
      cardsRef.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  // Carousel navigation
  const nextImage = () => {
    const currentFeature = projects[activeProject].features[activeFeature];
    if (currentFeature && currentFeature.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % currentFeature.images.length);
    }
  };

  const prevImage = () => {
    const currentFeature = projects[activeProject].features[activeFeature];
    if (currentFeature && currentFeature.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + currentFeature.images.length) % currentFeature.images.length);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Scroll tracking with improved smoothness
  useEffect(() => {
    let ticking = false;
    let lastActiveIndex = activeFeature;

    const handleScrollTracking = () => {
      const isMobile = window.innerWidth <= 1100;
      const viewportCenter = isMobile ? window.innerHeight * 0.6 : window.innerHeight / 2;
      
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

      if (closestIndex !== lastActiveIndex) {
        lastActiveIndex = closestIndex;
        setActiveFeature(closestIndex);
        setCurrentImageIndex(0);
      }
      
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
  }, [activeProject]);

  // Auto-play carousel with improved timing
  useEffect(() => {
    if (isPaused || isFullscreen) return;
    
    const interval = setInterval(() => {
      const currentFeature = projects[activeProject].features[activeFeature];
      if (currentFeature && currentFeature.images.length > 1) {
        setCurrentImageIndex((prev) => (prev + 1) % currentFeature.images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeProject, activeFeature, isPaused, isFullscreen]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const currentProject = projects[activeProject];
  const currentFeature = currentProject.features[activeFeature];
  const totalImages = currentFeature?.images?.length || 0;

  return (
    <div className={`solution-page ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      <div className="container">
        
        {/* HERO SECTION */}
        <header className="solution-hero">
          <span className="section-tag">SOLUTION WE PROVIDE</span>
          <h1 className="solution-hero-title">
            Innovative Technology Solutions <br />
            <span className="gradient-text">for Every Industry</span>
          </h1>
          
          <div className="solution-hero-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="solution-hero-video"
              poster="/images/solution-main-hero.avif"
            >
              <source src="/videos/solution-hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-frame-overlay" />
          </div>

          <p className="section-description solution-hero-desc">
            We deliver tailored digital transformation, AI integrations and cloud native infrastructure 
            engineered to solve complex technical challenges across diverse global market sectors.
          </p>
        </header>

        {/* PROJECT FILTERS */}
        <div className="project-filters">
          {projects.map((project, idx) => {
            const isActive = activeProject === idx;
            return (
              <button
                key={idx}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleProjectFilter(idx)}
                style={{
                  '--btn-color': project.color,
                  '--btn-text': isActive ? '#ffffff' : '#6B7280',
                  '--btn-bg': isActive ? project.color : 'transparent',
                  '--btn-shadow': isActive ? `${project.color}40` : 'transparent'
                }}
              >
                <span className="filter-icon">{project.icon}</span>
                {project.title}
              </button>
            );
          })}
        </div>

        {/* INTERACTIVE FEATURE SHOWCASE */}
        <section className="product-tour-container">
          
          {/* Project Header */}
          <div className="project-header">
            <div className="project-header-content">
              <span className="project-tag">{currentProject.tag}</span>
              <h2 className="project-title">
                {currentProject.title}
                <span className="project-subtitle">{currentProject.subtitle}</span>
              </h2>
              <p className="project-description">{currentProject.description}</p>
              <div className="project-stats">
                {currentProject.stats.map((stat, idx) => (
                  <span key={idx} className="project-stat">{stat}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="solution-split-wrapper">
            
            {/* LEFT SIDE: STICKY DASHBOARD WITH CAROUSEL */}
            <div className="tour-visual-sticky" ref={stickyPreviewRef}>
              <div className={`tour-mockup-frame ${isFullscreen ? 'fullscreen' : ''}`}>
                
                {/* Browser Header */}
                <div className="browser-mockup-header">
                  <div className="browser-dot dot-red" />
                  <div className="browser-dot dot-yellow" />
                  <div className="browser-dot dot-green" />
                  <div className="browser-mockup-address">
                    {currentProject.title.toLowerCase().replace(/\s+/g, '-')}.craftcore.io
                  </div>
                  <button className="fullscreen-toggle" onClick={toggleFullscreen}>
                    {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                  </button>
                </div>

                {/* Dashboard Content with Carousel */}
                <div className="dashboard-content">
                  {/* Carousel Container */}
                  <div 
                    className={`carousel-container ${isFullscreen ? 'fullscreen' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="carousel-slide">
                      {totalImages > 0 ? (
                        <img 
                          src={currentFeature.images[currentImageIndex]}
                          alt={`${currentFeature.title} - ${currentImageIndex + 1}`}
                          className="carousel-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="no-image-placeholder">
                          <span>No images available</span>
                        </div>
                      )}
                      
                      {/* Image Counter */}
                      {totalImages > 1 && (
                        <div className="carousel-counter">
                          <span className="counter-text">
                            {currentImageIndex + 1} / {totalImages}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Carousel Controls */}
                    {totalImages > 1 && (
                      <>
                        <button 
                          className="carousel-arrow-btn carousel-prev"
                          onClick={prevImage}
                          aria-label="Previous image"
                        >
                          <FiChevronLeft />
                        </button>
                        <button 
                          className="carousel-arrow-btn carousel-next"
                          onClick={nextImage}
                          aria-label="Next image"
                        >
                          <FiChevronRight />
                        </button>

                        {/* Carousel Dots */}
                        <div className="carousel-dots-container">
                          {currentFeature.images.map((_, index) => (
                            <button
                              key={index}
                              className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                              onClick={() => goToImage(index)}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Feature Tags Overlay */}
                    <div className="feature-image-overlay">
                      <div className="feature-tags-display">
                        {currentFeature.tags.map((tag, idx) => (
                          <span key={idx} className="feature-tag-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Navigation */}
                <div className="feature-nav-section">
                  {currentProject.features.map((feature, idx) => (
                    <button
                      key={idx}
                      className={`feature-nav-btn ${activeFeature === idx ? 'active' : ''}`}
                      onClick={() => handleFeatureSelection(idx)}
                    >
                      <span className="nav-icon">{feature.icon}</span>
                      <span className="nav-label">{feature.label}</span>
                      <span className="nav-image-count">
                        {feature.images.length}
                      </span>
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: SCROLLING FEATURES LIST */}
            <div className="tour-timeline-scroller">
              {currentProject.features.map((feature, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className={`tour-timeline-block ${activeFeature === idx ? "active" : "inactive"}`}
                  onClick={() => handleFeatureSelection(idx)}
                >
                  <div className="timeline-number">{String(idx + 1).padStart(2, '0')}</div>
                  
                  <div className="timeline-badge-row">
                    <div className="timeline-icon-box" style={{ 
                      background: activeFeature === idx ? currentProject.gradient : 'rgba(124, 58, 237, 0.1)',
                      color: activeFeature === idx ? '#fff' : currentProject.color
                    }}>
                      {feature.icon}
                    </div>
                    <span className="timeline-step-number">FEATURE 0{idx + 1}</span>
                  </div>
                  
                  <span className="timeline-block-pretag" style={{ color: currentProject.color }}>
                    {feature.label}
                  </span>
                  <h2 className="timeline-block-title">{feature.title}</h2>
                  <p className="card-text timeline-block-desc">{feature.description}</p>
                  
                  <div className="timeline-progress-bar">
                    <div 
                      className="timeline-progress-fill"
                      style={{ 
                        width: activeFeature === idx ? '100%' : '0%',
                        background: currentProject.gradient
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Solution;