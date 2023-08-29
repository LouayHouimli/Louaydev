import React from 'react';
import project1 from '../images/project-1.png'
import project2 from '../images/project-2.png'
import project3 from '../images/project-3.png'
import arrowIcon from '../images/arrow.png';

const SectionProjects = () => {
  const scrollToContact = () => {
    const experienceSection = document.getElementById('contact');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1}
                alt="Project 1"
                className="project-img"
                id="louay"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <h3 className="experience-sub-title ">Anime Search Engine</h3>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                id="btnspecial"
                onClick={() => window.open('https://github.com/LouayHouimli/animelouay')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://animelouay.vercel.app/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2}
                alt="Project 2"
                className="project-img"
                id="louay"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3}
                alt="Project 3"
                className="project-img"
                id="louay"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={scrollToContact}
      />
    </section>
  );
};

export default SectionProjects;
