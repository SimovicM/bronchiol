
import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-blue to-space-purple/20 z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-space-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="cyber-box h-full aspect-video overflow-hidden">
              <div className="relative w-full h-full bg-space-subtle">
                <img 
                  src="/placeholder.svg" 
                  alt="About Bronchiol"
                  className="w-full h-full object-cover opacity-80" 
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              {language === 'cs' ? 'O nás' : 'About Us'}
            </h2>
            
            <div className="space-y-4 text-white/80">
              <p>
                {language === 'cs' 
                  ? 'Bronchiol je přední poradenská firma v oblasti pneumologie a interní medicíny, založená týmem zkušených lékařů a výzkumníků.' 
                  : 'Bronchiol is a leading consulting company in the field of pulmonology and internal medicine, founded by a team of experienced doctors and researchers.'}
              </p>
              <p>
                {language === 'cs'
                  ? 'Naším posláním je poskytovat expertní poradenství a řešení pro komplexní respirační problémy a vytvářet inovativní přístupy k léčbě a prevenci plicních onemocnění.'
                  : 'Our mission is to provide expert advice and solutions for complex respiratory problems and to create innovative approaches to the treatment and prevention of lung diseases.'}
              </p>
              <p>
                {language === 'cs'
                  ? 'Spolupracujeme s předními evropskými zdravotnickými zařízeními a výzkumnými institucemi na vývoji nových diagnostických metod a terapeutických postupů.'
                  : 'We collaborate with leading European healthcare facilities and research institutions to develop new diagnostic methods and therapeutic procedures.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
