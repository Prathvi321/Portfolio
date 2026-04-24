import React, { useEffect, useState } from 'react';
import { Box, Play, Info, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ART_SCENES = [
  {
    id: 'scene-watch',
    title: 'Watch Rendering',
    sketchfabId: '',
    images: [
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 09_50_28 AM.png',
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 09_50_46 AM.png',
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 09_58_31 AM.png',
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 09_58_41 AM.png',
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 09_59_39 AM.png',
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 10_25_29 AM.png',
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 10_25_35 AM.png',
      '/Art Gallery/Watch render/ChatGPT Image Apr 24, 2026, 10_31_00 AM.png',
    ],
    videos: [
      '/Art Gallery/Watch render/Watch_rotating_smooth_202604241007.mp4',
      '/Art Gallery/Watch render/Light_shining_on_202604241015.mp4',
      '/Art Gallery/Watch render/Watch_floats_in_202604241011.mp4',
      '/Art Gallery/Watch render/Still_camera_video_202604241011.mp4',
    ],
    description: 'A complete set of 3D watch model renderings, showcasing smooth rotations, dynamic lighting, floating animations, and various camera angles to highlight the elegant design.'
  }
];

const ArtScene = ({ scene, onImageClick }) => {
  return (
    <div className="mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-100 transition-all hover:shadow-2xl">
      {/* Title Header */}
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="bg-gray-50 p-2 rounded-xl text-blue-600">
          <Box className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{scene.title}</h2>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-8 mb-6">

        {/* Sketchfab Block */}
        {scene.sketchfabId && (
          <div className="w-full aspect-video bg-gray-900 rounded-2xl border border-gray-200 overflow-hidden relative shadow-lg">
            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/20">
              <Box className="w-3 h-3" /> 3D INTERACTIVE
            </div>
            <iframe
              title="Sketchfab Viewer"
              className="w-full h-full"
              src={`https://sketchfab.com/models/${scene.sketchfabId}/embed?autostart=1&camera=0`}
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
            ></iframe>
          </div>
        )}

        {/* Images Grid */}
        {scene.images && scene.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scene.images.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square bg-gray-50 rounded-2xl overflow-hidden group cursor-zoom-in relative border border-gray-100 shadow-sm"
                onClick={() => onImageClick(img)}
              >
                <img
                  src={img}
                  alt={`${scene.title} view ${idx + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Render+Image'; }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {scene.videos && scene.videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scene.videos.map((vid, idx) => {
              const isVideoMp4 = vid && vid.endsWith('.mp4');
              return (
                <div key={idx} className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden relative shadow-lg border border-gray-200 group">
                  <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 fill-current" /> RENDER
                  </div>
                  {isVideoMp4 ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={vid} type="video/mp4" />
                    </video>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src={vid}
                      title="Blender Render Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Description Footer */}
      {scene.description && (
        <div className="mt-8 flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
          <p className="text-gray-600 leading-relaxed">{scene.description}</p>
        </div>
      )}
    </div>
  );
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when image modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900 font-inter antialiased p-4 md:p-10 relative">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-300 pb-8 gap-4">
        <div className="flex items-center gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
            alt="Blender Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Art Gallery
            </h1>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-1">
              Blender 3D Portfolio
            </p>
          </div>
        </div>

        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-900 font-semibold rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>
      </header>

      {/* Main Gallery List */}
      <main className="max-w-6xl mx-auto">
        {ART_SCENES.map((scene) => (
          <ArtScene key={scene.id} scene={scene} onImageClick={setSelectedImage} />
        ))}
      </main>


      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center">
            <button
              className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/80 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
