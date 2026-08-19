import React from 'react';

const Logo = ({ size = 44, showText = true, isDark = false, className = '' }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="school-logo-svg"
        aria-label="Elevare Public School Emblem"
      >
        <circle cx="50" cy="50" r="48" fill={isDark ? "#071830" : "#0B2447"} stroke="#D4A017" strokeWidth="3.5"/>
        
        {/* 3 Ascending Gold Chevrons representing Rise/Elevare and forming subtle 'E' */}
        <path d="M50 18 L72 34 L64 39 L50 29 L36 39 L28 34 Z" fill="#D4A017"/>
        <path d="M50 32 L70 46 L63 51 L50 41 L37 51 L30 46 Z" fill="#E5B834"/>
        <path d="M50 46 L68 58 L62 62 L50 53 L38 62 L32 58 Z" fill="#F3CC5B"/>
        
        {/* Open Book at Base cradled by the chevrons */}
        <path 
          d="M50 65 C41 62 31 64 24 67.5 L24 80 C31 76.5 41 74.5 50 78 C59 74.5 69 76.5 76 80 L76 67.5 C69 64 59 62 50 65 Z" 
          fill="#FFFFFF" 
          opacity="0.95"
        />
        {/* Book spine & page separator */}
        <path d="M50 65 L50 78" stroke="#0B2447" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>

      {showText && (
        <div className="logo-text-block" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span 
            className="logo-brand-name" 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.35rem', 
              letterSpacing: '-0.02em',
              color: isDark ? '#FFFFFF' : 'var(--color-primary)'
            }}
          >
            <span style={{ color: 'var(--color-accent)' }}>ELEVARE</span> PUBLIC SCHOOL
          </span>
          <span 
            className="logo-tagline" 
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.68rem', 
              fontWeight: 600, 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase',
              color: isDark ? '#C2D1E5' : 'var(--color-secondary)'
            }}
          >
            Affiliated to CBSE · New Delhi
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
