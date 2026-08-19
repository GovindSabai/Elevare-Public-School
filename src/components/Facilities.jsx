import React from 'react';
import { 
  FaBuilding, 
  FaTv, 
  FaFlask, 
  FaLaptopCode, 
  FaBook, 
  FaRunning, 
  FaBus, 
  FaMusic, 
  FaUserShield,
  FaMicrophone
} from 'react-icons/fa';
import { schoolImages } from '../data/images';

const facilityList = [
  {
    id: 1,
    title: 'Smart Classrooms',
    image: schoolImages.facilities.smartClass,
    icon: FaTv,
    tag: 'Digital Learning',
    description: 'Acoustically designed, air-conditioned rooms equipped with interactive touchscreen panels and digital lesson libraries.'
  },
  {
    id: 2,
    title: 'Science Laboratories',
    image: schoolImages.facilities.scienceLab,
    icon: FaFlask,
    tag: 'Hands-on Research',
    description: 'Dedicated Physics, Chemistry, and Biology labs strictly adhering to safety standards for experiential discovery.'
  },
  {
    id: 3,
    title: 'Computer & AI Lab',
    image: schoolImages.facilities.computerLab,
    icon: FaLaptopCode,
    tag: 'Tech & Coding',
    description: 'High-speed networked terminals equipped with latest IDEs, Python, robotics kits, and high-speed internet.'
  },
  {
    id: 4,
    title: 'Library & Resource Centre',
    image: schoolImages.facilities.library,
    icon: FaBook,
    tag: '10,000+ Books',
    description: 'Rich repository of encyclopedias, national journals, literature, periodicals, and quiet digital e-reading zones.'
  },
  {
    id: 5,
    title: 'Multi-Sport Complex',
    image: schoolImages.facilities.sportsGround,
    icon: FaRunning,
    tag: 'Athletics & Games',
    description: 'Full-size cricket pitch, football turf, floodlit basketball court, badminton hall, and athletic sprint tracks.'
  },
  {
    id: 6,
    title: 'Safe Fleet Transportation',
    image: schoolImages.facilities.transport,
    icon: FaBus,
    tag: 'GPS & CCTV Tracked',
    description: 'Extensive fleet of air-conditioned buses with female attendants, speed regulators, and live parent tracking app.'
  },
  {
    id: 7,
    title: 'Creative Activity Studios',
    image: schoolImages.facilities.artsStudio,
    icon: FaMusic,
    tag: 'Music, Dance & Drama',
    description: 'Sound-insulated performing arts rooms for classical instruments, vocal training, theater practice, and fine arts.'
  },
  {
    id: 8,
    title: 'Safe Campus & Health Bay',
    image: schoolImages.facilities.safetyCampus,
    icon: FaUserShield,
    tag: '24/7 Security & Doctor',
    description: 'Round-the-clock guarded gates, biometric access, 300+ CCTV cameras, and full-time qualified nurse infirmary.'
  },
  {
    id: 9,
    title: 'Grand Auditorium',
    image: schoolImages.facilities.auditorium,
    icon: FaMicrophone,
    tag: 'Events & Assemblies',
    description: 'A spacious, acoustically treated auditorium with a large stage, professional lighting, and seating for 1000+ attendees.'
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className="section section-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaBuilding /> Infrastructure & Campus
          </div>
          <h2 className="section-title">
            State-of-the-Art <span className="text-gold">School Facilities</span>
          </h2>
          <p className="section-subtitle">
            A secure, inspiring, and technologically advanced 10-acre campus designed to support academic excellence, sporting triumph, and holistic student well-being.
          </p>
        </div>

        {/* Facilities Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '26px'
          }}
        >
          {facilityList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="card facility-card"
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 100}
                style={{
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image Container */}
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={`${item.title} at Elevare Public School`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="facility-img"
                  />
                  
                  {/* Tag Pill */}
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(11, 36, 71, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--color-accent-light)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div 
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--color-accent-soft)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        flexShrink: 0
                      }}
                    >
                      <Icon />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .facility-card:hover .facility-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

export default Facilities;
