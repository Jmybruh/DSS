import React from 'react';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      {/* Honour the OS "reduce motion" setting for every framer-motion animation */}
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          
          :root {
            --primary-teal: #17A2B8;
            --primary-teal-dark: #008B8B;
            --primary-purple: #5B4FCF;
            --primary-purple-dark: #4B0082;
            --accent-yellow: #FFC107;
            --accent-yellow-light: #FFD700;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }

          ::selection {
            background-color: #FFC107;
            color: #1a1a2e;
          }
        `}</style>
        
        <SkipLink />

        <Navbar />

        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>

        <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}
function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-[#FFC107] focus:text-[#1a1a2e] focus:font-semibold focus:shadow-xl"
    >
      {t.nav.skipToContent}
    </a>
  );
}
