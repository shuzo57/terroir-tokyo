import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, SITE_TITLE } from '../constants';
import { NavLink } from '../types';
import { gsap } from 'gsap';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    gsap.fromTo(headerRef.current, { y: -100, autoAlpha:0 }, { y: 0, autoAlpha:1, duration: 0.7, ease: 'power2.out', delay: 0.5});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
      gsap.to(window, { duration: 1, scrollTo: { y: targetElement, offsetY: headerHeight + 20 }, ease: 'power2.inOut' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                 ${isScrolled || isMenuOpen ? 'bg-bg/90 backdrop-blur-md shadow-md border-b border-gray-200/50' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-3xl font-serif font-semibold text-primary hover:opacity-80 transition-opacity"
            aria-label={`${SITE_TITLE} - Home`}
          >
            {SITE_TITLE}
          </a>

          {/* Desktop Navigation - Added ml-auto to push to the right */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 ml-auto">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-text hover:text-primary transition-colors duration-200 relative group font-medium text-sm"
              >
                {link.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button Container */}
          <div className="flex items-center md:hidden"> {/* Ensures this container is only for mobile, allowing nav ml-auto to work */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-3 p-2 rounded-md text-text hover:bg-gray-200/50 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg pb-4 border-t border-gray-200/50">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg text-text hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// SVG Icons
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);