
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-space-blue text-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              {t('contact.title')}
            </h1>
            
            <div className="glass-panel p-8 md:p-12">
              <p className="text-lg mb-4 text-white/80">
                {t('contact.email')}
              </p>
              <p className="text-xl font-semibold mb-8 text-space-accent">
                info@bronchiol.eu
              </p>
              
              <Button
                size="lg"
                className="bg-space-accent hover:bg-space-accent/90"
                onClick={() => window.location.href = 'mailto:info@bronchiol.eu'}
              >
                {t('contact.button')}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
