import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      getQuote: 'Get a Quote'
    },
    hero: {
      headline: 'Protecting What Matters Most',
      subheadline: 'Advanced Digital Security Solutions for Modern Businesses',
      cta1: 'Get a Quote',
      cta2: 'Our Services'
    },
    about: {
      title: 'About DSS',
      subtitle: 'Your Trusted Security Partner',
      description: 'DSS (Digital Security Systems) is a leading provider of comprehensive security solutions, delivering cutting-edge technology and unmatched expertise to protect businesses across Greece and beyond. With over 15 years of experience, we combine innovation with reliability to safeguard what matters most to you.',
      learnMore: 'Learn More About Us'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Security Solutions',
      viewAll: 'View All Services',
      cctv: {
        title: 'CCTV & Surveillance',
        description: 'State-of-the-art video surveillance systems with AI-powered analytics and remote monitoring capabilities.'
      },
      access: {
        title: 'Access Control',
        description: 'Advanced biometric and card-based access control systems for complete premises security.'
      },
      alarm: {
        title: 'Alarm Systems',
        description: 'Intelligent intrusion detection with instant alerts and rapid response coordination.'
      },
      fire: {
        title: 'Fire Detection',
        description: 'Early warning fire detection systems compliant with all safety regulations.'
      },
      intercom: {
        title: 'Intercom Systems',
        description: 'Modern video intercom solutions for residential and commercial properties.'
      },
      network: {
        title: 'Network Security',
        description: 'Comprehensive cybersecurity solutions to protect your digital infrastructure.'
      },
      monitoring: {
        title: '24/7 Monitoring',
        description: 'Round-the-clock surveillance and response services from our control center.'
      },
      maintenance: {
        title: 'Maintenance & Support',
        description: 'Regular system maintenance and technical support to ensure optimal performance.'
      }
    },
    whyUs: {
      title: 'Why Choose DSS',
      subtitle: 'Excellence in Every Detail',
      experience: {
        title: '15+ Years Experience',
        description: 'Proven track record of delivering security excellence across industries.'
      },
      certified: {
        title: 'Certified Experts',
        description: 'Our team holds industry-leading certifications and continuous training.'
      },
      support: {
        title: '24/7 Support',
        description: 'Round-the-clock technical support and emergency response services.'
      },
      custom: {
        title: 'Custom Solutions',
        description: 'Tailored security systems designed for your specific requirements.'
      }
    },
    stats: {
      clients: 'Happy Clients',
      projects: 'Projects Completed',
      years: 'Years Experience',
      support: 'Support Available'
    },
    cta: {
      title: 'Ready to Secure Your Business?',
      subtitle: 'Get a free security assessment from our experts today.',
      button: 'Schedule Free Consultation'
    },
    footer: {
      description: 'Leading provider of advanced digital security solutions. Protecting businesses with innovation and reliability.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      description: 'Ready to enhance your security? Our team is here to help you find the perfect solution.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name',
        service: 'Service Interest',
        selectService: 'Select a service',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...'
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Business Hours',
        hoursValue: 'Mon - Fri: 9:00 - 18:00',
        emergency: '24/7 Emergency Support Available'
      }
    },
    aboutPage: {
      heroTitle: 'About Digital Security Systems',
      heroSubtitle: 'Your Partner in Protection Since 2002',
      mission: {
        title: 'Our Mission',
        description: 'To provide innovative, reliable, and comprehensive security solutions that empower businesses and individuals to operate with confidence and peace of mind.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading security solutions provider in Southeast Europe, recognized for excellence, innovation, and unwavering commitment to customer safety.'
      },
      history: {
        title: 'Our Story',
        description: 'Founded in 2002, DSS began as a small team of security enthusiasts with a vision to revolutionize the security industry in Greece. Over the years, we have grown into a trusted partner for hundreds of businesses, from small enterprises to large corporations.',
        description2: 'Our journey has been marked by continuous innovation, strategic partnerships with global technology leaders, and an unwavering commitment to customer satisfaction. Today, DSS stands as a beacon of excellence in the security industry.'
      },
      values: {
        title: 'Our Values',
        reliability: {
          title: 'Reliability',
          description: 'We deliver consistent, dependable security solutions you can count on.'
        },
        innovation: {
          title: 'Innovation',
          description: 'We embrace cutting-edge technology to stay ahead of security threats.'
        },
        service: {
          title: 'Customer Service',
          description: 'Your satisfaction and safety are at the heart of everything we do.'
        },
        quality: {
          title: 'Quality',
          description: 'We never compromise on the quality of our products and services.'
        }
      },
      team: {
        title: 'Our Expertise',
        description: 'Our team comprises certified security professionals, engineers, and support specialists dedicated to your protection.'
      },
      certifications: {
        title: 'Certifications & Partners'
      }
    },
    servicesPage: {
      heroTitle: 'Our Security Services',
      heroSubtitle: 'Comprehensive Solutions for Complete Protection',
      ctaTitle: 'Need a Custom Security Solution?',
      ctaDescription: 'Our experts will design a tailored security system that meets your specific needs and budget.',
      ctaButton: 'Request Free Assessment'
    }
  },
  el: {
    nav: {
      home: 'Αρχική',
      services: 'Υπηρεσίες',
      about: 'Σχετικά',
      contact: 'Επικοινωνία',
      getQuote: 'Ζητήστε Προσφορά'
    },
    hero: {
      headline: 'Προστατεύοντας Αυτό που Έχει Μεγαλύτερη Σημασία',
      subheadline: 'Προηγμένες Λύσεις Ψηφιακής Ασφάλειας για Σύγχρονες Επιχειρήσεις',
      cta1: 'Ζητήστε Προσφορά',
      cta2: 'Οι Υπηρεσίες μας'
    },
    about: {
      title: 'Σχετικά με τη DSS',
      subtitle: 'Ο Έμπιστος Συνεργάτης σας στην Ασφάλεια',
      description: 'Η DSS (Digital Security Systems) είναι κορυφαίος πάροχος ολοκληρωμένων λύσεων ασφαλείας, προσφέροντας τεχνολογία αιχμής και απαράμιλλη εμπειρία για την προστασία επιχειρήσεων σε όλη την Ελλάδα και πέρα. Με πάνω από 15 χρόνια εμπειρίας, συνδυάζουμε την καινοτομία με την αξιοπιστία για να διασφαλίσουμε αυτό που έχει σημασία για εσάς.',
      learnMore: 'Μάθετε Περισσότερα'
    },
    services: {
      title: 'Οι Υπηρεσίες μας',
      subtitle: 'Ολοκληρωμένες Λύσεις Ασφαλείας',
      viewAll: 'Όλες οι Υπηρεσίες',
      cctv: {
        title: 'CCTV & Επιτήρηση',
        description: 'Σύγχρονα συστήματα βιντεοεπιτήρησης με αναλυτικά AI και δυνατότητες απομακρυσμένης παρακολούθησης.'
      },
      access: {
        title: 'Έλεγχος Πρόσβασης',
        description: 'Προηγμένα βιομετρικά συστήματα και συστήματα πρόσβασης με κάρτα για πλήρη ασφάλεια.'
      },
      alarm: {
        title: 'Συστήματα Συναγερμού',
        description: 'Έξυπνη ανίχνευση εισβολής με άμεσες ειδοποιήσεις και συντονισμό ταχείας απόκρισης.'
      },
      fire: {
        title: 'Πυρανίχνευση',
        description: 'Συστήματα έγκαιρης προειδοποίησης πυρκαγιάς σύμφωνα με όλους τους κανονισμούς ασφαλείας.'
      },
      intercom: {
        title: 'Θυροτηλεόραση',
        description: 'Σύγχρονες λύσεις θυροτηλεόρασης για κατοικίες και επαγγελματικούς χώρους.'
      },
      network: {
        title: 'Ασφάλεια Δικτύου',
        description: 'Ολοκληρωμένες λύσεις κυβερνοασφάλειας για την προστασία της ψηφιακής σας υποδομής.'
      },
      monitoring: {
        title: 'Παρακολούθηση 24/7',
        description: 'Υπηρεσίες επιτήρησης και ανταπόκρισης όλο το 24ωρο από το κέντρο ελέγχου μας.'
      },
      maintenance: {
        title: 'Συντήρηση & Υποστήριξη',
        description: 'Τακτική συντήρηση συστημάτων και τεχνική υποστήριξη για βέλτιστη απόδοση.'
      }
    },
    whyUs: {
      title: 'Γιατί να Επιλέξετε τη DSS',
      subtitle: 'Αριστεία σε Κάθε Λεπτομέρεια',
      experience: {
        title: '15+ Χρόνια Εμπειρίας',
        description: 'Αποδεδειγμένο ιστορικό παροχής αριστείας σε όλους τους κλάδους.'
      },
      certified: {
        title: 'Πιστοποιημένοι Ειδικοί',
        description: 'Η ομάδα μας κατέχει κορυφαίες πιστοποιήσεις και συνεχή εκπαίδευση.'
      },
      support: {
        title: 'Υποστήριξη 24/7',
        description: 'Τεχνική υποστήριξη και υπηρεσίες έκτακτης ανάγκης όλο το 24ωρο.'
      },
      custom: {
        title: 'Εξατομικευμένες Λύσεις',
        description: 'Συστήματα ασφαλείας σχεδιασμένα για τις συγκεκριμένες ανάγκες σας.'
      }
    },
    stats: {
      clients: 'Ικανοποιημένοι Πελάτες',
      projects: 'Ολοκληρωμένα Έργα',
      years: 'Χρόνια Εμπειρίας',
      support: 'Διαθέσιμη Υποστήριξη'
    },
    cta: {
      title: 'Έτοιμοι να Ασφαλίσετε την Επιχείρησή σας;',
      subtitle: 'Λάβετε δωρεάν αξιολόγηση ασφαλείας από τους ειδικούς μας σήμερα.',
      button: 'Κλείστε Δωρεάν Συμβουλευτική'
    },
    footer: {
      description: 'Κορυφαίος πάροχος προηγμένων λύσεων ψηφιακής ασφάλειας. Προστατεύουμε επιχειρήσεις με καινοτομία και αξιοπιστία.',
      quickLinks: 'Γρήγοροι Σύνδεσμοι',
      services: 'Υπηρεσίες',
      contact: 'Επικοινωνία',
      rights: 'Με επιφύλαξη παντός δικαιώματος.',
      privacy: 'Πολιτική Απορρήτου',
      terms: 'Όροι Χρήσης'
    },
    contact: {
      title: 'Επικοινωνία',
      subtitle: 'Επικοινωνήστε Μαζί μας',
      description: 'Έτοιμοι να ενισχύσετε την ασφάλειά σας; Η ομάδα μας είναι εδώ για να σας βοηθήσει να βρείτε την τέλεια λύση.',
      form: {
        name: 'Πλήρες Όνομα',
        email: 'Διεύθυνση Email',
        phone: 'Τηλέφωνο',
        company: 'Όνομα Εταιρείας',
        service: 'Ενδιαφέρον Υπηρεσίας',
        selectService: 'Επιλέξτε υπηρεσία',
        message: 'Το Μήνυμά σας',
        submit: 'Αποστολή Μηνύματος',
        sending: 'Αποστολή...'
      },
      info: {
        phone: 'Τηλέφωνο',
        email: 'Email',
        address: 'Διεύθυνση',
        hours: 'Ώρες Λειτουργίας',
        hoursValue: 'Δευ - Παρ: 9:00 - 18:00',
        emergency: 'Διαθέσιμη Υποστήριξη Έκτακτης Ανάγκης 24/7'
      }
    },
    aboutPage: {
      heroTitle: 'Σχετικά με τη Digital Security Systems',
      heroSubtitle: 'Ο Συνεργάτης σας στην Προστασία από το 2002',
      mission: {
        title: 'Η Αποστολή μας',
        description: 'Να παρέχουμε καινοτόμες, αξιόπιστες και ολοκληρωμένες λύσεις ασφαλείας που δίνουν τη δύναμη σε επιχειρήσεις και ιδιώτες να λειτουργούν με αυτοπεποίθηση και ηρεμία.'
      },
      vision: {
        title: 'Το Όραμά μας',
        description: 'Να γίνουμε ο κορυφαίος πάροχος λύσεων ασφαλείας στη Νοτιοανατολική Ευρώπη, αναγνωρισμένοι για την αριστεία, την καινοτομία και την ακλόνητη δέσμευση στην ασφάλεια των πελατών.'
      },
      history: {
        title: 'Η Ιστορία μας',
        description: 'Ιδρύθηκε το 2002, η DSS ξεκίνησε ως μια μικρή ομάδα λάτρεων της ασφάλειας με όραμα να φέρει επανάσταση στον κλάδο της ασφάλειας στην Ελλάδα. Με τα χρόνια, έχουμε εξελιχθεί σε έμπιστο συνεργάτη για εκατοντάδες επιχειρήσεις, από μικρές επιχειρήσεις έως μεγάλες εταιρείες.',
        description2: 'Η πορεία μας χαρακτηρίζεται από συνεχή καινοτομία, στρατηγικές συνεργασίες με παγκόσμιους τεχνολογικούς ηγέτες και ακλόνητη δέσμευση στην ικανοποίηση των πελατών. Σήμερα, η DSS αποτελεί φάρο αριστείας στον κλάδο της ασφάλειας.'
      },
      values: {
        title: 'Οι Αξίες μας',
        reliability: {
          title: 'Αξιοπιστία',
          description: 'Παρέχουμε συνεπείς, αξιόπιστες λύσεις ασφαλείας στις οποίες μπορείτε να βασιστείτε.'
        },
        innovation: {
          title: 'Καινοτομία',
          description: 'Υιοθετούμε τεχνολογία αιχμής για να είμαστε μπροστά από τις απειλές ασφαλείας.'
        },
        service: {
          title: 'Εξυπηρέτηση Πελατών',
          description: 'Η ικανοποίηση και η ασφάλειά σας είναι στο επίκεντρο όλων όσων κάνουμε.'
        },
        quality: {
          title: 'Ποιότητα',
          description: 'Δεν συμβιβαζόμαστε ποτέ με την ποιότητα των προϊόντων και υπηρεσιών μας.'
        }
      },
      team: {
        title: 'Η Εμπειρία μας',
        description: 'Η ομάδα μας αποτελείται από πιστοποιημένους επαγγελματίες ασφαλείας, μηχανικούς και ειδικούς υποστήριξης αφοσιωμένους στην προστασία σας.'
      },
      certifications: {
        title: 'Πιστοποιήσεις & Συνεργάτες'
      }
    },
    servicesPage: {
      heroTitle: 'Οι Υπηρεσίες Ασφαλείας μας',
      heroSubtitle: 'Ολοκληρωμένες Λύσεις για Πλήρη Προστασία',
      ctaTitle: 'Χρειάζεστε Εξατομικευμένη Λύση Ασφαλείας;',
      ctaDescription: 'Οι ειδικοί μας θα σχεδιάσουν ένα προσαρμοσμένο σύστημα ασφαλείας που καλύπτει τις συγκεκριμένες ανάγκες και τον προϋπολογισμό σας.',
      ctaButton: 'Ζητήστε Δωρεάν Αξιολόγηση'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('dss-language');
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang && (urlLang === 'en' || urlLang === 'el')) {
      setLanguage(urlLang);
      localStorage.setItem('dss-language', urlLang);
    } else if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.startsWith('el') ? 'el' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'el' : 'en';
    setLanguage(newLang);
    localStorage.setItem('dss-language', newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}