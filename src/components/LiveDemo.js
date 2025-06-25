import React from 'react';
import { SparklesIcon, FilmIcon, CheckCircleIcon } from '@heroicons/react/solid';

const steps = [
  {
    id: 1,
    title: 'Step 1: Raw Video Input',
    description: 'Upload your longform content — interviews, podcasts, or sports recordings.',
    videoUrl: 'https://www.youtube.com/embed/KjwxPjG8HQQ',
    icon: FilmIcon
  },
  {
    id: 2,
    title: 'Step 2: AI Punchline Detection',
    description: 'Clypso scans the timeline to find key moments, punchlines, and engagement spikes.',
    imageUrl: '/ai-analysis-simulation.png',
    icon: SparklesIcon
  },
  {
    id: 3,
    title: 'Step 3: Shortform Clip Output',
    description: 'Receive fully edited, captioned, vertical clips — ready to publish on social platforms.',
    videoUrl: 'https://www.youtube.com/embed/Ipu7gMWbVXs',
    icon: CheckCircleIcon
  }
];

export default function LiveDemo({ isVisible }) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Experience Clypso in Action</h2>
        <p className="text-gray-600 mb-16">From longform to viral in three smart steps.</p>
      </div>
      <div className="grid gap-12 lg:grid-cols-3">
        {steps.map(({ id, title, description, videoUrl, imageUrl, icon: Icon }) => (
          <div key={id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <Icon className="h-10 w-10 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            </div>
            <div className="aspect-video">
              {videoUrl ? (
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
              ) : null}
            </div>
            <p className="p-6 text-gray-700 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}