
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from '../contexts/LanguageContext';
import { LinkedIn } from 'lucide-react';

const Team = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-space-blue text-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            {t('team.title')}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-space-purple mb-4 overflow-hidden">
                {/* Add image here if available */}
              </div>
              <h3 className="text-xl font-bold mb-1">MUDr. Juraj Šimovič</h3>
              <p className="text-white/60 mb-4">CEO</p>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="glass-panel p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-space-purple mb-4 overflow-hidden">
                {/* Add image here if available */}
              </div>
              <h3 className="text-xl font-bold mb-1">Martin Šimovič</h3>
              <p className="text-white/60 mb-4">Web Developer</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
