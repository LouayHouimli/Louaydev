import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomeNav from './components/Nav';
import HomeHamburgerNav from './components/HamburgerNav';
import HomeSectionProfile from './components/SectionProfile';
import HomeSectionAbout from './components/SectionAbout';
import HomeSectionExperience from './components/SectionExperience';
import Footer from './components/Footer';
import './App.css';
import './Respo.css';

import HomeSectionProjects from './components/SectionProjects';
import HomeSectionContact from './components/SectionContact';
import NotFound from './components/NotFound';
import CountdownTimer from './components/CountdownTimer';
import NotificationComponent from './components/NotificationComponent';
import PDFViewer from './components/PDFViewer';
import Loading from './components/Loading'; // Import your Loading component

function RedirectResume() {
  useEffect(() => {
    window.location.href = 'https://www.google.com';
  }, []);
}

function LouayBac2k24() {
  useEffect(() => {
    window.location.href = 'https://drive.google.com/drive/folders/11-rGdUieia5Pfw-GGK1xxaxmltNfF-QN?usp=sharing';
  }, []);

  return null; // This component doesn't render anything
}

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false); // Track the page loading status

  const Home = () => (
    <>
      <HomeNav />
      <HomeHamburgerNav />
      <HomeSectionProfile />
      <HomeSectionAbout />
      <HomeSectionExperience />
      <HomeSectionProjects />
      <HomeSectionContact />
      <Footer />
    </>
  );

  useEffect(() => {
    // Simulate loading delay even after everything is loaded
    setTimeout(() => {
      setPageLoaded(true); // Mark the page as loaded
    }, 2000); // Adjust the delay time (in milliseconds) as needed
  }, []);

  // This effect listens for changes in the pageLoaded state and hides the loading screen when the page is loaded
  useEffect(() => {
    if (pageLoaded) {
      // Page is loaded, hide the loading screen
      const loadingScreen = document.querySelector('.loading-screen');
      if (loadingScreen) {
        loadingScreen.style.display = 'none';
      }
    }
  }, [pageLoaded]);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Helmet>
          {/* Tawk.to Script */}
          <script type="text/javascript">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/64ec9d30b2d3e13950ec891a/1h8u4c22v';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </script>
        </Helmet>

        {/* Conditionally render the Loading component */}
        {!pageLoaded && <Loading />}

        <Routes>
          {/* Handle initial redirection */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Render HomeNav and HomeHamburgerNav within the /home route */}
          <Route path="/home" element={<Home />} />

          {/* Add other routes here if needed */}
          <Route path="*" element={<NotFound />} />

          {/* For example:
            <Route path="/birthday" element={<CountdownTimer />} />
          */}

          {/* For example:
            <Route path="/about" element={<AboutComponent />} />
          */}
          <Route path="/resume" element={<RedirectResume />} />
          <Route path="/louaybac2k24" element={<LouayBac2k24 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
