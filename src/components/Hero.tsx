
import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-32 px-6 md:px-10 lg:px-16" 
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(to bottom, #000000, #090718)'
          : 'linear-gradient(to bottom, #f8f9fa, #e9ecef)'
      }}
    >
      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo/Initials */}
          <div className="mb-8 text-2xl font-bold text-primary">
            R.A.T.
          </div>

          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/60 to-accent/60 blur-lg opacity-70 animate-pulse-soft"></div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 relative z-10">
              <img 
                alt="Ronald Tellez" 
                src="https://avatars.githubusercontent.com/u/80638821?v=4" 
                className="w-full h-full object-cover"
                loading="eager"
                width="160"
                height="160" 
              />
            </div>
          </div>

          {/* Name */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${theme === 'dark' ? 'glow-text' : 'text-foreground'}`}>
            {t('hero.greeting')} <br />
            Ronald Adan Tellez Ramos
          </h1>

          {/* Professional Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            {t('hero.title')} - {t('hero.subtitle')}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="gradient-button">
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5" />
            </a>

            <a href="https://github.com/zeta-develop" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground 
                      font-medium transition-all duration-300 flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-grid-white/[0.02]' : 'bg-grid-dark/[0.03]'}`} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
