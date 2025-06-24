import React, { useState } from 'react';

const SubtitleDemo = () => {
  const [showSubs, setShowSubs] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center transition-all duration-500">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Automatic Subtitles</h3>
      <div
        className="relative w-72 h-40 bg-gray-200 rounded-xl flex items-end justify-center overflow-hidden cursor-pointer group"
        onMouseEnter={() => setShowSubs(true)}
        onMouseLeave={() => setShowSubs(false)}
        onClick={() => setShowSubs((s) => !s)}
      >
        {/* Simulated video frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-16 h-16 text-blue-400 opacity-30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M10 8l6 4-6 4V8z" />
          </svg>
        </div>
        {/* Animated subtitles */}
        <div className={`absolute bottom-4 left-0 w-full flex flex-col items-center transition-all duration-700 ${showSubs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-base font-semibold shadow-lg mb-2 animate-fade-in">
            "This is how Clypso adds subtitles automatically!"
          </div>
          <div className="bg-black/70 text-yellow-300 px-3 py-1 rounded text-xs font-bold tracking-wide shadow animate-fade-in delay-200">
            AI-generated in seconds
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-4">Hover or click to see subtitles appear!</p>
    </div>
  );
};

export default SubtitleDemo; 