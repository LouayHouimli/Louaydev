import React from 'react';
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
