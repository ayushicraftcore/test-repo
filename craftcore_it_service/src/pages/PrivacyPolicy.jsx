import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, ArrowLeft, Mail } from 'lucide-react';
import AnimatedList from '../components/AnimatedList';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const privacySections = [
    {
      title: "1. Information We Collect",
      description: "When you interact with CraftCore services, visit our website or communicate with our team, we collect: Contact Details (name, business email, phone, location), Technical & Usage Data (IP addresses, browser types, interaction metrics via analytics) and Service & Career Data (resumes and candidate profile details)."
    },
    {
      title: "2. How We Use Your Information",
      description: "We process your data strictly for legitimate business purposes: delivering IT infrastructure, cloud engineering, recruitment and 3D printing services; responding to business inquiries and consultation bookings; optimizing site security and UX layout; and evaluating candidate applications."
    },
    {
      title: "3. Information Sharing & Disclosure",
      description: "CraftCore does not trade, sell or rent personal data. Disclosure occurs only under controlled conditions: with trusted service providers operating under confidentiality contracts or when required by legal compliance, judicial subpoena or regulatory mandate."
    },
    {
      title: "4. Data Retention & Storage Policy",
      description: "We store personal and enterprise data only for as long as necessary to fulfill active project agreements, maintain operational records or comply with statutory retention laws. Once data reaches the end of its required lifecycle, it is securely purged or anonymized."
    },
    {
      title: "5. Enterprise Security Measures",
      description: "We enforce strict administrative, technical and physical safeguards—including SSL/TLS encryption, restricted access controls, automated threat monitoring and periodic vulnerability audits—to shield your information against unauthorized access, loss or alteration."
    },
    {
      title: "6. Cookies & Tracking Technologies",
      description: "Our platform utilizes essential cookies and session storage to optimize page load speeds, remember user preferences and collect aggregated site usage statistics. You can manage or disable cookie preferences directly through your web browser settings."
    },
    {
      title: "7. Third-Party Links & Integrations",
      description: "Our website and portals may feature links to external platforms, partner tools or booking systems. CraftCore is not responsible for the privacy practices or content of third-party domains. We encourage reviewing external privacy policies prior to submitting data."
    },
    {
      title: "8. International Data Transfers",
      description: "As an enterprise supporting global partners and multi-region telemetry, data collected by CraftCore may be processed in secure cloud infrastructure across borders. We ensure all cross-border data movements strictly adhere to recognized data protection frameworks."
    },
    {
      title: "9. Your Privacy & Data Control Rights",
      description: "Depending on your jurisdiction, you maintain full legal rights to request access to your personal records, request corrections to inaccurate details, request complete data deletion or restrict the scope of automated processing."
    },
    {
      title: "10. Policy Updates & Modifications",
      description: "CraftCore reserves the right to update or modify this Privacy Policy to reflect evolving regulatory requirements or service enhancements. Any material amendments will be posted on this page along with an updated 'Effective Date' timestamp."
    }
  ];

  return (
    <main className="privacy-page">
      <div className="privacy-container">
        {/* Navigation Back Link */}
        <div className="privacy-back-wrapper">
          <Link to="/" className="privacy-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="privacy-header">
          <span className="section-tag">LEGAL &amp; TRUST</span>
          <h1 className="privacy-title">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="privacy-subtitle">
            At CraftCore, we prioritize your privacy and data protection. This policy explains how we collect, use and safeguard your personal information.
          </p>
        </header>

        {/* Highlights Banner */}
        <div className="privacy-highlights">
          <div className="highlight-card">
            <div className="icon-badge">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3>Data Ownership</h3>
              <p>Your data belongs strictly to you. We never sell your personal information.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="icon-badge">
              <Lock size={20} />
            </div>
            <div>
              <h3>Enterprise Security</h3>
              <p>We implement industry-standard encryption protocols to safeguard all assets.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="icon-badge">
              <Eye size={20} />
            </div>
            <div>
              <h3>Full Transparency</h3>
              <p>Clear visibility into what data we collect and how it is processed.</p>
            </div>
          </div>
        </div>

        {/* Main Content Body - Accordion AnimatedList */}
        <article className="privacy-content-accordion">
          <AnimatedList
            items={privacySections}
            showGradients={false}
            enableArrowNavigation={true}
            displayScrollbar={false}
            initialSelectedIndex={0}
          />

          {/* Privacy Office Contact Section */}
          <section className="legal-inquiry-section">
            <div className="legal-inquiry-card">
              <div className="legal-inquiry-header">
                <h2>Contact Privacy Office</h2>
                <p>If you have questions, concerns or requests regarding this Privacy Policy, please contact our team directly:</p>
              </div>

              <div className="contact-card-box">
                <div className="contact-line">
                  <div className="contact-icon-bubble">
                    <Mail size={18} />
                  </div>
                  <div className="contact-meta">
                    <span className="contact-meta-label">DIRECT EMAIL</span>
                    <a href="mailto:sales@craftcore.in" className="contact-link">sales@craftcore.in</a>
                  </div>
                </div>

                <div className="contact-address">
                  <strong>CraftCore Group</strong>
                  <p>Vadodara, Gujarat, India</p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;