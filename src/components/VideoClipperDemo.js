import React, { useState } from 'react';

const VideoClipperDemo = () => {
  const [clipped, setClipped] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center transition-all duration-500">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Long Video → Viral Clip</h3>
      <div
        className="relative w-full flex flex-col items-center cursor-pointer group"
        onClick={() => setClipped((c) => !c)}
        onMouseEnter={() => setClipped(true)}
        onMouseLeave={() => setClipped(false)}
      >
        {/* Before: Long video bar */}
        <div className={`transition-all duration-700 ${clipped ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
          <div className="w-72 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center mb-2">
            <span className="text-white font-semibold">Long Video</span>
          </div>
        </div>
        {/* Arrow */}
        <div className={`transition-all duration-700 ${clipped ? 'opacity-0' : 'opacity-100'}`}>
          <svg className="w-8 h-8 text-blue-400 my-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
          </svg>
        </div>
        {/* After: Short viral clip */}
        <div className={`transition-all duration-700 absolute left-1/2 top-0 transform -translate-x-1/2 ${clipped ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'}`} style={{zIndex: 2}}>
          <div className="w-20 h-32 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-xl shadow-2xl flex flex-col items-center justify-center animate-pulse">
            <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-white font-bold text-sm">Viral Clip</span>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-4">Click or hover to see the transformation!</p>
    </div>
  );
};

export default VideoClipperDemo; 