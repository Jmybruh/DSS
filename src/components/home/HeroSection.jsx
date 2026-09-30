import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#008B8B] via-[#17A2B8] to-[#5B4FCF]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M12.5 0 L12.5 12.5 M0 12.5 L12.5 12.5 M12.5 12.5 L25 12.5 M12.5 12.5 L12.5 25" 
                  stroke="#FFC107" strokeWidth="0.3" fill="none"/>
            <circle cx="12.5" cy="12.5" r="1.5" fill="#FFC107"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#FFC107]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5B4FCF]/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">24/7 Security Monitoring</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.headline.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`inline-block mr-3 ${i === t.hero.headline.split(' ').length - 1 ? 'text-[#FFC107]' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="bg-[#FFC107] hover:bg-[#FFD700] text-[#1a1a2e] font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-[#FFC107]/30 transition-all duration-300 hover:scale-105 group"
                >
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Services')}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#FFC107] bg-white/10 text-white hover:bg-white/20 hover:border-[#FFD700] font-semibold px-8 py-6 text-lg transition-all duration-300"
                >
                  {t.hero.cta2}
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FFC107]" />
                <span className="text-white/70 text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B4FCF] to-[#4B0082] border-2 border-[#008B8B] flex items-center justify-center text-xs text-white font-bold"
                    >
                      {i}K
                    </div>
                  ))}
                </div>
                <span className="text-white/70 text-sm">Trusted Clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Shield Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFC107]/30 to-[#5B4FCF]/30 blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main Shield Container */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Rotating Ring */}
                <motion.div
                  className="absolute w-full h-full rounded-full border-4 border-dashed border-[#FFC107]/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Circle */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#5B4FCF] to-[#4B0082] flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#5B4FCF]/80 to-[#4B0082]/80 backdrop-blur-sm" />
                  
                  {/* Logo */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69524d7a768021f10011ca14/ba3b2d486_pictoart_1767861465359.png"
                      alt="DSS Logo"
                      loading="eager"
                      className="w-64 h-64 rounded-full object-cover shadow-2xl ring-8 ring-white/20"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-[#FFC107] rounded-full shadow-lg shadow-[#FFC107]/50"
                    style={{
                      top: `${20 + Math.sin(i * Math.PI / 2) * 35}%`,
                      left: `${50 + Math.cos(i * Math.PI / 2) * 45}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#FFC107] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}