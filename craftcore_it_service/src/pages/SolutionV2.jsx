import React, { useState } from "react";
import "./SolutionV2.css";
import {
  FiGrid, FiTarget, FiTrendingUp, FiUsers, FiDollarSign,
  FiBriefcase, FiChevronLeft, FiChevronRight, FiSmartphone,
  FiClock
} from "react-icons/fi";

const project1Features = [
  {
    id: 1,
    icon: <FiTarget />,
    label: "Goal Tracking",
    title: "Project Goal & OKR Management",
    description: "Define, track, and manage project goals and OKRs across all projects. Monitor progress in real-time, automate status updates, and track milestone achievements.",
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
    description: "Track recruitment metrics including candidate pipelines, time-to-hire, source effectiveness, and hiring success rates with interactive dashboards.",
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
    description: "Manage leads, track deals, and nurture customer relationships with a comprehensive CRM system. Visualize sales pipelines and generate detailed reports.",
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

const project2Features = [
  {
    id: 1,
    icon: <FiDollarSign />,
    label: "Admin Dashboard",
    title: "Collection Admin Dashboard",
    description: "Comprehensive admin dashboard for collection management with real-time tracking of outstanding payments, recovery analytics, and team performance metrics.",
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
    description: "Agent-focused dashboard for daily task management, call logging, customer follow-ups, and notification tracking with real-time task assignments.",
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
    description: "Mobile-first collection application for field agents with case management, daily task tracking, and real-time sync for on-the-go operations.",
    images: [
      "/images/collection_mobile/dashboard.avif",
      "/images/collection_mobile/my cases.avif",
      "/images/collection_mobile/daily task.avif"
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
    description: "Real-time operations dashboard for textile manufacturing with inventory monitoring, production tracking, and WIP monitoring across the production lifecycle.",
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
    description: "Centralized master data management for textile operations including customer management, employee records, product catalogs, and vendor tracking.",
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
    description: "Comprehensive textile operations reports including grey material procurement, inventory status, job work reports, and mill process tracking.",
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

const projects = [
  {
    id: 1,
    title: "Craftcore ERP",
    subtitle: "Enterprise Management",
    icon: <FiGrid />,
    description: "A comprehensive enterprise resource planning platform with integrated modules for goals management, recruitment analytics, CRM, and project management.",
    features: project1Features,
    stats: ["Active Modules: 4", "Users: 256", "Integration: 12"],
    color: "#6366f1",
    colorLight: "#e0e7ff"
  },
  {
    id: 2,
    title: "Collection CRM",
    subtitle: "Debt Recovery",
    icon: <FiDollarSign />,
    description: "A comprehensive collection CRM platform for managing debt recovery, agent workflows, and collection analytics across admin, agent, and mobile interfaces.",
    features: project2Features,
    stats: ["Active Cases: 1.2K", "Recovery Rate: 78%", "Agents: 45"],
    color: "#059669",
    colorLight: "#d1fae5"
  },
  {
    id: 3,
    title: "Textile ERP",
    subtitle: "Manufacturing Intelligence",
    icon: <FiBriefcase />,
    description: "A comprehensive textile ERP solution for managing master data, operations, and reporting across the textile manufacturing lifecycle.",
    features: project3Features,
    stats: ["Production: 2.8K", "Inventory: 15K", "Reports: 24"],
    color: "#2563eb",
    colorLight: "#dbeafe"
  }
];

function SolutionV4() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const currentProject = projects[activeProjectIdx];
  const currentFeature = currentProject.features[activeFeatureIdx];
  const totalImages = currentFeature?.images?.length || 0;

  const handleNextImage = () => {
    setActiveImgIdx((prev) => (prev + 1) % totalImages);
  };

  const handlePrevImage = () => {
    setActiveImgIdx((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="solution-v4-page">
      <div className="v4-container">
        
        {/* Header */}
        <header className="v4-hero">
          <span className="v4-badge">Solutions Overview</span>
          <h1 className="v4-title">Enterprise Software Platforms</h1>
          <p className="v4-subtitle">Select a project to explore key features and system interface previews</p>
        </header>

        {/* Project Selection Tabs */}
        <div className="v4-project-tabs">
          {projects.map((proj, idx) => {
            const isActive = activeProjectIdx === idx;
            return (
              <button
                key={proj.id}
                className={`v4-tab-btn ${isActive ? "active" : ""}`}
                style={{
                  "--active-color": proj.color
                }}
                onClick={() => {
                  setActiveProjectIdx(idx);
                  setActiveFeatureIdx(0);
                  setActiveImgIdx(0);
                }}
              >
                <span className="v4-tab-icon">{proj.icon}</span>
                <span>{proj.title}</span>
              </button>
            );
          })}
        </div>

        {/* Layout Grid */}
        <div 
          className="v4-main-grid"
          style={{
            "--active-color": currentProject.color,
            "--active-color-light": currentProject.colorLight
          }}
        >
          {/* Left Column: Summary + Feature List */}
          <div className="v4-sidebar">
            <div className="v4-project-summary">
              <h2>{currentProject.title}</h2>
              <p>{currentProject.description}</p>
              <div className="v4-stats-list">
                {currentProject.stats.map((st, i) => (
                  <span key={i} className="v4-stat-badge">{st}</span>
                ))}
              </div>
            </div>

            {currentProject.features.map((feat, fIdx) => {
              const isFeatActive = activeFeatureIdx === fIdx;
              return (
                <button
                  key={feat.id}
                  className={`v4-feature-item ${isFeatActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveFeatureIdx(fIdx);
                    setActiveImgIdx(0);
                  }}
                >
                  <div className="v4-feature-header">
                    <span className="v4-feature-icon">{feat.icon}</span>
                    <h3>{feat.title}</h3>
                  </div>
                  <p>{feat.description}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Feature Showcase */}
          <div className="v4-showcase">
            <div className="v4-showcase-info">
              <h3>{currentFeature.title}</h3>
              <p>{currentFeature.description}</p>
              <div className="v4-tags-row">
                {currentFeature.tags.map((tg, tIdx) => (
                  <span key={tIdx} className="v4-tag">{tg}</span>
                ))}
              </div>
            </div>

            {/* Main Image Display */}
            <div className="v4-image-container">
              <img
                src={currentFeature.images[activeImgIdx]}
                alt={currentFeature.title}
                className="v4-main-image"
              />

              {totalImages > 1 && (
                <>
                  <button className="v4-arrow-btn prev" onClick={handlePrevImage} aria-label="Previous image">
                    <FiChevronLeft size={20} />
                  </button>
                  <button className="v4-arrow-btn next" onClick={handleNextImage} aria-label="Next image">
                    <FiChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails Strip */}
            {totalImages > 1 && (
              <div className="v4-gallery-strip">
                {currentFeature.images.map((imgSrc, imgI) => (
                  <button
                    key={imgI}
                    className={`v4-thumb-card ${activeImgIdx === imgI ? "active" : ""}`}
                    onClick={() => setActiveImgIdx(imgI)}
                  >
                    <img src={imgSrc} alt={`Thumbnail ${imgI + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default SolutionV4;