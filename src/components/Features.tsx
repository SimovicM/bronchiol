
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Features = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-space-blue to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-space-blue to-transparent z-10"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-space-highlight/5 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {language === 'cs' ? 'Naše služby' : 'Our Services'}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {language === 'cs' 
              ? 'Poskytujeme špičkové poradenské služby v oblasti pneumologie a interní medicíny.'
              : 'We provide top-tier consulting services in the field of pulmonology and internal medicine.'}
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="cyber-box p-8 w-full md:w-1/3 group hover-glow"
          >
            <Link to="/about" className="block w-full h-full">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-glow">{t('features.discover')}</h3>
              <p className="text-white/70 mb-6">{t('features.learn')}</p>
              <div className="flex items-center text-space-accent group-hover:text-space-highlight transition-colors">
                <span>{t('features.more')}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="cyber-box p-8 w-full md:w-1/3 group hover-glow"
          >
            <Link to="/team" className="block w-full h-full">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-glow">{t('features.meet')}</h3>
              <p className="text-white/70 mb-6">{t('features.experts')}</p>
              <div className="flex items-center text-space-accent group-hover:text-space-highlight transition-colors">
                <span>{t('features.team')}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="cyber-box p-8 w-full md:w-1/3 group hover-glow"
          >
            <Link to="/contact" className="block w-full h-full">
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-glow">{t('features.touch')}</h3>
              <p className="text-white/70 mb-6">{t('features.interested')}</p>
              <div className="flex items-center text-space-accent group-hover:text-space-highlight transition-colors">
                <span>{t('features.contact')}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
