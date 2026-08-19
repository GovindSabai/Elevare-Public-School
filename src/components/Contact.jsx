import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaHeadset
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: 'Primary School (Grade I-V)',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent/Guardian name is required';
    }
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    // Simulate quick client-side submission
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger pleasant celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4A017', '#0B2447', '#1B4B8A', '#E5B834']
        });
      } catch (err) {
        // Fallback silently if confetti library fails
      }

      setFormData({
        parentName: '',
        studentName: '',
        grade: 'Primary School (Grade I-V)',
        phone: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 600);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaHeadset /> Get In Touch
          </div>
          <h2 className="section-title">
            Admission Enquiries & <span className="text-gold">Campus Visit</span>
          </h2>
          <p className="section-subtitle">
            Have questions about admissions, academics, transport routes, or wish to schedule a personal campus tour? Our admission counselors are here to help.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start'
          }}
        >
          
          {/* Left Column: Contact Information Cards */}
          <div data-aos="fade-right" data-aos-duration="900" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* School Info Box */}
            <div 
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', marginBottom: '16px' }}>
                Elevare Public School Campus
              </h3>
              <p style={{ color: '#BACCDD', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
                Feel free to visit our serene green campus during official counseling hours. Guided campus tours are available on all working days.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ color: 'var(--color-accent-light)', fontSize: '1.2rem', marginTop: '3px' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 600, margin: 0 }}>Campus Address</h4>
                    <p style={{ color: '#BACCDD', fontSize: '0.88rem', margin: '3px 0 0 0' }}>
                      Sector 14, Knowledge Boulevard, Institutional Area, New Delhi – 110075, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ color: 'var(--color-accent-light)', fontSize: '1.2rem', marginTop: '3px' }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 600, margin: 0 }}>Phone Numbers</h4>
                    <p style={{ color: '#BACCDD', fontSize: '0.88rem', margin: '3px 0 0 0' }}>
                      <a href="https://wa.me/919876543211" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98765 43211</a> / 
                      <a href="tel:01123456789" style={{ color: 'inherit', textDecoration: 'none' }}>011-23456789</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ color: 'var(--color-accent-light)', fontSize: '1.2rem', marginTop: '3px' }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 600, margin: 0 }}>Email Addresses</h4>
                    <p style={{ color: '#BACCDD', fontSize: '0.88rem', margin: '3px 0 0 0' }}>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=admissions@elevarepublicschool.edu.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>admissions@elevarepublicschool.edu.in</a> <br />
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@elevarepublicschool.edu.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>info@elevarepublicschool.edu.in</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ color: 'var(--color-accent-light)', fontSize: '1.2rem', marginTop: '3px' }}>
                    <FaClock />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 600, margin: 0 }}>Office & Visiting Hours</h4>
                    <p style={{ color: '#BACCDD', fontSize: '0.88rem', margin: '3px 0 0 0' }}>
                      Monday – Saturday: 8:30 AM – 3:30 PM (Sunday Closed)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Transport & Campus Help Card */}
            <div 
              style={{
                backgroundColor: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px'
              }}
            >
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.05rem', marginBottom: '8px' }}>
                Transportation Helpdesk
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Need to verify if your residential sector falls within our bus routes? Call our dedicated transport officer at <strong>+91 98765 43299</strong>.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Admission Enquiry Form */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="900"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
              Online Admission Enquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              Fill out this preliminary form and our admissions desk will get in touch with you within 24 business hours.
            </p>

            {/* Success Notification Alert */}
            {isSubmitted && (
              <div 
                style={{
                  backgroundColor: '#ECFDF5',
                  border: '1px solid #10B981',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  color: '#065F46',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <FaCheckCircle style={{ fontSize: '1.5rem', color: '#10B981', flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 700, color: '#065F46' }}>
                    Enquiry Received Successfully!
                  </h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', color: '#047857' }}>
                    Thank you! Your enquiry has been received successfully. Our counselor will contact you shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              
              {/* Parent Name */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Parent / Guardian's Full Name *
                </label>
                <input 
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Chandra"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: errors.parentName ? '1px solid #EF4444' : '1px solid var(--color-border)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
                {errors.parentName && (
                  <span style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaExclamationCircle /> {errors.parentName}
                  </span>
                )}
              </div>

              {/* Student Name */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Student's Name *
                </label>
                <input 
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="e.g. Ananya Chandra"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: errors.studentName ? '1px solid #EF4444' : '1px solid var(--color-border)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
                {errors.studentName && (
                  <span style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaExclamationCircle /> {errors.studentName}
                  </span>
                )}
              </div>

              {/* Grade / Class Interested */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Admission Class / Level *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.95rem',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Primary School (Grade I-V)">Primary School (Grade I – V)</option>
                  <option value="Secondary School (Grade VI-X)">Secondary School (Grade VI – X)</option>
                  <option value="Senior Secondary - Science (XI-XII)">Senior Secondary – Science (Grade XI–XII)</option>
                  <option value="Senior Secondary - Commerce (XI-XII)">Senior Secondary – Commerce (Grade XI–XII)</option>
                  <option value="Senior Secondary - Humanities (XI-XII)">Senior Secondary – Humanities (Grade XI–XII)</option>
                </select>
              </div>

              {/* Phone and Email Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Contact Phone Number *
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.phone ? '1px solid #EF4444' : '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                  {errors.phone && (
                    <span style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FaExclamationCircle /> {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Email Address (Optional)
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.email ? '1px solid #EF4444' : '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FaExclamationCircle /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Any Specific Query or Questions
                </label>
                <textarea 
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ask about curriculum, transport pickup, fee schedule, etc."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={submitting}
                className="btn btn-gold"
                style={{ width: '100%', padding: '14px', fontSize: '1.05rem', cursor: submitting ? 'not-allowed' : 'pointer' }}
              >
                {submitting ? 'Submitting Enquiry...' : (
                  <>
                    <FaPaperPlane /> Send Admission Enquiry
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
