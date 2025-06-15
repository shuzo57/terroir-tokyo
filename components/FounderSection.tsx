
import React from 'react';
import { FOUNDER_INFO_DATA } from '../constants';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { InstagramIcon, TwitterIcon, LinkedInIcon } from './SocialIcons';

export const FounderSection: React.FC = () => {
  const { name, title, portraitUrl, bio, story, values, sns } = FOUNDER_INFO_DATA;

  return (
    <section id="founder" className="pt-0 pb-10 bg-bg"> {/* Changed pt-20 to pt-0 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg pt-12 md:pt-16"> {/* Added padding here to compensate for section pt-0 */}
        {/* The main heading is now in FounderTeaserSection. This section dives straight into content. */}
        {/* Consider a sub-heading or just let the content flow after the teaser. */}
        {/* For now, no main animated heading here to avoid repetition with teaser. */}

        <div className="grid md:grid-cols-3 gap-8 items-start"> {/* Changed gap-12 to gap-8 */}
          <ScrollRevealWrapper direction="left" distance="50px" className="md:col-span-1">
            <div className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mx-auto max-w-xs md:max-w-none">
              <img
                src={portraitUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-primary mt-6 mb-1 text-center">{name}</h3>
            <p className="text-light-text text-center text-sm">{title}</p>
            
            {(sns.instagram || sns.twitter || sns.linkedin) && (
                <div className="flex justify-center space-x-5 mt-6">
                    {sns.instagram && (
                        <a href={sns.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text hover:text-accent transition-colors">
                            <InstagramIcon className="w-7 h-7" />
                        </a>
                    )}
                    {sns.twitter && (
                        <a href={sns.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-text hover:text-accent transition-colors">
                            <TwitterIcon className="w-7 h-7" />
                        </a>
                    )}
                    {sns.linkedin && (
                        <a href={sns.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text hover:text-accent transition-colors">
                            <LinkedInIcon className="w-7 h-7" />
                        </a>
                    )}
                </div>
            )}
          </ScrollRevealWrapper>

          <div className="md:col-span-2">
            <ScrollRevealWrapper direction="right" distance="50px" delay={0.1}>
              <AnimatedHeading text="創業ストーリー" as="h4" className="text-3xl font-serif font-bold mb-4 text-primary" />
              <p className="text-light-text leading-relaxed mb-8 whitespace-pre-line">{story}</p>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper direction="right" distance="50px" delay={0.2}>
              <AnimatedHeading text="経歴" as="h4" className="text-3xl font-serif font-bold mb-4 mt-8 text-primary" />
              <ul className="list-disc list-outside ml-5 space-y-2 text-light-text">
                {bio.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ScrollRevealWrapper>
            
            <ScrollRevealWrapper direction="right" distance="50px" delay={0.3}>
              <AnimatedHeading text="大切にしている価値観" as="h4" className="text-3xl font-serif font-bold mb-4 mt-8 text-primary" />
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckmarkIcon className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-light-text">{value}</span>
                  </li>
                ))}
              </ul>
            </ScrollRevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckmarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);