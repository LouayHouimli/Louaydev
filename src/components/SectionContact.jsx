import React from 'react';
import emailImage from '../images/email.png';
import linkedinImage from '../images/linkedin.png';

const SectionContact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailImage}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:louayhouimli@engineer.com">louayhouimli@engineer.com</a></p>
        </div>
        <div className="contact-info-container">
        <img
            src={linkedinimage}
            alt="My LinkedIn profile"
            className="icon"
            id="icons"
            onClick={() => window.open('https://www.linkedin.com/in/louay-houimli/')}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
