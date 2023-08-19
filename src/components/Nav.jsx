import React, { useEffect } from 'react';
import moonImage from '../images/moon.png';

const Nav = () => {
  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      body.classList.remove("background-animation");
    } else {
      body.classList.add("background-animation");
    }
  };

  useEffect(() => {
    const handleColorSchemeChange = (event) => {
      if (event.matches) {
        // Dark mode is active
        document.body.classList.add("dark-mode");
        document.body.classList.remove("background-animation");
      } else {
        // Light mode is active
        document.body.classList.remove("dark-mode");
        document.body.classList.add("background-animation");
      }
    };

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkMode.addListener(handleColorSchemeChange);

    // Set initial color mode based on user preference
    if (prefersDarkMode.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Remove the listener when the component unmounts
    return () => {
      prefersDarkMode.removeListener(handleColorSchemeChange);
    };
  }, []);

  return (
    <nav id="desktop-nav">
      <div className="logo">Louay.dev</div>
      {/* Add this button within the <nav> element or any appropriate location */}
      <img
        src={moonImage}
        alt="Dark Mode Toggle"
        className="dark-mode-icon"
        onClick={toggleDarkMode}
      />

      <div>
        <ul className="nav-links">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
