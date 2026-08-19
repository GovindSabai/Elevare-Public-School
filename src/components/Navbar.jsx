import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Academics', to: '/academics' },
    { name: 'Facilities', to: '/facilities' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header 
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : '#FFFFFF',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      {/* Main Navigation Bar */}
      <nav 
        className="main-navbar"
        style={{
          padding: isScrolled ? '12px 0' : '16px 0',
          transition: 'padding 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link 
            to="/"
            style={{ textDecoration: 'none' }}
          >
            <Logo size={isScrolled ? 40 : 46} />
          </Link>

          {/* Desktop Nav Links */}
          <div 
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link-item"
                style={{
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '0.98rem', // Slightly larger font size for desktop links
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="nav-cta-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/admissions"
              className="btn btn-gold btn-sm"
              style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              <FaGraduationCap /> Apply Now
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-primary)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '6px'
              }}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            width: '100%',
            backgroundColor: '#FFFFFF',
            boxShadow: 'var(--shadow-xl)',
            padding: '24px',
            borderBottom: '3px solid var(--color-accent)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 999,
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--color-primary)',
                fontWeight: 600,
                fontSize: '1.05rem',
                padding: '10px 0',
                borderBottom: '1px solid var(--color-border-light)',
                display: 'block',
                cursor: 'pointer'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/admissions"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-gold"
            style={{ marginTop: '12px', textAlign: 'center' }}
          >
            <FaGraduationCap /> Apply for Admission 2026-27
          </Link>
        </div>
      )}

      {/* CSS Enhancements for Nav Link Hover */}
      <style>{`
        .nav-link-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-accent);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-link-item:hover::after,
        .nav-link-item.nav-link-active::after {
          width: 100%;
        }
        .nav-link-item:hover,
        .nav-link-item.nav-link-active {
          color: var(--color-secondary) !important;
        }
        @media (max-width: 1024px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
          .top-bar {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
