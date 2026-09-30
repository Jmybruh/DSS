import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { Shield, Phone, Mail, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const serviceLinks = [
    { name: t.services.cctv.title, path: 'Services' },
    { name: t.services.access.title, path: 'Services' },
    { name: t.services.alarm.title, path: 'Services' },
    { name: t.services.fire.title, path: 'Services' },
  ];

  const quickLinks = [
    { name: t.nav.home, path: 'Home' },
    { name: t.nav.services, path: 'Services' },
    { name: t.nav.about, path: 'About' },
    { name: t.nav.contact, path: 'Contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="circuit-footer" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25 0 L25 25 M0 25 L25 25 M25 25 L50 25 M25 25 L25 50" stroke="#FFC107" strokeWidth="0.5" fill="none"/>
            <circle cx="25" cy="25" r="3" fill="#FFC107"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-footer)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/logo.png"
                alt="DSS - Digital Security Systems"
                loading="eager"
                className="h-20 w-20 rounded-full object-cover shadow-xl ring-4 ring-white/10"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#FFC107] flex items-center justify-center group transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#1a1a2e] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={createPageUrl(link.path)}
                    className="text-gray-400 hover:text-[#FFC107] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FCF] group-hover:bg-[#FFC107] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={createPageUrl(link.path)}
                    className="text-gray-400 hover:text-[#FFC107] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FCF] group-hover:bg-[#FFC107] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5B4FCF]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#FFC107]" />
                </div>
                <p className="text-gray-400 text-sm">6973847867</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5B4FCF]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#FFC107]" />
                </div>
                <p className="text-gray-400 text-sm">info@dssgreece.gr</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DSS - Digital Security Systems. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-[#FFC107] text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FFC107] text-sm transition-colors">
                {t.footer.terms}
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4 text-green-500" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}