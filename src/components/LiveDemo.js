import React, { useState, useEffect } from 'react';
import { CloudUploadIcon, LightningBoltIcon, VideoCameraIcon } from '@heroicons/react/solid';

const steps = [
  {
    title: 'Step 1: Upload a Long Video',
    icon: <CloudUploadIcon className="w-8 h-8 text-blue-500" />,
    content: (
      <div className="w-full h-36 bg-blue-100 border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center">
        <span className="text-blue-600 font-semibold animate-pulse">Drop .mp4 file here</span>
      </div>
    ),
  },
  {
    title: 'Step 2: AI Analyzes Key Moments',
    icon: <LightningBoltIcon className="w-8 h-8 text-yellow-500" />,
    content: (
      <div className="w-full h-36 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center justify-center">
        <div className="flex gap-1">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-yellow-400 animate-pulse"
              style={{ height: `${Math.random() * 50 + 10}px`, animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Step 3: Get Short-Form Video with Captions',
    icon: <VideoCameraIcon className="w-8 h-8 text-purple-500" />,
    content: (
      <div className="w-32 h-64 bg-black rounded-2xl shadow-lg overflow-hidden relative">
        <div className="absolute bottom-4 left-2 right-2 px-3 py-2 bg-white/80 text-black text-sm font-bold rounded-lg">
          “🔥 Don’t miss this moment!”
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    ),
  },
];

export default function LiveDemo({ isVisible }) {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center text-gray-900">See Clypso in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 shadow-md transition-transform hover:scale-105 bg-white"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              {step.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
