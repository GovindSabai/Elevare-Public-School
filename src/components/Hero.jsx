import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaArrowRight, FaAward, FaBookReader, FaUsers, FaStar } from 'react-icons/fa';
import { schoolImages } from '../data/images';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, rgba(11, 36, 71, 0.94) 0%, rgba(27, 75, 138, 0.86) 60%, rgba(11, 36, 71, 0.92) 100%), url(${schoolImages.hero.main}) center/cover no-repeat fixed`,
        color: '#FFFFFF',
        overflow: 'hidden',
        padding: '70px 0 90px 0'
      }}
    >
      {/* Decorative Background Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 160, 23, 0.22) 0%, rgba(212, 160, 23, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27, 75, 138, 0.4) 0%, rgba(27, 75, 138, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Admissions Pill Tag */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              border: '1px solid rgba(212, 160, 23, 0.6)',
              backdropFilter: 'blur(8px)',
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: 'var(--color-accent)', display: 'flex', alignItems: 'center' }}>
              <FaStar />
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.04em', color: '#FFFFFF' }}>
              Admissions Open 2026–27 · Nursery to Grade XII
            </span>
          </div>

          {/* Main Title */}
          <h1 
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 3.9rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '20px'
            }}
          >
            Empowering Young Minds. <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #FFF 20%, #F3CC5B 80%, #D4A017 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Building Bright Futures.
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#E0E9F5',
              lineHeight: 1.65,
              marginBottom: '36px',
              maxWidth: '720px'
            }}
          >
            Nurturing intellectual curiosity, moral integrity, and creative excellence to shape the visionary leaders of tomorrow.
          </p>

          {/* Action Buttons */}
          <div 
            className="hero-buttons-wrapper"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="300"
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}
          >
            <Link
              to="/admissions"
              className="btn btn-gold btn-lg"
              style={{ cursor: 'pointer' }}
            >
              <FaGraduationCap /> Admissions Open
            </Link>
            
            <Link
              to="/about"
              className="btn btn-outline-white btn-lg"
              style={{ cursor: 'pointer' }}
            >
              Explore Our School <FaArrowRight />
            </Link>
          </div>

          {/* Floating Feature Highlight Box */}
          <div 
            className="hero-feature-box"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              backdropFilter: 'blur(12px)',
              borderRadius: 'var(--radius-lg)',
              padding: '18px 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              maxWidth: '820px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(212, 160, 23, 0.2)', 
                color: 'var(--color-accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>
                <FaAward />
              </div>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 600 }}>CBSE Curriculum</h4>
                <p style={{ color: '#BACCDD', fontSize: '0.82rem', margin: 0 }}>Holistic NEP 2020 Aligned</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(212, 160, 23, 0.2)', 
                color: 'var(--color-accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>
                <FaBookReader />
              </div>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 600 }}>Smart & STEM Labs</h4>
                <p style={{ color: '#BACCDD', fontSize: '0.82rem', margin: 0 }}>Hands-on experiential study</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(212, 160, 23, 0.2)', 
                color: 'var(--color-accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}>
                <FaUsers />
              </div>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 600 }}>1:20 Mentor Ratio</h4>
                <p style={{ color: '#BACCDD', fontSize: '0.82rem', margin: 0 }}>Individual personalized care</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
