import { FaSmile, FaShieldAlt, FaStar, FaChartBar, FaUserFriends, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import { schoolImages } from './images';

export const academicDetails = {
  primary: {
    title: 'Primary School (Classes I – V)',
    image: schoolImages.academics.primary,
    tagline: 'Joyful exploration and foundational mastery',
    overview: 'Our Primary School program lays a strong foundation for lifelong learning by nurturing curiosity, creativity, and confidence in every child. We focus on joyful learning, character building, and essential life skills along with academics.',
    features: [
      { icon: FaSmile, label: 'Happy Classrooms' },
      { icon: FaShieldAlt, label: 'Safe & Nurturing Environment' },
      { icon: FaStar, label: 'Focus on Values & Life Skills' },
      { icon: FaChartBar, label: 'Strong Foundation for Future' }
    ],
    sections: [
      {
        title: 'Classes I – V Approach',
        content: 'During classes I to V, children naturally absorb the world through curiosity and play. We create a stimulating environment where students explore concepts through guided activities, interactive games, and peer projects.'
      },
      {
        title: 'Learning Methodology',
        content: 'We use an activity-based NEP 2020 aligned approach. Focus is on phonics, expressive language, hands-on math, environmental studies, and nurturing socio-emotional confidence through art, music, and dance.'
      },
      {
        title: 'Core Subjects',
        content: 'English, Mathematics, Science & Environmental Studies, Hindi, Computer Basics, and General Knowledge. Co-curricular includes Visual Arts, Clay Modeling, Music, Martial Arts, and Kids Yoga.'
      }
    ]
  },
  secondary: {
    title: 'Secondary School (Classes VI – X)',
    image: schoolImages.academics.secondary,
    tagline: 'Analytical thinking and independent inquiry',
    overview: 'Building strong conceptual mastery, analytical reasoning, disciplined study habits, and independent inquiry. Secondary school marks the transition into rigorous analytical thinking and collaborative team research.',
    features: [
      { icon: FaChartBar, label: 'Conceptual Mastery' },
      { icon: FaUserFriends, label: 'Independent Inquiry' },
      { icon: FaShieldAlt, label: 'Disciplined Habits' },
      { icon: FaSmile, label: 'Team Collaboration' }
    ],
    sections: [
      {
        title: 'Classes VI – X Approach',
        content: 'The curriculum follows a rigorous CBSE National Framework preparing students for AISSE Class X Board Examinations, with comprehensive counseling and readiness.'
      },
      {
        title: 'Learning Methodology',
        content: 'Structured CBSE syllabus with integrated laboratory work, robotics, AI fundamentals, coding, competitive Olympiad preparation, and a strong debating society.'
      },
      {
        title: 'Core Subjects',
        content: 'Advanced Mathematics, Physics, Chemistry, Biology, Social Sciences (History, Civics, Geography, Economics), Languages, and Information Technology. Skill Enrichment includes Python, Robotics, MUN, and Vedic Math.'
      }
    ]
  },
  'senior-secondary': {
    title: 'Senior Secondary (Classes XI – XII)',
    image: schoolImages.academics.senior,
    tagline: 'Specialized paths and career readiness',
    overview: 'Empowering specialized career paths across Science, Commerce, and Humanities with integrated competitive exam prep. We focus on forging industry & college readiness in senior school.',
    features: [
      { icon: FaStar, label: 'Career Focused' },
      { icon: FaLaptopCode, label: 'Competitive Readiness' },
      { icon: FaShieldAlt, label: 'Specialized Paths' },
      { icon: FaGlobe, label: 'University Guidance' }
    ],
    sections: [
      {
        title: 'Classes XI – XII Approach',
        content: 'Students choose specialized streams tailored to their career aspirations. The academic rigor is balanced with career guidance, university admissions support, and profile building.'
      },
      {
        title: 'Learning Methodology',
        content: 'Focus is on in-depth analytical reasoning, extensive laboratory research, case-study based learning in Commerce, and deep theoretical understanding in Humanities. Regular mock tests and career conclaves are integral.'
      },
      {
        title: 'Streams & Subjects',
        content: 'Science (PCM/PCB) with core subjects like Physics, Chemistry, Math, Biology, Computer Science. Commerce with Accountancy, Business Studies, Economics, Applied Math. Humanities with History, Political Science, Psychology, Sociology.'
      }
    ]
  }
};
