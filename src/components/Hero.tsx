
import React, { useEffect, useRef } from 'react';
import { Github, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.animate-on-load');
    
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.setProperty('--index', index.toString());
    });
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div ref={containerRef} className="container mx-auto px-6 md:px-8 z-10 appear-animate">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 mb-6 text-sm font-medium bg-primary/10 rounded-full animate-on-load">
            {t('hero.greeting')}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-on-load">
            <span className="block">Ronald Tellez</span>
            <span className="block mt-2 gradient-text">{t('hero.title')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 animate-on-load">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16 animate-on-load">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium 
                        shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:translate-y-[-2px]"
            >
              {t('hero.cta')}
            </a>
            
            <a 
              href="https://github.com/ronaldtellez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground 
                        font-medium transition-colors hover:bg-secondary/80"
            >
              <Github className="mr-2 h-5 w-5" />
              {t('hero.viewGithub')}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="block p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
