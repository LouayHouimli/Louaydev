import React from 'react';
import htmlimage from '../images/html.png';
import cssimage from '../images/css-3.png';
import javaimage from '../images/java-script.png'
import pythonimage from '../images/python.png'
import sqlimage from '../images/sql-server.png'
import phpimage from '../images/php.png'
import arrowIcon from '../images/arrow.png';
import reactimage from '../images/atom.png'



const SectionExperience = () => {
  const scrollToProjects = () => {
    const experienceSection = document.getElementById('projects');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={htmlimage}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={cssimage}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={javaimage}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={reactimage}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Just Started</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={pythonimage}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={sqlimage}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={phpimage}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>PHP</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={scrollToProjects}
      />
    </section>
  );
};

export default SectionExperience;
