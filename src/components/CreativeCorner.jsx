import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ----------------------------------------------------------------
// MOCK DATA - REPLACE 'src' WITH YOUR LOCAL FILE PATHS
// ----------------------------------------------------------------
const VIDEOS = [
  {
    id: 1,
    title: "Headphones Animation",
    // Replace with: src: "/Headphones Animation.mp4"
    src: "/Headphones Animation.mp4",
  },
  {
    id: 2,
    title: "Fire",
    // Replace with: src: "/Ship in a Jar inspired from Pirates of Caribbean.mp4"
    src: "https://videos.pexels.com/video-files/5091624/5091624-sd_640_360_24fps.mp4", 
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    // Replace with: src: "/Key Board animation.mkv"
    src: "/Key Board animation.mkv", 
  },
  {
    id: 4,
    title: "Abstract Flow",
    // Extra mock video to demonstrate the loop better
    src: "/Ship in a Jar inspired from Pirates of Caribbean.mp4", 
  }
];

const CreativeCorner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const throttleRef = useRef(false);

  // ---------------------------------------------------------
  // CAROUSEL LOGIC
  // ---------------------------------------------------------
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  // Calculate the visual offset for each slide relative to the active one
  // Modified to be a pure horizontal slide without 3D rotation
  const getSlideStyles = (index) => {
    const total = VIDEOS.length;
    // Calculate shortest distance considering wrap-around
    let offset = (index - activeIndex + total) % total;
    if (offset > total / 2) offset -= total;

    // Base Styles
    const styles = {
      zIndex: 10,
      opacity: 0,
      transform: 'translateX(0) scale(0.8)',
      filter: 'blur(4px) brightness(0.5)',
      pointerEvents: 'none',
    };

    // Active Slide (Center)
    if (offset === 0) {
      styles.zIndex = 50;
      styles.opacity = 1;
      styles.transform = 'translateX(0) scale(1)';
      styles.filter = 'blur(0px) brightness(1)';
      styles.pointerEvents = 'auto';
    } 
    // Next Slide (Right)
    else if (offset === 1) {
      styles.zIndex = 40;
      styles.opacity = 0.8;
      styles.transform = 'translateX(65%) scale(0.85)';
      styles.filter = 'blur(2px) brightness(0.7)';
    } 
    // Previous Slide (Left)
    else if (offset === -1) {
      styles.zIndex = 40;
      styles.opacity = 0.8;
      styles.transform = 'translateX(-65%) scale(0.85)';
      styles.filter = 'blur(2px) brightness(0.7)';
    }
    // Far Right (Hidden/Backing)
    else if (offset === 2) {
      styles.zIndex = 30;
      styles.opacity = 0; // Fade out completely
      styles.transform = 'translateX(130%) scale(0.7)';
    }
    // Far Left (Hidden/Backing)
    else if (offset === -2) {
      styles.zIndex = 30;
      styles.opacity = 0;
      styles.transform = 'translateX(-130%) scale(0.7)';
    }

    return styles;
  };

  // Handle Mouse Wheel Scroll
  const handleWheel = (e) => {
    if (!isHovered) return;
    
    if (throttleRef.current) return;
    throttleRef.current = true;

    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    setTimeout(() => {
      throttleRef.current = false;
    }, 600); 
  };

  // ---------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------
  return (
    <section id="creative-corner" className="py-24 px-4 bg-gray-50 text-gray-900 min-h-screen font-sans">
      <div className="container mx-auto max-w-7xl">

        {/* UNIFIED CARD */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-100 animate-fade-in-up">

          {/* -------------------------------------------------- */}
          {/* PART 1: 3D DESIGN & INTERACTIVE MODELS (Unchanged) */}
          {/* -------------------------------------------------- */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
                alt="Blender Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  3D Design and Animations with Blender
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl">
                  My passion for design extends into the third dimension. Here are some interactive 3D models
                  and animation renders I have created.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
              {/* Model 1 */}
              <div className="relative w-full h-80 md:h-96 bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
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
              <div className="relative w-full h-80 md:h-96 bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
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
          {/* PART 2: SLIDING ANIMATION LOOP */}
          {/* -------------------------------------------------- */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900"> Products Animation</h3>
            <p className="text-gray-500 text-sm mt-2">Scroll or swipe to slide through the collection</p>
          </div>

          <div 
            className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onWheel={handleWheel}
          >
            
            {/* Carousel Track */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {VIDEOS.map((video, index) => {
                const styles = getSlideStyles(index);

                return (
                  <div
                    key={video.id}
                    className="absolute top-1/2 left-1/2 w-[85%] md:w-[600px] aspect-video rounded-2xl shadow-2xl bg-black overflow-hidden transition-all duration-500 ease-out origin-center"
                    style={{
                      transform: `translate(-50%, -50%) ${styles.transform}`,
                      zIndex: styles.zIndex,
                      opacity: styles.opacity,
                      filter: styles.filter,
                    }}
                  >
                    {/* Video Element */}
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      ref={(el) => {
                         if(el) el.play().catch(() => {}); 
                      }}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>

                    {/* Overlay for Active Card */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${styles.opacity === 1 ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                        <h4 className="text-white text-xl font-bold tracking-wide drop-shadow-md">{video.title}</h4>
                      </div>
                    </div>
                    
                    {/* Glossy Shine Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay"></div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 flex gap-4 z-50">
               <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white hover:bg-gray-100 text-gray-900 shadow-lg transition-all hover:scale-110 active:scale-95 border border-gray-200"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white hover:bg-gray-100 text-gray-900 shadow-lg transition-all hover:scale-110 active:scale-95 border border-gray-200"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeCorner;