import React from 'react';
import moonImage from '../images/moon.png';


const HamburgerNav = () => {
  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      body.classList.remove("background-animation");
    } else {
      body.classList.add("background-animation");
    }
  };

  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">Louay.dev</div>
      <img
        src={moonImage}
        alt="Dark Mode Toggle"
        className="dark-mode-icon"
        onClick={toggleDarkMode}
      />
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span className="spans"></span>
          <span className="spans"></span>
          <span className="spans"></span>
        </div>
        <div className="menu-links">
          <ul>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerNav;
