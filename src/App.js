import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import TechnicalProwess from './components/TechnicalProwess';
import CreativeCorner from './components/CreativeCorner';
import LeadershipCommunication from './components/LeadershipCommunication';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-me', 'technical-prowess', 'creative-corner', 'leadership-communication', 'contact'];
      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.2 && rect.bottom >= window.innerHeight * 0.2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900 font-inter antialiased">


      <Navbar navigateTo={navigateTo} activeSection={activeSection} />

      <main className="pt-20">
        <Home navigateTo={navigateTo} />
        <AboutMe />
        <TechnicalProwess />
        <CreativeCorner />
        <LeadershipCommunication />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;