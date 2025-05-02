
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from "framer-motion";

const About = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-space-blue text-white"
    >
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center"
            >
              {t('nav.about')}
            </motion.h1>
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-space-accent/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-space-highlight/5 rounded-full blur-3xl"></div>
              
              <p className="text-lg leading-relaxed text-white/80 relative z-10">
                {t('about.full')}
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
