import React from 'react';
import { BUSINESS_ACTIVITIES_DATA } from '../constants';
import { BusinessActivityItem } from '../types';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';
import { AnimatedHeading } from './AnimatedHeading';

export const BusinessActivitiesSection: React.FC = () => {
  return (
    <section id="business" className="py-20 bg-neutral-soft"> {/* Changed from bg-bg to bg-neutral-soft */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <AnimatedHeading
          text="事業内容"
          as="h2"
          className="text-4xl sm:text-5xl font-serif font-bold text-center mb-16 text-primary"
        />
        <div className="space-y-20">
          {BUSINESS_ACTIVITIES_DATA.map((item: BusinessActivityItem, index: number) => (
            <ScrollRevealWrapper key={item.id} once={true}>
              <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center`}>
                <div
                  className={`relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl
                              ${item.imagePosition === 'right' ? 'md:order-1' : 'md:order-0'}`}
                >
                  <ScrollRevealWrapper 
                    direction={item.imagePosition === 'right' ? 'right' : 'left'} 
                    distance="80px" 
                    duration={0.9} // Slightly adjusted duration
                    delay={0.1}
                    className="h-full" 
                    as="div" 
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </ScrollRevealWrapper>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className={`${item.imagePosition === 'right' ? 'md:order-0' : 'md:order-1'}`}>
                  <ScrollRevealWrapper 
                    direction="up" 
                    distance="40px" 
                    duration={0.7}
                    delay={0.3} 
                  >
                    <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-4 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-light-text leading-relaxed">
                      {item.description}
                    </p>
                  </ScrollRevealWrapper>
                </div>
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};