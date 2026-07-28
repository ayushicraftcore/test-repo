import "./SolutionV3.css";
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135243/craftcore1_rmag3p.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135282/Project_Report_pc0kp0.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135281/Task_Kanban_tthdeh.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135278/Project_Card_fdfwie.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135279/Customer_Support_Ticketing_System_Project_Details_rdy78x.avif"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135420/Recruitment_Dashboard_i0tbfq.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135419/Job_Postings_mujs4r.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135412/Job_Postings_Details_mbxjyh.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135416/Interviews_ybn0fc.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135412/Interview_Rounds_hclzul.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135411/Candidate_d9aoev.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135411/Candidate_Details_bk1z30.avif"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135601/CRM_Dashboard_rp2q0g.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135603/Deals_Kanban_wg7z5o.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135607/Lead_Activity_pkjtxz.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135609/Leads_General_Details_gzxi7m.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135615/Leads_Kanban_yf39m0.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135643/Leads_List_tc7jvw.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135609/Leads_Report_General_tdbn7i.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785135610/Leads_Report_Staff_kuuzce.avif"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136408/Dashboard_bnod2n.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136407/Dashboard_Dark_irjhzo.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136406/Bank_ebj4st.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136409/Defaulter_cy2p7h.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136408/Permission_izu9xk.avif"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136519/dashboard_riiznw.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136518/daily_task_mdovub.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136517/call_logs_fc30yl.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136520/notification_gclg8m.avif"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136693/dashboard_pd5net.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136694/my_cases_hjakqe.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136696/daily_task_obvpao.avif"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136941/Dashboar_h2yx68.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136941/DashboardMobileVie_lgzw9y.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136946/ManagementControlTowe_c270zl.jpg"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137032/Custome_veckuh.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137034/Designatio_ny3jmc.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137034/Product_gtpkva.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137035/User_msznrx.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137038/Vendor_amvlh6.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137038/Warehouse_mgcom6.jpg"
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
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137138/Finances_Payment-1000kb_moeg18.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137141/Grey_Material_Procurement_Fully_Dilivered_Report-1000kb_c8n87t.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137140/Grey_Material_Procurement_Report-1000kb_fmtlym.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137141/INVENTOR-1000kb_gkwszu.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137142/Job_Work_Report-1000kb_i2e7pt.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137144/MILL_PROCES-1000kb_fv6pku.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137146/Mill_Wise_Mill_Process_Report-1000kb_h7hriu.jpg",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785137147/WIP_MONITOR_-1000kb_fg3shl.jpg"
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
  const cardsRef = useRef([]);
  const projectRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const autoScrollTimerRef = useRef(null);

  // Handle feature selection
  const handleFeatureSelection = (projectIndex, featureIndex) => {
    if (projectIndex !== activeProject) {
      setActiveProject(projectIndex);
      setActiveFeature(0);
      setCurrentImageIndex(0);
    } else {
      setActiveFeature(featureIndex);
      setCurrentImageIndex(0);
    }
    resetAutoScrollTimer();
  };

  // Reset auto-scroll timer
  const resetAutoScrollTimer = () => {
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    if (autoScrollEnabled && !isFullscreen) {
      autoScrollTimerRef.current = setTimeout(() => {
        autoAdvance();
      }, 8000);
    }
  };

  // Auto-advance through features and projects
  const autoAdvance = () => {
    const currentProjectFeatures = projects[activeProject].features;
    const isLastFeature = activeFeature === currentProjectFeatures.length - 1;
    
    if (isLastFeature) {
      // Move to next project
      const nextProjectIndex = (activeProject + 1) % projects.length;
      setActiveProject(nextProjectIndex);
      setActiveFeature(0);
      setCurrentImageIndex(0);
      // Scroll to next project
      if (projectRefs.current[nextProjectIndex]) {
        projectRefs.current[nextProjectIndex].scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      // Move to next feature
      setActiveFeature(activeFeature + 1);
      setCurrentImageIndex(0);
      // Scroll to next feature card
      if (cardsRef.current[activeFeature + 1]) {
        cardsRef.current[activeFeature + 1].scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }
  };

  // Carousel navigation
  const nextImage = () => {
    const currentFeature = projects[activeProject].features[activeFeature];
    if (currentFeature && currentFeature.images.length > 0) {
      const nextIndex = (currentImageIndex + 1) % currentFeature.images.length;
      setCurrentImageIndex(nextIndex);
      
      if (nextIndex === 0 && autoScrollEnabled && !isFullscreen) {
        const isLastFeature = activeFeature === projects[activeProject].features.length - 1;
        setTimeout(() => {
          if (isLastFeature) {
            const nextProjectIndex = (activeProject + 1) % projects.length;
            setActiveProject(nextProjectIndex);
            setActiveFeature(0);
            setCurrentImageIndex(0);
            if (projectRefs.current[nextProjectIndex]) {
              projectRefs.current[nextProjectIndex].scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          } else {
            setActiveFeature(activeFeature + 1);
            setCurrentImageIndex(0);
            if (cardsRef.current[activeFeature + 1]) {
              cardsRef.current[activeFeature + 1].scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
            }
          }
        }, 2000);
      }
    }
    resetAutoScrollTimer();
  };

  const prevImage = () => {
    const currentFeature = projects[activeProject].features[activeFeature];
    if (currentFeature && currentFeature.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + currentFeature.images.length) % currentFeature.images.length);
    }
    resetAutoScrollTimer();
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    resetAutoScrollTimer();
  };

  // Scroll tracking
  useEffect(() => {
    let ticking = false;
    let lastActiveProject = activeProject;
    let lastActiveFeature = activeFeature;

    const handleScrollTracking = () => {
      const viewportCenter = window.innerHeight / 2;
      
      // Find which project is most visible
      let closestProjectIndex = 0;
      let minProjectDistance = Infinity;
      
      projectRefs.current.forEach((projectEl, index) => {
        if (!projectEl) return;
        const rect = projectEl.getBoundingClientRect();
        const projectCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - projectCenter);
        if (distance < minProjectDistance) {
          minProjectDistance = distance;
          closestProjectIndex = index;
        }
      });

      // Find which feature is most visible within the active project
      let closestFeatureIndex = 0;
      let minFeatureDistance = Infinity;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);
        if (distance < minFeatureDistance) {
          minFeatureDistance = distance;
          closestFeatureIndex = index;
        }
      });

      if (closestProjectIndex !== lastActiveProject) {
        lastActiveProject = closestProjectIndex;
        setActiveProject(closestProjectIndex);
        setActiveFeature(0);
        setCurrentImageIndex(0);
        resetAutoScrollTimer();
      } else if (closestFeatureIndex !== lastActiveFeature) {
        lastActiveFeature = closestFeatureIndex;
        setActiveFeature(closestFeatureIndex);
        setCurrentImageIndex(0);
        resetAutoScrollTimer();
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
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused || isFullscreen) return;
    
    const interval = setInterval(() => {
      const currentFeature = projects[activeProject].features[activeFeature];
      if (currentFeature && currentFeature.images.length > 1) {
        const nextIndex = (currentImageIndex + 1) % currentFeature.images.length;
        setCurrentImageIndex(nextIndex);
        
        if (nextIndex === 0 && autoScrollEnabled && !isFullscreen) {
          const isLastFeature = activeFeature === projects[activeProject].features.length - 1;
          setTimeout(() => {
            if (isLastFeature) {
              const nextProjectIndex = (activeProject + 1) % projects.length;
              setActiveProject(nextProjectIndex);
              setActiveFeature(0);
              setCurrentImageIndex(0);
              if (projectRefs.current[nextProjectIndex]) {
                projectRefs.current[nextProjectIndex].scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }
            } else {
              setActiveFeature(activeFeature + 1);
              setCurrentImageIndex(0);
              if (cardsRef.current[activeFeature + 1]) {
                cardsRef.current[activeFeature + 1].scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
              }
            }
          }, 2000);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeProject, activeFeature, isPaused, isFullscreen, currentImageIndex, autoScrollEnabled]);

  // Auto-advance timer for inactivity
  useEffect(() => {
    resetAutoScrollTimer();
    return () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
    };
  }, [activeProject, activeFeature]);

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
              <source src="https://res.cloudinary.com/dpxl6jy4t/video/upload/v1785134840/solution-hero_ih8ndx.mp4" type="video/mp4" />
            </video>
            <div className="hero-frame-overlay" />
          </div>

          <p className="section-description solution-hero-desc">
            We deliver tailored digital transformation, AI integrations and cloud native infrastructure 
            engineered to solve complex technical challenges across diverse global market sectors.
          </p>
        </header>

        {/* All Projects */}
        {projects.map((project, projectIndex) => (
          <section 
            key={projectIndex} 
            className="project-section"
            ref={(el) => (projectRefs.current[projectIndex] = el)}
          >
            {/* Project Header */}
            <div className="project-header">
              <div className="project-header-content">
                <span className="project-tag" style={{ color: project.color, background: `${project.color}15` }}>
                  {project.tag}
                </span>
                <h2 className="project-title">
                  {project.title}
                  <span className="project-subtitle" style={{ color: project.color }}>
                    {project.subtitle}
                  </span>
                </h2>
                <p className="project-description">{project.description}</p>
                <div className="project-stats">
                  {project.stats.map((stat, idx) => (
                    <span key={idx} className="project-stat">{stat}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="solution-split-wrapper">
              
              {/* LEFT SIDE: STICKY DASHBOARD WITH CAROUSEL */}
              <div className="tour-visual-sticky">
                <div className={`tour-mockup-frame ${isFullscreen ? 'fullscreen' : ''}`}>
                  
                  {/* Browser Header */}
                  <div className="browser-mockup-header">
                    <div className="browser-dot dot-red" />
                    <div className="browser-dot dot-yellow" />
                    <div className="browser-dot dot-green" />
                    <div className="browser-mockup-address">
                      {project.title.toLowerCase().replace(/\s+/g, '-')}.craftcore.io
                    </div>
                    <button className="fullscreen-toggle" onClick={toggleFullscreen}>
                      {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                    </button>
                  </div>

                  {/* Dashboard Content with Carousel */}
                  <div className="dashboard-content">
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
                        
                        {totalImages > 1 && (
                          <div className="carousel-counter">
                            <span className="counter-text">
                              {currentImageIndex + 1} / {totalImages}
                            </span>
                          </div>
                        )}
                      </div>

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
                    {project.features.map((feature, idx) => (
                      <button
                        key={idx}
                        className={`feature-nav-btn ${activeProject === projectIndex && activeFeature === idx ? 'active' : ''}`}
                        onClick={() => handleFeatureSelection(projectIndex, idx)}
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
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    ref={(el) => {
                      if (projectIndex === activeProject) {
                        cardsRef.current[idx] = el;
                      }
                    }}
                    className={`tour-timeline-block ${activeProject === projectIndex && activeFeature === idx ? "active" : "inactive"}`}
                    onClick={() => handleFeatureSelection(projectIndex, idx)}
                  >
                    <div className="timeline-number">{String(idx + 1).padStart(2, '0')}</div>
                    
                    <div className="timeline-badge-row">
                      <div className="timeline-icon-box" style={{ 
                        background: activeProject === projectIndex && activeFeature === idx ? project.gradient : 'rgba(124, 58, 237, 0.1)',
                        color: activeProject === projectIndex && activeFeature === idx ? '#fff' : project.color
                      }}>
                        {feature.icon}
                      </div>
                      <span className="timeline-step-number">FEATURE 0{idx + 1}</span>
                    </div>
                    
                    <span className="timeline-block-pretag" style={{ color: project.color }}>
                      {feature.label}
                    </span>
                    <h2 className="timeline-block-title">{feature.title}</h2>
                    <p className="card-text timeline-block-desc">{feature.description}</p>
                    
                    <div className="timeline-progress-bar">
                      <div 
                        className="timeline-progress-fill"
                        style={{ 
                          width: activeProject === projectIndex && activeFeature === idx ? '100%' : '0%',
                          background: project.gradient
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ))}

      </div>
    </div>
  );
}

export default Solution;