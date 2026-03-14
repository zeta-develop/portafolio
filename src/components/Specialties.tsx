import React, { useEffect, useRef } from 'react';
import { Code, Server, Cpu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Specialties: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const specialties = [
    {
      title: t('specialties.webDev'),
      description: t('specialties.webDevDesc'),
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: t('specialties.cloudSystems'),
      description: t('specialties.cloudSystemsDesc'),
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: t('specialties.electronics'),
      description: t('specialties.electronicsDesc'),
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-fade-in');
            section.classList.remove('opacity-0');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 lg:px-16 transition-colors duration-300 bg-background opacity-0">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">{t('specialties.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card hover:shadow-soft-lg cursor-pointer group">
              <div className="specialty-icon group-hover:bg-primary/20 transition-colors duration-300">{specialty.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">{specialty.title}</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
