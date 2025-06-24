import React, { useState } from 'react';

const VerticalFormatDemo = () => {
  const [vertical, setVertical] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center transition-all duration-500">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Vertical Video Formatting</h3>
      <div
        className="relative w-full flex flex-col items-center cursor-pointer group min-h-[160px]"
        onClick={() => setVertical((v) => !v)}
        onMouseEnter={() => setVertical(true)}
        onMouseLeave={() => setVertical(false)}
      >
        {/* Horizontal video frame */}
        <div className={`transition-all duration-700 ${vertical ? 'opacity-0 -translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
          <div className="w-64 h-32 bg-gradient-to-r from-blue-300 to-purple-400 rounded-xl shadow-lg flex items-center justify-center mb-2">
            <span className="text-white font-semibold">Horizontal Video</span>
          </div>
        </div>
        {/* Arrow */}
        <div className={`transition-all duration-700 ${vertical ? 'opacity-0' : 'opacity-100'}`}>
          <svg className="w-8 h-8 text-blue-400 my-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
          </svg>
        </div>
        {/* Vertical video frame */}
        <div className={`transition-all duration-700 absolute left-1/2 top-0 transform -translate-x-1/2 ${vertical ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{zIndex: 2}}>
          <div className="w-24 h-44 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-2xl shadow-2xl flex flex-col items-center justify-center animate-pulse">
            <span className="text-white font-bold text-sm">Vertical Video</span>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-4">Click or hover to see vertical formatting!</p>
    </div>
  );
};

export default VerticalFormatDemo; 