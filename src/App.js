import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import LiveDemo from './components/LiveDemo';

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
  const [demoRef, demoVisible] = useFadeInOnScroll();
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

      <div ref={demoRef}>
        <LiveDemo isVisible={demoVisible} />
      </div>

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
