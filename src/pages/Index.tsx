
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-space-blue text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
