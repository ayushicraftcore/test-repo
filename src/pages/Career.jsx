import "./Career.css";
import { useState } from "react";
import { FiBriefcase, FiMapPin, FiClock, FiUploadCloud, FiCheckCircle, FiArrowRight, FiFile } from "react-icons/fi";

const availableRoles = [
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design System Core",
    location: "Surat, India (Hybrid)",
    type: "Full-time"
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer (React / Vite)",
    department: "Engineering Foundations",
    location: "Remote / Surat",
    type: "Full-time"
  },
  {
    id: "cloud-architect",
    title: "Cloud Infrastructure Architect",
    department: "DevOps & Scale Pipelines",
    location: "Surat, India (On-site)",
    type: "Full-time"
  }
];

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    message: ""
  });
  
  const [resumeFile, setResumeFile] = useState(null);
  const [isSending, setIsSending] = useState(false); 
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleRoleSelect = (roleTitle) => {
    setFormData((prev) => ({ ...prev, role: roleTitle }));
    document.getElementById("apply-form-block")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role || !resumeFile) return;

    setIsSending(true);

    // Simulated local UI transition delay to showcase the loading state
    setTimeout(() => {
      setIsSending(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="career-page">
      <div className="container">
        
        {/* CENTER-ALIGNED HERO SECTION */}
        <header className="career-hero">
          <span className="section-tag">JOIN THE ECOSYSTEM</span>
          <h1 className="section-title career-hero-title">
            Build the Next Layer of <br />
            <span className="gradient-text">Digital Infrastructures</span>
          </h1>
          <p className="section-description career-hero-desc">
            We are looking for precise engineers, creative visual thinkers, and proactive 
            architects driven to dismantle operational complexity.
          </p>
        </header>

        {/* OPEN POSITION LIST CHASSIS */}
        <section className="career-roles-section">
          <div className="career-section-header">
            <h2 className="career-inner-title">Current Openings</h2>
            <p className="card-text">Select an active node cluster below to pre-fill your submission file.</p>
          </div>

          <div className="roles-list-stack">
            {availableRoles.map((job) => (
              <div key={job.id} className="job-opening-card card-hover">
                <div className="job-card-main">
                  <div className="job-title-block">
                    <FiBriefcase className="job-icon" />
                    <div>
                      <h3>{job.title}</h3>
                      <span className="job-dept-badge">{job.department}</span>
                    </div>
                  </div>
                  
                  <div className="job-meta-row">
                    <div className="job-meta-item">
                      <FiMapPin />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-meta-item">
                      <FiClock />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="job-apply-btn"
                  onClick={() => handleRoleSelect(job.title)}
                >
                  <span className="apply-btn-text">Apply Now</span>
                  <FiArrowRight className="apply-btn-arrow" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* APPLICATION SUBMIT CONTAINER */}
        <section id="apply-form-block" className="career-form-section">
          <div className="form-wrapper-box">
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="application-core-form" encType="multipart/form-data">
                <div className="form-box-header">
                  <h2>Submit Application Blueprint</h2>
                  <p className="card-text">Complete the system fields below to process your candidature parameters.</p>
                </div>

                <div className="form-grid-layout">
                  <div className="form-field-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Ayushi Patel"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ayushi123@gmail.com"
                    />
                  </div>

                  <div className="form-field-group full-width-field">
                    <label htmlFor="role">Target Role Selection *</label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>-- Role Selection --</option>
                      {availableRoles.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* PREMIUM FILE UPLOAD DRAG/DROP FIELD */}
                  <div className="form-field-group full-width-field">
                    <label>Upload Resume (PDF, DOCX) *</label>
                    <div className="custom-file-upload-wrapper">
                      <input
                        type="file"
                        id="resume-upload"
                        accept=".pdf,.docx,.doc"
                        required={!resumeFile} 
                        onChange={handleFileChange}
                        className="hidden-file-input"
                      />
                      <label htmlFor="resume-upload" className="file-upload-dropzone">
                        <FiUploadCloud className="upload-dropzone-icon" />
                        <div className="dropzone-text-block">
                          <span className="dropzone-action-text">Click to choose file</span>
                          <span className="dropzone-hint-text">Supported formats: PDF, DOCX up to 10MB</span>
                        </div>
                      </label>
                    </div>
                    
                    {resumeFile && (
                      <div className="selected-file-badge">
                        <FiFile className="file-badge-icon" />
                        <span className="file-badge-name">{resumeFile.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-field-group full-width-field">
                    <label htmlFor="portfolio">Portfolio / Website Link</label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username or personal website"
                    />
                  </div>

                  <div className="form-field-group full-width-field">
                    <label htmlFor="message">Your Short Description</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly state your core operational skillsets..."
                    />
                  </div>
                </div>

                <button type="submit" className="desktop-btn form-submit-action" disabled={isSending}>
                  <FiUploadCloud className="btn-icon" />
                  <span>{isSending ? "SENDING..." : "SUBMIT APPLICATION"}</span>
                </button>
              </form>
            ) : (
              <div className="form-success-hud">
                <FiCheckCircle className="success-hud-icon" />
                <h2>Application Submitted</h2>
                <p className="card-text">
                  Thank you, <strong>{formData.name}</strong>. Your profile configuration for the{" "}
                  <strong>{formData.role}</strong> cluster has been submitted successfully. Our hiring team will review it shortly.
                </p>
                <button 
                  className="job-apply-btn"
                  onClick={() => { setFormSubmitted(false); setFormData({ name: "", email: "", role: "", portfolio: "", message: "" }); setResumeFile(null); }}
                  style={{ minWidth: "200px" }}
                >
                  <span className="apply-btn-text">Submit Another Profile</span>
                  <FiArrowRight className="apply-btn-arrow" />
                </button>
              </div>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}

export default Career;