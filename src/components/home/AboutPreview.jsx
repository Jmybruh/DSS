import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPreview() {
  const { t, language } = useLanguage();

  const checkpoints = language === 'en' 
    ? ['15+ Years of Excellence', 'Certified Security Experts', 'Cutting-Edge Technology', 'Customized Solutions']
    : ['15+ Χρόνια Αριστείας', 'Πιστοποιημένοι Ειδικοί', 'Τεχνολογία Αιχμής', 'Εξατομικευμένες Λύσεις'];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#17A2B8]/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
                  alt="DSS Security Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#17A2B8] to-[#5B4FCF] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">2500+</p>
                    <p className="text-gray-500 text-sm">{t.stats.clients}</p>
                  </div>
                </div>
              </motion.div>

              {/* Accent Shape */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFC107]/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#5B4FCF]/10 text-[#5B4FCF] rounded-full text-sm font-semibold mb-4">
              {t.about.subtitle}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {checkpoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#17A2B8]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#17A2B8]" />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <Link to={createPageUrl('About')}>
              <Button
                size="lg"
                className="bg-[#5B4FCF] hover:bg-[#4B0082] text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {t.about.learnMore}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}