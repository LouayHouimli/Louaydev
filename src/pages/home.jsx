// pages/index.js
import React from 'react';
import HomeNav from '../components/Nav';
import HomeHamburgerNav from '../components/HamburgerNav';
import HomeSectionProfile from '../components/SectionProfile';
import HomeSectionAbout from '../components/SectionAbout';
import HomeSectionExperience from '../components/SectionExperience';
import Footer from '../components/Footer';

const Home = () => (
  <>
    
    <HomeHamburgerNav />
    <HomeSectionProfile />
    <HomeSectionAbout />
    <HomeSectionExperience />
    {/* Other sections */}
    <Footer />
  </>
);

export default Home;
