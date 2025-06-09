
import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import TypewriterText from '@/components/TypewriterText';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-32 px-6 md:px-10 lg:px-16 transition-colors duration-300 bg-background overflow-hidden"
    >
      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo/Initials with entrance animation */}
          <div className="mb-8 text-2xl font-bold text-primary animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            R.A.T.R.
          </div>

          {/* Profile Image with enhanced animations */}
          <div className="relative mb-8 animate-scale-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 blur-lg opacity-70 animate-pulse-soft"></div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 relative z-10 shadow-soft-xl transition-all duration-500 hover:scale-110 hover:border-primary/50 hover:shadow-2xl group">
              <img 
                alt="Ronald Tellez" 
                src="https://avatars.githubusercontent.com/u/80638821?v=4" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                width="160"
                height="160" 
              />
            </div>
          </div>

          {/* Name with Typewriter Animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 glow-text animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <TypewriterText 
              text={`${t('hero.greeting')} Ronald Adan Tellez Ramos`}
              speed={80}
              className="text-foreground"
            />
          </h1>

          {/* Professional Description with slide animation */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {t('hero.title')} - {t('hero.subtitle')}
          </p>

          {/* Buttons with staggered animations */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="gradient-button animate-slide-right opacity-0 hover:animate-pulse" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a 
              href="https://github.com/zeta-develop" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-full bg-card text-card-foreground border border-border
                       font-medium transition-all duration-300 flex items-center gap-2 hover:bg-muted hover:scale-105 
                       animate-slide-right opacity-0 hover:shadow-lg hover:border-primary/30"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              <Github className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Background elements with enhanced animations */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-grid-white/[0.02]' 
            : 'bg-grid-dark/[0.02]'
        } animate-fade-in`} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-soft" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
