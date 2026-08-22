import Carousel from './Carousel';
import './Industries.css';
import {
  FaTshirt,
  FaIndustry,
  FaBoxes,
  FaUsers,
  FaChartLine,
  FaBuilding
} from 'react-icons/fa';

const industriesData = [
  {
    id: 1,
    icon: <FaIndustry />,
    title: 'MANUFACTURING',
    description:
      'If you’re a Plant Head or Operations Head running a company with 50–2,500 employees and ₹50–2,000 Cr in turnover, we build the IT solutions that keep your operation running.'
  },
  {
    id: 2,
    icon: <FaTshirt />,
    title: 'TEXTILE & APPAREL',
    description:
      'Running a textile manufacturing or apparel supply chain business? We build the ERP and production management systems that keep your floor and your supply chain in sync.'
  },
  {
    id: 3,
    icon: <FaBoxes />,
    title: 'SUPPLY CHAIN & LOGISTICS',
    description:
      'If you’re an Operations Head juggling complex logistics, you get end-to-end tracking and fleet management built around your routes, not a generic template.'
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: 'MID-MARKET ENTERPRISES',
    description:
      'CIOs and IT Managers at growing companies get custom IT infrastructure and technology solutions built for where the business is headed next, not where it was.'
  },
  {
    id: 5,
    icon: <FaBuilding />,
    title: 'PROCESS INDUSTRIES',
    description:
      'Chemical, pharmaceutical and FMCG manufacturers get automation and ERP solutions built around the compliance and process demands of your industry.'
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: 'GROWING SMES',
    description:
      'If you’re an SME with 50–500 employees ready to modernize your technology stack, you get IT services built to scale with you, not IT services you’ll outgrow in a year.'
  }
];

export default function Industries() {
  return (
    <section className="industries section-space">
      <div className="container">
        <div className="industries-header">
          <span className="section-tag">WHO WE SERVE</span>
          <h2 className="section-title">Who We Build For</h2>
          <p className="section-description">
            Whether you’re a CIO, CTO, IT Manager, Plant Head or Operations Head at a mid-market manufacturing company - somewhere between 50 and 2,500 employees, ₹50–2,000 Cr in turnover - we’ve already solved the problems you’re facing.
          </p>
        </div>

        <div className="carousel-wrapper">
          <Carousel
            items={industriesData}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
}
