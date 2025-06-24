import React from 'react';
import VideoClipperDemo from './VideoClipperDemo';
import SubtitleDemo from './SubtitleDemo';
import VerticalFormatDemo from './VerticalFormatDemo';

const Features = ({ isVisible }) => {
  const features = [
    {
      id: 1,
      title: "Save Hours Every Week",
      description: "Turn 2-hour videos into 10 viral clips in minutes, not hours. Focus on creating, not editing.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12,6 12,12 16,14"></polyline>
        </svg>
      ),
      gradient: "from-blue-50 to-blue-100",
      iconGradient: "from-blue-500 to-blue-600",
      border: "border-blue-200"
    },
    {
      id: 2,
      title: "10x Your Social Reach",
      description: "One video becomes multiple viral clips. Post more, reach more people, grow faster.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      gradient: "from-green-50 to-green-100",
      iconGradient: "from-green-500 to-green-600",
      border: "border-green-200"
    },
    {
      id: 3,
      title: "Repurpose Without the Work",
      description: "AI finds your best moments automatically. No more guessing what will go viral.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
      gradient: "from-purple-50 to-purple-100",
      iconGradient: "from-purple-500 to-purple-600",
      border: "border-purple-200"
    },
    {
      id: 4,
      title: "Ready for Every Platform",
      description: "Vertical for TikTok, square for Instagram, horizontal for YouTube. All formats covered.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      gradient: "from-orange-50 to-orange-100",
      iconGradient: "from-orange-500 to-orange-600",
      border: "border-orange-200"
    },
    {
      id: 5,
      title: "No Editing Skills Required",
      description: "Perfect cuts, auto-subtitles, and viral timing. Look like a pro without the learning curve.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4"></path>
          <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
          <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
          <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"></path>
          <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"></path>
        </svg>
      ),
      gradient: "from-pink-50 to-pink-100",
      iconGradient: "from-pink-500 to-pink-600",
      border: "border-pink-200"
    },
    {
      id: 6,
      title: "Never Run Out of Content",
      description: "One long video = weeks of social media content. Stay consistent without the stress.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      gradient: "from-indigo-50 to-indigo-100",
      iconGradient: "from-indigo-500 to-indigo-600",
      border: "border-indigo-200"
    }
  ];

  return (
    <section
      className={`py-24 bg-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center text-gray-900 tracking-tight">Why Creators Love Clypso</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`p-8 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-300 border ${feature.border}`}
            >
              <div className={`h-20 w-20 bg-gradient-to-br ${feature.iconGradient} text-white flex items-center justify-center rounded-full mb-6 shadow-xl`}>
                {feature.icon}
              </div>
              <h3 className="font-black text-xl mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Demos */}
        <h3 className="text-3xl font-black mt-24 mb-10 text-center text-gray-900 tracking-tight">See Clypso in Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VideoClipperDemo />
          <SubtitleDemo />
          <VerticalFormatDemo />
        </div>
      </div>
    </section>
  );
};

export default Features; 