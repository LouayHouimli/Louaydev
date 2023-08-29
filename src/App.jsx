import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import HomeNav from './components/Nav';
import HomeHamburgerNav from './components/HamburgerNav';
import HomeSectionProfile from './components/SectionProfile';
import HomeSectionAbout from './components/SectionAbout';
import HomeSectionExperience from './components/SectionExperience';
import HomeSectionProjects from './components/SectionProjects';
import HomeSectionContact from './components/SectionContact';
import Footer from './components/Footer';
import './App.css';
import './Respo.css';
import loadingGif from './images/giphy.gif';

const Home = () => (
  <>
    <HomeNav />
    <HomeHamburgerNav />
    <HomeSectionProfile />
    <HomeSectionAbout />
    <HomeSectionExperience />
    <HomeSectionProjects />
    <HomeSectionContact />
    <Footer />
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Toggle dark mode logic
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
          {/* ... (your existing code) */}
          <Routes>
            {/* Automatically redirect to /home */}
            <Route path="/" element={<Navigate to="/home" />} />
            
            {/* Render the Home component under /home */}
            <Route path="/home" element={<Home />} />

            {/* Add other routes here if needed */}
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
