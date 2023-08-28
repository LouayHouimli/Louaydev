import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HamburgerNav from './components/HamburgerNav';
import SectionProfile from './components/SectionProfile';
import SectionAbout from './components/SectionAbout';
import SectionExperience from './components/SectionExperience';
import Footer from './components/Footer';
import './App.css'; // Link the main CSS file
import './Respo.css';
import SectionProjects from './components/SectionProjects';
import SectionContact from './components/SectionContact';
import loadingGif from './images/giphy.gif'; // Import the loading GIF

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulating an API call or content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading time
  }, []);

  const toggleDarkMode = () => {
    const body = document.body;
    const appDiv = document.querySelector('.app');

    setDarkMode(!darkMode); // Toggle dark mode state

    if (!darkMode) {
      appDiv.classList.add("dark-mode"); // Add the dark-mode class to app div
      body.classList.remove("background-animation");
    } else {
      appDiv.classList.remove("dark-mode"); // Remove the dark-mode class from app div
      body.classList.add("background-animation");
    }
  };

  useEffect(() => {
    const handleColorSchemeChange = (event) => {
      if (event.matches) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("background-animation");
        setDarkMode(true);
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("background-animation");
        setDarkMode(false);
      }
    };

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkMode.addListener(handleColorSchemeChange);

    if (prefersDarkMode.matches) {
      document.body.classList.add("dark-mode");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark-mode");
      setDarkMode(false);
    }

    return () => {
      prefersDarkMode.removeListener(handleColorSchemeChange);
    };
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      {isLoading ? (
        <div className="loading-screen">
          <img src={loadingGif} alt="Loading" className="loading-gif" />
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <>
          <Nav />
          <HamburgerNav />
          <SectionProfile />
          <SectionAbout />
          <SectionExperience />
          <SectionProjects />
          <SectionContact />
          <Footer />
          
        </>
      )}
    </div>
  );
};

export default App;
