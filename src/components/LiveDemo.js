import React, { useState, useEffect } from 'react';

export default function LiveDemo() {
  const [step, setStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [detectedMoments, setDetectedMoments] = useState([]);
  const [showOutputCaption, setShowOutputCaption] = useState(false);

  // Simulate upload progress
  useEffect(() => {
    if (step === 1 && uploadProgress < 100) {
      const timer = setTimeout(() => setUploadProgress(prev => Math.min(prev + 8, 100)), 300);
      if (uploadProgress === 100) {
        setTimeout(() => setStep(2), 800);
      }
      return () => clearTimeout(timer);
    }
  }, [uploadProgress, step]);

  // Simulate AI detecting key moments
  useEffect(() => {
    if (step === 2 && detectedMoments.length === 0) {
      const moments = [
        { id: 1, time: '00:45', label: 'Funny reaction' },
        { id: 2, time: '01:30', label: 'Viral punchline' },
        { id: 3, time: '02:15', label: 'Key insight' },
      ];
      moments.forEach((moment, i) => {
        setTimeout(() => {
          setDetectedMoments(prev => [...prev, moment]);
          if (i === moments.length - 1) {
            setTimeout(() => setStep(3), 1500);
          }
        }, 1000 * (i + 1));
      });
    }
  }, [step, detectedMoments.length]);

  // Show output caption briefly on output step
  useEffect(() => {
    if (step === 3) {
      setShowOutputCaption(true);
      const timer = setTimeout(() => setShowOutputCaption(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg my-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        How Clypso Turns Your Long Videos Into Viral Clips
      </h2>

      {/* Stepper Buttons */}
      <div className="flex justify-center space-x-6 mb-10">
        {[1, 2, 3].map(s => (
          <button
            key={s}
            onClick={() => {
              setStep(s);
              if (s === 1) setUploadProgress(0);
              if (s === 2) setDetectedMoments([]);
            }}
            className={`px-5 py-2 rounded-full font-semibold ${
              step === s ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
            } transition`}
          >
            Step {s}
          </button>
        ))}
      </div>

      {/* Step 1: Upload */}
      {step === 1 && (
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-xl bg-gray-100 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Upload Your Video</h3>
            <p className="mb-4 text-gray-700 text-center">
              Drag & drop your long video or click to upload. Clypso starts analyzing instantly.
            </p>
            <div className="w-full bg-blue-100 rounded-full h-6 overflow-hidden shadow-inner">
              <div
                className="bg-blue-600 h-6 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="mt-2 text-center text-blue-700 font-semibold">{uploadProgress}% uploaded</p>
          </div>
          <p className="italic text-gray-500">
            (This is a simulation. Real uploads happen in seconds!)
          </p>
        </div>
      )}

      {/* Step 2: AI Detection */}
      {step === 2 && (
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-2xl font-semibold mb-4">AI Detecting Key Moments</h3>
          <div className="w-full max-w-xl p-6 bg-gray-50 rounded-xl border border-blue-300 shadow-inner">
            <div className="relative h-16 bg-white rounded-lg shadow flex items-center px-4">
              {/* Timeline bar */}
              <div className="absolute top-7 left-6 right-6 h-1 bg-gray-300 rounded-full" />
              {/* Moment markers */}
              {[...Array(60)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute top-5 h-6 w-0.5 bg-gray-300 rounded-sm left-[calc(${i * (100 / 60)}%)] transition-colors duration-500 ${
                    detectedMoments.some(m => Math.floor(parseInt(m.time.split(':')[1])) === i) ? 'bg-yellow-400 h-8' : ''
                  }`}
                  title={
                    detectedMoments.find(m => Math.floor(parseInt(m.time.split(':')[1])) === i)
                      ? detectedMoments.find(m => Math.floor(parseInt(m.time.split(':')[1])) === i).label
                      : ''
                  }
                />
              ))}
            </div>

            {/* Detected moments list */}
            <ul className="mt-4 space-y-2 text-gray-700">
              {detectedMoments.length === 0 && <li>Analyzing video... please wait</li>}
              {detectedMoments.map(m => (
                <li key={m.id} className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                  <span>
                    <strong>{m.label}</strong> detected at <em>{m.time}</em>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="italic text-gray-500">(AI is smart — it detects moments you don’t want to miss!)</p>
        </div>
      )}

      {/* Step 3: Output Preview */}
      {step === 3 && (
        <div className="flex flex-col items-center space-y-8">
          <h3 className="text-2xl font-semibold mb-4">Your Ready-to-Share Viral Clips</h3>

          <div className="relative w-48 h-96 rounded-3xl shadow-lg overflow-hidden border-4 border-gray-200 bg-black">
            {/* Simulated vertical video */}
            <video
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              loop
              muted
              autoPlay
              className="w-full h-full object-cover"
              aria-label="Sample output short-form video"
            />

            {/* Dynamic Caption */}
            <div
              className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-center px-4 py-2 rounded-lg font-semibold transition-opacity duration-700 ${
                showOutputCaption ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              This is your viral clip — ready to post!
            </div>
          </div>
          <p className="italic text-gray-500 max-w-sm text-center">
            Perfectly formatted vertical videos with captions, optimized for TikTok, Reels, and Shorts.
          </p>
        </div>
      )}
    </section>
  );
}
