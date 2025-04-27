
import React, { createContext, useContext, useState } from 'react';

type Language = 'cs' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  cs: {
    'nav.home': 'Domů',
    'nav.team': 'Náš Tým',
    'nav.contact': 'Kontaktujte Nás',
    'nav.about': 'O Nás',
    'hero.welcome': 'Vítejte v Bronchiol',
    'hero.description': 'Naše firma využívá mnohaleté zkušenosti v oboru pneumologie a interní medicíny a poskytuje konzultační služby na té nejvyšší evropské úrovni pro náročné klienty.',
    'about.full': 'Naše firma využívá mnohaleté zkušenosti v oboru pneumologie a interní medicíny a poskytuje konzultační služby na té nejvyšší evropské úrovni pro náročné klienty. Naše odborné znalosti a rozsáhlé praktické zkušenosti nám umožňují poskytovat špičkové poradenské služby, které jsou přizpůsobeny individuálním potřebám našich klientů. Specializujeme se na široké spektrum zdravotnických témat, od diagnostiky a léčby respiračních onemocnění až po komplexní řízení zdravotní péče. Snažíme se neustále zlepšovat naše služby a zůstáváme na špičce v oblasti zdravotní péče díky pravidelnému vzdělávání a sledování nejnovějších vědeckých poznatků. Naším cílem je poskytovat kvalitní a efektivní řešení, která podporují zdraví a pohodu našich klientů.',
    'team.title': 'Náš Tým',
    'contact.title': 'Kontaktujte Nás',
    'contact.email': 'Můžete nás kontaktovat na následujícím e-mailu:',
    'contact.button': 'Odeslat Email',
    'footer.rights': '© 2024 Bronchiol. Všechna práva vyhrazena.',
  },
  en: {
    'nav.home': 'Home',
    'nav.team': 'Our Team',
    'nav.contact': 'Contact Us',
    'nav.about': 'About',
    'hero.welcome': 'Welcome to Bronchiol',
    'hero.description': 'Our company leverages years of experience in pulmonology and internal medicine to provide consulting services at the highest European level for demanding clients.',
    'about.full': 'Our company leverages years of experience in pulmonology and internal medicine to provide consulting services at the highest European level for demanding clients. Our expertise and extensive practical experience enable us to provide top-tier consulting services tailored to our clients\' individual needs. We specialize in a wide spectrum of healthcare topics, from diagnostics and treatment of respiratory diseases to comprehensive healthcare management. We continuously strive to improve our services and remain at the forefront of healthcare through regular education and monitoring of the latest scientific findings. Our goal is to provide quality and effective solutions that support the health and well-being of our clients.',
    'team.title': 'Our Team',
    'contact.title': 'Contact Us',
    'contact.email': 'You can contact us at the following email:',
    'contact.button': 'Send Email',
    'footer.rights': '© 2024 Bronchiol. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('cs');

  const t = (key: string) => {
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
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
