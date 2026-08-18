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

          {/* HEADING */}
          <h3 className="cta-title">
            Ready to Finally Get Your IT Systems Right?
          </h3>

          <p className="cta-description">
            Let's talk about what's not working, what needs to scale, and how we can help. 
            Book a free consultation — no pressure, just real solutions.
          </p>

          {/* BUTTONS */}
          <div className="cta-buttons">

            {/* CONNECTED: Redirects to contact page */}
            <Link 
              to="https://booking.techrometric.com/appointments/craftcore" 
              className="primary-btn cta-primary-btn"
              style={{ textDecoration: 'none' }}
            >
              BOOK FREE CONSULTATION
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
              CHAT WITH OUR EXPERTS
            </a>

          </div>

          {/* SHORT FORM NOTE */}
          <p className="cta-note">
            We'll get back to you within 24 hours — no spam, no pressure.
          </p>

        </div>

      </div>

    </section>
  );
}

export default CTA;