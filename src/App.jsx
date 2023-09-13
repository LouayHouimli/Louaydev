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
import loadingGif from './images/giphy.gif';
import NotFound from './components/NotFound';
import CountdownTimer from './components/CountdownTimer';
import NotificationComponent from './components/NotificationComponent';
import PDFViewer from './components/PDFViewer';

function RedirectResume() {
  useEffect(() => {
    window.location.href = 'https://www.google.com';
  }, []);

  return null; // This component doesn't render anything
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Track the initial load

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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Toggle dark mode logic
  }, []);

  useEffect(() => {
    // Handle initial redirection
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

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

        {isLoading ? (
          <div className="loading-screen">
            <img src={loadingGif} alt="Loading" className="loading-gif" />
            <p className="loading-text">Loading...</p>
          </div>
        ) : (
          <Routes>
            {/* Handle initial redirection */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Render HomeNav and HomeHamburgerNav within the /home route */}
            <Route path="/home" element={<Home />} />

            {/* Add other routes here if needed */}
            <Route path="*" element={<NotFound />} />

            {/* For example:
            {/* Add other routes here if needed */}
            <Route path="/birthday" element={<CountdownTimer />} />

            {/* For example:
            <Route path="/about" element={<AboutComponent />} />
            */}
            <Route path="/resume" element={<RedirectResume />} />
            <Route path="/rcl" component={PDFViewer} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;

// update
