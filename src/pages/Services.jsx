import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Camera, KeyRound, Bell, Flame, Phone, Wifi, Eye, Wrench, 
  ArrowRight, CheckCircle, Shield 
} from 'lucide-react';
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

const serviceFeatures = {
  en: {
    cctv: ['HD & 4K Resolution', 'Night Vision', 'AI Analytics', 'Remote Access', 'Cloud Storage', 'Motion Detection'],
    access: ['Biometric Readers', 'RFID Cards', 'Mobile Access', 'Visitor Management', 'Time Attendance', 'Anti-Passback'],
    alarm: ['Wireless Sensors', 'Pet-Immune Motion', 'Glass Break Detection', 'Panic Buttons', 'Siren Integration', 'SMS Alerts'],
    fire: ['Smoke Detectors', 'Heat Sensors', 'Manual Call Points', 'Control Panels', 'Sprinkler Integration', 'Evacuation Systems'],
    intercom: ['Video Door Stations', 'Indoor Monitors', 'Mobile App', 'Multi-Unit Support', 'Gate Integration', 'Cloud Services'],
    network: ['Firewall Protection', 'VPN Solutions', 'Intrusion Detection', 'Vulnerability Assessment', 'Security Audits', 'Training'],
    monitoring: ['24/7 Control Center', 'Rapid Response', 'Video Verification', 'Guard Dispatch', 'Emergency Services', 'Reporting'],
    maintenance: ['Regular Inspections', 'Software Updates', 'Hardware Repairs', 'System Upgrades', 'Priority Support', 'Documentation'],
  },
  el: {
    cctv: ['HD & 4K Ανάλυση', 'Νυχτερινή Όραση', 'AI Αναλυτικά', 'Απομακρυσμένη Πρόσβαση', 'Cloud Αποθήκευση', 'Ανίχνευση Κίνησης'],
    access: ['Βιομετρικοί Αναγνώστες', 'RFID Κάρτες', 'Πρόσβαση με Κινητό', 'Διαχείριση Επισκεπτών', 'Ωράριο Παρουσίας', 'Anti-Passback'],
    alarm: ['Ασύρματοι Αισθητήρες', 'Ανίχνευση Κίνησης', 'Ανίχνευση Θραύσης Γυαλιού', 'Κουμπιά Πανικού', 'Σειρήνες', 'SMS Ειδοποιήσεις'],
    fire: ['Ανιχνευτές Καπνού', 'Αισθητήρες Θερμότητας', 'Μπουτόν Αναγγελίας', 'Πίνακες Ελέγχου', 'Σύστημα Καταιονισμού', 'Συστήματα Εκκένωσης'],
    intercom: ['Θυροτηλεοράσεις', 'Εσωτερικές Οθόνες', 'Εφαρμογή Κινητού', 'Πολυκατοικίες', 'Ενσωμάτωση Πύλης', 'Cloud Υπηρεσίες'],
    network: ['Firewall', 'VPN Λύσεις', 'Ανίχνευση Εισβολής', 'Αξιολόγηση Ευπαθειών', 'Έλεγχοι Ασφαλείας', 'Εκπαίδευση'],
    monitoring: ['Κέντρο Ελέγχου 24/7', 'Ταχεία Ανταπόκριση', 'Επαλήθευση Βίντεο', 'Αποστολή Φύλακα', 'Υπηρεσίες Έκτακτης Ανάγκης', 'Αναφορές'],
    maintenance: ['Τακτικές Επιθεωρήσεις', 'Ενημερώσεις Λογισμικού', 'Επισκευές', 'Αναβαθμίσεις', 'Προτεραιότητα Υποστήριξης', 'Τεκμηρίωση'],
  }
};

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    { key: 'cctv', ...t.services.cctv },
    { key: 'access', ...t.services.access },
    { key: 'alarm', ...t.services.alarm },
    { key: 'fire', ...t.services.fire },
    { key: 'intercom', ...t.services.intercom },
    { key: 'network', ...t.services.network },
    { key: 'monitoring', ...t.services.monitoring },
    { key: 'maintenance', ...t.services.maintenance },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#008B8B] via-[#17A2B8] to-[#5B4FCF] overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="services-circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M12.5 0 L12.5 12.5 M0 12.5 L12.5 12.5 M12.5 12.5 L25 12.5 M12.5 12.5 L12.5 25" 
                    stroke="#FFC107" strokeWidth="0.3" fill="none"/>
              <circle cx="12.5" cy="12.5" r="1.5" fill="#FFC107"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#services-circuit)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-[#FFC107]" />
              <span className="text-white/90 text-sm font-medium">
                {t.services.subtitle}
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.servicesPage.heroTitle}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.servicesPage.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.key];
              const features = serviceFeatures[language][service.key];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#17A2B8] to-[#5B4FCF] flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#17A2B8]/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3.5 h-3.5 text-[#17A2B8]" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link to={createPageUrl('Contact')}>
                      <Button className="bg-[#FFC107] hover:bg-[#FFD700] text-[#1a1a2e] font-semibold group">
                        {t.nav.getQuote}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={`https://images.unsplash.com/photo-${
                            service.key === 'cctv' ? '1557597774-9d273605dfa9' :
                            service.key === 'access' ? '1558618666-fcd25c85cd64' :
                            service.key === 'alarm' ? '1563986768-06e40bd04cde' :
                            service.key === 'fire' ? '1558449028-b53a39d100fc' :
                            service.key === 'intercom' ? '1558346490-a72e53ae9bba' :
                            service.key === 'network' ? '1558494949-ef010cbdcc31' :
                            service.key === 'monitoring' ? '1551288049-bebda4e38f71' :
                            '1581092160562-40aa08e78837'
                          }?w=600`}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent" />
                      </div>
                      
                      {/* Decorative Element */}
                      <div className={`absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-br from-[#17A2B8]/20 to-[#5B4FCF]/20 ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#5B4FCF] via-[#4B0082] to-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="cta-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="2" fill="#FFC107"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#cta-pattern)"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.servicesPage.ctaTitle}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t.servicesPage.ctaDescription}
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-[#FFC107] hover:bg-[#FFD700] text-[#1a1a2e] font-bold px-10 py-7 text-lg shadow-xl hover:shadow-[#FFC107]/30 transition-all duration-300 hover:scale-105 group"
              >
                {t.servicesPage.ctaButton}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}