import "./Contact.css";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser"; // Imported EmailJS SDK

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Web & SaaS Development",
    message: ""
  });
  const [isSending, setIsSending] = useState(false); // Tracks form sending state
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    // FIXED: Maps your state parameters straight into the universal template placeholders
    const templateParams = {
      submission_type: "General Business Inquiry",
      name: formData.name,
      email: formData.email,
      label_one: "Phone Number:",
      value_one: formData.phone || "Not Provided",
      label_two: "Company Name:",
      value_two: formData.company || "Not Provided",
      label_three: "Requested Service:",
      value_three: formData.subject,
      message: formData.message
    };

    emailjs
      .send(
        "service_eabxn4m",        // Reused your working Service ID
        "template_auji6lb",       // Universal Template ID
        templateParams,
        "phlp5XqbtEITeOSrS"       // Your working Public Key
      )
      .then(
        (response) => {
          console.log("Contact form sync success!", response.status, response.text);
          setIsSending(false);
          setFormSubmitted(true);
        },
        (error) => {
          console.error("Contact form transmission failed...", error);
          setIsSending(false);
          alert("Something went wrong with the sync framework. Please try again.");
        }
      );
  };

  return (
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
          
          {/* LEFT SIDE: SHORT & SORTED CONTACT INFO */}
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
                <h3>+91 90817 11229</h3>
                <p>Mon – Sat, 10:00 AM to 6:00 PM IST</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="info-node-card card-hover">
              <div className="info-icon-wrapper">
                <FiMapPin />
              </div>
              <div className="info-node-details">
                <span>OUR OFFICE</span>
                <h3>OFFICE NO.: 202, “OM SAI” Apartment</h3>
                <p>Masjid Road Adajan Gaam, Surat (GUJARAT) 395009</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: CONSULTATION FORM */}
          <div className="contact-form-panel">
            <div className="contact-form-box">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-core-form">
                  <div className="contact-box-header">
                    <h2>Send a Message</h2>
                  </div>

                  <div className="contact-grid-layout">
                    <div className="contact-field-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Ayushi"
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g., Craftcore"
                      />
                    </div>

                    <div className="contact-field-group full-width-field">
                      <label htmlFor="subject">What do you need help with? *</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option value="Web & SaaS Development">Web & SaaS Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI & Process Automation">AI & Process Automation</option>
                        <option value="Cloud Native & DevOps">Cloud Native & DevOps</option>
                        <option value="UI/UX Engineering Core">UI/UX Engineering Core</option>
                      </select>
                    </div>

                    <div className="contact-field-group full-width-field">
                      <label htmlFor="message">Project Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project goals or requirements..."
                      />
                    </div>
                  </div>

                  <button type="submit" className="contact-transmit-btn" disabled={isSending}>
                    <span className="transmit-btn-text">
                      {isSending ? "SENDING..." : "SEND MESSAGE"}
                    </span>
                    {!isSending && <FiSend className="transmit-btn-icon" />}
                  </button>

                </form>
              ) : (
                <div className="contact-success-hud">
                  <FiCheckCircle className="contact-success-icon" />
                  <h2>Message Sent Successfully!</h2>
                  <p className="card-text">
                    Thank you, <strong>{formData.name}</strong>. Your request has been received. Our team will review your requirements and reach out shortly.
                  </p>
                  <button 
                    className="contact-transmit-btn"
                    onClick={() => { setFormSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", subject: "Web & SaaS Development", message: "" }); }}
                    style={{ maxWidth: "240px", margin: "10px auto 0" }}
                  >
                    <span className="transmit-btn-text">Send Another Message</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;