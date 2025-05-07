import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.features': 'Features',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero Section
    'hero.welcome': 'Welcome to',
    'hero.subtitle': 'AI-native security platform defending against synthetic media attacks',
    'hero.exploreProducts': 'Explore Products',
    'hero.contactUs': 'Contact Us',

    // About Section
    'about.title': 'About HalGuard',
    'about.subtitle': 'HalGuard is an AI-native security platform built to defend organizations against the rising threat of synthetic media attacks — including voice cloning, deepfake videos, and generative phishing content.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Guard reality. Defend trust. Empower humans to safely navigate the AI-powered world.',
    'about.technology.title': 'Our Technology',
    'about.technology.desc': 'Cutting-edge AI algorithms trained to detect synthetic media across voice, video, and text channels.',
    'about.focus.title': 'Our Focus',
    'about.focus.desc': 'Enterprise security and fraud prevention through advanced, real-time synthetic media detection.',
    'about.protecting': 'Protecting Organizations in the AI Era',
    'about.protecting.desc': 'As AI-generated synthetic media becomes increasingly sophisticated, organizations face unprecedented security challenges. HalGuard provides enterprise-grade protection against these emerging threats.',
    'about.suite': 'Our suite of products offers comprehensive security across multiple channels, protecting your organization from financial fraud, identity theft, and reputational damage caused by synthetic media attacks.',
    'about.compliance': 'GDPR, BaFin, and FINRA compliant solutions',
    'about.security': 'Enterprise-grade security and reliability',
    'about.integration': 'Seamless integration with existing security infrastructure',

    // Products Section
    'products.title': 'Our Products',
    'products.subtitle': 'Get comprehensive protection against synthetic media attacks with our suite of products.',
    'product.voiceShield': 'VoiceShield',
    'product.voiceShield.desc': 'Real-time voice clone detection & protection',
    'product.voiceShield.full': 'Advanced AI-powered voice authentication system protecting against synthetic voice fraud through real-time analysis and detection.',
    'product.deepShield': 'DeepShield',
    'product.deepShield.desc': 'Real-time deepfake video detection & protection',
    'product.deepShield.full': 'Comprehensive deepfake detection platform providing real-time video analysis and protection.',
    'product.textShield': 'TextShield',
    'product.textShield.desc': 'AI-generated text detection & phishing prevention',
    'product.textShield.full': 'Enterprise-grade AI text analysis platform protecting against synthetic content threats.',
    'products.learnMore': 'Learn more about',
    'products.getStarted': 'Get Started with HalGuard',
    'products.demo': 'Request a Demo',
    'products.apiServices': 'API Services',
    'products.apiServices.desc': 'Integrate HalGuard\'s protection into your applications',

    // Features Section
    'features.title': 'Platform Features',
    'features.subtitle': 'The HalGuard platform provides powerful tools and insights to protect your organization from synthetic media threats.',
    'features.dashboard.title': 'Platform Dashboard',
    'features.dashboard.desc': 'The HalGuard Platform Dashboard provides a comprehensive view of your organization\'s synthetic media security posture.',
    'features.monitoring': 'Real-time threat monitoring across all channels',
    'features.alerts': 'Customizable alert thresholds and notification systems',
    'features.analysis': 'Historical data analysis and trend identification',
    'features.documentation': 'Automated compliance documentation and reporting',

    // Blog Section
    'blog.title': 'Latest Insights',
    'blog.subtitle': 'Stay updated with the latest trends, case studies, and insights on synthetic media security.',
    'blog.viewAll': 'View all blog posts',
    'blog.readMore': 'Read article',
    'blog.backToBlog': 'Back to all articles',
    'blog.author': 'Written by',
    'blog.category.voice': 'Voice Security',
    'blog.category.video': 'Video Security',
    'blog.category.text': 'Text Security',
    'blog.category.general': 'General',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to protect your organization from synthetic media threats? Get in touch with our team to learn more.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.success': 'Thank You!',
    'contact.success.message': 'Your message has been sent successfully. We\'ll get back to you as soon as possible.',
    'contact.email': 'Email Us',
    'contact.call': 'Call Us',
    'contact.visit': 'Visit Us',

    // Team Page
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the experts behind HalGuard\'s innovative security solutions.',
    'team.joinUs': 'Join Our Team',
    'team.joinUs.desc': 'We\'re always looking for talented individuals who share our passion for security and innovation.',
    'team.viewPositions': 'View Open Positions',

    // Careers Page
    'careers.title': 'Careers at HalGuard',
    'careers.subtitle': 'Join our mission to protect organizations from synthetic media threats.',
    'careers.openings': 'Open Positions',
    'careers.benefits': 'Benefits & Perks',
    'careers.noRole': 'Don\'t see the right role?',
    'careers.noRole.desc': 'We\'re always interested in meeting talented individuals. Send us your resume and let\'s start a conversation.',

    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about HalGuard\'s synthetic media protection solutions.',
    'faq.moreQuestions': 'Still have questions?',
    'faq.moreQuestions.desc': 'Our team is here to help. Contact us for more information about our products and services.',

    // Use Cases Page
    'useCases.title': 'Use Cases',
    'useCases.subtitle': 'Discover how organizations across different industries use HalGuard to protect against synthetic media threats.',
    'useCases.financial': 'Financial Services',
    'useCases.enterprise': 'Enterprise Security',
    'useCases.government': 'Government & Defense',

    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',

    // Common
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.backHome': 'Back to home',
    'common.contactSales': 'Contact Sales',
  },
  de: {
    // Navigation
    'nav.about': 'Über uns',
    'nav.products': 'Produkte',
    'nav.features': 'Funktionen',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Loslegen',

    // Hero Section
    'hero.welcome': 'Willkommen bei',
    'hero.subtitle': 'KI-native Sicherheitsplattform zum Schutz vor synthetischen Medienangriffen',
    'hero.exploreProducts': 'Produkte entdecken',
    'hero.contactUs': 'Kontaktieren Sie uns',

    // About Section
    'about.title': 'Über HalGuard',
    'about.subtitle': 'HalGuard ist eine KI-native Sicherheitsplattform, die Organisationen vor der wachsenden Bedrohung durch synthetische Medienangriffe schützt — einschließlich Stimmklonen, Deepfake-Videos und generativen Phishing-Inhalten.',
    'about.mission.title': 'Unsere Mission',
    'about.mission.desc': 'Realität schützen. Vertrauen verteidigen. Menschen befähigen, sich sicher in der KI-gesteuerten Welt zu bewegen.',
    'about.technology.title': 'Unsere Technologie',
    'about.technology.desc': 'Modernste KI-Algorithmen zur Erkennung synthetischer Medien über Sprach-, Video- und Textkanäle.',
    'about.focus.title': 'Unser Fokus',
    'about.focus.desc': 'Unternehmenssicherheit und Betrugsprävention durch fortschrittliche Echtzeit-Erkennung synthetischer Medien.',
    'about.protecting': 'Organisationen im KI-Zeitalter schützen',
    'about.protecting.desc': 'Mit zunehmender Komplexität KI-generierter synthetischer Medien stehen Organisationen vor beispiellosen Sicherheitsherausforderungen. HalGuard bietet unternehmenstauglichen Schutz gegen diese aufkommenden Bedrohungen.',
    'about.suite': 'Unsere Produktpalette bietet umfassende Sicherheit über mehrere Kanäle und schützt Ihre Organisation vor Finanzbetrug, Identitätsdiebstahl und Reputationsschäden durch synthetische Medienangriffe.',
    'about.compliance': 'DSGVO-, BaFin- und FINRA-konforme Lösungen',
    'about.security': 'Unternehmenstaugliche Sicherheit und Zuverlässigkeit',
    'about.integration': 'Nahtlose Integration in bestehende Sicherheitsinfrastruktur',

    // Products Section
    'products.title': 'Unsere Produkte',
    'products.subtitle': 'Umfassender Schutz gegen synthetische Medienangriffe mit unserer Produktpalette.',
    'product.voiceShield': 'VoiceShield',
    'product.voiceShield.desc': 'Echtzeit-Stimmerkennung & -Schutz',
    'product.voiceShield.full': 'Fortschrittliches KI-gesteuertes Stimmauthentifizierungssystem zum Schutz vor synthetischem Stimmbetrug durch Echtzeitanalyse und -erkennung.',
    'product.deepShield': 'DeepShield',
    'product.deepShield.desc': 'Echtzeit-Deepfake-Erkennung & -Schutz',
    'product.deepShield.full': 'Umfassende Deepfake-Erkennungsplattform mit Videoanalyse und Schutz in Echtzeit.',
    'product.textShield': 'TextShield',
    'product.textShield.desc': 'KI-generierte Texterkennung & Phishing-Prävention',
    'product.textShield.full': 'KI-Textanalyseplattform für Unternehmen zum Schutz vor synthetischen Inhaltsbedrohungen.',
    'products.learnMore': 'Mehr erfahren über',
    'products.getStarted': 'Starten Sie mit HalGuard',
    'products.demo': 'Demo anfordern',
    'products.apiServices': 'API-Dienste',
    'products.apiServices.desc': 'Integrieren Sie HalGuards Schutz in Ihre Anwendungen',

    // Features Section
    'features.title': 'Plattform-Funktionen',
    'features.subtitle': 'Die HalGuard-Plattform bietet leistungsstarke Tools und Einblicke zum Schutz Ihrer Organisation vor synthetischen Medienbedrohungen.',
    'features.dashboard.title': 'Plattform-Dashboard',
    'features.dashboard.desc': 'Das HalGuard Platform Dashboard bietet einen umfassenden Überblick über die Sicherheitslage Ihrer Organisation im Bereich synthetischer Medien.',
    'features.monitoring': 'Echtzeit-Bedrohungsüberwachung über alle Kanäle',
    'features.alerts': 'Anpassbare Alarmschwellen und Benachrichtigungssysteme',
    'features.analysis': 'Historische Datenanalyse und Trenderkennung',
    'features.documentation': 'Automatisierte Compliance-Dokumentation und Berichterstattung',

    // Blog Section
    'blog.title': 'Neueste Erkenntnisse',
    'blog.subtitle': 'Bleiben Sie auf dem Laufenden über die neuesten Trends, Fallstudien und Einblicke in die Sicherheit synthetischer Medien.',
    'blog.viewAll': 'Alle Blogbeiträge anzeigen',
    'blog.readMore': 'Artikel lesen',
    'blog.backToBlog': 'Zurück zu allen Artikeln',
    'blog.author': 'Geschrieben von',
    'blog.category.voice': 'Sprachsicherheit',
    'blog.category.video': 'Videosicherheit',
    'blog.category.text': 'Textsicherheit',
    'blog.category.general': 'Allgemein',

    // Contact Section
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Bereit, Ihre Organisation vor synthetischen Medienbedrohungen zu schützen? Kontaktieren Sie unser Team, um mehr zu erfahren.',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.company': 'Unternehmen',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.success': 'Vielen Dank!',
    'contact.success.message': 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.',
    'contact.email': 'E-Mail senden',
    'contact.call': 'Anrufen',
    'contact.visit': 'Besuchen Sie uns',

    // Team Page
    'team.title': 'Unser Team',
    'team.subtitle': 'Lernen Sie die Experten hinter HalGuards innovativen Sicherheitslösungen kennen.',
    'team.joinUs': 'Werden Sie Teil unseres Teams',
    'team.joinUs.desc': 'Wir suchen stets talentierte Personen, die unsere Leidenschaft für Sicherheit und Innovation teilen.',
    'team.viewPositions': 'Offene Stellen ansehen',

    // Careers Page
    'careers.title': 'Karriere bei HalGuard',
    'careers.subtitle': 'Werden Sie Teil unserer Mission, Organisationen vor synthetischen Medienbedrohungen zu schützen.',
    'careers.openings': 'Offene Stellen',
    'careers.benefits': 'Vorteile & Leistungen',
    'careers.noRole': 'Keine passende Stelle gefunden?',
    'careers.noRole.desc': 'Wir sind immer interessiert, talentierte Personen kennenzulernen. Senden Sie uns Ihren Lebenslauf und lassen Sie uns ins Gespräch kommen.',

    // FAQ Page
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Finden Sie Antworten auf häufige Fragen zu HalGuards Schutzlösungen für synthetische Medien.',
    'faq.moreQuestions': 'Noch Fragen?',
    'faq.moreQuestions.desc': 'Unser Team hilft Ihnen gerne weiter. Kontaktieren Sie uns für weitere Informationen zu unseren Produkten und Dienstleistungen.',

    // Use Cases Page
    'useCases.title': 'Anwendungsfälle',
    'useCases.subtitle': 'Erfahren Sie, wie Organisationen aus verschiedenen Branchen HalGuard zum Schutz vor synthetischen Medienbedrohungen einsetzen.',
    'useCases.financial': 'Finanzdienstleistungen',
    'useCases.enterprise': 'Unternehmenssicherheit',
    'useCases.government': 'Regierung & Verteidigung',

    // Footer
    'footer.company': 'Unternehmen',
    'footer.products': 'Produkte',
    'footer.resources': 'Ressourcen',
    'footer.legal': 'Rechtliches',
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Common
    'common.readMore': 'Weiterlesen',
    'common.learnMore': 'Mehr erfahren',
    'common.backHome': 'Zurück zur Startseite',
    'common.contactSales': 'Vertrieb kontaktieren',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};