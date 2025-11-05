import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Laptop, Award, Cpu } from 'lucide-react';

const TechnicalProwess = () => {
  const tabs = [
    { name: 'Projects', icon: <Laptop size={22} /> },
    { name: 'Certifications', icon: <Award size={22} /> },
    { name: 'Technologies', icon: <Cpu size={22} /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex].name;

  const nextTab = () => setActiveIndex((prev) => (prev + 1) % tabs.length);
  const prevTab = () => setActiveIndex((prev) => (prev - 1 + tabs.length) % tabs.length);

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio showcasing skills and projects.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Prathvi321/Portfolio',
      demo: 'https://polymathportfolio.netlify.app/',
      image: '/Portfolio.png',
    },
    {
      id: 2,
      title: 'CodeHub: Learning Platform',
      description: 'A full-stack learning platform for developers.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Prathvi321/CodeHub',
      demo: 'https://codehub321.netlify.app/',
      image: '/CodeHubpage.png',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Complete Python Bootcamp 2025',
      issuer: 'Udemy',
      date: 'Oct 2024',
      credentialUrl: 'https://www.udemy.com/certificate/UC-2692602b-cf0a-4131-913a-d1ea9b644206',
      image: '/Python Boot Camp.png',
    },
  ];

  const technologies = [
    { name: 'React', icon: '/icons/react-2.svg' },
    { name: 'Python', icon: '/icons/icons8-python.svg' },
    { name: 'Docker', icon: '/icons/icons8-docker.svg' },
    { name: 'AWS', icon: '/icons/icons8-aws.svg' },
  ];

  const fadeVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? -20 : 20,
    }),
    center: { x: 0, opacity: 1, rotateY: 0 },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? -20 : 20,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection > 0) nextTab();
    else prevTab();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((p) => (
              <div key={p.id} className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border hover:scale-105 transition-all">
                <img src={p.image} alt={p.title} className="h-48 w-full object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700">GitHub</a>
                  <a href={p.demo} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300">Demo</a>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Certifications':
        return (
          <div className="flex justify-center flex-wrap gap-8">
            {certifications.map((c) => (
              <div key={c.id} className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border text-center w-80 hover:scale-105 transition-all">
                <img src={c.image} alt={c.title} className="w-24 h-24 object-contain mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{c.title}</h3>
                <p className="text-gray-600">{c.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{c.date}</p>
                <a href={c.credentialUrl} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">View Credential</a>
              </div>
            ))}
          </div>
        );
      case 'Technologies':
        return (
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((t) => (
              <div key={t.name} className="flex flex-col items-center bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-32 h-32 hover:scale-105 transition-all">
                <img src={t.icon} alt={t.name} className="w-12 h-12 mb-2" />
                <p className="text-gray-800 font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-24 flex flex-col items-center overflow-hidden">
      <h2 className="text-5xl font-extrabold text-blue-700 mb-12">My Digital Creations & Expertise</h2>

      <div className="relative w-full max-w-5xl flex justify-center items-center px-4">
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 md:left-[-80px] bg-white/50 p-3 rounded-full hover:bg-blue-100 transition"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="w-full h-[32rem] flex items-center justify-center perspective-[1000px]">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 120, damping: 25 },
                opacity: { duration: 0.3 },
                rotateY: { duration: 0.5 },
              }}
              className="absolute w-full max-w-5xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200 p-10"
            >
              <div className="flex items-center justify-center mb-6 gap-2 text-blue-800 text-2xl font-bold">
                {tabs[activeIndex].icon}
                {tabs[activeIndex].name}
              </div>
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(1)}
          className="absolute right-0 md:right-[-80px] bg-white/50 p-3 rounded-full hover:bg-blue-100 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default TechnicalProwess;
