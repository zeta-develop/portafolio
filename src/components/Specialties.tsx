
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

  // Enhanced animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-up');
              entry.target.classList.remove('opacity-0');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 lg:px-16 transition-colors duration-300 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text hover:scale-105 transition-transform duration-300 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {t('specialties.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card animate-on-scroll opacity-0 hover:scale-110 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl cursor-pointer group" style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'forwards' }}>
              <div className="specialty-icon group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {specialty.icon}
              </div>
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
