import React, { useState } from 'react';

const TechnicalProwess = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const tabs = ['Projects', 'Certifications', 'Technologies'];

  const projects = [
    {
      id: 1,
      title: 'Advanced Data Structures & Algorithms Library',
      category: 'Python (DSA)',
      tech: ['Python', 'Algorithms', 'Data Structures'],
      description: 'Implemented various complex data structures and algorithms from scratch for optimal performance and problem-solving.',
      github: 'https://github.com/yourusername/dsa-library',
      demo: null,
      image: 'https://placehold.co/400x250/E0E0E0/333333?text=DSA+Project',
    },
    {
      id: 2,
      title: 'E-commerce Web Application',
      category: 'Web Development',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      description: 'Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and order processing.',
      github: 'https://github.com/yourusername/ecommerce-app',
      demo: 'https://yourapp.netlify.app',
      image: 'https://placehold.co/400x250/E0E0E0/333333?text=E-commerce+Web+App',
    },
    {
      id: 3,
      title: 'CI/CD Pipeline for Microservices',
      category: 'DevOps',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      description: 'Automated deployment pipeline for a microservices architecture using containerization and orchestration tools.',
      github: 'https://github.com/yourusername/ci-cd-pipeline',
      demo: null,
      image: 'https://placehold.co/400x250/E0E0E0/333333?text=DevOps+Pipeline',
    },
    {
      id: 4,
      title: 'Aura AI: Coding Tutor',
      category: 'AI/ML',
      tech: ['Python', 'API', 'JavaScript'],
      description: 'Developed a convolutional neural network (CNN) model for high-accuracy image classification on a custom dataset.',
      github: 'https://github.com/Prathvi321/CodeHub/blob/main/Aura.html',
      demo: 'https://codehub321.netlify.app/aura',
      image: '/Aura AI Image.png',
    },
    {
      id: 5,
      title: '2D Platformer Game',
      category: 'Game Development',
      tech: ['Unity', 'C#', 'Pixel Art'],
      description: 'Designed and developed a retro-style 2D platformer game with custom physics and enemy AI.',
      github: 'https://github.com/yourusername/platformer-game',
      demo: 'https://yourgame.itch.io',
      image: 'https://placehold.co/400x250/E0E0E0/333333?text=2D+Platformer+Game',
    },
    {
      id: 6,
      title: 'Personal Portfolio Website (This one!)',
      category: 'Web Development',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      description: 'A responsive and dynamic portfolio showcasing diverse skills and projects.',
      github: 'https://polymathportfolio.netlify.app/',
      demo: 'https://yourportfolio.netlify.app',
      image: '/image.png',
    },
    {
      id: 7,
      title: 'CodeHub: A learning Platform',
      category: 'Web Development',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
      description: 'A responsive and dynamic portfolio showcasing diverse skills and projects.',
      github: 'https://github.com/Prathvi321/CodeHub',
      demo: 'https://codehub321.netlify.app/',
      image: '/CodeHubpage.png',
    },
    {
      id: 8,
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
      title: 'Google IT Support Professional Certificate',
      issuer: 'Coursera (Google)',
      date: 'May 2023',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/ABCDEF123',
      image: 'https://placehold.co/100x100/ADD8E6/333333?text=Google',
    },
    {
      id: 2,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'July 2024',
      credentialUrl: 'https://www.credly.com/badges/XYZABC',
      image: 'https://placehold.co/100x100/FFD700/333333?text=AWS',
    },
    {
      id: 3,
      title: 'Python for Data Science and Machine Learning Bootcamp',
      issuer: 'Udemy',
      date: 'January 2024',
      credentialUrl: 'https://www.udemy.com/certificate/123456789',
      image: 'https://placehold.co/100x100/90EE90/333333?text=Udemy',
    },
  ];

  const technologies = [
    { name: 'Python', category: 'Languages', icon: '🐍' },
    { name: 'JavaScript', category: 'Languages', icon: '📜' },
    { name: 'HTML5', category: 'Languages', icon: '🌐' },
    { name: 'CSS3', category: 'Languages', icon: '🎨' },
    { name: 'React', category: 'Frameworks/Libraries', icon: '⚛️' },
    { name: 'Node.js', category: 'Frameworks/Libraries', icon: '🟢' },
    { name: 'Express.js', category: 'Frameworks/Libraries', icon: '🚀' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', icon: '🌬️' },
    { name: 'Git', category: 'Tools', icon: '🌳' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️' },
    { name: 'AWS', category: 'Cloud Platforms', icon: '☁️' },
    { name: 'MongoDB', category: 'Databases', icon: '🍃' },
    { name: 'SQL', category: 'Databases', icon: '🗄️' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'PyTorch', category: 'AI/ML', icon: '🔥' },
    { name: 'Blender', category: 'Design/Tools', icon: '🧊' },
    { name: 'Unity', category: 'Game Engines', icon: '🎮' },
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
              loop
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
            <span className="text-5xl mb-2">{tech.icon}</span>
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