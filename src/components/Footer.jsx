/*
===================================
IMPORT CSS
===================================
*/
import "./Footer.css";

/*
===================================
IMPORT ICONS
===================================
*/
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
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

            <h4>

              QUICK LINKS

            </h4>

            <ul>

              <li>Home</li>

              <li>Services</li>

              <li>Solutions</li>

              <li>About</li>

              <li>Blog</li>

              <li>Contact</li>

              <li>Career</li>

            </ul>

          </div>

          {/* SERVICES */}
          <div className="footer-column">

            <h4>

              SERVICES

            </h4>

            <ul>

              <li>Web & SaaS Development</li>

              <li>Mobile App Development</li>

              <li>AI & Automation</li>

              <li>Cloud & DevOps</li>

              <li>UI/UX Design</li>

              <li>Cybersecurity</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div className="footer-column">

            <h4>

              CONTACT

            </h4>

            <ul className="footer-contact">

              <li>

                <FaEnvelope />

                sales@craftcore.in

              </li>

              <li>

                <FaPhoneAlt />

                +91 98987 11229

              </li>

              <li>

                <FaMapMarkerAlt />

                OFFICE NO.: 202, “OM SAI” Apartment Masjid Road Adajan Gaam, Surat (GUJARAT) 395009

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

/*
===================================
EXPORT COMPONENT
===================================
*/
export default Footer;