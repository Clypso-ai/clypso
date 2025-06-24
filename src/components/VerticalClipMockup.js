import React, { useState } from 'react';

const VerticalClipMockup = ({ thumbnail, caption = "AI finds the punchline!" }) => {
  const [showCap, setShowCap] = useState(false);

  return (
    <div
      className="flex flex-col items-center"
      tabIndex={0}
      aria-label="Vertical phone mockup with video and captions"
      onMouseEnter={() => setShowCap(true)}
      onMouseLeave={() => setShowCap(false)}
      onFocus={() => setShowCap(true)}
      onBlur={() => setShowCap(false)}
    >
      <div className="relative w-60 h-[32rem] bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-200 overflow-hidden flex flex-col items-center justify-center">
        {/* Video thumbnail */}
        <img
          src={thumbnail}
          alt="Vertical video preview"
          className="w-full h-full object-cover"
          style={{ aspectRatio: '9/16', minWidth: 240, minHeight: 480 }}
        />
        {/* Captions */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 px-4 py-2 bg-black/80 text-white text-base font-semibold rounded-xl shadow-lg transition-all duration-500 ${showCap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-live="polite"
        >
          {caption}
        </div>
      </div>
      <span className="mt-4 text-gray-600 text-sm">Hover or focus to see captions</span>
    </div>
  );
};

export default VerticalClipMockup; 