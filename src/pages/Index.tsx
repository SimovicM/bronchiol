
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation for direct links
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-space-blue text-white overflow-hidden"
    >
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <CtaSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
