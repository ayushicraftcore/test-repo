/*
===================================
IMPORT CSS
===================================
*/
import "./Testimonials.css";

/*
===================================
IMPORT IMAGES
===================================
*/
import user1 from "../assets/testimonial-1.jpg";
import user2 from "../assets/testimonial-2.jpg";
import user3 from "../assets/testimonial-3.jpg";
import user4 from "../assets/testimonial-4.jpg";

/*
===================================
TESTIMONIAL DATA
===================================
*/
const testimonialData = [
  {
    image: user1,
    text: "The team delivered our WhatsApp marketing platform in record time with exceptional quality, seamless functionality and a highly scalable architecture.",
    name: "SAMEER GUPTA",
    role: "Founder, Whatso",
  },
  {
    image: user2,
    text: "Craftcore transformed our digital presence with a modern product experience, clean engineering and strong technical execution from start to finish.",
    name: "AARAV SHAH",
    role: "CEO, Nexora",
  },
  {
    image: user3,
    text: "Their AI-first development approach helped us automate operations, improve efficiency and launch faster than expected with production-grade quality.",
    name: "RIYA MEHTA",
    role: "Co-Founder, Flowbit",
  },
  {
    image: user4,
    text: "Reliable communication, scalable architecture and consistent delivery made them the perfect long-term technology partner for our business.",
    name: "KARAN VERMA",
    role: "Director, TechNova",
  },
];

/*
===================================
DUPLICATE FOR INFINITE SCROLL
===================================
*/
const infiniteTestimonials = [
  ...testimonialData,
  ...testimonialData,
];

/*
===================================
TESTIMONIAL COMPONENT
===================================
*/
function Testimonial() {
  return (
    <section className="testimonial section-space">

      {/* HEADER */}
      <div className="testimonial-header">
        <span className="section-tag">CLIENT FEEDBACK</span>
        <h2 className="section-title">Testimonials & Reviews</h2>
        <p className="section-description">
          Trusted by startups, businesses and growing enterprises
          for delivering scalable, reliable and high-performance
          digital solutions.
        </p>
      </div>

      {/* SCROLLER */}
      <div className="testimonial-scroll-wrapper">
        <div className="testimonial-track">
          {infiniteTestimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              
              {/* IMAGE */}
              <div className="testimonial-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* CONTENT */}
              <div className="testimonial-content">
                <p className="testimonial-text">{item.text}</p>
                <h4 className="testimonial-name">{item.name}</h4>
                <span className="testimonial-role">{item.role}</span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Testimonial;