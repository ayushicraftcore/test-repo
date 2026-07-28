import React, { useState, useEffect, useRef } from "react";
import "./SolutionV4.css";
import {
  FiGrid, FiTarget, FiTrendingUp, FiUsers, FiDollarSign,
  FiBriefcase, FiChevronLeft, FiChevronRight, FiSmartphone,
  FiClock, FiLayers
} from "react-icons/fi";

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

const projects = [
  {
    id: 1,
    title: "Craftcore ERP",
    subtitle: "Enterprise Management",
    tag: "PROJECT 01",
    icon: <FiGrid />,
    description: "A comprehensive enterprise resource planning platform with integrated modules for goals management, recruitment analytics, CRM, and project management capabilities.",
    features: project1Features,
    stats: ["Active Modules: 4", "Users: 256", "Integration: 12"],
    color: "#4f46e5",
    light: "#e0e7ff",
    gradient: "linear-gradient(135deg, #4f46e5, #7C3AED)"
  },
  {
    id: 2,
    title: "Collection CRM",
    subtitle: "Debt Recovery",
    tag: "PROJECT 02",
    icon: <FiDollarSign />,
    description: "A comprehensive collection CRM platform for managing debt recovery, agent workflows, and collection analytics across admin, agent, and mobile interfaces.",
    features: project2Features,
    stats: ["Active Cases: 1.2K", "Recovery Rate: 78%", "Agents: 45"],
    color: "#059669",
    light: "#d1fae5",
    gradient: "linear-gradient(135deg, #059669, #047857)"
  },
  {
    id: 3,
    title: "Textile ERP",
    subtitle: "Manufacturing Intelligence",
    tag: "PROJECT 03",
    icon: <FiBriefcase />,
    description: "A comprehensive textile ERP solution for managing master data, operations, and reporting across the textile manufacturing lifecycle.",
    features: project3Features,
    stats: ["Production: 2.8K", "Inventory: 15K", "Reports: 24"],
    color: "#2563eb",
    light: "#dbeafe",
    gradient: "linear-gradient(135deg, #2563eb, #1D4ED8)"
  }
];

function SolutionV6() {
  const [activeProjIdx, setActiveProjIdx] = useState(0);
  const [activeFeatIdx, setActiveFeatIdx] = useState(0);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const projectRefs = useRef([]);
  const cardsRef = useRef({});

  const currentProject = projects[activeProjIdx];
  const currentFeature = currentProject.features[activeFeatIdx];
  const totalImages = currentFeature?.images?.length || 0;

  // Auto-play carousel
  useEffect(() => {
    if (totalImages <= 1) return;
    
    const interval = setInterval(() => {
      const nextIndex = (activeImgIdx + 1) % totalImages;
      setActiveImgIdx(nextIndex);
      
      // Auto-advance to next feature when all images are viewed
      if (nextIndex === 0) {
        const isLastFeature = activeFeatIdx === currentProject.features.length - 1;
        if (isLastFeature) {
          const nextProject = (activeProjIdx + 1) % projects.length;
          setTimeout(() => {
            setActiveProjIdx(nextProject);
            setActiveFeatIdx(0);
            setActiveImgIdx(0);
            if (projectRefs.current[nextProject]) {
              projectRefs.current[nextProject].scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          }, 2000);
        } else {
          setTimeout(() => {
            setActiveFeatIdx(activeFeatIdx + 1);
            setActiveImgIdx(0);
          }, 2000);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [totalImages, activeImgIdx, activeFeatIdx, activeProjIdx, currentProject.features.length]);

  // Scroll tracking
  useEffect(() => {
    let ticking = false;
    let lastActiveProject = activeProjIdx;
    let lastActiveFeature = activeFeatIdx;

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

      const featureCards = cardsRef.current[closestProjectIndex] || [];
      featureCards.forEach((card, index) => {
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
        setActiveProjIdx(closestProjectIndex);
        setActiveFeatIdx(0);
        setActiveImgIdx(0);
      } else if (closestFeatureIndex !== lastActiveFeature) {
        lastActiveFeature = closestFeatureIndex;
        setActiveFeatIdx(closestFeatureIndex);
        setActiveImgIdx(0);
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

  const nextImg = (e) => {
    e?.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % totalImages);
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="solution-v6-page">
      <div className="v6-container">
        
        {/* Header */}
        <header className="v6-hero">
          <span className="v6-chip"><FiLayers /> Software Suite</span>
          <h1 className="v6-title">Enterprise Solutions Showcase</h1>
          <p className="v6-subtitle">Explore our comprehensive suite of enterprise solutions</p>
        </header>

        {/* All Projects */}
        {projects.map((project, projectIndex) => (
          <section 
            key={projectIndex} 
            className="v6-project-section"
            ref={(el) => (projectRefs.current[projectIndex] = el)}
          >
            {/* Project Summary */}
            <div className="v6-project-summary">
              <div className="v6-summary-text">
                <span className="v6-project-tag" style={{ color: project.color, background: `${project.color}15` }}>
                  {project.tag}
                </span>
                <h2>
                  {project.title}
                  <span className="v6-project-subtitle" style={{ color: project.color }}>
                    {project.subtitle}
                  </span>
                </h2>
                <p>{project.description}</p>
              </div>
              <div className="v6-stats-row">
                {project.stats.map((st, i) => (
                  <span key={i} className="v6-stat-pill">{st}</span>
                ))}
              </div>
            </div>

            {/* Main Grid Layout */}
            <div 
              className="v6-grid-layout"
              style={{
                "--active-color": project.color,
                "--active-light": project.light,
                "--active-gradient": project.gradient
              }}
            >
              {/* Left Column: Feature Cards */}
              <div className="v6-sidebar">
                {project.features.map((feat, fIdx) => {
                  const isSelected = activeProjIdx === projectIndex && activeFeatIdx === fIdx;
                  return (
                    <div
                      key={feat.id}
                      ref={(el) => {
                        if (!cardsRef.current[projectIndex]) {
                          cardsRef.current[projectIndex] = [];
                        }
                        cardsRef.current[projectIndex][fIdx] = el;
                      }}
                      className={`v6-feature-card ${isSelected ? "active" : ""}`}
                      onClick={() => {
                        setActiveProjIdx(projectIndex);
                        setActiveFeatIdx(fIdx);
                        setActiveImgIdx(0);
                      }}
                    >
                      <div className="v6-card-head">
                        <div className="v6-title-group">
                          <span className="v6-feature-icon">{feat.icon}</span>
                          <h3>{feat.title}</h3>
                        </div>
                        {isSelected && <span className="v6-active-indicator" />}
                      </div>

                      <p className="v6-card-body">{feat.description}</p>

                      {/* MOBILE-ONLY INLINE ACCORDION DRAWER */}
                      {isSelected && (
                        <div className="v6-mobile-preview">
                          <div className="v6-viewport">
                            <img 
                              src={feat.images[activeImgIdx]} 
                              alt={feat.title}
                              className="v6-image" 
                            />
                            {feat.images.length > 1 && (
                              <>
                                <button className="v6-nav-btn prev" onClick={prevImg} aria-label="Previous">
                                  <FiChevronLeft size={18} />
                                </button>
                                <button className="v6-nav-btn next" onClick={nextImg} aria-label="Next">
                                  <FiChevronRight size={18} />
                                </button>
                                <span className="v6-counter">
                                  {activeImgIdx + 1} / {feat.images.length}
                                </span>
                              </>
                            )}
                          </div>

                          {/* Thumbnails Strip on Mobile */}
                          {feat.images.length > 1 && (
                            <div className="v6-thumbs-row">
                              {feat.images.map((img, iIdx) => (
                                <button
                                  key={iIdx}
                                  className={`v6-thumb-pill ${activeImgIdx === iIdx ? "active" : ""}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImgIdx(iIdx);
                                  }}
                                >
                                  <img src={img} alt={`Thumb ${iIdx + 1}`} />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

              {/* DESKTOP/LAPTOP STICKY STAGE */}
              <div className="v6-stage">
                <div className="v6-stage-header">
                  <h3 style={{ color: project.color }}>{currentFeature.title}</h3>
                  <div className="v6-tags-row">
                    {currentFeature.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="v6-tag" style={{ color: project.color, background: `${project.color}10` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="v6-viewport">
                  <img 
                    src={currentFeature.images[activeImgIdx]} 
                    alt={currentFeature.title} 
                    className="v6-image"
                  />

                  {totalImages > 1 && (
                    <>
                      <button className="v6-nav-btn prev" onClick={prevImg} aria-label="Previous">
                        <FiChevronLeft size={20} />
                      </button>
                      <button className="v6-nav-btn next" onClick={nextImg} aria-label="Next">
                        <FiChevronRight size={20} />
                      </button>
                      <span className="v6-counter">
                        {activeImgIdx + 1} / {totalImages}
                      </span>
                    </>
                  )}
                </div>

                {/* Thumbnails Strip */}
                {totalImages > 1 && (
                  <div className="v6-thumbs-row">
                    {currentFeature.images.map((imgSrc, i) => (
                      <button
                        key={i}
                        className={`v6-thumb-pill ${activeImgIdx === i ? "active" : ""}`}
                        onClick={() => setActiveImgIdx(i)}
                      >
                        <img src={imgSrc} alt={`Thumb ${i + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </section>
        ))}

      </div>
    </div>
  );
}

export default SolutionV6;