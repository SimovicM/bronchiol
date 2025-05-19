
import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext';

const TeamSection = () => {
  const { language } = useLanguage();
  
  const teamMembers = [
    {
      name: "Juraj Šimovič",
      role: language === 'cs' ? "CEO" : "CEO",
      bio: language === 'cs' 
        ? "Zakladatel a ředitel společnosti Bronchiol."
        : "Founder and CEO of Bronchiol.",
      image: "/placeholder.svg"
    },
    {
      name: "Martin Šimovič",
      role: language === 'cs' ? "Web vývojář/designer" : "Web developer/designer",
      bio: language === 'cs' 
        ? "Zodpovědný za digitální přítomnost a technologické řešení."
        : "Responsible for digital presence and technological solutions.",
      image: "/placeholder.svg"
    }
  ];
  
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-purple/20 to-space-blue z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-space-highlight/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="cyber-box p-6 text-center hover-glow"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-space-accent/30"
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="text-xl font-semibold mb-2"
              >
                {member.name}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="text-space-accent mb-3"
              >
                {member.role}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                className="text-white/70"
              >
                {member.bio}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
