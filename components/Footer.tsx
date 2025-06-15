import React from 'react';
import { SITE_TITLE, PRIVACY_POLICY_URL, SOCIAL_LINKS } from '../constants';
import { InstagramIcon, TwitterIcon, LinkedInIcon } from './SocialIcons'; // Assuming these are created

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-100 border-t border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg text-center">
        <p className="text-sm text-light-text">
          &copy; {currentYear} {SITE_TITLE}. All rights reserved.
        </p>
        <nav className="mt-4 mb-6">
          <a 
            href={PRIVACY_POLICY_URL} 
            className="text-sm text-light-text hover:text-primary transition-colors"
            // onClick={(e) => e.preventDefault()} // If it's a placeholder
          >
            プライバシーポリシー
          </a>
        </nav>
        <div className="flex justify-center space-x-6">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-light-text hover:text-accent transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-light-text hover:text-accent transition-colors">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-text hover:text-accent transition-colors">
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          This site is a fictional concept for demonstration purposes.
        </p>
      </div>
    </footer>
  );
};
