import React from 'react';

const platforms = [
  {
    name: 'YouTube',
    logo: (
      <svg viewBox="0 0 32 32" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#FF0000"/>
        <polygon points="13,10 23,16 13,22" fill="#fff"/>
      </svg>
    )
  },
  {
    name: 'TikTok',
    logo: (
      <svg viewBox="0 0 32 32" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M22.5,10.5c-2.2,0-4-1.8-4-4h-3.1v14.2c0,1.5-1.2,2.7-2.7,2.7s-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c0.2,0,0.4,0,0.6,0.1v-3.1c-0.2,0-0.4-0.1-0.6-0.1c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8c3.2,0,5.8-2.6,5.8-5.8V13.6c1.1,0.4,2.2,0.6,3.4,0.6v-3.7H22.5z" fill="#25F4EE"/>
          <path d="M22.5,10.5c-2.2,0-4-1.8-4-4h-1.6v14.2c0,1.5-1.2,2.7-2.7,2.7s-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c0.2,0,0.4,0,0.6,0.1v-3.1c-0.2,0-0.4-0.1-0.6-0.1c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8c3.2,0,5.8-2.6,5.8-5.8V13.6c1.1,0.4,2.2,0.6,3.4,0.6v-3.7H22.5z" fill="#FE2C55"/>
          <path d="M22.5,10.5c-2.2,0-4-1.8-4-4h-0.8v14.2c0,1.5-1.2,2.7-2.7,2.7s-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c0.2,0,0.4,0,0.6,0.1v-3.1c-0.2,0-0.4-0.1-0.6-0.1c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8c3.2,0,5.8-2.6,5.8-5.8V13.6c1.1,0.4,2.2,0.6,3.4,0.6v-3.7H22.5z" fill="#000"/>
        </g>
      </svg>
    )
  },
  {
    name: 'Instagram',
    logo: (
      <svg viewBox="0 0 32 32" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-gradient4" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD600"/>
            <stop offset="0.5" stopColor="#FF2D55"/>
            <stop offset="1" stopColor="#4F5BD5"/>
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#ig-gradient4)"/>
        <rect x="8" y="8" width="16" height="16" rx="5" fill="#fff" fillOpacity="0.2"/>
        <circle cx="16" cy="16" r="5" fill="#fff" fillOpacity="0.7"/>
        <circle cx="23" cy="11" r="1.5" fill="#fff"/>
      </svg>
    )
  },
  {
    name: 'Twitch',
    logo: (
      <svg viewBox="0 0 32 32" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#9147FF"/>
        <path d="M10 8l-2 3v11h4v2h2l2-2h3l3-3V8H10Zm11 9l-2 2h-3l-2 2v-2h-3V10h10v7Z" fill="#fff"/>
      </svg>
    )
  }
];

const Testimonials = ({ isVisible }) => {
  const testimonials = [
    {
      id: 1,
      quote: "Clypso saved me 10+ hours a week! I used to spend forever cutting my podcast into clips. Now I get 15 viral-ready videos from one episode in minutes.",
      name: "Sarah Chen",
      handle: "@sarahcreates",
      title: "Tech YouTuber",
      avatar: "S",
      avatarGradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      quote: "My TikTok following grew 300% in 2 months thanks to Clypso. The AI somehow finds the exact moments that go viral. It's like having a professional editor!",
      name: "Marcus Rodriguez",
      handle: "@marcuscomedy",
      title: "Stand-up Comedian",
      avatar: "M",
      avatarGradient: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      quote: "As a fitness coach, I was struggling to repurpose my workout videos. Clypso made it so easy - now I have content for Instagram, TikTok, and YouTube from one session.",
      name: "Jessica Kim",
      handle: "@jessicafit",
      title: "Fitness Coach",
      avatar: "J",
      avatarGradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section 
      className={`py-24 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center text-gray-900 tracking-tight">What Creators Are Saying</h2>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.avatarGradient} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.handle} • {testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-700 mb-10 text-xl font-semibold">Trusted by creators from</p>
          <div className="flex justify-center items-center space-x-8 opacity-90">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="flex items-center justify-center px-8 py-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors duration-200 cursor-pointer shadow-sm"
                title={platform.name}
                style={{ minWidth: 96, minHeight: 64 }}
              >
                {platform.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 