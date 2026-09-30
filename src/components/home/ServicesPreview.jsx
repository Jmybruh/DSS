import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { Camera, KeyRound, Bell, Flame, Phone, Wifi, Eye, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceIcons = {
  cctv: Camera,
  access: KeyRound,
  alarm: Bell,
  fire: Flame,
  intercom: Phone,
  network: Wifi,
  monitoring: Eye,
  maintenance: Wrench,
};

export default function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    { key: 'cctv', ...t.services.cctv },
    { key: 'access', ...t.services.access },
    { key: 'alarm', ...t.services.alarm },
    { key: 'fire', ...t.services.fire },
    { key: 'intercom', ...t.services.intercom },
    { key: 'network', ...t.services.network },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0 L0 0 0 20" fill="none" stroke="#5B4FCF" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#17A2B8]/10 text-[#17A2B8] rounded-full text-sm font-semibold mb-4">
            {t.services.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.services.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#17A2B8] to-[#5B4FCF] mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.key];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-[#17A2B8]/10 transition-all duration-500 h-full border border-gray-100 hover:border-[#FFC107]/30 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#17A2B8]/5 to-[#5B4FCF]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#17A2B8] to-[#5B4FCF] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center opacity-100 transition-all duration-300 shadow-lg">
                      <ArrowRight className="w-4 h-4 text-[#1a1a2e]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#17A2B8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#17A2B8] to-[#5B4FCF] transform scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl('Services')}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#17A2B8] to-[#5B4FCF] hover:from-[#008B8B] hover:to-[#4B0082] text-white font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {t.services.viewAll}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}