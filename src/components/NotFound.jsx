import React from 'react';
import Typewriter from 'typewriter-effect';
import linkedinimage from '../images/linkedin.png';
import githubimage from '../images/github.png';
import discordimage from '../images/discord.png';
import facebookimage from '../images/facebook.png';
import instagramimage from '../images/instagram.png';
import twitterimage from '../images/twitter.png';

const NotFound = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <div className="shape"></div>
      </div>
      <div className="section__text">
        <div id="app">
          <Typewriter
            options={{
              strings: ["<strong>Page Not Found 404 </strong>"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="btn-container">
        <button className="btn btn-color-2" onClick={() => window.location.href = '/home'}>
  Home Page
</button>

          
        </div>
        <div id="socials-container">
        <img
            src={linkedinimage}
            alt="My LinkedIn profile"
            className="icon"
            id="icons"
            onClick={() => window.open('https://www.linkedin.com/in/louay-houimli/')}
          />
          <img
            src={githubimage}
            alt="My Github profile"
            className="icon"
            id='icons'
            onClick={() => window.open('https://github.com/LouayHouimli')}
          />
          <img src={discordimage} alt="Louay discord" className="icon" id='icons' />
          <img src={facebookimage} alt="Louay facebook" className="icon" id='icons' />
          <img src={instagramimage} alt="Louay instagram" className='icon' id='icons' />
          <img src={twitterimage} alt="Louay twitter" className='icon' id='icons' />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
