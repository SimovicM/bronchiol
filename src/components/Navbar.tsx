
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel bg-black/70 backdrop-blur-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight gradient-text"
        >
          Bronchiol.eu
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/solutions" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link to="/research" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Research
          </Link>
          <Link to="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-space-accent hover:bg-space-accent/90 text-white ml-2"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-space-blue/95 backdrop-blur-lg pt-20">
          <nav className="container p-4 flex flex-col space-y-6 items-center">
            <Link 
              to="/" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/research" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>
            <Link 
              to="/about" 
              className="w-full text-center text-lg font-medium p-3 hover:bg-space-subtle rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              variant="default"
              size="lg" 
              className="w-full bg-space-accent hover:bg-space-accent/90 text-white mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
