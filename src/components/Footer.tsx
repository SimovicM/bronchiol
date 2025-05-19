
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="relative py-8 bg-space-purple/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <Link to="/" className="text-xl font-bold tracking-tight gradient-text">
            Bronchiol
          </Link>

          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm relative group">
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/team" className="text-white/60 hover:text-white transition-colors text-sm relative group">
              {t('nav.team')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm relative group">
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm relative group">
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.nav>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm"
          >
            {t('footer.rights')}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
