import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, CheckCircle, 
  Shield, MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

// Public key from web3forms.com; submissions are emailed to the address it was created for.
const WEB3FORMS_ACCESS_KEY = '6827dbbb-a054-46fd-b3d7-07aed57a4452';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [botcheck, setBotcheck] = useState(false);

  const services = language === 'en' 
    ? [
        'CCTV & Surveillance Systems',
        'Access Control Systems',
        'Alarm & Intrusion Detection',
        'Fire Detection Systems',
        'Intercom Systems',
        'Network Security Solutions',
        '24/7 Monitoring Services',
        'System Maintenance & Support',
        'Other'
      ]
    : [
        'Συστήματα CCTV & Επιτήρησης',
        'Συστήματα Ελέγχου Πρόσβασης',
        'Συναγερμοί & Ανίχνευση Εισβολής',
        'Συστήματα Πυρανίχνευσης',
        'Συστήματα Ενδοεπικοινωνίας',
        'Λύσεις Ασφάλειας Δικτύου',
        'Υπηρεσίες Παρακολούθησης 24/7',
        'Συντήρηση & Υποστήριξη Συστημάτων',
        'Άλλο'
      ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Νέο μήνυμα από το site: ${formData.name}`,
          from_name: 'DSS Security Solutions Website',
          botcheck: botcheck,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: t.contact.info.phone, value: '6973847867', href: 'tel:+306973847867' },
    { icon: Mail, label: t.contact.info.email, value: 'info@dssgreece.gr', href: 'mailto:info@dssgreece.gr' },
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
              className="lg:col-span-1 space-y-6"
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
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-gray-900 font-semibold hover:text-[#17A2B8] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}


            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {language === 'en' ? 'Message Sent Successfully!' : 'Το Μήνυμα Στάλθηκε Επιτυχώς!'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'We will get back to you within 24 hours.' 
                        : 'Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.'}
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B4FCF] to-[#4B0082] flex items-center justify-center">
                        <Shield className="w-6 h-6 text-[#FFC107]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{t.contact.subtitle}</h2>
                        <p className="text-gray-500 text-sm">{t.contact.description}</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot: hidden from people, bots that tick it are rejected by Web3Forms */}
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                        checked={botcheck}
                        onChange={(e) => setBotcheck(e.target.checked)}
                      />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.contact.form.name} *
                          </label>
                          <Input
                            required
                            placeholder={t.contact.form.name}
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className="h-12 border-gray-200 focus:border-[#17A2B8] focus:ring-[#17A2B8]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.contact.form.email} *
                          </label>
                          <Input
                            required
                            type="email"
                            placeholder={t.contact.form.email}
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="h-12 border-gray-200 focus:border-[#17A2B8] focus:ring-[#17A2B8]"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.contact.form.phone}
                          </label>
                          <Input
                            type="tel"
                            placeholder={t.contact.form.phone}
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="h-12 border-gray-200 focus:border-[#17A2B8] focus:ring-[#17A2B8]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.contact.form.company}
                          </label>
                          <Input
                            placeholder={t.contact.form.company}
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            className="h-12 border-gray-200 focus:border-[#17A2B8] focus:ring-[#17A2B8]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.service}
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleChange('service', value)}
                        >
                          <SelectTrigger className="h-12 border-gray-200">
                            <SelectValue placeholder={t.contact.form.selectService} />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.message} *
                        </label>
                        <Textarea
                          required
                          placeholder={t.contact.form.message}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className="min-h-[150px] border-gray-200 focus:border-[#17A2B8] focus:ring-[#17A2B8]"
                        />
                      </div>

                      {submitError && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                          {t.contact.form.error}
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#17A2B8] to-[#5B4FCF] hover:from-[#008B8B] hover:to-[#4B0082] text-white font-semibold py-6 text-lg shadow-lg transition-all duration-300 group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            {t.contact.form.sending}
                          </>
                        ) : (
                          <>
                            {t.contact.form.submit}
                            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
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
            <p className="text-gray-500 text-sm">123 Security Ave, 10552</p>
          </div>
        </div>
      </section>
    </div>
  );
}