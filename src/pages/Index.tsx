
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-space-blue text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
