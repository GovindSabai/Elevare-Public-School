import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { academicDetails } from '../data/academicsDetails';
import { FaArrowLeft } from 'react-icons/fa';

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
            alignItems: 'flex-start',
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

            {/* 4. Explore admission button in right side */}
            <div>
              <Link to="/contact" className="btn btn-gold btn-lg">
                Explore Admissions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcademicLevelPage;
