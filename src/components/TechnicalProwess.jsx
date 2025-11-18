import React from 'react';

const TechnicalProwess = () => {
  // Data Arrays (Kept exactly as provided)
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
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
      description: 'A comprehensive learning platform designed to take coders from beginner to pro.',
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
      title: 'Complete 2025 Python Bootcamp',
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

  // Reusable Section Header Component
  const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-12 text-center">
      <h3 className="text-3xl font-bold text-gray-900 relative inline-block pb-2">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
      </h3>
      {subtitle && <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );

  return (
    <section id="technical-prowess" className="bg-gray-50 text-gray-900">
      
      {/* Main Header */}
      <div className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-4">Technical Prowess</h2>
          <p className="text-blue-200 text-xl">My digital creations, toolkit, and credentials.</p>
        </div>
      </div>

      {/* 1. PROJECTS SECTION */}
      <div className="py-24 container mx-auto max-w-7xl px-4">
        <SectionTitle title="Featured Projects" subtitle="A selection of my recent work in Web Development and Automation." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="relative overflow-hidden">
                {project.isVideo ? (
                  <video src={project.image} className="w-full h-56 object-cover" controls playsInline />
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E0E0/333333?text=Image+Not+Found'; }}/>
                )}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                   {/* Simple GitHub Icon */}
                   <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. TECHNOLOGIES SECTION (Dark Background for Contrast) */}
      <div className="py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto max-w-7xl px-4">
           <SectionTitle title="Tech Stack" subtitle="The tools and technologies I use to bring ideas to life." />
           
           <div className="flex flex-wrap justify-center gap-6">
             {technologies.map(tech => (
               <div key={tech.name} className="flex flex-col items-center justify-center w-28 h-28 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                  {tech.icon.startsWith('/icons/') ? (
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
                  ) : (
                    <span className="text-3xl mb-3">{tech.icon}</span>
                  )}
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-blue-600">{tech.name}</span>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* 3. CERTIFICATIONS SECTION */}
      <div className="py-24 container mx-auto max-w-7xl px-4">
        <SectionTitle title="Certifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {certifications.map(cert => (
            <div key={cert.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
               <img src={cert.image} alt="issuer" className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-1" 
               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E0E0/333333?text=Cert'; }}/>
               <div>
                 <h4 className="font-bold text-gray-900 leading-tight">{cert.title}</h4>
                 <p className="text-sm text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                 {cert.credentialUrl && (
                   <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline">
                     Verify Credential →
                   </a>
                 )}
               </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TechnicalProwess;