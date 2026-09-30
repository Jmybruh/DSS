import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Shield, Target, Eye, Award, Lightbulb, 
  Heart, CheckCircle, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    { key: 'reliability', icon: Shield, color: '#17A2B8' },
    { key: 'innovation', icon: Lightbulb, color: '#FFC107' },
    { key: 'service', icon: Heart, color: '#FF6B6B' },
    { key: 'quality', icon: Award, color: '#5B4FCF' },
  ];

  const teamStats = language === 'en' 
    ? [
        { value: '50+', label: 'Team Members' },
        { value: '25+', label: 'Engineers' },
        { value: '10+', label: 'Certifications' },
        { value: '100%', label: 'Commitment' },
      ]
    : [
        { value: '50+', label: 'Μέλη Ομάδας' },
        { value: '25+', label: 'Μηχανικοί' },
        { value: '10+', label: 'Πιστοποιήσεις' },
        { value: '100%', label: 'Δέσμευση' },
      ];

  const certifications = [
    'ISO 9001:2015', 'ISO 27001', 'CE Certified', 'UL Listed', 'EN 50131', 'GDPR Compliant'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#008B8B] via-[#17A2B8] to-[#5B4FCF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="about-circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M12.5 0 L12.5 12.5 M0 12.5 L12.5 12.5 M12.5 12.5 L25 12.5 M12.5 12.5 L12.5 25" 
                    stroke="#FFC107" strokeWidth="0.3" fill="none"/>
              <circle cx="12.5" cy="12.5" r="1.5" fill="#FFC107"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#about-circuit)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.aboutPage.heroTitle}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.aboutPage.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#17A2B8]/5 to-[#5B4FCF]/5 rounded-3xl p-10 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#17A2B8] to-[#5B4FCF] flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.aboutPage.mission.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.aboutPage.mission.description}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#FFC107]/5 to-[#17A2B8]/5 rounded-3xl p-10 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFC107] to-[#FFD700] flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-8 h-8 text-[#1a1a2e]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.aboutPage.vision.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.aboutPage.vision.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="DSS Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent" />
              </div>
              
              {/* Year Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FFC107] to-[#FFD700] rounded-2xl p-6 shadow-xl"
              >
                <p className="text-4xl font-bold text-[#1a1a2e]">2002</p>
                <p className="text-[#1a1a2e]/80 text-sm font-medium">Founded</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#5B4FCF]/10 text-[#5B4FCF] rounded-full text-sm font-semibold mb-4">
                Since 2002
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.aboutPage.history.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.aboutPage.history.description}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.aboutPage.history.description2}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.aboutPage.values.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFC107] to-[#5B4FCF] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const content = t.aboutPage.values[value.key];
              
              return (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FFC107]/30 transition-all duration-500 h-full text-center">
                    <div 
                      className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${value.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: value.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {content.title}
                    </h3>
                    <p className="text-gray-400">
                      {content.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#17A2B8]/10 text-[#17A2B8] rounded-full text-sm font-semibold mb-4">
                Expert Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.aboutPage.team.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t.aboutPage.team.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-[#5B4FCF]">{stat.value}</p>
                    <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                  alt="DSS Experts"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.aboutPage.certifications.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#17A2B8] to-[#5B4FCF] mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#FFC107]/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#17A2B8]" />
                  <span className="font-semibold text-gray-900">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#5B4FCF] via-[#4B0082] to-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-[#FFC107] hover:bg-[#FFD700] text-[#1a1a2e] font-bold px-10 py-7 text-lg shadow-xl hover:shadow-[#FFC107]/30 transition-all duration-300 hover:scale-105 group"
              >
                {t.cta.button}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}