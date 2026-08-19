import React, { useState } from 'react';
import { FaBullhorn, FaCalendarAlt, FaTimes, FaArrowRight, FaTag, FaGraduationCap, FaRunning, FaUsers, FaRobot } from 'react-icons/fa';

const newsArticles = [
  {
    id: 1,
    title: 'Admissions Open for Academic Session 2026–27',
    date: 'March 15, 2026',
    category: 'Admissions',
    icon: FaGraduationCap,
    summary: 'Registrations are now invited for Nursery through Grade XI across Science, Commerce & Humanities streams. Limited seats available.',
    details: 'Elevare Public School announces the commencement of admission registrations for the upcoming academic session 2026-27. Parents are encouraged to fill out the online enquiry form or visit the school admissions office between 9:00 AM and 3:00 PM on weekdays. Early registration benefits apply till April 10, 2026.'
  },
  {
    id: 2,
    title: 'Annual Sports Day "Khel Mahotsav 2026"',
    date: 'February 28, 2026',
    category: 'Sports Event',
    icon: FaRunning,
    summary: 'A grand showcase of athletic prowess, march-past, track events, and gymnastics by students from all four school houses.',
    details: 'The Elevare Annual Athletics Meet will be hosted on the main campus sports grounds with Olympic medalist Chief Guests. Events include 100m sprint, relay race, high jump, yoga demonstrations, and inter-house tug-of-war championship.'
  },
  {
    id: 3,
    title: 'Term-End Parent Teacher Meeting (PTM)',
    date: 'February 20, 2026',
    category: 'Academic',
    icon: FaUsers,
    summary: 'Comprehensive one-on-one progress review between mentors and parents regarding holistic student development.',
    details: 'Parents are cordially invited to interact with respective class teachers and subject mentors to discuss academic evaluation sheets, behavioral growth, and co-curricular participation. Specific time slots have been communicated via the parent communication portal.'
  },
  {
    id: 4,
    title: 'Inter-School Science & AI Robotics Expo',
    date: 'January 18, 2026',
    category: 'Innovation',
    icon: FaRobot,
    summary: 'Over 30 schools participated in our state-level STEM fest featuring AI bots, solar innovations, and automated systems.',
    details: 'Elevare Public School proudly hosted the 5th Inter-School Science and Robotics Conclave. Student exhibits included an automated drone surveillance prototype, smart irrigation moisture sensors, and bio-degradable polymer alternatives.'
  }
];

const News = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="news" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaBullhorn /> Notices & Updates
          </div>
          <h2 className="section-title">
            Latest News & <span className="text-gold">Announcements</span>
          </h2>
          <p className="section-subtitle">
            Stay informed with the latest happenings, circulars, academic milestones, and upcoming campus events at Elevare.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '26px'
          }}
        >
          {newsArticles.map((article, idx) => {
            const Icon = article.icon;
            return (
              <div 
                key={article.id}
                className="card news-card"
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                style={{
                  padding: '28px 24px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {/* Meta info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      backgroundColor: 'var(--color-accent-soft)',
                      color: 'var(--color-accent-hover)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    <FaTag style={{ fontSize: '0.65rem' }} /> {article.category}
                  </span>

                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FaCalendarAlt /> {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--color-primary)', margin: '4px 0' }}>
                  {article.title}
                </h3>

                {/* Summary */}
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                  {article.summary}
                </p>

                {/* Read More button */}
                <button
                  onClick={() => setActiveArticle(article)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-secondary)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                    marginTop: '8px'
                  }}
                >
                  Read Full Notice <FaArrowRight style={{ fontSize: '0.75rem' }} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Modal for Full Notice Details */}
        {activeArticle && (
          <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveArticle(null)}
                aria-label="Close Notice Modal"
              >
                <FaTimes />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="section-badge" style={{ margin: 0 }}>
                  {activeArticle.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                  {activeArticle.date}
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '16px' }}>
                {activeArticle.title}
              </h3>

              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '20px', lineHeight: 1.65, color: 'var(--color-text-main)' }}>
                {activeArticle.details}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="btn btn-primary btn-sm"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default News;
