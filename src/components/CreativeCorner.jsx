import React from 'react';

const CreativeCorner = () => {
  return (
    <section id="creative-corner" className="py-24 px-4 bg-gray-50 text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-20 animate-fade-in-up">Creative Corner & Passions</h2>

        <div className="mb-20 bg-white p-10 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-left">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">3D Design with Blender</h3>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            My passion for design extends into the third dimension, where I bring concepts to life using
            Blender. Explore some of my favorite models below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-gray-700">
              <iframe
                title="Room"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/ede0719b3b4b45a783b347a662cbcdb1/embed"
                className="w-full h-full rounded-xl"
              ></iframe>
              <p className="text-sm font-normal text-gray-400 mt-2 p-2 text-center">
                <a
                  href="https://sketchfab.com/3d-models/room-ede0719b3b4b45a783b347a662cbcdb1?utm_medium=embed&utm_campaign=share-popup&utm_content=ede0719b3b4b45a783b347a662cbcdb1"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Room
                </a>
              </p>
            </div>

            <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-gray-700">
              <iframe
                title="classic black muscle car"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/91c77f0ab26940548ccdedeb2be6dde4/embed"
                className="w-full h-full rounded-xl"
              ></iframe>
              <p className="text-sm font-normal text-gray-400 mt-2 p-2 text-center">
                <a
                  href="https://sketchfab.com/3d-models/classic-black-muscle-car-91c77f0ab26940548ccdedeb2be6dde4?utm_medium=embed&utm_campaign=share-popup&utm_content=91c77f0ab26940548ccdedeb2be6dde4"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  classic black muscle car
                </a>
              </p>
            </div>

            <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-gray-700">
              <iframe
                title="Ford Mustang Fastback 1967"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/8949a90f004848e9b26c16819ece43ae/embed"
                className="w-full h-full rounded-xl"
              ></iframe>
              <p className="text-sm font-normal text-gray-400 mt-2 p-2 text-center">
                <a
                  href="https://sketchfab.com/3d-models/ford-mustang-fastback-1967-8949a90f004848e9b26c16819ece43ae?utm_medium=embed&utm_campaign=share-popup&utm_content=8949a90f004848e9b26c16819ece43ae"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ford Mustang Fastback 1967
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