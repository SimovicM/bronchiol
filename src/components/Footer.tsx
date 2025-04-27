
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-16 pb-8 bg-space-purple/50">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tight gradient-text">
              Bronchiol.eu
            </Link>
            <p className="text-sm text-white/60 mt-4 max-w-xs">
              Pioneering the future of respiratory health through innovative technology and research.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/60 hover:text-white transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-white/60 hover:text-white transition-colors text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/60 hover:text-white transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/60 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/publications" className="text-white/60 hover:text-white transition-colors text-sm">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/60 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-white/60 hover:text-white transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/60 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-white/60 hover:text-white transition-colors text-sm">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">
                1234 Innovation Drive
              </li>
              <li className="text-white/60 text-sm">
                Tech City, TC 12345
              </li>
              <li className="text-white/60 text-sm">
                European Union
              </li>
              <li className="text-white/60 text-sm pt-2">
                contact@bronchiol.eu
              </li>
              <li className="text-white/60 text-sm">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Bronchiol.eu. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-white/60 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
