/*
===================================
IMPORT CSS
===================================
*/
import "./CTA.css";

/*
===================================
IMPORT REACT ROUTER LINKS
===================================
*/
import { Link } from "react-router-dom";

/*
===================================
IMPORT ICONS
===================================
*/
import { FaWhatsapp } from "react-icons/fa";

/*
===================================
CTA COMPONENT
===================================
*/
function CTA() {
  // WhatsApp destination connection path string
  const whatsappUrl = "https://wa.me/919898711229?text=Hi%20Craftcore!%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <section className="cta section-space">

      {/* BACKGROUND ORBS */}
      <div className="cta-orb cta-orb-1"></div>
      <div className="cta-orb cta-orb-2"></div>
      <div className="cta-orb cta-orb-3"></div>

      {/* CONTAINER */}
      <div className="cta-container">

        {/* ANIMATED BORDER */}
        <div className="cta-border"></div>

        {/* CONTENT */}
        <div className="cta-content">

          {/* HEADING */}
          <h3 className="cta-title">
            Looking to Build, Scale or Optimize <br />
            Your Digital Product?
          </h3>

          {/* BUTTONS */}
          <div className="cta-buttons">

            {/* CONNECTED: Redirects the browser directly to your calendar date picker route */}
            <Link 
              to="/book-call" 
              className="primary-btn cta-primary-btn"
              style={{ textDecoration: 'none' }}
            >
              BOOK CONSULTATION
            </Link>

            {/* CONNECTED: Forwards the browser tracking to your direct WhatsApp message thread */}
            <a 
              href={whatsappUrl}
              className="secondary-btn cta-secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <FaWhatsapp />
              CHAT ON WHATSAPP
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;