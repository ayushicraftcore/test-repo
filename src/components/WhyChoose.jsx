/*
===================================
IMPORT CSS
===================================
*/
import "./WhyChoose.css";

/*
===================================
IMPORT IMAGES
===================================
*/
import teamImage from "../assets/team.jpg";
import workImage from "../assets/work.jpg";
import contractImage from "../assets/contract.jpg";
import meetingImage from "../assets/meeting.jpg";

/*
===================================
WHY CHOOSE DATA
===================================
*/
const features = [

  "Delivering scalable, secure and high-performance digital solutions tailored for modern business growth and operational efficiency.",

  "Leveraging modern technologies, cloud-native architecture and agile development processes to build reliable and future-ready products.",

  "Providing end-to-end development services including strategy, design, development, deployment and long-term technical support.",

  "Building transparent client partnerships focused on innovation, faster delivery, continuous optimization and measurable business impact.",

  "Ensuring seamless scalability, system reliability and performance optimization through modern engineering best practices and automation.",

  "Supporting businesses with dedicated technical expertise, proactive communication and long-term technology consulting for sustainable growth."
];

/*
===================================
WHY CHOOSE COMPONENT
===================================
*/
function WhyChoose() {

  return (

    <section className="why-choose section-space">

      <div className="container">

        {/* ===================================
            HEADER
        =================================== */}
        <div className="why-header">

          <span className="section-tag">
            WHY CRAFTCORE
          </span>

          <h2 className="section-title">
            Trusted Technology Partner
          </h2>

          <p className="section-description">
            Delivering scalable, secure and high-performance
            digital solutions with a focus on innovation,
            reliability and long-term business growth.
          </p>

        </div>

        {/* ===================================
            CONTENT WRAPPER
        =================================== */}
        <div className="why-wrapper">

          {/* ===================================
              LEFT CONTENT
          =================================== */}
          <div className="why-content">

            <ul className="why-list">

              {
                features.map((item, index) => (

                  <li
                    key={index}
                    className="card-text"
                  >

                    {item}

                  </li>
                ))
              }

            </ul>

          </div>

          {/* ===================================
              RIGHT IMAGE LAYOUT
          =================================== */}
          <div className="why-images">

            {/* TOP LARGE IMAGE */}
            <div className="why-img why-img-large">

              <img
                src={teamImage}
                alt="Business Team"
              />

            </div>

            {/* TOP SMALL IMAGE */}
            <div className="why-img why-img-small">

              <img
                src={workImage}
                alt="Workspace"
              />

            </div>

            {/* BOTTOM LEFT IMAGE */}
            <div className="why-img why-img-bottom-left">

              <img
                src={contractImage}
                alt="Contract"
              />

            </div>

            {/* BOTTOM RIGHT IMAGE */}
            <div className="why-img why-img-bottom-right">

              <img
                src={meetingImage}
                alt="Meeting"
              />

            </div>

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
export default WhyChoose;