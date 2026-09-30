import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, Shield, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE_DISPLAY = '697 384 7867';
const PHONE_HREF = 'tel:+306973847867';
const EMAIL = 'info@dssgreece.gr';

export default function Contact() {
  const { t, language } = useLanguage();

  const contactInfo = [
    { icon: Phone, label: t.contact.info.phone, value: PHONE_DISPLAY, href: PHONE_HREF },
    { icon: Mail, label: t.contact.info.email, value: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#008B8B] via-[#17A2B8] to-[#5B4FCF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="contact-circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M12.5 0 L12.5 12.5 M0 12.5 L12.5 12.5 M12.5 12.5 L25 12.5 M12.5 12.5 L12.5 25" 
                    stroke="#FFC107" strokeWidth="0.3" fill="none"/>
              <circle cx="12.5" cy="12.5" r="1.5" fill="#FFC107"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#contact-circuit)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MessageSquare className="w-4 h-4 text-[#FFC107]" />
              <span className="text-white/90 text-sm font-medium">
                {t.contact.info.emergency}
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6 order-last lg:order-first"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#FFC107]/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#17A2B8] to-[#5B4FCF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-gray-900 font-semibold hover:text-[#17A2B8] transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B4FCF] to-[#4B0082] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#FFC107]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.contact.call.title}</h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t.contact.call.description}
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-[#008B8B] via-[#17A2B8] to-[#5B4FCF] p-6 sm:p-8 text-center mb-8">
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2">
                    {t.contact.call.label}
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide whitespace-nowrap mb-6 hover:text-[#FFC107] transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#FFC107] hover:bg-[#FFD700] text-gray-900 font-semibold px-10 py-6 text-lg shadow-lg group"
                  >
                    <a href={PHONE_HREF}>
                      <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                      {t.contact.call.button}
                    </a>
                  </Button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.contact.call.stepsTitle}</h3>
                <ul className="space-y-3 mb-8">
                  {t.contact.call.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#17A2B8] flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-500 border-t border-gray-100 pt-6">
                  {t.contact.call.emailPrefix}{' '}
                  <a href={`mailto:${EMAIL}`} className="font-medium text-[#17A2B8] hover:underline">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#17A2B8]/20 to-[#5B4FCF]/20 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#5B4FCF] mx-auto mb-4" />
            <p className="text-gray-700 font-medium">
              {language === 'en' ? 'Athens, Greece' : 'Αθήνα, Ελλάδα'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
