import React from 'react';
import Typewriter from 'typewriter-effect';
import linkedinimage from '../images/linkedin.png'
import githubimage from '../images/github.png'
import discordimage from '../images/discord.png'
import facebookimage from '../images/facebook.png'
import instagramimage from '../images/instagram.png'
import twitterimage from '../images/twitter.png'


const SectionProfile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <div className="shape"></div>
      </div>
      <div className="section__text">
        <div id="app">
          <Typewriter
            options={{
              strings: ["<strong>I'M LOUAY HOUIMLI </strong>", 'A 17 YEARS OLD',"<strong>Front End Developer</strong>"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="btn-container">
          <button className="btn btn-color-2">
            Download CV
          </button>
          <button className="btn btn-color-2" onClick={() => window.location.href = './#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinimage}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href = '#'}
          />
          <img
            src={githubimage}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open('https://github.com/LouayHouimli')}
          />
          <img src={discordimage} alt="Louay discord" className="icon" />
          <img src={facebookimage} alt="Louay facebook" className="icon" />
          <img src={instagramimage} alt="Louay instagram" className='icon' />
          <img src={twitterimage} alt="Louay twitter" className='icon' />
        </div>
      </div>
    </section>
  );
};

export default SectionProfile;