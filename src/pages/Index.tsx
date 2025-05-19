
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Index = () => {
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
      <Hero />
      <Features />
      <CtaSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
