import React from 'react';
import Typewriter from 'typewriter-effect';
import linkedinimage from '../images/linkedin.png';
import githubimage from '../images/github.png';
import discordimage from '../images/discord.png';
import facebookimage from '../images/facebook.png';
import instagramimage from '../images/instagram.png';
import twitterimage from '../images/twitter.png';

const SectionProfile = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const discordText = 'Louay#6287';

  const copyToClipboard = () => {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = discordText;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show a prompt indicating that the text has been copied
    window.alert('Text copied: ' + discordText);
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
              strings: ["<strong>I'M LOUAY HOUIMLI </strong>", 'A 18 YEARS OLD', "<strong>Front End Developer</strong>"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="btn-container">
          <button className="btn btn-color-2">
            Download CV
          </button>
          <button className="btn btn-color-2" onClick={scrollToContact}>
            Contact Info
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
            id="icons"
            onClick={() => window.open('https://github.com/LouayHouimli')}
          />
          <img
            src={discordimage}
            alt="Louay discord"
            className="icon"
            id="icons"
            onClick={copyToClipboard} // Add the onClick event handler for Discord
          />
          <img src={facebookimage} alt="Louay facebook" className="icon" id="icons" />
          <img src={instagramimage} alt="Louay instagram" className='icon' id='icons' />
          <img src={twitterimage} alt="Louay twitter" className='icon' id='icons' />
        </div>
      </div>
    </section>
  );
};

export default SectionProfile;
