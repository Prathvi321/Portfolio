import React from 'react';

const TechnicalProwess = () => {

  // --- DATA SECTION ---
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
      title: 'CodeHub: A Learning Platform',
      category: 'Web Development',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      description: 'A comprehensive learning platform designed to take coders from beginner to pro.',
      github: 'https://github.com/Prathvi321/CodeHub',
      demo: 'https://codehub321.netlify.app/',
      image: '/CodeHubpage.png',
    },
    {
      id: 3,
      title: 'Git Bridge: Tool to use Git',
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
      title: 'SQL for Beginners: Learn SQL using MySQL and Database Design Course',
      issuer: 'Scaler',
      date: 'Nov 2025',
      credentialUrl: 'https://moonshot.scaler.com/s/sl/HoIjpqcf6m?_gl=1*aig3rk*_gcl_au*MTQ1MjM0MTExNS4xNzYxNzU1MjQ1*FPAU*MTQ1MjM0MTExNS4xNzYxNzU1MjQ1*_ga*MTM3MDM0NzA2OC4xNzYxNzU1MjQ1*_ga_53S71ZZG1X*czE3NjM4MTk3MzEkbzkkZzEkdDE3NjM4MTk3NjIkajI5JGwwJGg1ODUwMjM2NTg.',
      image: 'https://moonshot.scaler.com/s/image/sl/HoIjpqcf6m?scope=body',
    },
    {
      id: 2,
      title: 'Complete 2025 Python Bootcamp',
      issuer: 'Scaler',
      date: 'Dec 2025',
      credentialUrl: 'https://moonshot.scaler.com/s/sl/vt-e8pDMLo?_gl=1*10avwzy*_gcl_au*MjA1MzYxODUwMy4xNzY1NDYwNTg4*FPAU*MjA1MzYxODUwMy4xNzY1NDYwNTg4*_ga*MTcwODY5NTAxMS4xNzY1NDYwNTg4*_ga_53S71ZZG1X*czE3NjU0NjA1ODckbzEkZzEkdDE3NjU0NjU0ODkkajQxJGwwJGgxMTU5MDgzNTc3',
      image: 'https://moonshot.scaler.com/s/image/sl/vt-e8pDMLo?scope=body',
    },
        {
      id: 2,
      title: 'Python for Data Science',
      issuer: 'Scaler',
      date: 'Feb 2026',
      credentialUrl: 'https://moonshot.scaler.com/s/sl/em9PWV54ig',
      image: 'https://moonshot.scaler.com/s/image/sl/em9PWV54ig?scope=body',
    }
  ];

  const technologies = [
    { name: 'Python', category: 'Languages', icon: '/icons/icons8-python.svg' },
    { name: 'JavaScript', category: 'Languages', icon: '/icons/icons8-javascript.svg' },
    { name: 'HTML5', category: 'Languages', icon: '/icons/icons8-html5.svg' },
    { name: 'CSS3', category: 'Languages', icon: '/icons/icons8-css3.svg' },
    { name: 'Tailwind', category: 'Frameworks', icon: '/icons/icons8-tailwind-css.svg' },
    { name: 'React', category: 'Frameworks', icon: '/icons/react-2.svg' },
    { name: 'Node.js', category: 'Frameworks', icon: '/icons/icons8-nodejs.svg' },
    { name: 'Linux', category: 'Operating', icon: '/icons/linux-svgrepo-com.svg' },
    { name: 'GitHub', category: 'DevOps', icon: '/icons/icons8-github.svg' },
    { name: 'Git', category: 'Tools', icon: '/icons/icons8-git.svg' },
    { name: 'Docker', category: 'DevOps', icon: '/icons/icons8-docker.svg' },
    { name: 'Kubernetes', category: 'DevOps', icon: '/icons/icons8-kubernetes.svg' },
    { name: 'AWS', category: 'Cloud', icon: '/icons/icons8-aws.svg' },
    { name: 'Google Cloud', category: 'DevOps', icon: '/icons/icons8-google-cloud.svg' },
    { name: 'MySQL', category: 'DB', icon: '/icons/mysql-icon.svg' },
    { name: 'MongoDB', category: 'DB', icon: '/icons/mongodb-icon.svg' },
    { name: 'N8N', category: 'Automation', icon: '/icons/n8n-color.svg' },
    { name: 'Zapier', category: 'Automation', icon: '/icons/zapier-icon-svgrepo-com.svg' },
    { name: 'Blender', category: 'Design', icon: '/icons/blender-svgrepo-com.svg' },
    { name: 'Unreal', category: 'Engine', icon: '/icons/icons8-unreal-engine.svg' },
  ];

  // --- RENDER SECTION ---
  return (
    <section id="technical-prowess" className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Technical Prowess</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COL 1: PROJECTS (Left Side - Wider) */}
          <div className="lg:col-span-2">
            {/* WRAPPED IN WHITE CONTAINER TO MATCH SIDEBAR */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-full">
              
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">Projects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                   <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group">
                      <div className="h-48 bg-gray-200 relative">
                         {/* Render Video or Image based on isVideo flag */}
                         {project.isVideo ? (
                           <video 
                             src={project.image} 
                             className="w-full h-full object-cover" 
                             controls 
                             playsInline 
                           />
                         ) : (
                           <img 
                             src={project.image} 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                             alt={project.title}
                             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E0E0E0/333333?text=Project'; }}
                           />
                         )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                         <h4 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h4>
                         <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">{project.description}</p>
                         
                         {/* --- BUTTON SECTION START --- */}
                         <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                           {/* GitHub Button - Secondary (Outline) */}
                           <a 
                             href={project.github} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium text-sm transition-all hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm"
                           >
                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                             Code
                           </a>

                           {/* Live Demo Button - Primary (Solid) */}
                           {project.demo && (
                             <a 
                               href={project.demo} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white font-medium text-sm transition-all hover:bg-blue-700 hover:shadow-md shadow-blue-200"
                             >
                               Live Demo
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                               </svg>
                             </a>
                           )}
                         </div>
                         {/* --- BUTTON SECTION END --- */}

                      </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* COL 2: SIDEBAR (Right Side - Technologies & Certs) */}
          <div className="space-y-8">
            
            {/* Tech Block */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map(tech => (
                  <div key={tech.name} className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg font-medium flex items-center gap-2 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                      {tech.icon.startsWith('/icons/') ? (
                        <img src={tech.icon} alt="" className="w-4 h-4" />
                      ) : null}
                      {tech.name}
                  </div>
                ))}
              </div>
            </div>
  
            {/* Certs Block */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
               <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">Certifications</h3>
               {certifications.map(cert => (
                 <div key={cert.id} className="mb-6 last:mb-0 flex items-start gap-4">
                   <img 
                      src={cert.image} 
                      alt="Cert" 
                      className="w-12 h-12 object-contain p-1 bg-gray-50 rounded-md border border-gray-100"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/50x50/E0E0E0/333333?text=C'; }}
                   />
                   <div>
                     <div className="font-bold text-gray-900 leading-snug">{cert.title}</div>
                     <div className="text-xs text-gray-500 mt-1">{cert.issuer} • {cert.date}</div>
                     {cert.credentialUrl && (
                       <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 font-semibold hover:underline mt-1 block">
                         Verify Credential
                       </a>
                     )}
                   </div>
                 </div>
               ))}
            </div>
  
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProwess;