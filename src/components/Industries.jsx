import "./Industries.css";
import {
  FaTshirt,
  FaIndustry,
  FaBoxes,
  FaCoins,
  FaTruck
} from "react-icons/fa";

const industriesData = [
  {
    icon: <FaTshirt />,
    title: "TEXTILE ERP",
    description: "Custom production planning, multi-plant inventory tracking and order management.",
  },
  {
    icon: <FaIndustry />,
    title: "MANUFACTURING CRM",
    description: "Smart sales pipelines built for dealer networks and distributor hierarchies.",
  },
  {
    icon: <FaBoxes />,
    title: "SUPPLY CHAIN",
    description: "End-to-end tracking tools to optimize operations and reduce material delays.",
  },
  {
    icon: <FaTruck />,
    title: "LOGISTICS",
    description: "Reliable delivery tracking systems, scheduling and fleet management.",
  }
];

function Industries() {
  return (
    <section className="industries section-space">
      <div className="container">
        <div className="industries-header">
          <span className="section-tag">WHO WE SERVE</span>
          <h2 className="section-title">Industries We Power</h2>
          <p className="section-description">
            Deep domain expertise across sectors requiring reliable, scalable and business-focused technology solutions.
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