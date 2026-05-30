/*
===================================
IMPORT CSS
===================================
*/
import "./Industries.css";

/*
===================================
IMPORT ICONS
===================================
*/
import {
  FaBuilding,
  FaIndustry,
  FaLayerGroup,
  FaHeartbeat,
  FaStore,
  FaGraduationCap,
} from "react-icons/fa";

/*
===================================
INDUSTRIES DATA
===================================
*/

const industriesData = [
  {
    icon: <FaBuilding />,
    title: "PROPTECH",
    description:
      "Digital solutions transforming real estate and property experiences.",
  },

  {
    icon: <FaIndustry />,
    title: "MANUFACTURING",
    description:
      "Smart connected systems driving efficiency and operational excellence.",
  },

  {
    icon: <FaLayerGroup />,
    title: "SAAS",
    description:
      "Scalable cloud-native platforms built for growth and agility.",
  },

  {
    icon: <FaHeartbeat />,
    title: "HEALTHCARE",
    description:
      "Technology solutions enhancing care, compliance and patient outcomes.",
  },

  {
    icon: <FaStore />,
    title: "MARKETPLACES",
    description:
      "Robust platforms that connect users and accelerate business growth.",
  }
];

/*
===================================
INDUSTRIES COMPONENT
===================================
*/

function Industries() {
  return (
    <section className="industries section-space">
      <div className="container">
        {/* HEADER */}
        <div className="industries-header">
          <span className="section-tag">
            WHO WE SERVE
          </span>

          <h2 className="section-title">
            Industries We Power
          </h2>

          <p className="section-description">
            Domain expertise across high-growth industries requiring reliable,
            scalable and business-focused technology solutions.
          </p>
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="industries-scroll">
          {industriesData.map((item, index) => (
            <div
              className="industry-card"
              key={index}
            >
              {/* LIGHT EFFECT */}
              <div className="card-light"></div>

              {/* ICON */}
              <div className="industry-icon">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="card-title">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="card-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
===================================
EXPORT COMPONENT
===================================
*/

export default Industries;