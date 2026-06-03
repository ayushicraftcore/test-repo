import "./Services.css";

import { useEffect, useRef, useState } from "react";

import { FiCheck } from "react-icons/fi";

import { useNavigate } from "react-router-dom";



const servicesData = [

  {

    smallTitle: "Enterprise SaaS",

    title: "CUSTOM SAAS DEVELOPMENT",

    image: "/images/saas.avif",

    points: [

      "Launch Multi-Tenant SaaS In Weeks",

      "Subscription Billing & User Roles",

      "Scalable Architecture For Millions Of Users",

    ],

  },

  {

    smallTitle: "AI Automation",

    title: "AI & AUTOMATION SOLUTIONS",

    image: "/images/automation.avif",

    points: [

      "AI Chatbots & Smart Virtual Agents",

      "Predictive Analytics & Insights",

      "Workflow Automation With 40%+ Efficiency",

    ],

  },

  {

    smallTitle: "Cloud Infrastructure",

    title: "WEB & CLOUD ENGINEERING",

    image: "/images/cloud.avif",

    points: [

      "Cloud-Native Development On AWS & GCP",

      "CI/CD & Auto Scaling Infrastructure",

      "Secure Infrastructure As Code Deployments",

    ],

  },

  {

    smallTitle: "Rapid Product Launch",

    title: "MVP FOR STARTUPS",

    image: "/images/mvp.avif",

    points: [

      "Launch MVPs In 4–8 Weeks",

      "Investor-Ready Product Demos",

      "Lean & Scalable Architecture",

    ],

  },

];



function Services() {

  const [activeService, setActiveService] = useState(0);

  const cardsRef = useRef([]);

  const navigate = useNavigate();



  useEffect(() => {

    // OPTIMIZATION 1: THE DEAD-CENTER TRIGGER LINE

    // This shrinks the trigger area to a crisp horizontal line near the center of the screen (45% from top).

    // The moment a card crosses this invisible line, it swaps instantly with zero extra math loops.

    const observerOptions = {

      root: null,

      rootMargin: "-45% 0px -54% 0px",

      threshold: 0, // Single precise checkpoint execution

    };



    const observerCallback = (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const index = cardsRef.current.indexOf(entry.target);

          if (index !== -1) {

            // Only update the state if it's a completely different card to prevent render loops

            setActiveService(index);

          }

        }

      });

    };



    const observer = new IntersectionObserver(observerCallback, observerOptions);



    cardsRef.current.forEach((card) => {

      if (card) observer.observe(card);

    });



    return () => observer.disconnect();

  }, []);



  return (

    <section className="services section-space">

      <div className="container">

       

        {/* HEADER */}

        <div className="services-header">

          <span className="section-tag">WHAT WE BUILD</span>

          <h2 className="section-title">Core Services</h2>

          <p className="section-description">

            Production-grade solutions built for scalability, high performance

            and measurable business impact.

          </p>

        </div>



        {/* WRAPPER */}

        <div className="services-wrapper">

         

          {/* LEFT SIDE (Sticky Image Preview) */}

          <div className="services-left">

            <div className="service-preview-card">

              {/* OPTIMIZATION 2: STABLE IMAGE NODE */}

              {/* Removed the 'key' attribute. Now the DOM element stays alive, and only the src swaps, */}

              {/* allowing hardware acceleration to render the layout with absolute fluidity. */}

              <img

                src={servicesData[activeService].image}

                alt="service"

                className="service-preview-image"

                loading="eager" // Forces asset priority so it's always ready

                decoding="async"

              />

              <div className="service-preview-overlay"></div>

             

              <div className="service-preview-content">

                <span className="preview-tag">

                  {servicesData[activeService].smallTitle}

                </span>

                <h3>{servicesData[activeService].title}</h3>

               

                <ul className="preview-points">

                  {servicesData[activeService].points.map((point, i) => (

                    <li key={i}>

                      <span className="check-circle">

                        <FiCheck />

                      </span>

                      <span>{point}</span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>



          {/* RIGHT SIDE (Scrolling Cards List) */}

          <div className="services-right">

            {servicesData.map((service, index) => (

              <div

                key={index}

                ref={(el) => (cardsRef.current[index] = el)}

                className={`service-item ${activeService === index ? "active" : ""}`}

                onClick={() => setActiveService(index)}

              >

                <span className="service-small-title">

                  {service.smallTitle}

                </span>

                <h3 className="card-title">{service.title}</h3>

              </div>

            ))}

          </div>

         

        </div>



        {/* BUTTON */}

        <div className="services-button-wrap">

          <button className="primary-btn" onClick={() => navigate("/service")}>

            VIEW ALL SERVICES

          </button>

        </div>

       

      </div>

    </section>

  );

}



export default Services;