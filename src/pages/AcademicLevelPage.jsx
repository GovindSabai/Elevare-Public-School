import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { academicDetails } from '../data/academicsDetails';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const AcademicLevelPage = () => {
  const { level } = useParams();
  const details = academicDetails[level];

  if (!details) {
    return <Navigate to="/academics" replace />;
  }

  return (
    <div style={{ padding: '80px 0', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Back Button */}
        <Link 
          to="/academics" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--color-primary)', 
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: '30px',
            fontSize: '0.95rem'
          }}
        >
          <FaArrowLeft /> Back to Academics
        </Link>

        {/* 1. Heading at top */}
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '40px' }}>
          {details.title}
        </h1>

        {/* Layout container: Image left, content right */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '40px',
            alignItems: 'stretch',
            flexWrap: 'wrap'
          }}
        >
          {/* 2. Image in left side */}
          <div style={{ flex: '1 1 400px' }}>
            <img 
              src={details.image} 
              alt={details.title}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Right side content */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column' }}>
            {/* 3. Sub heading */}
            <h2 style={{ fontSize: '1.75rem', color: 'var(--color-accent)', fontWeight: 700, marginBottom: '20px' }}>
              {details.tagline}
            </h2>
            
            {/* 3. Description */}
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-regular)', lineHeight: 1.7, marginBottom: '40px' }}>
              {details.overview}
            </p>

            {/* Bullets (Same as overview card) */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {details.bullets && details.bullets.map((bullet, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1.05rem', color: 'var(--color-text-regular)' }}>
                  <FaCheckCircle style={{ color: 'var(--color-accent)', marginTop: '4px', flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.5 }}>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* 4. Explore admission button in right side */}
            <div>
              <Link to="/contact" className="btn btn-gold btn-lg">
                Explore Admissions
              </Link>
            </div>
          </div>
        </div>

        {/* 5. Detailed Sections */}
        <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {details.sections && details.sections.map((section, idx) => (
            <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '16px', borderBottom: '2px solid var(--color-accent-soft)', paddingBottom: '12px' }}>
                {section.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AcademicLevelPage;
