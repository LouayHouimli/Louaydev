import React from 'react';
import louayImage from '../images/louay1.png'; // Adjust the path to your image
import experienceIcon from '../images/experience.png'; // Adjust the path to your image
import educationIcon from '../images/education.png'; // Adjust the path to your image
import arrowIcon from '../images/arrow.png'; // Adjust the path to your image

const SectionAbout = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={louayImage}
            alt="Profile picture"
            className="about-pic"
            id="louay"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1+ Year <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>Bac Informatique 2024 ✔️<br />Self Learning </p>
            </div>
          </div>
          <div className="text-container">
            <p>
            Greetings! 🌟 I'm Louay, a spirited Junior Front End Developer originating from the enchanting realm of Tunisia 🇹🇳 . As a fresh face in the world of web development, I'm captivated by the art of crafting seamless user experiences through the power of code and creativity.

My journey began with a zeal for all things web-related, and I've embarked on this path to refine my skills and master the craft of Front End Development. With an ever-growing toolkit of HTML, CSS, and JavaScript wizardry, I'm eager to collaborate on projects that fuse imagination with innovation.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={scrollToExperience}
      />
    </section>
  );
};

export default SectionAbout;
