import React, { useState, useEffect } from 'react';
import {
  CloudUploadIcon,
  ChipIcon,
  VideoCameraIcon,
  PlayIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/solid';

const captions = {
  upload: 'Drag and drop your long-form video. Watch the upload progress in real-time.',
  ai: "Clypso's AI scans your video, detects key moments, and creates viral clip timelines.",
  output: 'Receive polished, captioned, vertical shorts ready for TikTok, Reels, and Shorts.',
};

export default function LiveDemo({ isVisible }) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadHover, setUploadHover] = useState(false);
  const [aiActive, setAiActive] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (uploadHover) {
      let progress = 0;
      interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress > 100 ? 100 : progress);
        if (progress >= 100) clearInterval(interval);
      }, 100);
    } else {
      setUploadProgress(0);
    }
    return () => clearInterval(interval);
  }, [uploadHover]);

  useEffect(() => {
    let aiTimeout;
    if (aiActive) {
      aiTimeout = setTimeout(() => setAiActive(false), 2000);
    }
    return () => clearTimeout(aiTimeout);
  }, [aiActive]);

  useEffect(() => {
    let playTimeout;
    if (playing) {
      playTimeout = setTimeout(() => setPlaying(false), 1800);
    }
    return () => clearTimeout(playTimeout);
  }, [playing]);

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-white transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Live product demonstration"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center text-gray-900 tracking-tight">
          See Clypso in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Upload Demo */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setUploadHover(true)}
            onMouseLeave={() => setUploadHover(false)}
            tabIndex={0}
            aria-label="Upload video demo, drag and drop simulation"
          >
            <div className="relative w-full max-w-xs h-48 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-400 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-shadow hover:shadow-xl">
              <CloudUploadIcon className="w-14 h-14 text-blue-600 mb-4" />
              <span className="text-blue-700 font-semibold mb-2">Drop MP4 here</span>
              <div className="w-4/5 h-3 bg-blue-200 rounded-full overflow-hidden mt-4">
                <div
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <span className="absolute bottom-2 right-4 text-xs text-blue-400 font-mono">
                {uploadProgress}%
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center max-w-xs">{captions.upload}</p>
          </div>

          {/* AI Demo */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setAiActive(true)}
            onMouseLeave={() => setAiActive(false)}
            tabIndex={0}
            aria-label="AI analysis demo with key moments detection"
          >
            <div className="relative w-full max-w-xs h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-shadow hover:shadow-xl">
              <ChipIcon className="w-16 h-16 text-purple-600 mb-6 animate-pulse" />
              <div className="flex items-center space-x-2 text-purple-700 font-semibold">
                {aiActive ? (
                  <CheckCircleIcon className="w-6 h-6 text-yellow-400 animate-pulse" />
                ) : (
                  <VideoCameraIcon className="w-6 h-6" />
                )}
                <span>{aiActive ? 'Key moments detected!' : 'Analyzing video...'}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center max-w-xs">{captions.ai}</p>
          </div>

          {/* Output Demo */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setPlaying(true)}
            onMouseLeave={() => setPlaying(false)}
            tabIndex={0}
            aria-label="Output demo showing final video clip"
          >
            <div className="relative w-40 h-80 bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-200 overflow-hidden flex flex-col items-center justify-center">
              <div
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ${
                  playing ? 'scale-110' : ''
                }`}
              >
                <PlayIcon className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 px-4 py-2 bg-black/80 text-white text-base font-semibold rounded-xl shadow-lg transition-opacity duration-500 ${
                  playing ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-live="polite"
              >
                "This is your viral short!"
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center max-w-xs">{captions.output}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
