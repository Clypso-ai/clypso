import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import FeatureClipCard from './components/FeatureClipCard';
import BeforeAfterToggle from './components/BeforeAfterToggle';
import VerticalClipMockup from './components/VerticalClipMockup';

function useFadeInOnScroll() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function App() {
  const [heroRef, heroVisible] = useFadeInOnScroll();
  const [howRef, howVisible] = useFadeInOnScroll();
  const [featuresRef, featuresVisible] = useFadeInOnScroll();
  const [testimonialsRef, testimonialsVisible] = useFadeInOnScroll();
  const [faqRef, faqVisible] = useFadeInOnScroll();
  const [emailRef, emailVisible] = useFadeInOnScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div ref={heroRef}>
        <Hero isVisible={heroVisible} />
      </div>
      
      <div ref={howRef}>
        <HowItWorks isVisible={howVisible} />
      </div>
      
      <div ref={featuresRef}>
        <Features isVisible={featuresVisible} />
      </div>

      {/* Visual Feature Demos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center text-gray-900 tracking-tight">How Clypso Works Visually</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureClipCard thumbnail="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=320&q=80" subtitle="Auto subtitles appear here!" />
            <BeforeAfterToggle
              beforeImg="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=320&q=80"
              afterImg="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=320&q=80"
              beforeLabel="Long Video"
              afterLabel="Short Clip"
            />
            <VerticalClipMockup thumbnail="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=320&q=80" caption="AI finds the punchline!" />
          </div>
        </div>
      </section>
      
      <div ref={testimonialsRef}>
        <Testimonials isVisible={testimonialsVisible} />
      </div>
      
      <div ref={faqRef}>
        <FAQ isVisible={faqVisible} />
      </div>
      
      <div ref={emailRef}>
        <CTA isVisible={emailVisible} />
      </div>
    </div>
  );
}

export default App;
