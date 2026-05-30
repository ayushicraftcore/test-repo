import "./Booking.css";
import { useState, useEffect } from "react";
import { FiCalendar, FiSend, FiCheckCircle, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import emailjs from "@emailjs/browser"; 

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false); 
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatConfirmationDate = (dateString) => {
    if (!dateString) return "";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.message) return;

    setIsSending(true);

    // FIX: These keys now map directly to your {{name}}, {{email}}, {{date}}, and {{message}} template tags
    const templateParams = {
      name: formData.name,
      email: formData.email,
      date: formatConfirmationDate(formData.date), 
      message: formData.message
    };

    emailjs
      .send(
        "service_eabxn4m",   
        "template_b5l0i4u",  
        templateParams,
        "phlp5XqbtEITeOSrS"    
      )
      .then(
        (response) => {
          console.log("Email pipeline match success!", response.status, response.text);
          setIsSending(false);
          setBookingConfirmed(true);
        },
        (error) => {
          console.error("Transmission failed...", error);
          setIsSending(false);
          alert("Something went wrong with the sync framework. Please try again.");
        }
      );
  };

  return (
    <div className="booking-page">
      <div className="container">
        
        <header className="booking-hero">
          <span className="section-tag">SCHEDULE A CALL</span>
          <h1 className="section-title booking-hero-title">
            Book a Technical <br />
            <span className="gradient-text">Consultation Meeting</span>
          </h1>
          <p className="section-description booking-hero-desc">
            Fill out the simple blueprint fields below and select a date on the calendar to secure an architecture session.
          </p>
        </header>

        <div className="booking-center-container">
          <div className="booking-main-box">
            
            {!bookingConfirmed ? (
              <form onSubmit={handleBookingSubmit} className="booking-simple-form">
                <div className="form-inputs-stack">
                  
                  <div className="booking-field-group">
                    <label htmlFor="name">
                      <FiUser className="input-icon-accent" /> Your Name *
                    </label>
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

                  <div className="booking-field-group">
                    <label htmlFor="email">
                      <FiMail className="input-icon-accent" /> Email Address *
                    </label>
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

                  <div className="booking-field-group">
                    <label htmlFor="date">
                      <FiCalendar className="input-icon-accent" /> Select Appointment Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={minDate}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="calendar-date-input"
                    />
                  </div>

                  <div className="booking-field-group">
                    <label htmlFor="message">
                      <FiMessageSquare className="input-icon-accent" /> Project Details / Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us briefly about your project goals or code requirements..."
                    />
                  </div>

                </div>

                <button type="submit" className="booking-submit-btn" disabled={isSending}>
                  <span className="submit-btn-text">
                    {isSending ? "TRANSMITTING DATA..." : "SUBMIT APPOINTMENT REQUEST"}
                  </span>
                  {!isSending && <FiSend className="submit-btn-icon" />}
                </button>

              </form>
            ) : (
              <div className="booking-success-hud">
                <FiCheckCircle className="booking-success-icon" />
                <h2>Appointment Requested!</h2>
                <p className="card-text">
                  Thank you, <strong>{formData.name}</strong>. Your requested consultation parameters have been registered.
                </p>
                <div className="receipt-summary-box">
                  <div><strong>Confirmed Date:</strong> {formatConfirmationDate(formData.date)}</div>
                  <div><strong>Email Sync:</strong> {formData.email}</div>
                </div>
                <button 
                  type="button"
                  className="booking-submit-btn"
                  onClick={() => { setBookingConfirmed(false); setFormData({ name: "", email: "", date: "", message: "" }); }}
                  style={{ marginTop: "15px" }}
                >
                  <span className="submit-btn-text">Book New Session</span>
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Booking;