import React from 'react';

const CreativeCorner = () => {
  return (
    <section id="creative-corner" className="py-24 px-4 bg-gray-50 text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Section Title */}
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-16 animate-fade-in-up">
          Creative Corner & Passions
        </h2>

        {/* UNIFIED CARD */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-up">
          
          {/* -------------------------------------------------- */}
          {/* PART 1: 3D DESIGN & INTERACTIVE MODELS */}
          {/* -------------------------------------------------- */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              3D Design with Blender
            </h3>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              My passion for design extends into the third dimension. Here are some interactive 3D models 
              and animation renders I have created.
            </p>

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
                    <source src="/videos/your-animation-1.mp4" type="video/mp4" />
                  </video>
                  {/* Optional Overlay for Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                     <h4 className="text-white font-bold text-lg">Animation Project One</h4>
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
                    <source src="/videos/your-animation-2.mp4" type="video/mp4" />
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