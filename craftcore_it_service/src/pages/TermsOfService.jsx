import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, CheckCircle2, ArrowLeft, Mail } from 'lucide-react';
import AnimatedList from '../components/AnimatedList';
import './TermsOfService.css';

const TermsOfService = () => {
  const termsSections = [
    {
      title: "1. Acceptance of Terms",
      description: "By accessing or using the CraftCore website, client portals and associated services (\"Services\"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from accessing or using our services."
    },
    {
      title: "2. Scope of Services",
      description: "CraftCore provides multi-vertical enterprise solutions, including: IT Infrastructure & Managed Services (cloud architecture, cybersecurity, server administration), Recruitment & Talent Sourcing (executive hiring, IT staffing), Growth Acceleration (business intelligence, enterprise advisory) and 3D Printing & Additive Manufacturing (rapid prototyping, precision fabrication)."
    },
    {
      title: "3. Intellectual Property Rights",
      description: "All materials, design frameworks, source code, logos, proprietary tools and visual assets created by CraftCore are the exclusive intellectual property of CraftCore Group unless explicitly assigned to clients under executed Master Services Agreements (MSA) or Statements of Work (SOW)."
    },
    {
      title: "4. User Responsibilities & Acceptable Use",
      description: "When using our platform and communication channels, you agree not to engage in unauthorized access, reverse engineering or security testing of our systems; transmit harmful software, malware or destructive code; or misrepresent identity or credentials when inquiring about recruitment or enterprise services."
    },
    {
      title: "5. Client Agreements & Statements of Work",
      description: "All custom engineering, staffing engagements and additive manufacturing orders are governed by specific SOWs or MSAs executed between CraftCore and the client. In the event of a conflict between these general website Terms and a signed MSA/SOW, the executed contract takes precedence."
    },
    {
      title: "6. Service Availability & SLA",
      description: "While CraftCore strives to maintain continuous uptime and high-availability operations across all cloud systems and digital portals, we do not guarantee uninterrupted access. Scheduled maintenance, emergency patches or unforeseen infrastructure outages may temporarily impact service availability."
    },
    {
      title: "7. Payment & Billing Terms",
      description: "Invoicing, payment terms, deposit requirements and milestone schedules for enterprise projects are stipulated in individual service contracts. Unpaid balances or default on payment schedules may result in temporary suspension of active services or project deliverables."
    },
    {
      title: "8. Limitation of Liability",
      description: "In no event shall CraftCore, its directors, employees or suppliers be liable for indirect, incidental, consequential, special or punitive damages arising out of the use or inability to use our website or digital services, even if notified of the possibility of such damage."
    },
    {
      title: "9. Governing Law & Jurisdiction",
      description: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal action or dispute arising under these terms shall be brought exclusively in the competent courts of Vadodara, Gujarat."
    },
    {
      title: "10. Modifications & Termination",
      description: "CraftCore reserves the right to modify these Terms of Service at any time without prior notice. Continued use of our website or enterprise portals following published changes constitutes full acceptance of the updated terms. We also reserve the right to suspend access to users violating these provisions."
    }
  ];

  return (
    <main className="terms-page">
      <div className="terms-container">
        {/* Navigation Back Link */}
        <div className="terms-back-wrapper">
          <Link to="/" className="terms-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="terms-header">
          <span className="section-tag">AGREEMENT &amp; POLICIES</span>
          <h1 className="terms-title">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="terms-subtitle">
            Please read these terms carefully before using CraftCore’s websites, platforms, IT infrastructure, recruitment or manufacturing services.
          </p>
        </header>

        {/* Highlights Banner */}
        <div className="terms-highlights">
          <div className="highlight-card">
            <div className="icon-badge">
              <Scale size={20} />
            </div>
            <div>
              <h3>Legal Binding</h3>
              <p>Accessing our services constitutes full agreement to these terms and operational guidelines.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="icon-badge">
              <FileText size={20} />
            </div>
            <div>
              <h3>IP Rights</h3>
              <p>All brand assets, software code and client deliverables are strictly protected under intellectual property law.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="icon-badge">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h3>Service Reliability</h3>
              <p>We commit to enterprise-grade service standards, high availability and operational integrity.</p>
            </div>
          </div>
        </div>

        {/* Main Content Body - Accordion AnimatedList */}
        <article className="terms-content-accordion">
          <AnimatedList
            items={termsSections}
            showGradients={false}
            enableArrowNavigation={true}
            displayScrollbar={false}
            initialSelectedIndex={0}
          />

          {/* Legal & Contract Inquiries Section */}
          <section className="legal-inquiry-section">
            <div className="legal-inquiry-card">
              <div className="legal-inquiry-header">
                <h2>Legal &amp; Contract Inquiries</h2>
                <p>If you have questions regarding these Terms of Service or specific client agreements, reach out to our legal department:</p>
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
                  <strong>CraftCore Group Legal Department</strong>
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

export default TermsOfService;