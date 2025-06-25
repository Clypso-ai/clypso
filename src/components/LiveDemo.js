import React from 'react';
import { PlayIcon, CheckCircleIcon, LightningBoltIcon } from '@heroicons/react/solid';

const steps = [
  {
    title: 'Step 1: Upload Longform Video',
    description: 'Drag and drop or upload any longform video such as podcasts, interviews, webinars, or sports games. Clypso scans the entire timeline.',
    video: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    icon: <UploadIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: 'Step 2: AI Detects Key Moments',
    description: 'Clypso uses AI to identify viral punchlines, audience reactions, high emotion segments, and dramatic pauses — ready for short-form transformation.',
    video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    icon: <LightningBoltIcon className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: 'Step 3: Export Share-Ready Clips',
    description: 'Get multiple punchy short-form clips, pre-captioned, branded, and optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    video: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
  },
];

function UploadIcon(props) {
  return <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4" />
  </svg>;
}

const LiveDemo = () => {
  return (
    <section className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">See Clypso in Action</h2>
        <p className="text-lg text-gray-600 mb-16">
          A smarter, faster way to turn longform video into viral short-form content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{step.description}</p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover rounded-xl shadow"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={step.video}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <PlayIcon className="h-12 w-12 text-white opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
