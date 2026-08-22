import React, { useState, useEffect, useRef } from "react";
import "./SolutionV4.css";
import {
  FiGrid, FiTarget, FiTrendingUp, FiUsers, FiDollarSign,
  FiBriefcase, FiChevronLeft, FiChevronRight, FiSmartphone,
  FiClock, FiLayers, FiArrowUp
} from "react-icons/fi";

const project1Features = [
  {
    id: 1,
    icon: <FiTarget />,
    label: "Goal Tracking",
    title: "Keep Every Team Aligned on Goals & OKRs",
    description: "When projects span multiple teams, status updates get scattered across emails, spreadsheets, and meetings. Define goals and OKRs in one place, track progress in real time, and automate milestone updates—so you always know if you're on track without chasing people for answers.",
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
    title: "Cut Time-to-Hire with Recruitment Analytics",
    description: "Hiring bottlenecks cost you time and strong candidates. See which pipeline stages slow you down, which sources deliver quality applicants, and how long roles stay open. This recruitment performance dashboard turns hiring data into decisions that shorten time-to-hire and improve offer acceptance.",
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
    title: "Never Lose a Lead Again with Built-In CRM",
    description: "Leads slip through the cracks when deals live in spreadsheets and follow-ups depend on memory. This CRM software tracks every lead, visualizes your sales pipeline, and shows which activities actually move deals forward—so your team closes more without losing context.",
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
    title: "See Where Recovery Stands, Down to the Account",
    description: "Outstanding payments tie up cash flow and recovery efforts stall without visibility. Track delinquent accounts, monitor recovery rates, reconcile bank transactions, and measure agent performance—so you know exactly where collections stand and where to focus next.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136408/Dashboard_bnod2n.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136407/Dashboard_Dark_irjhzo.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785408466/Bank_Light_vgasdy.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136406/Bank_ebj4st.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136409/Defaulter_cy2p7h.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785408467/defaulter_dark_zh54bf.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136408/Permission_izu9xk.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785408466/Permission_Dark_k41k4r.png"
    ],
    tags: ["Recovery Analytics", "Bank Reconciliation", "Defaulter Tracking", "Team Performance"]
  },
  {
    id: 2,
    icon: <FiUsers />,
    label: "Agent Dashboard",
    title: "Give Agents a Clear List, Not Guesswork",
    description: "Agents waste time figuring out who to call next and what was already promised. Get a prioritized task list, log every call, set follow-up reminders, and receive notifications—so your team stays productive without manual coordination or missed commitments.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785411945/Dashboard_L_z4vlvh.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136519/dashboard_riiznw.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785411961/My_Cases_L_ktqlop.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785411983/My_cases_d_how513.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785411961/Daily_Task_L_c1jzns.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785411964/Daily_task_d_medcgn.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785411957/Notification_L_pf6hv9.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785411971/Notification_D_ertyi8.png"
    ],
    tags: ["Task Management", "Call Logging", "Follow-ups", "Notifications"]
  },
  {
    id: 3,
    icon: <FiSmartphone />,
    label: "Mobile App",
    title: "Keep Field Collections Moving from Any Location",
    description: "Field agents need access to cases and tasks even when they're away from their desk. This collection agency software lets agents manage cases, update daily tasks, log customer interactions, and sync in real time—so recovery work continues without delays or data gaps.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136693/dashboard_pd5net.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785413018/Dashboard_m_mhna4i.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785136694/my_cases_hjakqe.avif",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785413029/my_cases_ehohdn.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785413018/daily_task_x2ep8i.png",
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
    title: "Get Complete Visibility Into Textile Operations",
    description: "Production delays and inventory shortages hit margins when you can't see what's happening on the floor. Monitor inventory levels, track production progress, manage job work, and view financial insights in real time—so you can act before bottlenecks become costly.",
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
    title: "Keep Customer, Vendor & Product Data Consistent",
    description: "Inconsistent master data causes errors in orders, procurement, and reporting. This textile inventory management system centralizes customers, employees, products, vendors, and warehouses in one place—so every transaction uses the same accurate information and production runs without data-related stoppages.",
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
    title: "Get the Reports You Need Before Problems Compound",
    description: "Monthly reports arrive too late to fix problems that already happened. Generate on-demand reports for grey material procurement, inventory status, job work, mill processes, and payments—so you can spot trends, audit textile operations, and make decisions with current data.",
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

const project4Features = [
  {
    id: 1,
    icon: <FiUsers />,
    label: "Employee Management",
    title: "Answer Workforce Questions Without Pulling Reports",
    description: "HR teams lose hours pulling data from attendance logs, payroll sheets, and timesheets. Get workforce analytics, income tracking, attendance monitoring, and payroll summaries in one view—so you can answer leadership questions instantly and focus on people, not data entry.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785733995/Dashboard_ztc5ig.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785733985/Income_y4mefd.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785733985/Attandance_uauba4.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785733986/Payrol_gkbipd.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785733985/Time_Sheet_Report_dkyhtm.png"
    ],
    tags: ["HR Dashboard", "Income Analytics", "Attendance Tracking", "Payroll Management", "Timesheet Reports"]
  },
  {
    id: 2,
    icon: <FiClock />,
    label: "Payroll & Roles",
    title: "Run Payroll on Time, Every Time",
    description: "Manual payroll calculations lead to errors, delays, and compliance risk. This payroll management software automates salary settings, generates payslips, manages employee profiles, and controls access with role-based permissions—so payroll runs on schedule and employees get accurate payments every time.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734292/Manage_salary_nfwyfg.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734293/payslip_nhcami.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734293/salary_set_dvvtq8.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734293/EMP_profile_trpadu.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734294/user_je2lmt.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734294/Manage_roles_jagwlj.png"
    ],
    tags: ["Salary Management", "Payslip Generation", "Employee Profiles", "User Management", "Role-Based Access"]
  },
  {
    id: 3,
    icon: <FiTrendingUp />,
    label: "Performance Reviews",
    title: "Base Reviews on Real Contributions, Not Recency",
    description: "Annual reviews feel disconnected from day-to-day work when goals and KPIs aren't tracked continuously. Create custom evaluation forms, set KPI indicators, manage appraisal cycles, and track goals—so performance conversations are grounded in actual employee performance management, not guesswork.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734442/Create_form_elamr7.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734444/Indicator_ubo99t.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734445/Time_sheet_yxwtpi.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734444/Appresial_n5lxon.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734445/Goal_Tracking_oyvuzy.png"
    ],
    tags: ["Evaluation Forms", "KPI Indicators", "Timesheet Management", "Appraisal Cycles", "Goal Tracking"]
  }
];

const project5Features = [
  {
    id: 1,
    icon: <FiTarget />,
    label: "Dashboard Overview",
    title: "Know Which Slots Are Going Unused",
    description: "You can't optimize scheduling without knowing which time slots, services, or staff are underutilized. Track appointment metrics, booking trends, and user activity with role-based access—so you can adjust capacity, reduce no-shows, and get more from every available hour.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734796/Appointment_Dashboard_1_nko7tm.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734796/Appointment_Dashboard_2_cvihy5.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734785/Dashboard_1_eoi05i.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734792/Dashboard_2_qeiqiy.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734787/Users_zgb3ql.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734788/Roles_tshgdh.png"
    ],
    tags: ["Appointment Analytics", "Booking Trends", "User Management", "Role-Based Access", "Performance Metrics"]
  },
  {
    id: 2,
    icon: <FiGrid />,
    label: "Business Management",
    title: "Scale to New Locations Without Adding Chaos",
    description: "Managing multiple locations or service lines becomes chaotic when each one runs on a different system. This multi-location appointment scheduling tool lets you create business profiles, configure services, manage customers, and plan resources across locations—so operations stay consistent as you scale.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734766/Create_Business_an1vf7.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734785/Manage_Business_icbhvh.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734762/Manage_Business_2_sdj2fx.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734769/Manage_Business_3_qbx1nj.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734756/Manage_Business_4_b2s4ki.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734747/Manage_Business_5_guocvs.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734741/Customer_sww87v.png"
    ],
    tags: ["Business Creation", "Multi-Location Support", "Service Configuration", "Customer Management", "Resource Planning"]
  },
  {
    id: 3,
    icon: <FiBriefcase />,
    label: "Settings & Calendar",
    title: "Stop Double Bookings Before They Happen",
    description: "Double bookings and scheduling conflicts frustrate both staff and clients. Configure appointment rules, integrate calendars, set system preferences, and customize the client portal—so bookings happen smoothly, conflicts are prevented, and your calendar management stays under control.",
    images: [
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734736/Appoinments_qdeks2.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734794/Appointments_Calender_bbbqqr.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734756/Settings_1_irprme.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734780/Settings_2_h4lhco.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734755/Settings_3_nb6gqn.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734762/settings_4_ryfwtp.png",
      "https://res.cloudinary.com/dpxl6jy4t/image/upload/v1785734730/Settings_5_gx75jw.png"
    ],
    tags: ["Appointment Settings", "Calendar Integration", "System Preferences", "Client Portal", "Configuration Management"]
  }
];

const projects = [
  {
    id: 1,
    title: "CraftCore ERP",
    subtitle: "One Platform for Projects, Hiring & Sales",
    tag: "PROJECT 01",
    icon: <FiGrid />,
    description: "When growth outpaces your tools, project plans, hiring pipelines, and sales data end up scattered across separate systems, and leadership loses sight of what's actually happening. CraftCore ERP is a business management software that brings OKR tracking, recruitment analytics, CRM software, and project management together in one connected platform—so your teams stop switching between apps, manual reporting drops, and decisions get made on current information instead of guesswork. As a custom ERP solution, it's built around the modules you actually use.",
    features: project1Features,
    stats: ["Active Modules: 4", "Users: 256", "Integrations: 12"],
    color: "#4f46e5",
    light: "#e0e7ff",
    gradient: "linear-gradient(135deg, #4f46e5, #7C3AED)"
  },
  {
    id: 2,
    title: "Collection CRM",
    subtitle: "Recover More With Less Manual Chasing",
    tag: "PROJECT 02",
    icon: <FiDollarSign />,
    description: "Recovery rates slip when agents don't know which accounts to call next and managers can't see what's actually working. Collection CRM is a debt collection CRM that connects admin oversight, agent workflows, and field operations, so overdue accounts get prioritized automatically, calls get logged without extra admin work, and recovery managers can see exactly where cash is stuck. Built for collection agencies that need field collection management alongside office-based tracking.",
    features: project2Features,
    stats: ["Active Cases: 1.2K", "Recovery Rate: 78%", "Agents: 45"],
    color: "#2563eb",
    light: "#dbeafe",
    gradient: "linear-gradient(135deg, #2563eb, #1D4ED8)"
  },
  {
    id: 3,
    title: "Textile ERP",
    subtitle: "Real-Time Control Over Your Production Floor",
    tag: "PROJECT 03",
    icon: <FiBriefcase />,
    description: "Textile manufacturing margins depend on tight control over inventory, production, and job work—but when that data lives in disconnected spreadsheets, delays and stockouts hit before you can react. Textile ERP is textile manufacturing software that gives you real-time production management, centralized master data, and on-demand reporting, so you can catch bottlenecks early, reduce waste from mismatched grey material stock, and keep orders moving on schedule.",
    features: project3Features,
    stats: ["Production: 2.8K", "Inventory: 15K", "Reports: 24"],
    color: "#059669",
    light: "#d1fae5",
    gradient: "linear-gradient(135deg, #059669, #047857)",
  },
  {
    id: 4,
    title: "HRM System",
    subtitle: "Less Admin Work, More Time for Your People",
    tag: "PROJECT 04",
    icon: <FiUsers />,
    description: "HR becomes a bottleneck when attendance, payroll, and performance tracking are handled manually across disconnected sheets. This HR management software automates core HR processes, centralizes employee data, and supports continuous performance management—so your team spends less time on data entry and leadership questions get answered instantly instead of after a week of pulling reports.",
    features: project4Features,
    stats: ["Employees: 340", "Departments: 12", "Reviews: 98%"],
    color: "#12d800",
    light: "#effce7",
    gradient: "linear-gradient(135deg, #56ec48, #059669)"
  },
  {
    id: 5,
    title: "Appointment Scheduler",
    subtitle: "Fill Every Slot, Prevent Every Conflict",
    tag: "PROJECT 05",
    icon: <FiClock />,
    description: "Missed bookings and double-scheduled slots cost revenue and damage client trust. Appointment Scheduler is an online appointment booking system that combines analytics, multi-location management, and client self-service booking—so you fill available capacity, prevent scheduling conflicts, and give clients a smooth, professional booking experience from the first click.",
    features: project5Features,
    stats: ["Bookings: 1.8K", "Resources: 25", "Clients: 850"],
    color: "#8b5cf6",
    light: "#ede9fe",
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  }
];

function SolutionV6() {
  const [activeProjIdx, setActiveProjIdx] = useState(0);
  const [activeFeatIdx, setActiveFeatIdx] = useState(0);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const projectRefs = useRef([]);
  const cardsRef = useRef({});

  const currentProject = projects[activeProjIdx];
  const currentFeature = currentProject.features[activeFeatIdx];
  const totalImages = currentFeature?.images?.length || 0;

  // Scroll tracking - update based on scroll position
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

      // Update if values changed
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
      // Show/hide back to top button
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400);

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

  const handleFeatureClick = (projectIndex, fIdx) => {
    // If clicking on a different project, reset to first image
    if (projectIndex !== activeProjIdx) {
      setActiveProjIdx(projectIndex);
      setActiveFeatIdx(fIdx);
      setActiveImgIdx(0);
    } else {
      // If clicking on a different feature in the same project
      setActiveFeatIdx(fIdx);
      setActiveImgIdx(0);
    }
  };

  const handleThumbnailClick = (idx) => {
    setActiveImgIdx(idx);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="solution-v6-page">
      <div className="v6-container">
        
        {/* Header */}
        <header className="v6-hero">
          <span className="section-tag">Software Suite</span>
          <h1 className="v6-title">Built for the problems you face every day</h1>
          <p className="v6-subtitle">Five solutions. Real business challenges. Clear outcomes.</p>
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
                      onClick={() => handleFeatureClick(projectIndex, fIdx)}
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
                                    handleThumbnailClick(iIdx);
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
                        onClick={() => handleThumbnailClick(i)}
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

      {/* BACK TO TOP BUTTON */}
      <button 
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>

    </div>
  );
}

export default SolutionV6;