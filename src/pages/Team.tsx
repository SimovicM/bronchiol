
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";

const Team = () => {
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
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
          >
            {t('nav.team')}
          </motion.h1>
          
          <TeamSection />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Team;
