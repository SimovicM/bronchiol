
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-purple/30 to-space-blue z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-space-highlight/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {language === 'cs' ? 'Kontaktujte nás' : 'Contact Us'}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {language === 'cs' 
              ? 'Máte dotazy nebo zájem o spolupráci? Neváhejte nás kontaktovat.'
              : 'Have questions or interested in collaboration? Don\'t hesitate to contact us.'}
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-semibold mb-6">
                {language === 'cs' ? 'Napište nám' : 'Send Us a Message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70 block">
                    {language === 'cs' ? 'Jméno' : 'Name'}
                  </label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-space-accent/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-white/70 block">
                    {language === 'cs' ? 'Email' : 'Email'}
                  </label>
                  <input 
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-space-accent/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-white/70 block">
                    {language === 'cs' ? 'Zpráva' : 'Message'}
                  </label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-space-accent/50"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="bg-space-accent hover:bg-space-accent/90 text-white w-full group"
                >
                  {formStatus === 'submitting' ? (
                    language === 'cs' ? 'Odesílání...' : 'Sending...'
                  ) : formStatus === 'success' ? (
                    language === 'cs' ? 'Odesláno!' : 'Sent!'
                  ) : (
                    <>
                      {language === 'cs' ? 'Odeslat' : 'Send'}
                      <Send className="ml-2 h-4 w-4 animate-pulse" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass-panel p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">
                {language === 'cs' ? 'Kontaktní údaje' : 'Contact Details'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-space-accent font-medium mb-2">
                    {language === 'cs' ? 'Adresa' : 'Address'}
                  </h4>
                  <p className="text-white/70">
                    Václavské náměstí 1<br />
                    110 00 Praha 1<br />
                    {language === 'cs' ? 'Česká republika' : 'Czech Republic'}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-space-accent font-medium mb-2">
                    {language === 'cs' ? 'Email' : 'Email'}
                  </h4>
                  <p className="text-white/70">info@bronchiol.eu</p>
                </div>
                
                <div>
                  <h4 className="text-space-accent font-medium mb-2">
                    {language === 'cs' ? 'Telefon' : 'Phone'}
                  </h4>
                  <p className="text-white/70">+420 123 456 789</p>
                </div>
                
                <div>
                  <h4 className="text-space-accent font-medium mb-2">
                    {language === 'cs' ? 'Provozní doba' : 'Hours'}
                  </h4>
                  <p className="text-white/70">
                    {language === 'cs' ? 'Pondělí - Pátek: 9:00 - 17:00' : 'Monday - Friday: 9:00 AM - 5:00 PM'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
