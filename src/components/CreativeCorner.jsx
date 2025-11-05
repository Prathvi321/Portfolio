import React from 'react';

const CreativeCorner = () => {
  return (
    <section id="creative-corner" className="py-24 px-4 bg-gray-50 text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-20 animate-fade-in-up">
          Creative Corner & Passions
        </h2>

        <div className="mb-20 bg-white p-10 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-left">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            3D Design with Blender
          </h3>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            My passion for design extends into the third dimension, where I bring concepts to life using
            Blender. Explore some of my favorite models below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

            {/* Model 1 - Desktop Setup */}
            <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-gray-700">
              <iframe
                title="Desktop Setup"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/ff65eda8101d4422a104f530c3f0f8b3/embed"
                className="w-full h-full rounded-xl"
              ></iframe>
              <p className="text-sm font-normal text-gray-400 mt-2 p-2 text-center">
                <a
                  href="https://sketchfab.com/3d-models/desktop-setup-ff65eda8101d4422a104f530c3f0f8b3?utm_medium=embed&utm_campaign=share-popup&utm_content=ff65eda8101d4422a104f530c3f0f8b3"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Desktop Setup
                </a>
              </p>
            </div>

            {/* Model 2 - Ship In A Jar */}
            <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-gray-700">
              <iframe
                title="Ship In A Jar"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/b89cd86d63ca447a832255d677b343f4/embed"
                className="w-full h-full rounded-xl"
              ></iframe>
              <p className="text-sm font-normal text-gray-400 mt-2 p-2 text-center">
                <a
                  href="https://sketchfab.com/3d-models/ship-in-a-jar-b89cd86d63ca447a832255d677b343f4?utm_medium=embed&utm_campaign=share-popup&utm_content=b89cd86d63ca447a832255d677b343f4"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ship In A Jar
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCorner;
