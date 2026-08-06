import "./Industries.css";
import {
  FaTshirt,
  FaIndustry,
  FaBoxes,
  FaCoins,
  FaTruck,
  FaUsers,
  FaCog,
  FaChartLine,
  FaBuilding
} from "react-icons/fa";

const industriesData = [
  {
    icon: <FaIndustry />,
    title: "MANUFACTURING",
    description: "IT solutions for Plant Heads and Operations Heads with 50-2,500 employees and ₹50-2,000 Cr turnover.",
  },
  {
    icon: <FaTshirt />,
    title: "TEXTILE & APPAREL",
    description: "ERP and production management systems for textile manufacturers and apparel supply chains.",
  },
  {
    icon: <FaBoxes />,
    title: "SUPPLY CHAIN & LOGISTICS",
    description: "End-to-end tracking and fleet management for Operations Heads managing complex logistics.",
  },
  {
    icon: <FaUsers />,
    title: "MID-MARKET ENTERPRISES",
    description: "Custom IT infrastructure and technology solutions for CIOs and IT Managers at growing companies.",
  },
  {
    icon: <FaBuilding />,
    title: "PROCESS INDUSTRIES",
    description: "Automation and ERP solutions for chemical, pharmaceutical, and FMCG manufacturers.",
  },
  {
    icon: <FaChartLine />,
    title: "GROWING SMES",
    description: "Scalable IT services for SMEs with 50-500 employees looking to modernize their technology stack.",
  }
];

function Industries() {
  return (
    <section className="industries section-space">
      <div className="container">
        <div className="industries-header">
          <span className="section-tag">WHO WE SERVE</span>
          <h2 className="section-title">Industries & Roles We Serve</h2>
          <p className="section-description">
            Deep domain expertise for CIOs, CTOs, IT Managers, Plant Heads, and Operations Heads at 
            mid-market manufacturing companies with 50-2,500 employees and ₹50-2,000 Cr turnover.
          </p>
        </div>

        <div className="industries-scroll">
          {industriesData.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="card-light" />
              <div className="industry-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;