import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: 'Home' },
    { name: t.nav.services, path: 'Services' },
    { name: t.nav.about, path: 'About' },
    { name: t.nav.contact, path: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#008B8B]/95 backdrop-blur-lg shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center group">
            <img 
              src="/logo.png"
              alt="DSS - Digital Security Systems"
              loading="eager"
              className="h-14 w-14 rounded-full object-cover shadow-lg ring-2 ring-white/20 group-hover:ring-[#FFC107]/50 transition-all duration-300 group-hover:scale-105"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={createPageUrl(link.path)}
                className="relative px-4 py-2 text-white/90 font-medium hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFC107] group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFC107]/50 transition-all duration-300 group"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-[#FFC107]" />
              <span className="text-sm font-semibold text-white group-hover:text-[#FFC107] transition-colors">
                {language === 'en' ? 'ΕΛ' : 'EN'}
              </span>
            </button>

            {/* CTA Button - Desktop */}
            <Link to={createPageUrl('Contact')} className="hidden md:block">
              <Button className="bg-[#FFC107] hover:bg-[#FFD700] text-[#1a1a2e] font-semibold px-6 shadow-lg hover:shadow-[#FFC107]/30 transition-all duration-300 hover:scale-105">
                {t.nav.getQuote}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#008B8B]/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={createPageUrl(link.path)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 hover:text-[#FFC107] transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  to={createPageUrl('Contact')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-[#FFC107] hover:bg-[#FFD700] text-[#1a1a2e] font-semibold py-3">
                    {t.nav.getQuote}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}