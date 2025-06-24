import React, { useState, useEffect } from 'react';

const titles = {
  upload: 'Upload Video',
  ai: 'AI Analysis',
  output: 'Short-Form Output',
};

const captions = {
  upload: 'Upload your long video by dragging and dropping. Watch the progress as your file uploads instantly.',
  ai: "Clypso's AI analyzes your video, highlights the best moments, and builds a timeline of viral clips.",
  output: 'Get a ready-to-share, captioned short-form video in vertical format—perfect for Reels, TikTok, and Shorts.'
};

export default function FeatureStepCard({ type }) {
  // All hooks at the top level
  const [progress, setProgress] = useState(0);
  const [uploadHover, setUploadHover] = useState(false);
  const [aiHover, setAiHover] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Upload progress animation
  useEffect(() => {
    if (type === 'upload' && uploadHover) {
      let p = 0;
      const interval = setInterval(() => {
        p += 10;
        setProgress(p > 100 ? 100 : p);
        if (p >= 100) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    } else if (type === 'upload' && !uploadHover) {
      setProgress(0);
    }
  }, [type, uploadHover]);

  // Output animation
  useEffect(() => {
    if (type === 'output' && playing) {
      const timeout = setTimeout(() => setPlaying(false), 1800);
      return () => clearTimeout(timeout);
    }
  }, [type, playing]);

  // Card container classes for interactivity
  const cardBase =
    'flex flex-col items-center w-full max-w-xs mx-auto rounded-2xl shadow-lg bg-white transition-all duration-300 focus-within:ring-4 focus-within:ring-blue-200 outline-none';
  const cardHover =
    'hover:scale-105 hover:shadow-2xl hover:bg-blue-50 active:scale-100';
  const cardActive =
    'scale-105 shadow-2xl bg-blue-50';

  // Upload Demo
  if (type === 'upload') {
    return (
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold text-blue-700 mb-2 mt-2 text-center">{titles.upload}</div>
        <div
          className={`${cardBase} ${cardHover} h-56 border-2 border-dashed border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 cursor-pointer relative group`}
          onMouseEnter={() => setUploadHover(true)}
          onMouseLeave={() => setUploadHover(false)}
          tabIndex={0}
          aria-label="Upload video demo"
        >
          <svg className="w-14 h-14 text-blue-500 mb-4 mt-6" fill="none" viewBox="0 0 48 48">
            <rect x="8" y="8" width="32" height="32" rx="8" fill="#e0e7ff" />
            <path d="M24 16v16M24 16l-6 6M24 16l6 6" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="18" y="32" width="12" height="2.5" rx="1.25" fill="#2563eb" />
            <rect x="20" y="20" width="8" height="6" rx="2" fill="#60a5fa" />
            <rect x="22" y="22" width="4" height="2" rx="1" fill="#fff" />
          </svg>
          <span className="text-blue-700 font-semibold mb-2">Drop MP4 here</span>
          <div className="w-4/5 h-3 bg-blue-200 rounded-full overflow-hidden mt-4">
            <div className={`h-full bg-blue-500 transition-all duration-700`} style={{ width: `${uploadHover ? progress : 0}%` }}></div>
          </div>
          <span className="absolute bottom-2 right-4 text-xs text-blue-400 font-mono">{uploadHover ? `${progress}%` : '0%'}</span>
        </div>
        <p className="text-gray-500 text-sm mt-4 text-center max-w-xs">{captions.upload}</p>
      </div>
    );
  }

  // AI Analysis Demo
  if (type === 'ai') {
    return (
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold text-purple-700 mb-2 mt-2 text-center">{titles.ai}</div>
        <div
          className={`${cardBase} ${cardHover} h-56 bg-gradient-to-br from-purple-50 to-purple-100 cursor-pointer relative group`}
          onMouseEnter={() => setAiHover(true)}
          onMouseLeave={() => setAiHover(false)}
          tabIndex={0}
          aria-label="AI analysis demo"
        >
          {/* Waveform */}
          <div className="flex items-end h-12 w-4/5 mx-auto mt-8 mb-2 gap-0.5">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-300 ${aiHover && (i === 5 || i === 10 || i === 16) ? 'bg-yellow-400 h-10' : 'bg-purple-400 h-' + (Math.floor(Math.random() * 8) + 2)}`}
                style={aiHover && (i === 5 || i === 10 || i === 16) ? { boxShadow: '0 0 8px #facc15' } : {}}
              />
            ))}
          </div>
          {/* Timeline blocks */}
          <div className="flex w-4/5 mx-auto mt-4 gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`h-3 rounded transition-all duration-300 ${aiHover && (i === 2 || i === 5) ? 'bg-yellow-400 w-8' : 'bg-purple-300 w-5'}`}
              />
            ))}
          </div>
          <span className="absolute top-2 left-4 text-xs text-purple-400 font-mono">AI Timeline</span>
          <span className="absolute bottom-2 right-4 text-xs text-purple-400 font-mono">{aiHover ? 'Key moments detected!' : 'Analyzing...'}</span>
        </div>
        <p className="text-gray-500 text-sm mt-4 text-center max-w-xs">{captions.ai}</p>
      </div>
    );
  }

  // Output Demo
  if (type === 'output') {
    return (
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold text-pink-700 mb-2 mt-2 text-center">{titles.output}</div>
        <div
          className={`${cardBase} ${cardHover} h-80 bg-gray-900 border-4 border-gray-200 overflow-hidden flex flex-col items-center justify-center cursor-pointer relative group`}
          tabIndex={0}
          aria-label="Output demo phone mockup"
          onMouseEnter={() => setPlaying(true)}
          onMouseLeave={() => setPlaying(false)}
          onFocus={() => setPlaying(true)}
          onBlur={() => setPlaying(false)}
        >
          {/* Animated short-form video frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`w-32 h-48 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-xl shadow-xl flex items-center justify-center transition-all duration-700 ${playing ? 'scale-110 shadow-2xl' : ''}`}>
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {/* Captioned text */}
            <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 px-4 py-2 bg-black/80 text-white text-base font-semibold rounded-xl shadow-lg transition-all duration-500 ${playing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
              aria-live="polite"
            >
              <span className="block animate-slide-in">"This is your viral short!"</span>
            </div>
          </div>
          <span className="absolute top-2 left-4 text-xs text-gray-400 font-mono">Output</span>
        </div>
        <p className="text-gray-500 text-sm mt-4 text-center max-w-xs">{captions.output}</p>
      </div>
    );
  }

  // fallback
  return null;
}

// Tailwind animation for sliding in captions
// Add this to your global CSS if not already present:
// @keyframes slide-in { from { transform: translateY(2rem); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
// .animate-slide-in { animation: slide-in 0.5s cubic-bezier(0.4,0,0.2,1) both; } 