import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp, FaPhoneAlt } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 990
      }}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-accent-light)',
          border: '2px solid var(--color-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-lg)',
          transition: 'all 0.3s ease'
        }}
        className="back-to-top-btn"
      >
        <FaArrowUp />
      </button>

      <style>{`
        .back-to-top-btn:hover {
          background-color: var(--color-accent) !important;
          color: var(--color-primary-dark) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
};

export default BackToTop;
