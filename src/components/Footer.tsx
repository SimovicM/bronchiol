
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="relative py-8 bg-space-purple/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <button onClick={() => scrollToSection('hero')} className="text-xl font-bold tracking-tight gradient-text">
            Bronchiol
          </button>

          <nav className="flex flex-wrap justify-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('team')} className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.team')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.contact')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.about')}
            </button>
          </nav>

          <p className="text-white/60 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
