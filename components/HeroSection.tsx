
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AnimatedHeading } from './AnimatedHeading';
import { SITE_TITLE, TAGLINE } from '../constants';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    if (bgRef.current) {
      tl.fromTo(
        bgRef.current,
        { scale: 1.15, autoAlpha: 0.6 },
        { scale: 1, autoAlpha: 1, duration: 2.5, ease: 'power3.out' },
        0
      );
    }
    
    // Content animation (title and tagline together)
    if (contentRef.current) {
         tl.fromTo(
            contentRef.current.querySelectorAll('.animate-hero-content'),
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1, ease: 'power2.out', stagger: 0.2 },
            0.8 // Start after background zoom starts settling
        );
    }
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-bg">
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/seed/vineyardjp/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for text readability */}
      </div>

      <div ref={contentRef} className="relative z-10 p-4 sm:p-8">
        <AnimatedHeading 
          text={SITE_TITLE}
          as="h1" 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight animate-hero-content"
          staggerAmount={0.05}
          delay={0.8}
        />
        <AnimatedHeading
          text={TAGLINE}
          as="p"
          className="text-xl sm:text-2xl md:text-3xl text-slate-100 font-sans max-w-md sm:max-w-lg md:max-w-xl mx-auto mb-10 animate-hero-content"
          staggerAmount={0.02}
          delay={1.1}
        />
      </div>
       {/* Removed bouncing down arrow icon
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <svg className="w-8 h-8 text-white animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div> 
      */}
    </section>
  );
};