import React, { useState } from "react";

const TechnicalProwess = () => {
  // --- STATE FOR CERTIFICATE MODAL ---
  const [selectedCert, setSelectedCert] = useState(null);

  // --- DATA SECTION ---
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "Web Development",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      description:
        "A responsive and dynamic portfolio showcasing diverse skills and projects.",
      github: "https://github.com/Prathvi321/Portfolio",
      demo: "https://polymathportfolio.netlify.app/",
      image: "/Portfolio.png",
    },
    {
      id: 2,
      title: "CodeHub: A Learning Platform",
      category: "Web Development",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      description:
        "A comprehensive learning platform designed to take coders from beginner to pro.",
      github: "https://github.com/Prathvi321/CodeHub",
      demo: "https://codehub321.netlify.app/",
      image: "/CodeHubpage.png",
    },
    {
      id: 3,
      title: "Git Bridge: Tool to use Git",
      category: "Python (DSA)",
      tech: ["Python", "tkinter", "Git", "Automation"],
      description:
        "This Application offers a visual, intuitive interface for GitHub, eliminating the need for complex Git commands.",
      github: "https://github.com/Prathvi321/Git-Bridge",
      demo: "https://gitbridge.netlify.app/",
      image: "/GitBridge.mp4",
      isVideo: true,
    },
  ];

  const certifications = [
    {
      id: 1,
      title:
        "SQL for Beginners: Learn SQL using MySQL and Database Design Course",
      issuer: "Scaler",
      date: "Nov 2025",
      credentialUrl:
        "https://moonshot.scaler.com/s/sl/HoIjpqcf6m?_gl=1*aig3rk*_gcl_au*MTQ1MjM0MTExNS4xNzYxNzU1MjQ1",
      image: "https://moonshot.scaler.com/s/image/sl/HoIjpqcf6m?scope=body",
    },
    {
      id: 2,
      title: "Complete 2025 Python Bootcamp",
      issuer: "Scaler",
      date: "Dec 2025",
      credentialUrl:
        "https://moonshot.scaler.com/s/sl/vt-e8pDMLo?_gl=1*10avwzy",
      image: "https://moonshot.scaler.com/s/image/sl/vt-e8pDMLo?scope=body",
    },
    {
      id: 3,
      title: "Python for Data Science",
      issuer: "Scaler",
      date: "Feb 2026",
      credentialUrl: "https://moonshot.scaler.com/s/sl/em9PWV54ig",
      image: "https://moonshot.scaler.com/s/image/sl/em9PWV54ig?scope=body",
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
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
                  >
                    <div className="h-48 bg-gray-200">
                      {project.isVideo ? (
                        <video
                          src={project.image}
                          className="w-full h-full object-cover"
                          controls
                        />
                      ) : (
                        <img
                          src={project.image}
                          className="w-full h-full object-cover"
                          alt={project.title}
                        />
                      )}
                    </div>

                    <div className="p-5">
                      <h4 className="font-bold text-lg">{project.title}</h4>
                      <p className="text-sm text-gray-600 mt-2">
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
                      {cert.issuer} • {cert.date}
                    </div>

                    {/* ✅ VIEW / VERIFY CREDENTIAL LINK RESTORED */}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 font-semibold hover:underline mt-1 block"
                      >
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

      {/* ===== CERTIFICATE MODAL ===== */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl p-4 max-w-3xl w-[90%] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              ✕
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-lg"
            />

            <div className="mt-4">
              <div className="font-bold text-lg">{selectedCert.title}</div>
              <div className="text-sm text-gray-500">
                {selectedCert.issuer} • {selectedCert.date}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnicalProwess;
