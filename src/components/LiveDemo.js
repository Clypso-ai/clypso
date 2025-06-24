import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    id: 'upload',
    title: 'Step 1: Upload Your Video',
    description: 'Drag and drop your long sports footage to start the magic.',
    videoUrl: 'https://player.vimeo.com/external/357623948.sd.mp4?s=647c5c3ae76404b1a7f0621d1f5c3c18d44b4686&profile_id=164&oauth2_token_id=57447761',
  },
  {
    id: 'ai',
    title: 'Step 2: AI Detects Highlights',
    description: 'Clypso’s AI scans the video, finds punchlines and key moments, and builds a highlight timeline.',
    videoUrl: 'https://player.vimeo.com/external/275380425.sd.mp4?s=3f6a7d7ca093b7a8cc109c3bff1e2c84ca28e9f8&profile_id=164&oauth2_token_id=57447761',
    punchlines: [
      { time: 5, label: 'Epic Dunk!' },
      { time: 15, label: 'Fast Break' },
      { time: 28, label: 'Game Winner' },
    ],
  },
  {
    id: 'output',
    title: 'Step 3: Get Shareable Clips',
    description: 'Receive short-form, captioned videos optimized for Reels, TikTok, and Shorts.',
    shortClipUrl: 'https://player.vimeo.com/external/275380425.sd.mp4?s=3f6a7d7ca093b7a8cc109c3bff1e2c84ca28e9f8&profile_id=164&oauth2_token_id=57447761',
    longClipUrl: 'https://player.vimeo.com/external/357623948.sd.mp4?s=647c5c3ae76404b1a7f0621d1f5c3c18d44b4686&profile_id=164&oauth2_token_id=57447761',
  },
];

export default function LiveDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [captionVisible, setCaptionVisible] = useState(true);
  const captionTimeoutRef = useRef();

  useEffect(() => {
    // Auto cycle steps every 12 seconds
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setCaptionVisible(false);
      // Show caption after fade out
      clearTimeout(captionTimeoutRef.current);
      captionTimeoutRef.current = setTimeout(() => setCaptionVisible(true), 700);
    }, 12000);
    return () => {
      clearInterval(interval);
      clearTimeout(captionTimeoutRef.current);
    };
  }, []);

  const renderTimelineBars = () => {
    const punchlines = steps[1].punchlines;
    return punchlines.map(({ time, label }, idx) => (
      <div key={idx} className="flex flex-col items-center" role="listitem">
        <div
          className="w-3 h-10 bg-yellow-400 rounded mb-1 animate-pulse"
          title={`${label} at ${time}s`}
          style={{ animationDelay: `${idx * 0.6}s` }}
        />
        <span className="text-xs text-yellow-600 font-semibold">{label}</span>
      </div>
    ));
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 bg-white rounded-3xl shadow-xl"
      aria-label="Clypso live demo"
    >
      <h2 className="text-center text-4xl font-extrabold mb-12 text-gray-900">See Clypso in Action</h2>

      <nav
        className="flex justify-center gap-8 mb-12"
        aria-label="Steps navigation"
      >
        {steps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(idx)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              idx === activeStep
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            aria-current={idx === activeStep ? 'step' : undefined}
          >
            {step.title}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
          {(activeStep === 0 || activeStep === 1) && (
            <video
              key={steps[activeStep].videoUrl}
              src={steps[activeStep].videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
              controls={false}
            />
          )}

          {activeStep === 2 && (
            <div className="flex w-full h-64 md:h-80 gap-4">
              <div className="flex-1 flex flex-col border border-gray-300 rounded-md overflow-hidden shadow-sm">
                <span className="bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Original Video</span>
                <video
                  src={steps[2].longClipUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  controls={false}
                />
              </div>
              <div className="flex-1 flex flex-col border border-blue-500 rounded-md overflow-hidden shadow-lg">
                <span className="bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">Clypso Highlights</span>
                <video
                  src={steps[2].shortClipUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  controls={false}
                />
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div
              className="absolute bottom-4 left-4 right-4 flex justify-center gap-6"
              aria-label="Detected punchline timeline"
              role="list"
            >
              {renderTimelineBars()}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{steps[activeStep].title}</h3>
          <p className="mb-6 text-gray-700 text-lg max-w-lg">{steps[activeStep].description}</p>

          {activeStep === 1 && captionVisible && (
            <div
              className="p-4 bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800 font-semibold shadow-md transition-opacity duration-700"
              role="alert"
              aria-live="polite"
            >
              Detecting "Epic Dunk!" ... <br />
              Finding the fastest breaks ... <br />
              Highlighting the game winner moment...
            </div>
          )}

          {activeStep === 2 && captionVisible && (
            <button
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition"
              onClick={() => alert('Ready to try Clypso? Contact us to get started!')}
              aria-label="Contact Clypso"
            >
              Get Started Today
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
