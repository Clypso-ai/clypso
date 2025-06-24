import React, { useState } from 'react';

const FeatureClipCard = ({ thumbnail, subtitle = "Auto-generated subtitles appear here" }) => {
  const [showSub, setShowSub] = useState(false);

  return (
    <div
      className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg group focus-within:ring-4 focus-within:ring-blue-300 outline-none"
      tabIndex={0}
      aria-label="Video preview with subtitles demo"
      onMouseEnter={() => setShowSub(true)}
      onMouseLeave={() => setShowSub(false)}
      onFocus={() => setShowSub(true)}
      onBlur={() => setShowSub(false)}
    >
      {/* Video thumbnail */}
      <img
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full h-44 object-cover"
        style={{ aspectRatio: '16/9', minWidth: 320, minHeight: 180 }}
      />
      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-black/50 rounded-full p-3">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* Subtitle bar */}
      <div className={`absolute left-0 right-0 bottom-0 px-4 py-2 bg-black/80 text-white text-sm font-semibold rounded-b-xl transition-all duration-300 ${showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-live="polite"
      >
        {subtitle}
      </div>
    </div>
  );
};

export default FeatureClipCard; 