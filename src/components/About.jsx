import React, { useState, useEffect, useRef } from 'react';
import { FaBullseye, FaEye, FaAward, FaUserTie, FaUserGraduate, FaHeart } from 'react-icons/fa';
import { schoolImages } from '../data/images';

const CounterItem = ({ target, suffix = '', label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div 
      ref={counterRef}
      className="card"
      style={{
        padding: '24px 20px',
        textAlign: 'center',
        background: '#FFFFFF',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <div 
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent-soft)',
          color: 'var(--color-accent-hover)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          marginBottom: '4px'
        }}
      >
        <Icon />
      </div>
      <div 
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2rem',
          fontWeight: 800,
          color: 'var(--color-primary)',
          lineHeight: 1
        }}
      >
        {count}{suffix}
      </div>
      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontWeight: 500, margin: 0 }}>
        {label}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Two-Column Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          
          {/* Left Column: Image with Experience Badge */}
          <div data-aos="fade-right" data-aos-duration="900" style={{ position: 'relative' }}>
            <div 
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '8px solid #FFFFFF'
              }}
            >
              <img 
                src={schoolImages.about.campusLife} 
                alt={schoolImages.about.alt}
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 36, 71, 0.4) 0%, transparent 60%)'
                }}
              />
            </div>

            {/* Floating Experience Badge */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '25px',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '20px 28px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-navy)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: '2px solid var(--color-accent)'
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  lineHeight: 1
                }}
              >
                25+
              </span>
              <div>
                <p style={{ margin: 0, color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>
                  Years of Legacy
                </p>
                <p style={{ margin: 0, color: '#C2D1E5', fontSize: '0.78rem' }}>
                  In Holistic Education
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Story, Mission & Vision */}
          <div data-aos="fade-left" data-aos-duration="900">
            <div className="section-badge">
              <FaAward /> About Elevare
            </div>
            
            <h2 className="section-title">
              Inspiring Excellence in <span className="text-gold">Every Child</span>
            </h2>

            <p style={{ marginBottom: '20px' }}>
              <strong>Elevare Public School</strong> offers an enriching academic ecosystem that seamlessly blends time-tested Indian values with modern global pedagogy, nurturing confident and resilient learners.
            </p>

            {/* Mission & Vision Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div 
                style={{
                  backgroundColor: 'var(--color-bg-alt)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--color-primary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <FaBullseye style={{ color: 'var(--color-secondary)', fontSize: '1.2rem' }} />
                  <h4 style={{ fontSize: '1.05rem', margin: 0 }}>Our Mission</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  To impart transformative education emphasizing critical thinking, integrity, and life skills.
                </p>
              </div>

              <div 
                style={{
                  backgroundColor: 'var(--color-bg-alt)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--color-accent)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <FaEye style={{ color: 'var(--color-accent-hover)', fontSize: '1.2rem' }} />
                  <h4 style={{ fontSize: '1.05rem', margin: 0 }}>Our Vision</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  To be a premier institution creating lifelong learners and empathetic global citizens.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Animated Statistics Counters */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="900"
          style={{
            marginTop: '70px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}
        >
          <CounterItem 
            target={1500} 
            suffix="+" 
            label="Enrolled Students" 
            icon={FaUserGraduate} 
          />
          <CounterItem 
            target={80} 
            suffix="+" 
            label="Qualified Educators" 
            icon={FaUserTie} 
          />
          <CounterItem 
            target={25} 
            suffix="+" 
            label="Years of Excellence" 
            icon={FaAward} 
          />
          <CounterItem 
            target={100} 
            suffix="%" 
            label="Commitment to Care" 
            icon={FaHeart} 
          />
        </div>

      </div>
    </section>
  );
};

export default About;
