import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="py-24 px-4 bg-gray-100 text-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-20 animate-fade-in-up">Beyond the Code: My Journey</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-16 mb-20">
          <div className="md:w-1/3 flex justify-center mb-10 md:mb-0 animate-fade-in-left">
            <img
              src="/HeadShot.png"
              alt="Professional Headshot of Prathvi Singh Thakur"
              className="rounded-full shadow-2xl border-4 border-blue-400 w-72 h-72 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="md:w-2/3 text-lg leading-relaxed bg-white p-10 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-right">
            <p className="mb-6">
              As a B.Tech (Information Technology) graduate from <span
                className="font-semibold text-blue-600">RGPV Bhopal</span>, complemented by a DCA
              from <span className="font-semibold text-blue-600">Makhanlal Chaturvedi University</span>, and
              a foundational education from <span className="font-semibold text-blue-600">Kendriya Vidyalaya
                Sagar</span>, my journey has been defined by a relentless pursuit of knowledge and a
              passion for turning complex ideas into tangible solutions.
            </p>
            <p className="mb-6">
              My core technical interests span across <span
                className="font-semibold text-blue-600">Python with deep DSA expertise</span>, robust
              <span className="font-semibold text-blue-600"> Web Development</span> (both front-end and
              back-end), efficient <span className="font-semibold text-blue-600">DevOps practices</span>,
              cutting-edge <span className="font-semibold text-blue-600">AI/ML applications</span>, and
              immersive <span className="font-semibold text-blue-600">Game Development</span>. I also bring
              a creative edge with my ability to design intricate <span
                className="font-semibold text-blue-600">3D models on Blender</span>.
            </p>
            <p className="mb-6">
              My technical acumen is further amplified by strong <span
                className="font-semibold text-blue-600">communication skills</span> and proven <span
                className="font-semibold text-blue-600">leadership abilities</span>, honed through various
              academic and extracurricular engagements.
            </p>
          </div>
        </div>

        <h3 className="text-4xl font-bold text-center text-blue-600 mb-16 animate-fade-in-up">Education Journey</h3>

        <div className="py-24 px-4 bg-gray-50 flex items-center justify-center font-inter rounded-2xl border-2 border-blue-300">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 lg:space-x-16 px-4 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl border border-blue-300 mb-8 md:mb-0 w-full md:w-1/3 animate-fade-in-up delay-200 min-h-[220px]">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg -mt-12 mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <p className="mb-2 text-base text-blue-600">2022</p>
              <h4 className="mb-2 font-bold text-xl text-gray-900">10th Grade</h4>
              <p className="text-sm leading-snug text-gray-700">St. Mary's Convent, Sagar</p>
              <p className="text-sm leading-snug text-gray-700">Scored: 78%</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl border border-blue-300 mb-8 md:mb-0 w-full md:w-1/3 animate-fade-in-up delay-200 min-h-[220px]">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg -mt-12 mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <p className="mb-2 text-base text-blue-600">2024</p>
              <h4 className="mb-2 font-bold text-xl text-gray-900">12th Grade</h4>
              <p className="text-sm leading-snug text-gray-700">Kendriya Vidyalaya Sagar</p>
              <p className="text-sm leading-snug text-gray-700">Scored: 76%</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl border border-blue-300 mb-8 md:mb-0 w-full md:w-1/3 animate-fade-in-up delay-400 min-h-[220px]">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg -mt-12 mb-4">
                <span className="text-2xl text-white">💻</span>
              </div>
              <p className="mb-2 text-base text-blue-600">2024 - 2025</p>
              <h4 className="mb-2 font-bold text-xl text-gray-900">DCA</h4>
              <p className="text-sm leading-snug text-gray-700">Makhanlal Chaturvedi University Bhopal</p>
              <p className="text-sm leading-snug text-gray-700">CGPA: [Yet to be declared]</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl border border-blue-300 w-full md:w-1/3 animate-fade-in-up delay-600 min-h-[220px]">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg -mt-12 mb-4">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <p className="mb-2 text-base text-blue-600">2024 - 2028</p>
              <h4 className="mb-2 font-bold text-xl text-gray-900">B.Tech (IT)</h4>
              <p className="text-sm leading-snug text-gray-700">RGPV Bhopal</p>
              <p className="text-sm leading-snug text-gray-700">CGPA: [Yet to be declared]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;