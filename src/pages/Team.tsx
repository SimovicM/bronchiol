
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const Team = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const teamMemberAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          >
            {t('team.title')}
          </motion.h1>
          
          <motion.div 
            variants={teamAnimation}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Team Member 1 */}
            <motion.div 
              variants={teamMemberAnimation}
              className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="absolute -top-32 -left-32 w-48 h-48 bg-space-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-full bg-space-purple mb-4 overflow-hidden relative z-10 border-2 border-space-accent/30 glow"
              >
                {/* Add image here if available */}
              </motion.div>
              <h3 className="text-xl font-bold mb-1">MUDr. Juraj Šimovič</h3>
              <p className="text-white/60 mb-4">CEO</p>
              <motion.a 
                whileHover={{ scale: 1.1, color: "#8B5CF6" }}
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              variants={teamMemberAnimation}
              className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div 
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="absolute -bottom-32 -right-32 w-48 h-48 bg-space-highlight/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-full bg-space-purple mb-4 overflow-hidden relative z-10 border-2 border-space-highlight/30 glow"
              >
                {/* Add image here if available */}
              </motion.div>
              <h3 className="text-xl font-bold mb-1">Martin Šimovič</h3>
              <p className="text-white/60 mb-4">Web Developer</p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Team;
