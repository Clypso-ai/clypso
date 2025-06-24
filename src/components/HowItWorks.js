import React from 'react';

const HowItWorks = ({ isVisible }) => {
  return (
    <section
      className={`py-24 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center text-gray-900 tracking-tight">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center rounded-full mb-6 shadow-xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900 text-center">Upload your video</h3>
            <p className="text-gray-700 text-center text-lg leading-relaxed">Start by uploading your long-form video content.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center rounded-full mb-6 shadow-xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h4l3 3" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900 text-center">Let Clypso analyze and cut clips using AI</h3>
            <p className="text-gray-700 text-center text-lg leading-relaxed">Clypso automatically finds and creates the best short clips for you.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center rounded-full mb-6 shadow-xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900 text-center">Download or share Reels-ready shorts</h3>
            <p className="text-gray-700 text-center text-lg leading-relaxed">Export your clips or share them directly to your favorite platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 