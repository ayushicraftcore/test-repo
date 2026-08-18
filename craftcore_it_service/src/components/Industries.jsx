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
    description: "IT solutions for plant heads and operations leaders managing 50-2,500 employees and ₹50-2,000 Cr turnover — built to keep your production running smoothly.",
  },
  {
    icon: <FaTshirt />,
    title: "TEXTILE & APPAREL",
    description: "ERP and production management systems designed for textile manufacturers and apparel supply chains — from raw materials to finished goods.",
  },
  {
    icon: <FaBoxes />,
    title: "SUPPLY CHAIN & LOGISTICS",
    description: "End-to-end tracking and fleet management for operations teams managing complex logistics networks — so you always know where your goods are.",
  },
  {
    icon: <FaUsers />,
    title: "MID-MARKET ENTERPRISES",
    description: "Custom IT infrastructure and technology solutions for CIOs and IT managers at growing companies — built to scale as you grow.",
  },
  {
    icon: <FaBuilding />,
    title: "PROCESS INDUSTRIES",
    description: "Automation and ERP solutions for chemical, pharmaceutical, and FMCG manufacturers — streamlining operations from batch to finished product.",
  },
  {
    icon: <FaChartLine />,
    title: "GROWING SMES",
    description: "Scalable IT services for SMEs with 50-500 employees looking to modernize their technology stack — without disrupting what already works.",
  }
];

function Industries() {
  return (
    <section className="industries section-space">
      <div className="container">
        <div className="industries-header">
          <span className="section-tag">WHO WE SERVE</span>
          <h2 className="section-title">Built for the Industries You Operate In</h2>
          <p className="section-description">
            We bring deep domain expertise to CIOs, CTOs, IT Managers, Plant Heads, and Operations Leaders at 
            mid-market manufacturing companies — because we understand your challenges, your systems, and your goals.
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