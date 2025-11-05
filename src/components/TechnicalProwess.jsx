import React, { useState } from 'react';

const TechnicalProwess = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const tabs = ['Projects', 'Certifications', 'Technologies'];

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website (This one!)',
      category: 'Web Development',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      description: 'A responsive and dynamic portfolio showcasing diverse skills and projects.',
      github: 'https://github.com/Prathvi321/Portfolio',
      demo: 'https://polymathportfolio.netlify.app/',
      image: '/Portfolio.png',
    },
    {
      id: 2,
      title: 'CodeHub: A learning Platform',
      category: 'Web Development',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      description: ' A comprehensive learning platform designed to take coders from beginner to pro.',
      github: 'https://github.com/Prathvi321/CodeHub',
      demo: 'https://codehub321.netlify.app/',
      image: '/CodeHubpage.png',
    },
    {
      id: 3,
      title: 'Git Bridge : Tool to use Git',
      category: 'Python (DSA)',
      tech: ['Python', 'tkinter', 'Git', 'Automation'],
      description: 'This Application offers a visual, intuitive interface for GitHub, eliminating the need for complex Git commands.',
      github: 'https://github.com/Prathvi321/Git-Bridge',
      demo: 'https://gitbridge.netlify.app/',
      image: '/GitBridge.mp4',
      isVideo: true,
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Complete 2025 Python Bootcamp: Learn Python from Scratch',
      issuer: 'Udemy',
      date: 'Oct 2024',
      credentialUrl: 'https://www.udemy.com/certificate/UC-2692602b-cf0a-4131-913a-d1ea9b644206',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2692602b-cf0a-4131-913a-d1ea9b644206.jpg?v=1759585413000',
    }
  ];

  const technologies = [
    { name: 'Python', category: 'Languages', icon: '/icons/icons8-python.svg' },
    { name: 'JavaScript', category: 'Languages', icon: '/icons/icons8-javascript.svg' },
    { name: 'HTML5', category: 'Languages', icon: '/icons/icons8-html5.svg' },
    { name: 'CSS3', category: 'Languages', icon: '/icons/icons8-css3.svg' },
    { name: 'React', category: 'Frameworks/Libraries', icon: '/icons/react-2.svg' },
    { name: 'Node.js', category: 'Frameworks/Libraries', icon: '/icons/icons8-nodejs.svg' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', icon: '/icons/icons8-tailwind-css.svg' },
    { name: 'GitHub', category: 'DevOps', icon: '/icons/icons8-github.svg' },
    { name: 'Git', category: 'Tools', icon: '/icons/icons8-git.svg' },
    { name: 'Docker', category: 'DevOps', icon: '/icons/icons8-docker.svg' },
    { name: 'Kubernetes', category: 'DevOps', icon: '/icons/icons8-kubernetes.svg' },
    { name: 'AWS', category: 'Cloud Platforms', icon: '/icons/icons8-aws.svg' },
    { name: 'MongoDB', category: 'Databases', icon: '/icons/mongodb-icon.svg' },
    { name: 'MySQL', category: 'Databases', icon: '/icons/mysql-icon.svg' },
    { name: 'Blender', category: 'Design/Tools', icon: '/icons/blender-svgrepo-com.svg' },
    { name: 'Unreal Engine', category: 'Game Engines', icon: '/icons/icons8-unreal-engine.svg' },
  ];

  const ProjectsDisplay = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in-up delay-400">
      {projects.map(project => (
        <div key={project.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-300 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
          {project.isVideo ? (
            <video
              src={project.image}
              className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
              controls
              playsInline
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E0E0/333333?text=Image+Not+Found'; }}
            />
          )}
          <div className="p-7">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-700 text-sm mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map(tech => (
                <span key={tech}
                  className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.835.09-.647.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.988 1.029-2.688-.103-.253-.446-1.272.097-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.651.64.7 1.028 1.592 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C21.137 20.281 24 16.527 24 12.017 24 6.484 19.522 2 14 2H12z"
                    clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const CertificationsDisplay = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in-up delay-400">
      {certifications.map(cert => (
        <div key={cert.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-300 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center p-6">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-24 h-24 object-contain mb-4"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E0E0/333333?text=Cert'; }}
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
          <p className="text-gray-700 text-sm mb-1">{cert.issuer}</p>
          <p className="text-gray-600 text-xs mb-4">{cert.date}</p>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3.353 3.354a1 1 0 01-1.414 0L8.414 8.414a1 1 0 010-1.414l3.353-3.354zM10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"></path>
              </svg>
              View Credential
            </a>
          )}
        </div>
      ))}
    </div>
  );

  const TechnologiesDisplay = () => {
    return (
      <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-400">
        {technologies.map(tech => (
          <div key={tech.name}
            className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-xl border border-blue-300 w-32 h-32 justify-center transition-transform duration-300 hover:scale-105">
            {tech.icon.startsWith('/icons/') ? (
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            ) : (
              <span className="text-5xl mb-2">{tech.icon}</span>
            )}
            <p className="text-lg font-semibold text-gray-800">{tech.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="technical-prowess" className="py-24 px-4 bg-gray-100 text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-20 animate-fade-in-up">My Digital Creations & Expertise</h2>

        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in-up delay-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-full font-extrabold text-xl transition-all duration-300 border-4
                ${activeTab === tab
                  ? 'bg-blue-700 border-blue-700 text-white shadow-lg transform scale-105'
                  : 'bg-transparent border-blue-400 text-blue-700 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-800'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Projects' && <ProjectsDisplay />}
        {activeTab === 'Certifications' && <CertificationsDisplay />}
        {activeTab === 'Technologies' && <TechnologiesDisplay />}
      </div>
    </section>
  );
};

export default TechnicalProwess;