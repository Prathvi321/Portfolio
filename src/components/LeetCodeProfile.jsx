import React from 'react';

const LeetCodeProfile = () => {
  return (
    <section id="leetcode" className="py-20 px-4 bg-white relative border-y border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
               <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode Logo" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-1">
                LeetCode Profile
              </h2>
              <p className="text-gray-600 font-medium">Consistent problem solving & algorithmic thinking.</p>
            </div>
          </div>
          <a
            href="https://leetcode.com/u/Prathvi321/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFA116] hover:bg-[#ff9200] text-white font-bold rounded-xl shadow-[0_4px_14px_0_rgba(255,161,22,0.39)] hover:shadow-[0_6px_20px_rgba(255,161,22,0.23)] transition-all hover:-translate-y-1 group"
          >
            Visit Profile
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

        {/* Leetcode UI Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Top Row equivalent: Rating & Rank */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contest Rating */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-gray-500 text-sm font-semibold mb-1">Contest Rating</div>
                  <div className="text-4xl font-black text-gray-900 flex items-center gap-2">
                    1,415
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-500 text-sm mb-1 font-medium">Apr 11, 2026</div>
                  <div className="text-gray-900 text-sm font-semibold">Biweekly Contest 180</div>
                  <div className="text-gray-500 text-xs mt-1">Rank: 27,732</div>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-6">
                {/* Timeline mock */}
                <div className="w-full h-0.5 bg-[#FFA116]/30 relative my-2">
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFA116] rounded-full border-4 border-orange-100 shadow-sm"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-12 bg-[#FFA116]/40 -z-10"></div>
                </div>
                <div className="text-center text-gray-400 font-medium text-xs mt-4">Apr 2026</div>
              </div>
            </div>

            {/* Rank / Top % */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
               <div className="mb-6">
                  <div className="text-gray-500 text-sm font-semibold mb-1">Top</div>
                  <div className="text-4xl font-black text-gray-900">76.88%</div>
               </div>
               {/* Mock Graph */}
               <div className="flex items-end gap-1 h-20 mt-4 opacity-70">
                 {[5, 5, 5, 5, 6, 8, 12, 18, 25, 45, 90, 60, 40, 30, 20, 15, 10, 8, 8, 5, 5, 5, 5, 5].map((h, i) => (
                   <div key={i} className={`flex-1 rounded-t-sm transition-colors ${i === 10 ? 'bg-[#FFA116] opacity-100' : 'bg-gray-200 hover:bg-gray-300'}`} style={{ height: `${h}%` }}></div>
                 ))}
               </div>
            </div>
          </div>

          {/* Bottom Row: Solved Stats */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-10 justify-between hover:shadow-md transition">
            {/* Circular Progress */}
            <div className="relative w-44 h-44 flex-shrink-0">
               <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                 <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                 {/* Easy Segment */}
                 <circle cx="50" cy="50" r="45" fill="none" stroke="#00b8a3" strokeWidth="3.5" strokeDasharray="283" strokeDashoffset="240" strokeLinecap="round" />
                 {/* Med Segment */}
                 <circle cx="50" cy="50" r="45" fill="none" stroke="#ffc01e" strokeWidth="3.5" strokeDasharray="283" strokeDashoffset="265" strokeLinecap="round" />
                 {/* Hard Segment */}
                 <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4743" strokeWidth="3.5" strokeDasharray="283" strokeDashoffset="278" strokeLinecap="round" />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-gray-900">65</span>
                   <span className="text-sm font-semibold text-gray-400">/3907</span>
                 </div>
                 <div className="text-gray-600 text-sm font-semibold flex items-center gap-1 mt-1">
                   <svg className="w-4 h-4 text-[#00b8a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                   Solved
                 </div>
               </div>
            </div>

            {/* Breakdown */}
            <div className="flex-1 w-full space-y-3">
               {/* Easy */}
               <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center group hover:bg-gray-50 transition">
                 <span className="text-[#00b8a3] font-bold text-sm bg-[#00b8a3]/10 px-3 py-1 rounded-md">Easy</span>
                 <span className="text-gray-900 font-bold text-lg">45 <span className="text-gray-400 font-semibold text-xs ml-1">/938</span></span>
               </div>
               {/* Medium */}
               <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center group hover:bg-gray-50 transition">
                 <span className="text-[#ffc01e] font-bold text-sm bg-[#ffc01e]/10 px-3 py-1 rounded-md">Med.</span>
                 <span className="text-gray-900 font-bold text-lg">14 <span className="text-gray-400 font-semibold text-xs ml-1">/2045</span></span>
               </div>
               {/* Hard */}
               <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center group hover:bg-gray-50 transition">
                 <span className="text-[#ef4743] font-bold text-sm bg-[#ef4743]/10 px-3 py-1 rounded-md">Hard</span>
                 <span className="text-gray-900 font-bold text-lg">6 <span className="text-gray-400 font-semibold text-xs ml-1">/924</span></span>
               </div>
            </div>
          </div>

          {/* Badges */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
             <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-gray-500 text-sm font-semibold mb-1">Badges</div>
                  <div className="text-4xl font-black text-gray-900">2</div>
                </div>
                <div className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition">
                   <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
             </div>
             
             <div className="flex items-center gap-4 py-6 flex-1">
                <img 
                  src="https://assets.leetcode.com/static_assets/others/SQL_50.gif" 
                  alt="SQL 50 Badge" 
                  className="w-16 h-16 object-contain drop-shadow-md hover:scale-110 transition-transform cursor-pointer" 
                  title="SQL 50" 
                  onError={(e) => { e.target.src = "https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif" }} 
                />
                <img 
                  src="https://assets.leetcode.com/static_assets/others/Introduction_to_Pandas.gif" 
                  alt="Introduction to Pandas Badge" 
                  className="w-16 h-16 object-contain drop-shadow-md hover:scale-110 transition-transform cursor-pointer" 
                  title="Introduction to Pandas" 
                />
             </div>
             
             <div className="mt-4 border-t border-gray-200 pt-4">
               <div className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Most Recent Badge</div>
               <div className="text-gray-900 font-bold text-lg truncate">Introduction to Pandas</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeetCodeProfile;
