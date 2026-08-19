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
    bullets: [
      'Activity-based NEP 2020 aligned learning',
      'Phonics, expressive English, Hindi & Regional Language',
      'Hands-on Math & Environmental Studies (EVS)',
      'Art, Music, Dance & Storytelling modules',
      'Nurturing socio-emotional confidence'
    ],
    sections: [
      {
        title: 'Classes I – V Approach',
        content: 'During classes I to V, children naturally absorb the world through curiosity and play. We create a stimulating environment where students explore concepts through guided activities, interactive games, and peer projects. Our curriculum focuses heavily on developing core literacy, numeracy, and strong communication skills from an early age.'
      },
      {
        title: 'Learning Methodology',
        content: 'We use an activity-based NEP 2020 aligned approach. Focus is on phonics, expressive language, hands-on math, environmental studies, and nurturing socio-emotional confidence through art, music, and dance. Teachers use story-telling, field trips, and visual aids to make learning highly engaging and memorable.'
      },
      {
        title: 'Core Subjects & Co-Curriculars',
        content: 'Academics cover English, Mathematics, Science & Environmental Studies, Hindi, Computer Basics, and General Knowledge. Our robust co-curricular program ensures holistic development, featuring Visual Arts, Clay Modeling, Music, Martial Arts, Kids Yoga, and regular sports activities.'
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
    bullets: [
      'Structured CBSE syllabus with integrated laboratory work',
      'Advanced Science (Physics, Chem, Bio) & Mathematics',
      'Robotics, AI fundamentals & Coding in Computer Lab',
      'Competitive Olympiad preparation & Debating society',
      'Comprehensive Board Exam readiness & counseling'
    ],
    sections: [
      {
        title: 'Classes VI – X Approach',
        content: 'The curriculum follows a rigorous CBSE National Framework preparing students for AISSE Class X Board Examinations, with comprehensive counseling and readiness. We emphasize critical thinking, logical reasoning, and independent problem-solving skills to help students navigate complex subjects.'
      },
      {
        title: 'Learning Methodology',
        content: 'We offer a structured CBSE syllabus with integrated laboratory work across physics, chemistry, and biology. Students get hands-on experience with robotics, AI fundamentals, coding, competitive Olympiad preparation, and participate in a highly active debating society to hone their public speaking skills.'
      },
      {
        title: 'Core Subjects & Skill Enrichment',
        content: 'The core syllabus includes Advanced Mathematics, Physics, Chemistry, Biology, Social Sciences (History, Civics, Geography, Economics), Languages, and Information Technology. Our skill enrichment programs provide extra focus on Python programming, Robotics, Model United Nations (MUN), and Vedic Math to stay ahead of the curve.'
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
    bullets: [
      'Science Stream: PCM / PCB with JEE & NEET coaching support',
      'Commerce Stream: Accounts, Business Studies, Economics & Applied Math',
      'Humanities: Political Science, Psychology, Sociology & History',
      'Career Guidance, University Admissions & Profile Building',
      'Leadership conclaves, research papers & internship initiatives'
    ],
    sections: [
      {
        title: 'Classes XI – XII Approach',
        content: 'Students choose specialized streams tailored to their career aspirations. The academic rigor is balanced with career guidance, university admissions support, and student profile building. We prepare our students not just for board exams, but for successful transitions into premier higher education institutions globally.'
      },
      {
        title: 'Learning Methodology',
        content: 'Our senior secondary teaching methodology heavily emphasizes in-depth analytical reasoning, extensive laboratory research, case-study based learning in Commerce, and deep theoretical discussions in Humanities. Regular mock tests, peer teaching, career conclaves, and industry internships form a core part of the experience.'
      },
      {
        title: 'Streams & Subjects Offered',
        content: 'Science (PCM/PCB) includes Physics, Chemistry, Math, Biology, Computer Science, and Artificial Intelligence. Commerce includes Accountancy, Business Studies, Economics, and Applied Math. Humanities offers History, Political Science, Psychology, and Sociology. Physical Education and Fine Arts are available as electives across all streams.'
      }
    ]
  }
};
