

import React, { useEffect, useRef } from 'react';
import { MISSION_ITEMS_DATA } from '../constants';
import { MissionItem } from '../types';
import { AnimatedHeading } from './AnimatedHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Ensure ScrollTrigger is imported if used directly

export const MissionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    
    if (!section || !track || itemsRef.current.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Ensure GSAP has calculated dimensions after any style changes
      gsap.set(track, {clearProps: "x"}); // Clear previous x transform before recalculating
      itemsRef.current.forEach(item => gsap.set(item, {clearProps: "all"}));


      let totalItemsWidth = 0;
      itemsRef.current.forEach(item => {
        if(item) totalItemsWidth += item.offsetWidth;
      });
      
      const gapStyle = window.getComputedStyle(track!).getPropertyValue('gap');
      const gapWidthValue = gapStyle ? parseInt(gapStyle) : 32; // Default to 32px (md:gap-8) if not found
      
      const totalGapWidth = itemsRef.current.length > 1 ? (itemsRef.current.length - 1) * gapWidthValue : 0;
      const contentWidthOnTrack = totalItemsWidth + totalGapWidth;
      const viewportWidth = section.offsetWidth;
      
      let scrollableDistance = Math.max(0, contentWidthOnTrack - viewportWidth);
      let tl: gsap.core.Timeline | null = null;

      if (scrollableDistance > 0) {
        // Content overflows, enable scrolling
        gsap.set(track, { x: 0 }); // Start from left edge

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: 'center center',
            end: () => `+=${scrollableDistance}`, // Scroll exactly the overflow amount
            // markers: true, 
          },
        });

        tl.to(track, {
          x: () => -scrollableDistance,
          ease: 'none',
        });
      } else {
        // Content fits, center it
        const offsetX = (viewportWidth - contentWidthOnTrack) / 2;
        gsap.set(track, { x: offsetX });
        // Pin the section even if not scrolling, for consistent behavior & item animations
        ScrollTrigger.create({
            trigger: section,
            pin: section,
            start: 'center center',
            end: '+=100%', // Arbitrary short duration as there's no scroll
        });
      }
      
      itemsRef.current.forEach((item) => {
        if (!item) return;
        const itemContent = item.querySelector('.mission-card-content');
        if (!itemContent) return;

        gsap.fromTo(itemContent,
          { autoAlpha: 0, y: 30 }, 
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              containerAnimation: tl || undefined, // Pass timeline only if scrolling
              start: 'left 85%', // Animate when item enters 85% from left (during scroll) or visible
              toggleActions: 'play none none none',
            }
          }
        );
      });

      return () => {
        if (tl && tl.scrollTrigger) tl.scrollTrigger.kill();
        if (tl) tl.kill();
        // Kill individual ScrollTriggers for items if any were created without containerAnimation
        itemsRef.current.forEach(item => {
            if (!item) return;
            const content = item.querySelector('.mission-card-content');
            if (content) {
                const itemST = gsap.getTweensOf(content); // Corrected: Use gsap.getTweensOf
                itemST.forEach(tween => {
                    if (tween.scrollTrigger) tween.scrollTrigger.kill();
                    tween.kill();
                });
                gsap.set(content, { clearProps: 'all' });
            }
        });
        if(track) gsap.set(track, {clearProps: 'all'});
        // Ensure all ScrollTriggers associated with the section are killed
        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.trigger === section) {
                st.kill();
            }
        });
      };
    });
    
     mm.add("(max-width: 767px)", () => { 
      // Mobile: simple stagger reveal, no horizontal scroll
      itemsRef.current.forEach((item, index) => {
        if(!item) return;
        gsap.fromTo(item, 
          { autoAlpha: 0, y: 40 }, 
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
      return () => {
        itemsRef.current.forEach(item => {
            if(!item) return;
            const itemTweens = gsap.getTweensOf(item);
            itemTweens.forEach(tween => {
                if (tween.scrollTrigger) tween.scrollTrigger.kill();
                tween.kill();
            });
            gsap.set(item, {clearProps: 'all'});
        });
      };
    });

    return () => mm.revert();

  }, []);

  return (
    <section id="mission" ref={sectionRef} className="py-16 bg-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <AnimatedHeading
          text="Our Philosophy"
          as="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-12 md:mb-16 text-primary"
        />
      </div>
      
      <div 
        ref={trackRef} 
        // lg:px-0 ensures track content can go edge-to-edge on large screens.
        className="md:flex md:flex-row md:items-stretch md:gap-8 px-4 sm:px-6 lg:px-0 md:w-max md:will-change-transform"
      >
        {MISSION_ITEMS_DATA.map((item: MissionItem, index: number) => (
          <div
            key={item.id}
            ref={el => { if (el) itemsRef.current[index] = el; }}
            // Card dimensions: aspect-[4/3] for both mobile and desktop for more height.
            // Widths: md:w-[400px] lg:w-[440px] slightly reduced to compensate for increased height from aspect ratio if needed, but current widths might be fine.
            className="mission-item w-full md:w-[440px] lg:w-[480px] aspect-[4/3] md:aspect-[4/3] flex-shrink-0 mb-8 md:mb-0"
          >
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col mx-2 md:mx-0">
              {item.imageUrl && (
                // Image container: Takes 40% of card height.
                <div className="w-full h-[40%] flex-shrink-0"> 
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              
              {/* Text content area: Takes remaining 60% of card height */}
              <div className="p-5 md:p-6 flex flex-col flex-grow mission-card-content"> 
                {item.englishTitle && (
                  <p className="text-xs font-semibold text-accent mb-1 tracking-wider">{item.englishTitle.toUpperCase()}</p>
                )}
                <h3 className="text-lg lg:text-xl font-serif font-semibold mb-2 text-primary">{item.title}</h3>
                {/* Description: line-clamp-3 should now have enough space */}
                <p className="text-light-text text-sm leading-relaxed line-clamp-3"> 
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};