/*
===================================
IMPORT CSS
===================================
*/
import "./CTA.css";

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

            Looking to Build, Scale or Optimize
            Your Digital Product?

          </h3>

          {/* BUTTONS */}
          <div className="cta-buttons">

            <button className="primary-btn cta-primary-btn">

              BOOK CONSULTATION

            </button>

            <button className="secondary-btn cta-secondary-btn">

              <FaWhatsapp />

              CHAT ON WHATSAPP

            </button>

          </div>

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

export default CTA;