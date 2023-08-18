import React from 'react';
import Nav from './components/Nav';
import HamburgerNav from './components/HamburgerNav'
import SectionProfile from './components/SectionProfile';
import SectionAbout from './components/SectionAbout';
import SectionExperience from './components/SectionExperience';
import Footer from './components/Footer';
import './App.css';  // Adjust the path accordingly
import './Respo.css'; 
import SectionProjects from './components/SectionProjects';
import SectionContact from './components/SectionContact';


const App = () => {
  return (
    <div>
      <Nav />
      <HamburgerNav />
      <SectionProfile />
      <SectionAbout/>
      <SectionExperience/>
      <SectionProjects/>
      <SectionContact/>
      <Footer/>

    
      

      {/* ... Other JSX components ... */}
    </div>
  );
};

export default App;