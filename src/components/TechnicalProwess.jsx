import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Award, Cpu } from 'lucide-react';

const TechnicalProwess = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const tabs = [
    { name: 'Projects', icon: <Laptop size={22} /> },
    { name: 'Certifications', icon: <Award size={22} /> },
    { name: 'Technologies', icon: <Cpu size={22} /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website (This one!)',
      description: 'A responsive and dynamic portfolio showcasing diverse skills and projects.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Prathvi321/Portfolio',
      demo: 'https://polymathportfolio.netlify.app/',
      image: '/Portfolio.png',
    },
    {
      id: 2,
      title: 'CodeHub: A learning Platform',
      description: 'A comprehensive learning platform designed to take coders from beginner to pro.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Prathvi321/CodeHub',
      demo: 'https://codehub321.netlify.app/',
      image: '/CodeHubpage.png',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Complete 2025 Python Bootcamp',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-24 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-blue-700 mb-16">My Digital Creations & Expertise</h2>

      {/* Floating glass navigation */}
      <div className="fixed md:top-1/2 bottom-8 md:left-12 md:translate-y-[-50%] flex md:flex-col flex-row gap-4 bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl border border-white/50 p-4 z-20">
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-semibold
              ${activeTab === tab.name
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'text-gray-700 hover:text-blue-700 hover:bg-white/60'}`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Dynamic section display */}
      <div className="container mx-auto max-w-6xl mt-10 md:ml-40 px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'Projects' && (
            <motion.div
              key="projects"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {projects.map(p => (
                <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:scale-105 transition-all">
                  <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-gray-600 mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map(t => (
                        <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={p.github} target="_blank" className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">GitHub</a>
                      <a href={p.demo} target="_blank" className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm hover:bg-gray-300">Demo</a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Certifications' && (
            <motion.div
              key="certifications"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {certifications.map(cert => (
                <div key={cert.id} className="bg-white rounded-2xl p-6 shadow-lg text-center border hover:scale-105 transition-all">
                  <img src={cert.image} alt={cert.title} className="w-24 h-24 object-contain mx-auto mb-4" />
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
                  >
                    View Credential
                  </a>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Technologies' && (
            <motion.div
              key="technologies"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {technologies.map(tech => (
                <div key={tech.name} className="flex flex-col items-center bg-white p-5 rounded-2xl shadow-lg border w-32 h-32 hover:scale-105 transition-all">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
                  <p className="font-semibold text-gray-800">{tech.name}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechnicalProwess;
