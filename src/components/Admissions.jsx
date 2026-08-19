import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaWhatsapp, FaCheckCircle, FaFileAlt, FaComments, FaSchool, FaIdCard } from 'react-icons/fa';

const admissionSteps = [
  {
    step: '01',
    title: 'Submit Online Enquiry',
    desc: 'Fill out the simple online admission enquiry form or collect registration brochure at campus.',
    icon: FaFileAlt
  },
  {
    step: '02',
    title: 'Campus Tour & Interaction',
    desc: 'Visit our campus for an informal interactive session and guided facility walkthrough.',
    icon: FaSchool
  },
  {
    step: '03',
    title: 'Document Verification',
    desc: 'Submit birth certificate, previous academic records, transfer certificate (TC), and photographs.',
    icon: FaIdCard
  },
  {
    step: '04',
    title: 'Welcome to Elevare',
    desc: 'Complete fee clearance, receive uniform/books schedule, and embark on an inspiring school journey.',
    icon: FaGraduationCap
  }
];

const Admissions = () => {
  return (
    <section 
      id="admissions" 
      className="section"
      style={{
        background: 'linear-gradient(135deg, #071830 0%, #0B2447 50%, #1B4B8A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Graphic */}
      <div 
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-50px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 160, 23, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Main CTA Top Container */}
        <div 
          data-aos="fade-up"
          style={{
            textAlign: 'center',
            maxWidth: '850px',
            margin: '0 auto 60px auto'
          }}
        >
          <div className="section-badge badge-white">
            <FaGraduationCap /> Admissions 2026–2027
          </div>

          <h2 
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '20px',
              letterSpacing: '-0.02em'
            }}
          >
            Start Your Child's Journey <br />
            <span style={{ color: 'var(--color-accent)' }}>With Elevare Public School</span>
          </h2>

          <p 
            style={{
              fontSize: '1.15rem',
              color: '#E0E9F5',
              lineHeight: 1.6,
              marginBottom: '36px'
            }}
          >
            Empower your child with strong academic grounding, modern tech fluency, compassionate values, and vibrant extracurricular exposure. Admissions open for Nursery to Grade XII.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              className="btn btn-gold btn-lg"
              style={{ cursor: 'pointer' }}
            >
              <FaGraduationCap /> Apply for Admission
            </Link>
            
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Talk to Admission Counselor
            </a>
          </div>
        </div>

        {/* 4 Steps Roadmap */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', fontWeight: 700 }}>
              Simple 4-Step Admission Process
            </h3>
            <p style={{ color: '#BACCDD', fontSize: '0.92rem' }}>
              Transparent, smooth, and parent-friendly enrollment procedure.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {admissionSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(212, 160, 23, 0.25)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '30px 24px',
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  className="step-card"
                >
                  <div 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'var(--color-accent-light)',
                      marginBottom: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span>{item.step}</span>
                    <Icon style={{ fontSize: '1.4rem', opacity: 0.8 }} />
                  </div>

                  <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
                    {item.title}
                  </h4>

                  <p style={{ color: '#BACCDD', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .step-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--color-accent);
        }
      `}</style>
    </section>
  );
};

export default Admissions;
