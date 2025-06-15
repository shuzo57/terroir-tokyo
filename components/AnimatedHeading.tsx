import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedHeadingProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  wordClassName?: string;
  staggerAmount?: number;
  delay?: number;
  once?: boolean;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  as: Tag = 'h1',
  className = '',
  wordClassName = '',
  staggerAmount = 0.05, // Default stagger
  delay = 0,
  once = true,
}) => {
  const headingRef = useRef<Element>(null);

  useEffect(() => {
    const currentHeadingRef = headingRef.current;
    if (!currentHeadingRef) return;

    const wordsToAnimate = currentHeadingRef.querySelectorAll<HTMLSpanElement>('.animated-word-span');
    if (wordsToAnimate.length === 0) return;

    // Initial state: hidden and slightly offset for the reveal
    gsap.set(wordsToAnimate, { yPercent: 100, autoAlpha: 0 }); 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: currentHeadingRef,
        start: 'top 90%', 
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        // markers: process.env.NODE_ENV === 'development',
      },
      delay: delay,
    });

    tl.to(wordsToAnimate, {
      yPercent: 0,
      autoAlpha: 1,
      stagger: staggerAmount, // Use the passed staggerAmount
      duration: 0.8,
      ease: 'power2.out',
    });
    
    return () => {
      tl.kill();
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };

  }, [text, staggerAmount, delay, once]);

  const defaultClasses = 'font-serif';
  const combinedClassName = `${defaultClasses} ${className}`;

  // Split by spaces, but keep spaces to render them for correct spacing between words.
  // Using a regex to capture spaces allows preserving them.
  const wordElements = text.split(/(\\s+)/).map((segment, index) => {
    // If the segment is purely whitespace, render it. Non-breaking space for single spaces for safety.
    if (segment.match(/^\\s+$/)) {
      return <span key={`space-${index}`}>{segment.replace(/ /g, '\u00A0')}</span>;
    }
    // Otherwise, it's a word, wrap it for animation.
    return (
      <span key={index} className="animated-word-wrapper" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
        <span className={`animated-word-span ${wordClassName}`} style={{ display: 'inline-block' }}>
          {segment}
        </span>
      </span>
    );
  });

  return (
    <Tag ref={headingRef as React.Ref<any>} className={combinedClassName} aria-label={text.replace(/<[^>]*>?/gm, '')}> 
      {wordElements}
    </Tag>
  );
};