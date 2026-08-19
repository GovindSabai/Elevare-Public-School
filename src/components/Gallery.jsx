import React, { useState } from 'react';
import { FaImages, FaTimes, FaSearchPlus, FaFilter } from 'react-icons/fa';
import { schoolImages } from '../data/images';

const categories = [
  { key: 'all', label: 'All Moments' },
  { key: 'academics', label: 'Classroom & Learning' },
  { key: 'science', label: 'Science & Robotics' },
  { key: 'sports', label: 'Sports & Athletics' },
  { key: 'cultural', label: 'Cultural & Arts' },
  { key: 'campus', label: 'Campus Life' }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? schoolImages.gallery
    : schoolImages.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaImages /> Life at Elevare
          </div>
          <h2 className="section-title">
            Vibrant Campus <span className="text-gold">Moments & Memories</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the daily energy, creative expressions, sports triumphs, and memorable celebrations of our vibrant school community.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          data-aos="fade-up"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: activeFilter === cat.key ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                backgroundColor: activeFilter === cat.key ? 'var(--color-primary)' : 'var(--color-bg-alt)',
                color: activeFilter === cat.key ? '#FFFFFF' : 'var(--color-text-main)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 80}
              className="gallery-item-card"
              onClick={() => setSelectedImage(item)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                height: '260px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                className="gallery-img"
              />

              {/* Overlay on hover */}
              <div 
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 36, 71, 0.92) 0%, rgba(11, 36, 71, 0.4) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--color-accent-light)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.category}
                  </span>
                  <FaSearchPlus style={{ color: '#FFFFFF', fontSize: '1rem' }} />
                </div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>
                  {item.title}
                </h4>
                <p style={{ color: '#BACCDD', fontSize: '0.8rem', margin: '4px 0 0 0', lineHeight: 1.3 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div 
              style={{
                maxWidth: '850px',
                width: '100%',
                background: '#0B2447',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(212, 160, 23, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  zIndex: 10
                }}
              >
                <FaTimes />
              </button>

              <div style={{ maxHeight: '520px', overflow: 'hidden' }}>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  style={{ width: '100%', height: '100%', maxHeight: '520px', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '24px 30px', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', margin: 0 }}>
                    {selectedImage.title}
                  </h3>
                  <span style={{ color: 'var(--color-accent-light)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'capitalize' }}>
                    {selectedImage.category}
                  </span>
                </div>
                <p style={{ color: '#BACCDD', fontSize: '0.92rem', margin: 0 }}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
