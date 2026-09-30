import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B4FCF] via-[#4B0082] to-[#1a1a2e]" />
      
      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="cta-circuit" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M15 0 L15 15 M0 15 L15 15 M15 15 L30 15 M15 15 L15 30" 
                  stroke="#FFC107" strokeWidth="0.5" fill="none"/>
            <circle cx="15" cy="15" r="2" fill="#FFC107"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-circuit)"/>
        </svg>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFC107]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#17A2B8]/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-[#FFC107] hover:bg-[#FFD700] text-[#1a1a2e] font-bold px-10 py-7 text-lg shadow-xl hover:shadow-[#FFC107]/30 transition-all duration-300 hover:scale-105 group"
              >
                {t.cta.button}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="tel:+306973847867">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#FFC107] bg-white/10 text-white hover:bg-white/20 hover:border-[#FFD700] font-semibold px-10 py-7 text-lg transition-all duration-300 group"
              >
                <Phone className="mr-2 w-5 h-5 text-[#FFC107]" />
                6973847867
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}