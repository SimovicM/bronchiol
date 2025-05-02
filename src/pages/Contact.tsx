
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const Contact = () => {
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
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
            >
              {t('contact.title')}
            </motion.h1>
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-8 md:p-12 relative overflow-hidden"
            >
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="absolute -top-32 -right-32 w-64 h-64 bg-space-accent/5 rounded-full blur-3xl"
              ></motion.div>
              
              <motion.div 
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="absolute -bottom-32 -left-32 w-64 h-64 bg-space-highlight/5 rounded-full blur-3xl"
              ></motion.div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="mb-6 inline-flex p-4 rounded-full bg-space-subtle/50 backdrop-blur-sm">
                    <Mail className="h-8 w-8 text-space-accent" />
                  </div>
                </motion.div>
                
                <p className="text-lg mb-4 text-white/80">
                  {t('contact.email')}
                </p>
                <p className="text-xl font-semibold mb-8 text-space-accent">
                  info@bronchiol.eu
                </p>
                
                <Button
                  size="lg"
                  className="bg-space-accent hover:bg-space-accent/90 group"
                  onClick={() => window.location.href = 'mailto:info@bronchiol.eu'}
                >
                  {t('contact.button')}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                  >
                    <Send className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Contact;
