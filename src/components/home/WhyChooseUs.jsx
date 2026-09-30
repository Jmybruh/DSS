import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Settings } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    { key: 'experience', icon: Award, color: '#FFC107' },
    { key: 'certified', icon: Users, color: '#17A2B8' },
    { key: 'support', icon: Clock, color: '#5B4FCF' },
    { key: 'custom', icon: Settings, color: '#FF6B6B' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#1a1a2e] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5B4FCF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#17A2B8]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FFC107]/10 text-[#FFC107] rounded-full text-sm font-semibold mb-4">
            {t.whyUs.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.whyUs.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFC107] to-[#5B4FCF] mx-auto rounded-full" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const content = t.whyUs[feature.key];
            
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FFC107]/30 transition-all duration-500 h-full overflow-hidden">
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at 50% 0%, ${feature.color}15 0%, transparent 70%)` 
                    }}
                  />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: feature.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {content.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Bottom Line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: feature.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}