
import React from 'react';
import { WHY_JAPANESE_WINE_INFO } from '../constants';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';
import { AnimatedHeading } from './AnimatedHeading';

export const WhyJapaneseWineSection: React.FC = () => {
  return (
    <section id="why-japanese-wine" className="py-20 bg-neutral-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollRevealWrapper direction="left" distance="50px" className="md:order-1" duration={0.9}>
            <div className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={WHY_JAPANESE_WINE_INFO.imageUrl}
                alt="Japanese Vineyard or Wine"
                className="w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </ScrollRevealWrapper>
          <div className="md:order-0"> {/* Wrapper for text content animations */}
            <AnimatedHeading
              text={WHY_JAPANESE_WINE_INFO.title}
              as="h2"
              className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-primary"
              staggerAmount={0.07} // Adjusted for a slightly different feel
              delay={0.2} // Slight delay for the heading
            />
            <ScrollRevealWrapper direction="up" distance="30px" delay={0.4}> {/* Paragraph fades up */}
              <p className="text-light-text leading-relaxed whitespace-pre-line">
                {WHY_JAPANESE_WINE_INFO.text}
              </p>
            </ScrollRevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};