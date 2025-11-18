import React from 'react';

const CreativeCorner = () => {
  return (
    <section id="creative-corner" className="py-24 px-4 bg-gray-50 text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl">


        {/* UNIFIED CARD */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-up">

          {/* -------------------------------------------------- */}
          {/* PART 1: 3D DESIGN & INTERACTIVE MODELS */}
          {/* -------------------------------------------------- */}
          <div className="mb-12">

            {/* Header: Logo Left + Text Left */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
              {/* Blender Logo */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
                alt="Blender Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />

              {/* Text Wrapper */}
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  3D Design and Animations with Blender
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl">
                  My passion for design extends into the third dimension. Here are some interactive 3D models
                  and animation renders I have created.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
              {/* Model 1 */}
              <div className="relative w-full h-80 md:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Desktop Setup"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/ff65eda8101d4422a104f530c3f0f8b3/embed"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Model 2 */}
              <div className="relative w-full h-80 md:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Ship In A Jar"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/b89cd86d63ca447a832255d677b343f4/embed"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-200 my-12"></div>

          {/* -------------------------------------------------- */}
          {/* PART 2: ANIMATION LOOPS (No Text, Autoplay) */}
          {/* -------------------------------------------------- */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">

              {/* Video Loop 1 */}
              <div className="group relative w-full bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col">
                <div className="aspect-video w-full bg-black relative">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="\Headphones Animation.mp4" type="video/mp4" />
                  </video>
                  {/* Optional Overlay for Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">Headphones Animation</h4>
                  </div>
                </div>
              </div>

              <div className="group relative w-full bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col">
                <div className="aspect-video w-full bg-black relative">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="\Ship in a Jar inspired from Pirates of Caribbean.mp4" type="video/mp4" />
                  </video>
                  {/* Optional Overlay for Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">Ship in A Jar</h4>
                  </div>
                </div>
              </div>

              {/* Video Loop 2 */}
              <div className="group relative w-full bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col">
                <div className="aspect-video w-full bg-black relative">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="\Key Board animation.mkv" type="video/mp4" />
                  </video>
                  {/* Optional Overlay for Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">Animation Project Two</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeCorner;