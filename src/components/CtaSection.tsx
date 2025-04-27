
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-purple/30 to-space-blue z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-space-highlight/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="glass-panel p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-space-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-space-highlight/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Transform Respiratory Care?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Join the leading healthcare institutions already using our advanced respiratory solutions. 
              Schedule a demo today to see how our technology can enhance patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-space-accent hover:bg-space-accent/90 text-white"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
