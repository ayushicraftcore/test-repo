import "./Technologies.css";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiNestjs,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiGooglecloud,
  SiKubernetes,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";

const technologiesData = [
  {
    title: "FRONTEND",
    items: [
      { icon: <FaReact /> },
      { icon: <SiNextdotjs /> },
      { icon: <FaAngular /> },
      { icon: <FaVuejs /> },
      { icon: <SiTypescript /> },
    ],
  },
  {
    title: "MOBILE",
    items: [
      { icon: <SiFlutter /> },
      { icon: <FaReact /> },
      { icon: <SiKotlin /> },
      { icon: <SiSwift /> },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { icon: <FaNodeJs /> },
      { icon: <SiNestjs /> },
      { icon: <FaPython /> },
      { icon: <FaJava /> },
      { icon: <SiGo /> },
    ],
  },
  {
    title: "DATABASE",
    items: [
      { icon: <SiPostgresql /> },
      { icon: <SiMongodb /> },
      { icon: <SiMysql /> },
      { icon: <SiRedis /> },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { icon: <SiOpenai /> },
      { icon: <SiTensorflow /> },
      { icon: <SiPytorch /> },
      { icon: <SiHuggingface /> },
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    items: [
      { icon: <FaAws /> },
      { icon: <SiGooglecloud /> },
      { icon: <FaMicrosoft /> },
      { icon: <FaDocker /> },
      { icon: <SiKubernetes /> },
    ],
  },
];

function Technologies() {
  return (
    <section className="technologies section-space">
      <div className="technologies-header container">
        <span className="section-tag">WHAT WE USE</span>
        <h2 className="section-title">Technologies We Build With</h2>
        <p className="section-description">
          Advanced tools and frameworks enabling secure, scalable and
          business-driven technology solutions.
        </p>
        <br/>
      </div>

      <div className="technologies-grid container">
        {technologiesData.map((tech, index) => (
          <div className="technology-card" key={index}>
            <div className="technology-title">
              <span className="title-line"></span>
              <h3 className="card-title">{tech.title}</h3>
            </div>

            <div className="technology-icons">
              {tech.items.map((item, i) => (
                <div key={i} className="tech-icon">
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;