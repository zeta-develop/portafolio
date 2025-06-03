
import React from 'react';
import { Code, Server, Cpu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const Specialties: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const specialties = [
    {
      title: t('specialties.webDev'),
      description: t('specialties.webDevDesc'),
      icon: <Code className="w-6 h-6" />
    },
    {
      title: t('specialties.cloudSystems'),
      description: t('specialties.cloudSystemsDesc'),
      icon: <Server className="w-6 h-6" />
    },
    {
      title: t('specialties.electronics'),
      description: t('specialties.electronicsDesc'),
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <section 
      className={`py-20 px-6 md:px-10 lg:px-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900/50 to-black/80' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
          {t('specialties.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card">
              <div className="specialty-icon">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground">{specialty.title}</h3>
              <p className="text-muted-foreground">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
