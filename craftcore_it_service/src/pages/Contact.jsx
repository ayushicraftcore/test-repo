import "./Contact.css";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <div className="container">
          
          {/* HERO HEADER */}
          <header className="contact-hero">
            <span className="section-tag">GET IN TOUCH</span>
            <h1 className="section-title contact-hero-title">
              Let’s Connect & Build <br />
              <span className="gradient-text">Your Next Project</span>
            </h1>
            <p className="section-description contact-hero-desc">
              Have a project in mind or need expert technical help? 
              Send us a message or reach out directly.
            </p>
          </header>

          {/* TWO COLUMN GRID */}
          <div className="contact-split-wrapper">
            
            {/* LEFT SIDE: CONTACT INFO PANEL */}
            <div className="contact-info-panel">
              
              {/* EMAIL */}
              <div className="info-node-card card-hover">
                <div className="info-icon-wrapper">
                  <FiMail />
                </div>
                <div className="info-node-details">
                  <span>EMAIL US</span>
                  <h3>sales@craftcore.in</h3>
                  <p>We reply within 12 business hours.</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="info-node-card card-hover">
                <div className="info-icon-wrapper">
                  <FiPhone />
                </div>
                <div className="info-node-details">
                  <span>CALL US</span>
                  <h3>+91 98987 11229</h3>
                  <p>Mon – Sat, 10:00 AM to 6:00 PM IST</p>
                </div>
              </div>

              {/* LOCATION WITH ACTION BUTTON */}
              <div className="info-node-card card-hover info-node-card--stacked">
                <div className="info-node-top">
                  <div className="info-icon-wrapper">
                    <FiMapPin />
                  </div>
                  <div className="info-node-details">
                    <span>OUR OFFICE</span>
                    <h3>Office: Vadodara, Gujarat</h3>
                    <p>Serviceable Areas: Surat, Ahmedabad, Anand, Vadodara</p>
                  </div>
                </div>

                {/* SEND MESSAGE / APPOINTMENT ACTION BUTTON */}
                <a
                  href="https://booking.techrometric.com/appointments/craftcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-transmit-btn office-appointment-btn"
                  style={{ textDecoration: "none" }}
                >
                  <span className="transmit-btn-text">GET IN TOUCH</span>
                </a>
              </div>

            </div>

            {/* RIGHT SIDE: EMBEDDED GOOGLE MAP (VADODARA) */}
            <div className="contact-map-panel">
              <div className="contact-map-box">
                <iframe
                  title="Craftcore Office Location - Vadodara"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118141.4423420847!2d73.10304618335832!3d22.324677708573138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contact-map-iframe"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;