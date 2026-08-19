import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaGraduationCap, FaQuoteLeft } from 'react-icons/fa';

const achievementStats = [
  {
    icon: FaGraduationCap,
    value: '98.6%',
    label: 'Highest CBSE Board Score',
    subtext: '100% Pass record in AISSE & AISSCE exams year after year.'
  },
  {
    icon: FaTrophy,
    value: '45+',
    label: 'State & National Sports Medals',
    subtext: 'Podium finishes across Athletics, Basketball, and Taekwondo.'
  },
  {
    icon: FaMedal,
    value: '120+',
    label: 'Science & Olympiad Distinctions',
    subtext: 'Global and national ranks in NSO, IMO, and Cyber Olympiads.'
  },
  {
    icon: FaStar,
    value: '30+',
    label: 'Arts & Cultural Awards',
    subtext: 'Recognized for debate, classical music, drama, and fine arts.'
  }
];

const highlights = [
  {
    rank: 'City Rank 1',
    event: 'CBSE Class XII Commerce Stream Topper',
    year: '2025–26 Batch',
    student: 'Aarav Sharma (98.6%)',
    image: '/aarav.jpg'
  },
  {
    rank: 'Gold Medal',
    event: 'National Children Science Congress',
    year: 'Innovator Award',
    student: 'Priya Mukherjee (Grade X)',
    image: '/priya.jpg'
  },
  {
    rank: 'State Champions',
    event: 'Inter-School Under-17 Basketball League',
    year: 'Gold Trophy',
    student: 'Elevare Tigers Team',
    image: '/tigers.jpg'
  }
];

const Achievements = () => {
  return (
    <section 
      id="achievements" 
      className="section section-dark"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #071830 0%, #0B2447 60%, #123363 100%)'
      }}
    >
      {/* Background Decorative Rings */}
      <div 
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px dashed rgba(212, 160, 23, 0.25)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(212, 160, 23, 0.15)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge badge-white">
            <FaTrophy /> Celebrating Laurels
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            A Tradition of <span className="text-gold">Triumph & Excellence</span>
          </h2>
          <p className="section-subtitle" style={{ color: '#BACCDD' }}>
            Elevare students consistently surpass benchmarks across board examinations, national science fairs, sporting arenas, and creative stages.
          </p>
        </div>

        {/* 4 Stat Highlights Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}
        >
          {achievementStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="achievement-box"
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 160, 23, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '30px 24px',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 160, 23, 0.2)',
                    color: 'var(--color-accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    margin: '0 auto 16px auto'
                  }}
                >
                  <Icon />
                </div>

                <div 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-light)',
                    marginBottom: '8px'
                  }}
                >
                  {item.value}
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  {item.label}
                </h3>

                <p style={{ fontSize: '0.85rem', color: '#BACCDD', margin: 0, lineHeight: 1.45 }}>
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wall of Fame / Recent Accolades Cards */}
        <div 
          data-aos="fade-up"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
                Recent Hall of Fame Highlights (2025–26)
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#BACCDD', margin: 0 }}>
                Exemplary student achievements bringing pride to the Elevare family.
              </p>
            </div>
            <span 
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary-dark)',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.82rem'
              }}
            >
              Academic Year Honors
            </span>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            {highlights.map((h, i) => (
              <div 
                key={i}
                style={{
                  background: 'rgba(11, 36, 71, 0.6)',
                  border: '1px solid rgba(212, 160, 23, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-accent-light)', fontWeight: 700, fontSize: '0.9rem' }}>
                    {h.rank}
                  </span>
                  <span style={{ color: '#8E9EAF', fontSize: '0.78rem' }}>
                    {h.year}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                  <img 
                    src={h.image} 
                    alt={h.student}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--color-accent)'
                    }}
                  />
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: 0 }}>
                    {h.student}
                  </h4>
                </div>
                <p style={{ color: '#BACCDD', fontSize: '0.85rem', margin: 0 }}>
                  {h.event}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .achievement-box:hover {
          transform: translateY(-8px);
          border-color: var(--color-accent);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(212, 160, 23, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Achievements;
