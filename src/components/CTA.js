import React, { useState } from 'react';

const CTA = ({ isVisible }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a POST request or localStorage save
    setTimeout(() => {
      // localStorage.setItem('clypso-waitlist-email', email); // Optionally store
      setSuccess(true);
      setLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section
      className={`py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 rounded-full text-lg font-black mb-8 shadow-xl">
            <span className="animate-pulse mr-3 text-2xl">⚡</span>
            Limited Spots Available - Join 2,847+ Creators
          </div>
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
          Be the First to Access This AI Breakthrough
        </h2>
        
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of creators who are already transforming their content with AI. 
          Get early access, exclusive pricing, and priority support.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 mb-12 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
            <div className="text-white">
              <div className="text-3xl font-black">2,847+</div>
              <div className="text-blue-100 text-lg font-semibold">Creators Joined</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-black">10,000+</div>
              <div className="text-blue-100 text-lg font-semibold">Videos Processed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-black">98%</div>
              <div className="text-blue-100 text-lg font-semibold">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-lg mx-auto mb-8">
          <input
            type="email"
            className="flex-1 px-8 py-5 border-0 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-gray-900 text-xl shadow-2xl font-semibold"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            required
            disabled={loading}
          />
          <button 
            type="submit" 
            className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black text-xl rounded-xl shadow-2xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={loading}
          >
            {loading ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </form>
        
        {success && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-black text-xl shadow-2xl animate-pulse">
            🎉 Welcome to Clypso! Check your email for early access details.
          </div>
        )}
        
        <p className="text-blue-200 text-lg mt-8 font-semibold">
          🔒 No spam, ever. Unsubscribe anytime. Early access starts in 2 weeks.
        </p>
      </div>
    </section>
  );
};

export default CTA; 