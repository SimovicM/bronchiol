
import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext';

const TeamSection = () => {
  const { t, language } = useLanguage();
  
  const teamMembers = [
    {
      name: "MUDr. Jan Novák",
      role: language === 'cs' ? "Hlavní konzultant" : "Lead Consultant",
      bio: language === 'cs' 
        ? "Specialista na respirační onemocnění s 15 lety zkušeností."
        : "Respiratory disease specialist with 15 years of experience.",
      image: "/placeholder.svg"
    },
    {
      name: "MUDr. Anna Svobodová",
      role: language === 'cs' ? "Pneumolog" : "Pulmonologist",
      bio: language === 'cs' 
        ? "Expertka na interní medicínu a plicní onemocnění."
        : "Expert in internal medicine and pulmonary diseases.",
      image: "/placeholder.svg"
    },
    {
      name: "Ing. Pavel Dvořák",
      role: language === 'cs' ? "Výzkumník" : "Researcher",
      bio: language === 'cs' 
        ? "Zaměřuje se na inovativní respirační technologie."
        : "Focuses on innovative respiratory technologies.",
      image: "/placeholder.svg"
    },
  ];
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-purple/20 to-space-blue z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-space-highlight/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {language === 'cs' ? 'Náš tým' : 'Our Team'}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {language === 'cs' 
              ? 'Seznamte se s našimi odborníky s mnohaletými zkušenostmi v oboru.'
              : 'Meet our experts with many years of experience in the field.'}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="cyber-box p-6 text-center hover-glow"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-space-accent/30">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-space-accent mb-3">{member.role}</p>
              <p className="text-white/70">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
