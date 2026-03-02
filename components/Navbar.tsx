
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  // Logic to determine text color based on page and scroll status
  // Home page is light (offwhite), Subpages have dark hero (navy)
  const isDarkHero = currentPage !== 'home';
  const textColorClass = isScrolled
    ? 'text-navy'
    : (isDarkHero ? 'text-white' : 'text-navy');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-row-reverse md:flex-row items-center justify-between">
        {/* Left: CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={(e) => handleLinkClick(e, 'contact-page')}
            className="bg-gold text-navy px-8 py-2.5 rounded-full font-black text-sm transition-all hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <PhoneCall size={16} />
            לשיחת ייעוץ חינם
          </button>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-black text-sm hover:text-gold transition-colors relative group ${textColorClass}`}
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Logo & Hamburger on Mobile */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center group">
            <Logo className="w-16 h-16 md:w-24 md:h-24 group-hover:scale-110 transition-transform" />
          </button>
          <div
            className={`md:hidden cursor-pointer ${textColorClass}`}
            onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(true); }}
          >
            <Menu size={32} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-navy z-[110] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
              <div className="flex items-center">
                <Logo className="w-14 h-14" />
              </div>
            </div>

            <div className="flex flex-col gap-8 text-center mt-10">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => { setMobileMenuOpen(false); handleLinkClick(e, link.href); }}
                  className="text-3xl font-bold text-white hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={(e) => { setMobileMenuOpen(false); handleLinkClick(e, 'contact-page'); }}
                className="mt-8 bg-gold text-navy py-4 rounded-xl text-xl font-bold"
              >
                לשיחת ייעוץ חינם
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
