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
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

/*
===================================
CTA COMPONENT
===================================
*/
function CTA() {
  // WhatsApp destination connection path string
  const whatsappUrl = "https://wa.me/919898711229?text=Hi%20Craftcore!%20I'd%20like%20to%20schedule%20an%20IT%20assessment%20for%20my%20business.";

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

          {/* HEADING - Updated */}
          <h3 className="cta-title">
            Ready to Put Your IT Infrastructure to Work?
          </h3>

          {/* BODY - Updated */}
          <p className="cta-description">
            Book your free IT assessment and find out exactly how we can help you build, automate and secure your business technology.
          </p>

          {/* BUTTONS */}
          <div className="cta-buttons">

            {/* CTA 1 - Updated */}
            <Link 
              to="https://booking.techrometric.com/appointments/craftcore" 
              className="primary-btn cta-primary-btn"
              style={{ textDecoration: 'none' }}
            >
              BOOK FREE IT ASSESSMENT
            </Link>

            {/* CTA 2 - Updated */}
            <a 
              href={whatsappUrl}
              className="secondary-btn cta-secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <FaWhatsapp />
              CHAT WITH OUR EXPERTS
            </a>

          </div>

          {/* MICRO-COPY - Updated */}
          <p className="cta-note">
            Fast response - we'll get back to you within 24 hours
          </p>

        </div>

      </div>

    </section>
  );
}

export default CTA;