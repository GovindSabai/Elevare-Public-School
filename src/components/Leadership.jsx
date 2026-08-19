import React from 'react';
import { FaUserTie, FaQuoteLeft, FaGraduationCap } from 'react-icons/fa';
import { schoolImages } from '../data/images';

const leaders = [
  {
    name: 'Dr. Sunita Deshmukh',
    role: 'Principal & Head of School',
    qualifications: 'Ph.D. in Educational Leadership, M.Sc., B.Ed. (30+ Years Experience)',
    image: schoolImages.leadership.principal,
    message: 'Guiding young minds to transcend boundaries through experiential pedagogy and deep moral values.'
  },
  {
    name: 'Mr. Rajesh K. Varma',
    role: 'Vice Principal',
    qualifications: 'M.A., M.Ed., Gold Medalist (22+ Years in Senior Secondary Administration)',
    image: schoolImages.leadership.vicePrincipal,
    message: 'Committed to fostering academic discipline, Olympiad excellence, and student mental wellness.'
  },
  {
    name: 'Mrs. Ananya Sen',
    role: 'Academic & Curriculum Head',
    qualifications: 'M.Sc., B.Ed., CBSE Master Trainer (18+ Years in STEM Curriculum Design)',
    image: schoolImages.leadership.academicHead,
    message: 'Integrating 21st-century technological tools and activity-based learning into our daily curriculum.'
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="section section-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaUserTie /> School Leadership
          </div>
          <h2 className="section-title">
            Visionary Mentors & <span className="text-gold">Academic Leaders</span>
          </h2>
          <p className="section-subtitle">
            Our leadership team combines decades of proven educational stewardship, scholarly expertise, and a heartfelt commitment to student success.
          </p>
        </div>

        {/* Featured Principal's Message Block */}
        <div 
          data-aos="fade-up"
          style={{
            background: 'linear-gradient(135deg, #0B2447 0%, #1B4B8A 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            color: '#FFFFFF',
            marginBottom: '50px',
            position: 'relative',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(212, 160, 23, 0.35)'
          }}
        >
          <FaQuoteLeft 
            style={{
              position: 'absolute',
              top: '25px',
              right: '30px',
              fontSize: '4.5rem',
              color: 'rgba(212, 160, 23, 0.12)',
              pointerEvents: 'none'
            }}
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* Principal Photo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div 
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid var(--color-accent)',
                  boxShadow: 'var(--shadow-gold)',
                  flexShrink: 0
                }}
              >
                <img 
                  src={schoolImages.leadership.principal} 
                  alt="Dr. Sunita Deshmukh - Principal, Elevare Public School"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <span 
                  style={{
                    backgroundColor: 'rgba(212, 160, 23, 0.2)',
                    color: 'var(--color-accent-light)',
                    padding: '3px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Principal's Desk
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', marginTop: '6px', marginBottom: '2px' }}>
                  Dr. Sunita Deshmukh
                </h3>
                <p style={{ color: '#C2D1E5', fontSize: '0.85rem', margin: 0 }}>
                  Principal & Head of School
                </p>
              </div>
            </div>

            {/* Principal Quote */}
            <div>
              <blockquote 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: '#FFFFFF',
                  borderLeft: '4px solid var(--color-accent)',
                  paddingLeft: '20px',
                  margin: 0
                }}
              >
                "Education is not only about academic success; it is about building responsible, confident, creative, and compassionate individuals."
              </blockquote>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#BACCDD', lineHeight: 1.5, paddingLeft: '24px' }}>
                At Elevare, we strive every single day to provide every child a nurturing environment where their innate curiosities blossom into lifelong intellectual strengths.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}
        >
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="card leader-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '30px 24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid var(--color-border)'
              }}
            >
              <div 
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--color-accent)',
                  boxShadow: 'var(--shadow-md)',
                  marginBottom: '18px'
                }}
              >
                <img 
                  src={leader.image} 
                  alt={`${leader.name} - ${leader.role}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '4px' }}>
                {leader.name}
              </h3>

              <div 
                style={{
                  color: 'var(--color-secondary)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  marginBottom: '8px'
                }}
              >
                {leader.role}
              </div>

              <div 
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-text-light)',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <FaGraduationCap style={{ color: 'var(--color-accent)' }} />
                <span>{leader.qualifications}</span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                "{leader.message}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
