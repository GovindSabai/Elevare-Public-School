import React from 'react';
import { FaGraduationCap, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { schoolImages } from '../data/images';

export const academicPrograms = [
  {
    id: 'primary',
    title: 'Primary School',
    grades: 'Classes I – V (Ages 6 – 10)',
    image: schoolImages.academics.primary,
    description: 'Fostering natural curiosity, foundational literacy & numeracy, artistic expression, and joyful experiential learning.',
    bullets: [
      'Activity-based NEP 2020 aligned learning',
      'Phonics, expressive English, Hindi & Regional Language',
      'Hands-on Math & Environmental Studies (EVS)',
      'Art, Music, Dance & Storytelling modules',
      'Nurturing socio-emotional confidence'
    ]
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    grades: 'Classes VI – X (Ages 11 – 15)',
    image: schoolImages.academics.secondary,
    description: 'Building strong conceptual mastery, analytical reasoning, disciplined study habits, and independent inquiry.',
    bullets: [
      'Structured CBSE syllabus with integrated laboratory work',
      'Advanced Science (Physics, Chem, Bio) & Mathematics',
      'Robotics, AI fundamentals & Coding in Computer Lab',
      'Competitive Olympiad preparation & Debating society',
      'Comprehensive Board Exam readiness & counseling'
    ]
  },
  {
    id: 'senior-secondary',
    title: 'Senior Secondary',
    grades: 'Classes XI – XII (Ages 16 – 18)',
    image: schoolImages.academics.senior,
    description: 'Empowering specialized career paths across Science, Commerce, and Humanities with integrated competitive exam prep.',
    bullets: [
      'Science Stream: PCM / PCB with JEE & NEET coaching support',
      'Commerce Stream: Accounts, Business Studies, Economics & Applied Math',
      'Humanities: Political Science, Psychology, Sociology & History',
      'Career Guidance, University Admissions & Profile Building',
      'Leadership conclaves, research papers & internship initiatives'
    ]
  }
];

const Academics = () => {
  return (
    <section id="academics" style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <div className="section-badge">
            <FaGraduationCap /> ACADEMIC JOURNEY
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '16px' }}>
            Structured Pathways from <br />
            <span style={{ color: 'var(--color-accent)' }}>Class I to XII</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Our comprehensive academic roadmap is designed to ignite curiosity in early childhood, 
            sharpen intellect through middle years, and forge industry & college readiness in senior school.
          </p>
        </div>

        {/* 3-Card Grid Container */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px', 
            maxWidth: '1200px', 
            margin: '0 auto 60px auto' 
          }}
        >
          {academicPrograms.map((program, index) => (
            <Link 
              to={`/academics/${program.id}`}
              key={program.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Card Image Wrapper */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img 
                  src={program.image} 
                  alt={program.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Grades Badge over image */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFF',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  {program.grades}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '30px 24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaGraduationCap style={{ color: 'var(--color-secondary)' }}/> {program.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {program.description}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                  {program.bullets.map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--color-text-regular)' }}>
                      <FaCheckCircle style={{ color: 'var(--color-accent)', marginTop: '4px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.5 }}>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    borderRadius: '30px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    marginTop: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    e.currentTarget.style.color = '#FFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                >
                  Curriculum Highlights <FaArrowRight style={{ fontSize: '0.9rem' }} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div 
          data-aos="fade-up" 
          style={{
            backgroundColor: 'var(--color-bg-alt)',
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div 
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                fontSize: '1.5rem',
                flexShrink: 0
              }}
            >
              <FaGraduationCap />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '6px' }}>
                Every Child, Every Step, Every Success
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
                From the first day of school to the final step towards higher education, we are with your child in every milestone.
              </p>
            </div>
          </div>
          
          <Link
            to="/contact"
            className="btn btn-gold"
            style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Explore Admissions <FaArrowRight style={{ fontSize: '0.9rem' }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Academics;
