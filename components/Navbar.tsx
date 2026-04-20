
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex flex-row-reverse md:flex-row items-center justify-between">
          {/* Left: CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://chat.whatsapp.com/CZxdM5QHuOhI8iyQMgCEVn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-black text-sm transition-all hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              קהילת הווצאפ
            </a>
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
                className={`font-black text-sm hover:text-gold transition-colors relative group ${textColorClass} ${currentPage === link.href ? 'text-gold' : ''}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 right-0 h-0.5 bg-gold transition-all ${currentPage === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
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
                  className={`text-3xl font-bold transition-colors ${currentPage === link.href ? 'text-gold' : 'text-white hover:text-gold'}`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://chat.whatsapp.com/CZxdM5QHuOhI8iyQMgCEVn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-[#25D366] text-white py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-3"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                קהילת הווצאפ
              </a>
              <button
                onClick={(e) => { setMobileMenuOpen(false); handleLinkClick(e, 'contact-page'); }}
                className="bg-gold text-navy py-4 rounded-xl text-xl font-bold"
              >
                לשיחת ייעוץ חינם
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
