import React, { useState, useEffect, useRef } from "react";

const TechnicalProwess = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (selectedProject || selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, selectedCert]);

  // Handle horizontal scrolling cleanly for the slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
      }
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });
    return () => slider.removeEventListener('wheel', handleWheel);
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Development",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      description: "A responsive and dynamic portfolio showcasing diverse skills and projects.",
      github: "https://github.com/Prathvi321/Portfolio",
      demo: "https://polymathportfolio.netlify.app/",
      media: [
        { type: "image", url: "/Portfolio.png" },
        { type: "image", url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" }
      ],
      details: {
        whatIDid: "Designed and developed a complete personal portfolio using React and Tailwind CSS from scratch.",
        approach: "Focused on a clean, modern glassmorphism aesthetic with smooth scroll animations to create a premium feel.",
        vision: "To build a digital resume that not only lists my skills but actively demonstrates my front-end capabilities.",
        problemSolved: "Created a centralized hub for all my projects, certifications, and contact info, making it easy for recruiters to evaluate my profile."
      }
    },
    {
      id: 2,
      title: "CodeHub: A Learning Platform",
      category: "Web Development",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      description: "A comprehensive learning platform designed to take coders from beginner to pro.",
      github: "https://github.com/Prathvi321/CodeHub",
      demo: "https://codehub321.netlify.app/",
      media: [
        { type: "image", url: "/CodeHubpage.png" },
        { type: "image", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" }
      ],
      details: {
        whatIDid: "Built a fully functional e-learning platform frontend with course catalog, video player, and user dashboard.",
        approach: "Utilized React Router for seamless navigation and a state management system to track user progress.",
        vision: "To democratize coding education by providing an accessible, intuitive platform for learners of all levels.",
        problemSolved: "Solved the problem of scattered learning resources by aggregating tutorials, exercises, and progress tracking in one place."
      }
    },
    {
      id: 3,
      title: "Git Bridge: Tool to use Git",
      category: "Python (DSA)",
      tech: ["Python", "tkinter", "Git", "Automation"],
      description: "This Application offers a visual, intuitive interface for GitHub, eliminating the need for complex Git commands.",
      github: "https://github.com/Prathvi321/Git-Bridge",
      demo: "https://gitbridge.netlify.app/",
      media: [
        { type: "video", url: "/GitBridge.mp4" },
        { type: "image", url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80" }
      ],
      details: {
        whatIDid: "Developed a desktop GUI application using Python and Tkinter that acts as a wrapper around Git CLI commands.",
        approach: "Automated the execution of shell commands through Python's subprocess module, parsing the output into a user-friendly interface.",
        vision: "To lower the barrier to entry for version control, helping beginners use Git without the steep command-line learning curve.",
        problemSolved: "Eliminated the friction of memorizing Git commands for simple tasks like committing, pushing, and pulling, reducing workflow errors."
      }
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "C++ Course: Learn the Essentials",
      date: "17 Feb 2026",
      image: "/C++ Course: Learn the Essentials.png",
    },
    {
      id: 2,
      title: "Python and SQL for Data Science",
      date: "14 Feb 2026",
      image: "/Python and SQL for Data Science.png",
    },
    {
      id: 3,
      title: "Python Course for Beginners With Certification: Mastering the Essentials",
      date: "11 Dec 2025",
      image: "/Python Course for Beginners With Certification: Mastering the Essentials.png",
    },
    {
      id: 4,
      title: "SQL for Beginners: Learn SQL using MySQL and Database Design Course",
      date: "6 Nov 2025",
      image: "/SQL for Beginners: Learn SQL using MySQL and Database Design Course.png",
    },
  ];

  const technologies = [
    { name: "Python", icon: "/icons/icons8-python.svg" },
    { name: "JavaScript", icon: "/icons/icons8-javascript.svg" },
    { name: "HTML5", icon: "/icons/icons8-html5.svg" },
    { name: "CSS3", icon: "/icons/icons8-css3.svg" },
    { name: "Tailwind", icon: "/icons/icons8-tailwind-css.svg" },
    { name: "React", icon: "/icons/react-2.svg" },
    { name: "Node.js", icon: "/icons/icons8-nodejs.svg" },
    { name: "Linux", icon: "/icons/linux-svgrepo-com.svg" },
    { name: "GitHub", icon: "/icons/icons8-github.svg" },
    { name: "Git", icon: "/icons/icons8-git.svg" },
    { name: "Docker", icon: "/icons/icons8-docker.svg" },
    { name: "Kubernetes", icon: "/icons/icons8-kubernetes.svg" },
    { name: "AWS", icon: "/icons/icons8-aws.svg" },
    { name: "Google Cloud", icon: "/icons/icons8-google-cloud.svg" },
    { name: "MySQL", icon: "/icons/mysql-icon.svg" },
    { name: "MongoDB", icon: "/icons/mongodb-icon.svg" },
    { name: "N8N", icon: "/icons/n8n-color.svg" },
    { name: "Zapier", icon: "/icons/zapier-icon-svgrepo-com.svg" },
    { name: "Blender", icon: "/icons/blender-svgrepo-com.svg" },
    { name: "Unreal", icon: "/icons/icons8-unreal-engine.svg" },
  ];

  return (
    <section
      id="technical-prowess"
      className="py-16 px-4 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Technical Prowess
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PROJECTS */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
                Projects
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all group"
                  >
                    <div className="h-48 bg-gray-200 overflow-hidden relative">
                      {project.media[0].type === "video" ? (
                        <video
                          src={project.media[0].url}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={project.media[0].url}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          alt={project.title}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur text-gray-900 font-bold py-2 px-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all">
                          View Project
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-bold text-lg">{project.title}</h4>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            {/* TECH STACK */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-6 border-l-4 border-blue-600 pl-3">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-3 py-2 bg-gray-50 rounded-lg flex items-center gap-2"
                  >
                    <img src={tech.icon} className="w-4 h-4" alt="" />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-6 border-l-4 border-blue-600 pl-3">
                Certifications
              </h3>

              {certifications.map((cert) => (
                <div key={cert.id} className="mb-6 flex items-start gap-4">

                  {/* Clickable certificate image → opens modal */}
                  <img
                    src={cert.image}
                    alt="certificate"
                    onClick={() => setSelectedCert(cert)}
                    className="w-12 h-12 object-contain p-1 bg-gray-50 rounded-md border cursor-pointer hover:scale-105 transition"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/50x50/E0E0E0/333333?text=C";
                    }}
                  />

                  <div>
                    <div className="font-bold">{cert.title}</div>

                    <div className="text-xs text-gray-500">
                      {cert.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ===== CERTIFICATE MODAL ===== */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl p-4 max-w-3xl w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              ✕
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-lg max-h-[80vh] object-contain"
            />

            <div className="mt-4">
              <div className="font-bold text-lg">{selectedCert.title}</div>
              <div className="text-sm text-gray-500">
                {selectedCert.date}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== PROJECT MODAL ===== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header & Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              ✕
            </button>

            {/* Scrollable Content Area */}
            <div className="overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* Media Slider (Horizontal Scroll) */}
              <div className="relative group bg-gray-900 h-[40vh] min-h-[300px]">
                <div 
                  ref={sliderRef}
                  className="flex overflow-x-auto snap-x snap-mandatory h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {selectedProject.media.map((item, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center relative">
                      {item.type === 'video' ? (
                        <video src={item.url} className="w-full h-full object-contain bg-black" controls autoPlay loop muted playsInline />
                      ) : (
                        <img src={item.url} className="w-full h-full object-contain bg-black" alt="" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Visual Indicators */}
                {selectedProject.media.length > 1 && (
                   <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                     {selectedProject.media.map((_, idx) => (
                       <div key={idx} className="w-2 h-2 rounded-full bg-white/50 backdrop-blur-sm" />
                     ))}
                   </div>
                )}
                {selectedProject.media.length > 1 && (
                  <div className="absolute top-4 left-4 text-white/50 text-xs tracking-widest font-bold pointer-events-none uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    Scroll to Slide
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-100">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-10 border-b border-gray-100 pb-10">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-md hover:-translate-y-0.5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      GitHub
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-md hover:-translate-y-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Details Sections */}
                {selectedProject.details && (
                  <div className="space-y-8 text-gray-700 leading-relaxed">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span> What I Did
                      </h4>
                      <p className="pl-4 border-l-2 border-gray-100">{selectedProject.details.whatIDid}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600"></span> My Approach
                      </h4>
                      <p className="pl-4 border-l-2 border-gray-100">{selectedProject.details.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span> Vision Behind It
                      </h4>
                      <p className="pl-4 border-l-2 border-gray-100">{selectedProject.details.vision}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span> Problem Solved
                      </h4>
                      <p className="pl-4 border-l-2 border-gray-100">{selectedProject.details.problemSolved}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnicalProwess;
