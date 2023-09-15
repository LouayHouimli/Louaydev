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
        <ul className="nav-links">
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'profile')}>Profile</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'about')}>About</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'experience')}>Experience</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'projects')}>Projects</a></li>
          <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'contact')}>Contact</a></li>
          <li><a href="https://louayhouimli.vercel.app/louaybac2k24" >Bac 2K24</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerNav;
