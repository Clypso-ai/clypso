import React from 'react';

const FAQ = ({ isVisible }) => {
  const faqs = [
    {
      id: 1,
      question: "How does Clypso work?",
      answer: "Clypso uses advanced AI to analyze your long-form videos and automatically identify the most engaging moments, punchlines, and viral-worthy clips. Simply upload your video, and our AI will create multiple short-form clips optimized for different social media platforms. The process takes just a few minutes, saving you hours of manual editing."
    },
    {
      id: 2,
      question: "Is my content safe and private?",
      answer: "Absolutely. We take your privacy seriously. All uploaded videos are processed securely and automatically deleted after processing. We never store, share, or use your content for any purpose other than creating your clips. Your intellectual property remains 100% yours."
    },
    {
      id: 3,
      question: "What's the pricing structure?",
      answer: "We're launching with early access pricing for our waitlist members. You'll get exclusive discounts and priority access when we go live. Pricing will be based on usage volume, with plans starting as low as $9/month for creators just getting started. Enterprise plans available for larger content teams."
    },
    {
      id: 4,
      question: "What video formats and platforms are supported?",
      answer: "Clypso supports all major video formats (MP4, MOV, AVI, etc.) and works with videos up to 4 hours long. We automatically convert your clips to the perfect format for each platform: vertical 9:16 for TikTok and Instagram Reels, square 1:1 for Instagram posts, and horizontal 16:9 for YouTube Shorts."
    },
    {
      id: 5,
      question: "What kind of support do you offer?",
      answer: "Early access members get priority support with dedicated help channels. We offer comprehensive documentation, video tutorials, and a community of creators sharing tips and best practices. Our support team is available via email and chat to help you get the most out of Clypso."
    },
    {
      id: 6,
      question: "Can I customize the AI-generated clips?",
      answer: "Yes! While our AI finds the best moments automatically, you have full control to adjust clip length, add custom subtitles, choose different aspect ratios, and fine-tune the timing. You can also add your own branding, logos, and custom intro/outro sequences to maintain your unique style."
    }
  ];

  return (
    <section 
      className={`py-24 bg-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center text-gray-900 tracking-tight">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-xl font-semibold">Still have questions?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 