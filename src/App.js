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
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

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

  useEffect(() => {
    audioRef.current = document.getElementById('backgroundAudio');
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setAudioPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented:', error);
          setAudioPlaying(false);
        }
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900 font-inter antialiased">
      <audio id="backgroundAudio" src="/66225f5a-4a92-469e-b44e-8bb142fc70e7.mp3" preload="auto"></audio>
      
      <button
        onClick={toggleAudio}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors duration-300"
        title={audioPlaying ? "Pause Background Music" : "Play Background Music"}
      >
        {audioPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

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