
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-space-purple/40 to-space-blue z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-space-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-space-highlight/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzM2NEYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuNTQ5IDEuMDNsLjIxMi4wMDMgMTAuMTUuMDAyYy43NC43NDkgMSAxLjUgMS4wMDEgMi40NS4wMDIuODc0LjAwMiAxLjc0OC4wMDMgMi42MjMuMDUuNDQ5LjE1LjY2Mi0uMzQ3LjY2N2wtOS41MDkuMDMyLS44NjEuMDg1Yy0uNDQ5LjA0OS0uNjYzLjE0OC0uNjY4LS4zNDdsLS4wMzMtMi4zNzYtLjAzMS0yLjI1NGMtLjAwMi0uODc5LS4wMDQtMS42MTMtLjAwNi0yLjQ2Ny43NDgtLjUwNCAxLjQ5OC0uNzUzIDIuMTk4LS44MDNsLS40MDctLjAzNGMtLjg4My0uMDU1LTEuMjY1LS4wODgtMi44NzYtLjA4OWwtMTMuNzMtLjAwMkwxNC41NSAwYy0uODIzIDAtMS40MTIuMDAyLTIuMzY3LjAwM0wxLjAzIDIzLjQ1bC4wMDMuMjEyLjAwMiAxMC4xNWMuNzQ5Ljc0IDEuNSAxIDIuNDUgMS4wMDEuODc0LjAwMiAxLjc0OC4wMDIgMi42MjMuMDAzLjQ0OS4wNS42NjIuMTUtLjM0Ny0uMzQ3bC0uMDMyLS44NjItLjAwMS04LjY0Ny0uMDg1LS44NmMtLjA0OS0uNDUtLjE0OC0uNjY0LjM0Ny0uNjY4bDIuMzc2LS4wMzQgMi4yNTQtLjAzYy44NzktLjAwMyAxLjYxMy0uMDA0IDIuNDY3LS4wMDYuNTA0Ljc0OC43NTMgMS40OTcuODAzIDIuMTk3bC4wMzQtLjQwN2MuMDU1LS44ODMuMDg4LTEuMjY1LjA4OS0yLjg3NmwuMDAyLTEzLjczbC0uMDAyLTcuMDk1YzAtLjgyMy0uMDAyLTEuNDEyLS4wMDMtMi4zNjdMMS4wMyAxLjAzIiBzdHJva2U9IiMxMzE2MjQiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-10 z-0"></div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-0 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 gradient-text max-w-4xl leading-tight">
            {t('hero.welcome')}
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button 
              size="lg" 
              className="bg-space-accent hover:bg-space-accent/90 text-white w-full sm:w-auto"
              onClick={() => window.location.href = '/contact'}
            >
              {t('nav.contact')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white w-full sm:w-auto"
              onClick={() => window.location.href = '/about'}
            >
              {t('nav.about')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
