
import React from 'react';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';
import { AnimatedHeading } from './AnimatedHeading';
// GSAP is not needed here anymore as the button is removed.
// import { gsap } from 'gsap'; 

export const FounderTeaserSection: React.FC = () => {

  // scrollToFounder function is no longer needed.
  // const scrollToFounder = (e: React.MouseEvent<HTMLButtonElement>) => { ... };

  return (
    <section id="founder-teaser" className="pt-20 pb-0 bg-bg"> {/* Changed py-20 to pt-20 pb-0 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg text-center">
        <AnimatedHeading
          text="創業者について"
          as="h2"
          className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-primary"
        />
        {/* Descriptive paragraph and button removed */}
        {/* 
        <ScrollRevealWrapper delay={0.2} direction="up" distance="30px">
          <p className="text-lg text-light-text max-w-xl mx-auto mb-8">
            TERROIR TOKYOを率いる創業者の情熱とビジョンをご紹介します。
            この下に続くセクションで、その詳細をご覧ください。
          </p>
          <button
            onClick={scrollToFounder}
            className="bg-accent text-white font-semibold py-3 px-8 rounded-lg
                       hover:bg-opacity-90 transform hover:scale-105 transition-all 
                       duration-300 ease-out shadow-md hover:shadow-lg"
          >
            詳しく見る
          </button>
        </ScrollRevealWrapper> 
        */}
      </div>
    </section>
  );
};