
import React, { useEffect, useRef } from 'react';
import { MISSION_ITEMS_DATA } from '../constants';
import { MissionItem } from '../types';
import { AnimatedHeading } from './AnimatedHeading';
import { gsap } from 'gsap';

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
      let totalItemsWidth = 0;
      itemsRef.current.forEach(item => {
        totalItemsWidth += item.offsetWidth;
      });
      // Ensure gapWidth is not negative if there's only one item or no items.
      const gapWidth = itemsRef.current.length > 1 ? (itemsRef.current.length - 1) * 32 : 0; // 32px for md:gap-8
      const scrollDistance = totalItemsWidth + gapWidth - section.offsetWidth + 64; // +64 for some end padding

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'center center',
          end: () => `+=${Math.max(0, scrollDistance * 0.7)}`, // Ensure end is not negative
          // markers: true, 
        },
      });

      if (scrollDistance > 0) { // Only animate scroll if there's something to scroll
        tl.to(track, {
          x: () => -scrollDistance,
          ease: 'none',
        });
      }
      
      itemsRef.current.forEach((item) => {
        gsap.fromTo(item.querySelector('.mission-card-content'),
          { autoAlpha: 0, y: 30 }, 
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              containerAnimation: tl, // Ensures animation syncs with horizontal scroll
              start: 'left 85%',
              toggleActions: 'play none none none',
              // markers: {startColor: "purple", endColor: "fuchsia", indent: 200},
            }
          }
        );
      });

      return () => {
        tl.kill();
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        // Clear GSAP properties from animated elements
        itemsRef.current.forEach(item => {
          const content = item.querySelector('.mission-card-content');
          if (content) {
            gsap.killTweensOf(content);
            gsap.set(content, { clearProps: 'all' });
          }
        });
        if(track) gsap.set(track, {clearProps: 'all'});

      };
    });
    
     mm.add("(max-width: 767px)", () => { 
      itemsRef.current.forEach((item, index) => {
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
            gsap.killTweensOf(item);
            // Ensure ScrollTrigger instance is killed
            const itemTweens = gsap.getTweensOf(item);
            if(itemTweens.length > 0 && itemTweens[0].scrollTrigger){
                 itemTweens[0].scrollTrigger.kill();
            }
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
        className="md:flex md:flex-row md:items-stretch md:gap-8 px-4 sm:px-6 lg:px-0 md:w-max md:will-change-transform"
      >
        {MISSION_ITEMS_DATA.map((item: MissionItem, index: number) => (
          <div
            key={item.id}
            ref={el => { if (el) itemsRef.current[index] = el; }}
            className="mission-item w-full aspect-[4/3] md:w-[400px] lg:w-[440px] md:aspect-square flex-shrink-0 mb-8 md:mb-0"
          >
            <div className="relative bg-black rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full mx-2 md:mx-0">
              {item.imageUrl && (
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end mission-card-content text-white">
                {item.englishTitle && (
                  <p className="text-sm font-semibold text-accent mb-1 tracking-wider">{item.englishTitle.toUpperCase()}</p>
                )}
                <h3 className="text-xl lg:text-2xl font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
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
