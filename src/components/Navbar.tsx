
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'cs' ? 'en' : 'cs');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset for header
        behavior: 'smooth'
      });
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-panel bg-black/70 backdrop-blur-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold tracking-tight gradient-text">
            Bronchiol
          </button>
        </motion.div>

        <motion.nav 
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center space-x-8"
        >
          <motion.div variants={linkVariants}>
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent group-hover:w-full transition-all duration-300"></span>
            </button>
          </motion.div>
          
          <motion.div variants={linkVariants}>
            <button onClick={() => scrollToSection('team')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
              {t('nav.team')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent group-hover:w-full transition-all duration-300"></span>
            </button>
          </motion.div>
          
          <motion.div variants={linkVariants}>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent group-hover:w-full transition-all duration-300"></span>
            </button>
          </motion.div>
          
          <motion.div variants={linkVariants}>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent group-hover:w-full transition-all duration-300"></span>
            </button>
          </motion.div>
          
          <motion.div variants={linkVariants}>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white/80 hover:text-white group"
            >
              <Globe className="h-4 w-4 group-hover:text-space-accent transition-colors" />
              <span className="relative">
                {language === 'cs' ? 'English' : 'Česky'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-accent group-hover:w-full transition-all duration-300"></span>
              </span>
            </Button>
          </motion.div>
        </motion.nav>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-space-blue/95 backdrop-blur-lg pt-20"
          >
            <nav className="container p-4 flex flex-col space-y-6 items-center">
              <button 
                className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg transition-colors duration-300"
                onClick={() => scrollToSection('hero')}
              >
                {t('nav.home')}
              </button>
              <button 
                className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg transition-colors duration-300"
                onClick={() => scrollToSection('team')}
              >
                {t('nav.team')}
              </button>
              <button 
                className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg transition-colors duration-300"
                onClick={() => scrollToSection('contact')}
              >
                {t('nav.contact')}
              </button>
              <button 
                className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg transition-colors duration-300"
                onClick={() => scrollToSection('about')}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-transparent text-white p-3 text-lg font-medium hover:bg-space-subtle rounded-lg transition-colors duration-300"
              >
                <Globe className="h-5 w-5" />
                {language === 'cs' ? 'English' : 'Česky'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
