import React from 'react';
import { 
  FaChalkboardTeacher, 
  FaTv, 
  FaFlask, 
  FaFutbol, 
  FaShieldAlt, 
  FaLaptopCode, 
  FaBus, 
  FaPalette,
  FaCheckDouble
} from 'react-icons/fa';

const features = [
  {
    icon: FaChalkboardTeacher,
    title: 'Experienced Educators',
    desc: 'Passionate, highly certified faculty members dedicated to individual mentorship and academic enrichment.'
  },
  {
    icon: FaTv,
    title: 'Smart Classrooms',
    desc: 'Interactive digital boards, multimedia audio-visual aids, and modern ergonomic seating arrangements.'
  },
  {
    icon: FaFlask,
    title: 'Modern Laboratories',
    desc: 'Advanced equipment for Physics, Chemistry, Biology, Mathematics, and Robotics experimentation.'
  },
  {
    icon: FaFutbol,
    title: 'Sports & Athletics',
    desc: 'Dedicated coaching for cricket, football, basketball, badminton, chess, martial arts, and track events.'
  },
  {
    icon: FaShieldAlt,
    title: 'Safe & Secure Campus',
    desc: '24/7 CCTV surveillance, biometric security, strictly gated access, and fully staffed medical infirmary.'
  },
  {
    icon: FaLaptopCode,
    title: 'Digital & STEM Learning',
    desc: 'Cutting-edge computer labs, coding curriculum, AI foundations, and high-speed fiber connectivity.'
  },
  {
    icon: FaBus,
    title: 'Safe Transportation',
    desc: 'GPS-tracked modern bus fleet covering major routes, equipped with female attendants and speed governors.'
  },
  {
    icon: FaPalette,
    title: 'Creative Arts & Music',
    desc: 'Dedicated studios for Indian classical & western music, theater, visual art, pottery, and dance.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaCheckDouble /> Why Choose Elevare
          </div>
          <h2 className="section-title">
            The Pillars of <span className="text-gold">Educational Excellence</span>
          </h2>
          <p className="section-subtitle">
            We provide a world-class environment where academic rigor meets character building, state-of-the-art infrastructure, and genuine care for each student.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="card feature-card"
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 100}
                style={{
                  padding: '30px 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-accent-soft)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.45rem',
                    transition: 'all 0.3s ease'
                  }}
                  className="feature-icon-box"
                >
                  <Icon />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                  {feature.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .feature-card:hover .feature-icon-box {
          background-color: var(--color-primary);
          color: var(--color-accent);
          transform: rotate(6deg) scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
