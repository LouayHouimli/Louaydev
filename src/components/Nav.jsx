import React, { useEffect, useState } from 'react';
import moonImage from '../images/moon.png';
import LoadingScreen from './LoadingScreen'; // Correct relative path

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false); // Local darkMode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle local dark mode state
    

    const body = document.body;
    body.classList.toggle("dark-mode");

    const appDiv = document.querySelector('.app');
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
        // Dark mode is active
        document.body.classList.add("dark-mode");
        document.body.classList.remove("background-animation");
        setDarkMode(true); // Update local dark mode state
      } else {
        // Light mode is active
        document.body.classList.remove("dark-mode");
        document.body.classList.add("background-animation");
        setDarkMode(false); // Update local dark mode state
      }
    };

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkMode.addListener(handleColorSchemeChange);

    // Set initial color mode based on user preference
    if (prefersDarkMode.matches) {
      document.body.classList.add("dark-mode");
      setDarkMode(true); // Update local dark mode state
    } else {
      document.body.classList.remove("dark-mode");
      setDarkMode(false); // Update local dark mode state
    }

    // Cleanup function
    return () => {
      prefersDarkMode.removeListener(handleColorSchemeChange);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (event, sectionId) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    scrollToSection(sectionId);
  };

  return (
    <nav id="desktop-nav">
      <div className="logo">Louay.dev</div>
      {/* Add this button within the <nav> element or any appropriate location */}
      <img
        src={moonImage}
        alt="Dark Mode Toggle"
        className={`dark-mode-icon ${darkMode ? 'active' : ''}`}
        onClick={toggleDarkMode}
      />

      <div>
        <ul className="nav-links">
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'profile')}>Profile</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'about')}>About</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'experience')}>Experience</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'projects')}>Projects</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'contact')}>Contact</a></li>
         <li><a href="https://louayhouimli.vercel.app/louaybac2k24" >Bac 2K24</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
