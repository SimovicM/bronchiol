
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="relative py-8 bg-space-purple/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-xl font-bold tracking-tight gradient-text">
            Bronchiol
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.home')}
            </Link>
            <Link to="/team" className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.team')}
            </Link>
            <Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.contact')}
            </Link>
            <Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">
              {t('nav.about')}
            </Link>
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
