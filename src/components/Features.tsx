import { Airplay, Activity, Microscope, ShieldCheck, Zap, Brain } from "lucide-react";

const featuresData = [
  {
    icon: <Activity className="h-8 w-8 text-space-accent" />,
    title: "Real-time Monitoring",
    description: "Advanced sensors provide continuous monitoring of respiratory metrics with unprecedented accuracy."
  },
  {
    icon: <Brain className="h-8 w-8 text-space-accent" />,
    title: "AI-Powered Analysis",
    description: "Machine learning algorithms analyze breathing patterns to detect anomalies before symptoms appear."
  },
  {
    icon: <Airplay className="h-8 w-8 text-space-accent" />,
    title: "Remote Diagnostics",
    description: "Cloud-based platform enables healthcare providers to monitor patients remotely and in real-time."
  },
  {
    icon: <Microscope className="h-8 w-8 text-space-accent" />,
    title: "Research-Backed",
    description: "All solutions are developed through rigorous scientific research and clinical validation."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-space-accent" />,
    title: "Secure Data",
    description: "End-to-end encryption ensures patient data remains private and protected at all times."
  },
  {
    icon: <Zap className="h-8 w-8 text-space-accent" />,
    title: "Energy Efficient",
    description: "Low-power components ensure devices operate continuously for extended periods."
  },
];

const Features = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-space-blue to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-space-blue to-transparent z-10"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-space-highlight/5 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Advanced Respiratory Technology</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our cutting-edge solutions combine the latest in sensor technology, artificial intelligence, 
            and medical research to revolutionize respiratory care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="glass-panel p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-space-accent/10"
            >
              <div className="mb-4 p-3 inline-block bg-space-subtle rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
