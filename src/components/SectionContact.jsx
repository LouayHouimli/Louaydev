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
          <p><a href="mailto:examplemail@gmail.com">louayhouimli@engineer.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinImage}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="#">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
