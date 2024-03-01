import React from 'react';

const Footer = () => {
  const handleNavLinkClick = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'profile')}>Profile</a></li>
            <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'about')}>About</a></li>
            <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'experience')}>Experience</a></li>
            <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'projects')}>Projects</a></li>
            <li><a href="#" onClick={(event) => handleNavLinkClick(event, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 Louay.dev 🇹🇳 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
