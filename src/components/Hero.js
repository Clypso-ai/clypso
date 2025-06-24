import React, { useState } from 'react';

const Hero = ({ isVisible }) => {
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
      className={`flex flex-col items-center justify-center min-h-screen py-16 sm:py-24 bg-gradient-to-br from-white to-blue-50 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
          <span className="text-white text-4xl font-black">C</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-gray-900 leading-tight tracking-tight">
          Clypso
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-4 font-bold">Stop losing viral moments in your long videos.</p>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">Transform hours of content into viral clips in minutes. Let AI find your best moments so you can focus on growing your audience.</p>
        <p className="text-base sm:text-lg text-blue-700 font-semibold mb-12">For creators who know their content is gold, but struggle to make it shine.</p>
        
        {success ? (
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg animate-pulse">
            🎉 Thank you for joining the waitlist!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-lg shadow-lg transition-all duration-200"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              disabled={loading}
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" 
              disabled={loading}
            >
              {loading ? 'Joining...' : 'Join the Waitlist'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Hero; 