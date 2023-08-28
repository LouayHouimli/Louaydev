import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Nav from './components/Nav';
import HamburgerNav from './components/HamburgerNav';
import SectionProfile from './components/SectionProfile';
import SectionAbout from './components/SectionAbout';
import SectionExperience from './components/SectionExperience';
import Footer from './components/Footer';
import './App.css'; // Link the main CSS file
import './Respo.css';
import SectionProjects from './components/SectionProjects';
import SectionContact from './components/SectionContact';
import loadingGif from './images/giphy.gif'; // Import the loading GIF

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulating an API call or content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading time
  }, []);

  useEffect(() => {
    // Code for toggling dark mode

    // ...

  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Helmet>
        {/* Start of Tawk.to Script */}
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
        {/* End of Tawk.to Script */}
      </Helmet>

      {isLoading ? (
        <div className="loading-screen">
          <img src={loadingGif} alt="Loading" className="loading-gif" />
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <>
          <Nav />
          <HamburgerNav />
          <SectionProfile />
          <SectionAbout />
          <SectionExperience />
          <SectionProjects />
          <SectionContact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
