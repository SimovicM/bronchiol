
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel bg-black/70 backdrop-blur-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight gradient-text">
          Bronchiol
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/team" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {t('nav.team')}
          </Link>
          <Link to="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {t('nav.contact')}
          </Link>
          <Link to="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {t('nav.about')}
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white/80 hover:text-white"
          >
            <Globe className="h-4 w-4" />
            {language === 'cs' ? 'English' : 'Česky'}
          </Button>
        </nav>

        <button 
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-space-blue/95 backdrop-blur-lg pt-20">
          <nav className="container p-4 flex flex-col space-y-6 items-center">
            <Link 
              to="/" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/team" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.team')}
            </Link>
            <Link 
              to="/contact" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <Link 
              to="/about" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2"
            >
              <Globe className="h-5 w-5" />
              {language === 'cs' ? 'English' : 'Česky'}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
