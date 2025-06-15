import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface ScrollRevealWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: string; // e.g., '50px'
  duration?: number;
  className?: string;
  staggerChildren?: number; // Stagger animation for direct children
  once?: boolean; // Play animation only once
  as?: React.ElementType; // Changed from keyof JSX.IntrinsicElements
}

export const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = '30px',
  duration = 0.8,
  className = '',
  staggerChildren,
  once = true,
  as: Tag = 'div', // Changed alias to 'Tag' (uppercase, standard for components/ElementType)
}) => {
  const elRef = useRef<Element>(null); // Changed from HTMLElement to Element

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Ensure el.children is valid; Element has 'children'
    const targets = staggerChildren && el.children.length > 0 ? gsap.utils.toArray(el.children) : el;

    let initialProps: gsap.TweenVars = { autoAlpha: 0 };
    if (direction === 'up') initialProps = { ...initialProps, y: distance };
    else if (direction === 'down') initialProps = { ...initialProps, y: `-${distance}` };
    else if (direction === 'left') initialProps = { ...initialProps, x: distance };
    else if (direction === 'right') initialProps = { ...initialProps, x: `-${distance}` };
    
    gsap.set(targets, initialProps); // Set initial state for all targets

    const anim = gsap.to(
      targets,
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: 'power3.out',
        stagger: staggerChildren,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%', // When 85% of the element is visible from the top
          end: 'bottom 15%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          // markers: process.env.NODE_ENV === 'development', // For debugging
        },
      }
    );
    
    return () => {
        anim.kill();
        if (anim.scrollTrigger) {
            anim.scrollTrigger.kill();
        }
    };

  }, [delay, direction, distance, duration, staggerChildren, once]);

  // Initial opacity set via GSAP, not className, to avoid flash if JS loads late.
  return <Tag ref={elRef as React.Ref<any>} className={className}>{children}</Tag>; // Use 'Tag', added 'as React.Ref<any>' for broader compatibility with Tag
};