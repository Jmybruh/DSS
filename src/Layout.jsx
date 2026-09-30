import React from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export default function Layout({ children }) {
  return (
    <LanguageProvider>
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
          
          ::selection {
            background-color: #FFC107;
            color: #1a1a2e;
          }
        `}</style>
        
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        </div>
    </LanguageProvider>
  );
}