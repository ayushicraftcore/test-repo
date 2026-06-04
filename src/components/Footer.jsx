/*
===================================
IMPORT CSS
===================================
*/
import "./Footer.css";

/*
===================================
IMPORT REACT ROUTER NAV LINK LAYER
===================================
*/
import { Link } from "react-router-dom";

/*
===================================
IMPORT ICONS
===================================
*/
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

/*
===================================
IMPORT LOGO
===================================
*/
import footerLogo from "../assets/logo.png";

/*
===================================
FOOTER COMPONENT
===================================
*/
function Footer() {
  return (
    <footer className="footer">

      {/* TOP GRADIENT LINE */}
      <div className="footer-top-line"></div>

      {/* BACKGROUND BLURS */}
      <div className="footer-blur footer-blur-1"></div>
      <div className="footer-blur footer-blur-2"></div>

      {/* CONTAINER */}
      <div className="container">

        {/* BRAND SECTION */}
        <div className="footer-brand">
          
          {/* LOGO */}
          <div className="footer-logo-wrap">
            <div className="footer-logo-bg"></div>
            <img
              src={footerLogo}
              alt="Craftcore"
              className="footer-logo"
            />
          </div>

          {/* TITLE */}
          <h1 className="footer-title">
            CRAFTCORE
          </h1>
        </div>

        {/* FOOTER LINKS */}
        <div className="footer-grid">

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <Link to="/home" className="footer-nav-link">Home</Link>
              </li>
              <li>
                <Link to="/service" className="footer-nav-link">Services</Link>
              </li>
              <li>
                <Link to="/Solution" className="footer-nav-link">Solutions</Link>
              </li>
              <li>
                <Link to="/About" className="footer-nav-link">About</Link>
              </li>
              <li>
                <Link to="/Blog" className="footer-nav-link">Blog</Link>
              </li>
              <li>
                <Link to="/Contact" className="footer-nav-link">Contact</Link>
              </li>
              <li>
                <Link to="/Career" className="footer-nav-link">Career</Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li>Web & SaaS Development</li>
              <li>Mobile App Development</li>
              <li>AI & Automation</li>
              <li>Cloud & DevOps</li>
              <li>UI/UX Design</li>
              <li>Cybersecurity</li>
            </ul>
          </div>

          {/* CONTACT & SOCIAL DECK */}
          <div className="footer-column">
            <h4>CONTACT</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:sales@craftcore.in" className="contact-action-link">
                  sales@craftcore.in
                </a>
              </li>
              <li>
                <FaPhoneAlt />
                <a href="tel:+919898711229" className="contact-action-link">
                  +91 98987 11229
                </a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>
                  OFFICE NO.: 202, “OM SAI” Apartment Masjid Road Adajan Gaam, Surat (GUJARAT) 395009
                </span>
              </li>

              {/* FIXED: Placed as an isolated list node to ensure perfect horizontal alignment */}
              <li className="socials-display-row">
                <div className="footer-socials" style={{ justifyContent: 'flex-start' }}>
                  <a 
                    href="https://in.linkedin.com/company/craftcore-group" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-link linkedin-node"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://www.instagram.com/craftcore_group/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-link instagram-node"
                    aria-label="Instagram Profile"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://www.youtube.com/@Craftcore-777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-link youtube-node"
                    aria-label="YouTube Channel"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © 2026 Craftcore. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;