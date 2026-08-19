import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const quickLinks = [
    { name: 'About Our School', to: '/about' },
    { name: 'Academic Journey', to: '/academics' },
    { name: 'Why Choose Us', to: '/why-us' },
    { name: 'School Facilities', to: '/facilities' },
    { name: 'Student Achievements', to: '/achievements' },
    { name: 'Campus Life Gallery', to: '/gallery' },
    { name: 'Leadership & Faculty', to: '/leadership' },
    { name: 'Latest Announcements', to: '/news' },
    { name: 'Admissions 2026–27', to: '/admissions' },
    { name: 'Contact & Campus Visit', to: '/contact' },
  ];

  const academicLevels = [
    'Primary Wing (Classes I – V)',
    'Middle School (Classes VI – VIII)',
    'Secondary Wing (Classes IX – X)',
    'Senior Secondary Science (XI – XII)',
    'Senior Secondary Commerce (XI – XII)',
    'Senior Secondary Humanities (XI – XII)',
    'STEM & Robotics Integration',
    'Career Advisory & Guidance'
  ];

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-primary-dark)',
        color: '#FFFFFF',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Gold Accent Line */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #D4A017, #F3CC5B, #1B4B8A, #D4A017)'
        }}
      />

      <div className="container">
        
        {/* 4-Column Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Column 1: School Identity & Ethos */}
          <div>
            <Logo size={46} isDark={true} />
            <p style={{ color: '#BACCDD', fontSize: '0.9rem', marginTop: '20px', lineHeight: 1.65 }}>
              Elevare Public School is committed to empowering young minds through values-driven, experiential, and futuristic CBSE education. Nurturing responsible global citizens for a brighter world.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {[
                { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
                { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Elevare Public School on ${item.label}`}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(212, 160, 23, 0.3)',
                      color: 'var(--color-accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease'
                    }}
                    className="social-icon-btn"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '20px', position: 'relative', display: 'inline-block' }}>
              Quick Navigation
              <span style={{ display: 'block', width: '35px', height: '2px', backgroundColor: 'var(--color-accent)', marginTop: '6px' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.slice(0, 7).map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    style={{
                      color: '#BACCDD',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    className="footer-nav-link"
                  >
                    › {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '20px', position: 'relative', display: 'inline-block' }}>
              Academic Wings
              <span style={{ display: 'block', width: '35px', height: '2px', backgroundColor: 'var(--color-accent)', marginTop: '6px' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {academicLevels.map((lvl, idx) => (
                <li key={idx} style={{ color: '#BACCDD', fontSize: '0.88rem' }}>
                  › {lvl}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '20px', position: 'relative', display: 'inline-block' }}>
              Get In Touch
              <span style={{ display: 'block', width: '35px', height: '2px', backgroundColor: 'var(--color-accent)', marginTop: '6px' }}></span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: '#BACCDD' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <FaMapMarkerAlt style={{ color: 'var(--color-accent)', marginTop: '3px', flexShrink: 0 }} />
                <span>Sector 14, Institutional Area, New Delhi – 110075, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <FaPhoneAlt style={{ color: 'var(--color-accent)', marginTop: '3px', flexShrink: 0 }} />
                <span>
                  <a href="https://wa.me/919876543211" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98765 43211</a> / 
                  <a href="tel:01123456789" style={{ color: 'inherit', textDecoration: 'none' }}>011-23456789</a>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <FaEnvelope style={{ color: 'var(--color-accent)', marginTop: '3px', flexShrink: 0 }} />
                <span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=admissions@elevarepublicschool.edu.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>admissions@elevarepublicschool.edu.in</a></span>
              </div>
            </div>

            <div 
              style={{
                marginTop: '20px',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(212, 160, 23, 0.25)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                color: '#E2E8F0'
              }}
            >
              <strong style={{ color: 'var(--color-accent-light)' }}>Affiliation:</strong> CBSE Affiliation Code 2130892 | School Code 81045
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div 
          className="footer-bottom-flex"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: '#8E9EAF'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Elevare Public School. All rights reserved.
          </div>
          
          <div className="footer-nav-links-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/privacy-policy" className="footer-nav-link" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions" className="footer-nav-link" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</Link>
          </div>
        </div>

      </div>

      <style>{`
        .social-icon-btn:hover {
          background-color: var(--color-accent) !important;
          color: var(--color-primary-dark) !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(212, 160, 23, 0.4);
        }
        .footer-nav-link:hover {
          color: var(--color-accent-light) !important;
          transform: translateX(4px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
