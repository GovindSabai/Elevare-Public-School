import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AcademicLevelPage from './pages/AcademicLevelPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import WhyUsPage from './pages/WhyUsPage';
import AchievementsPage from './pages/AchievementsPage';
import LeadershipPage from './pages/LeadershipPage';
import NewsPage from './pages/NewsPage';
import AdmissionsPage from './pages/AdmissionsPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/academics/:level" element={<AcademicLevelPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
