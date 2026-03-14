import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import TypewriterText from '@/components/TypewriterText';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-36 pb-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-5">
            <Sparkles className="size-4" /> Diseñado para causar impacto
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
            <TypewriterText text={`${t('hero.greeting')} Ronald Adan Tellez Ramos`} speed={80} className="text-foreground" />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            {t('hero.title')} · {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="gradient-button">
              {t('hero.cta')}
              <ArrowRight className="size-5" />
            </a>
            <a
              href="https://github.com/zeta-develop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition-colors"
            >
              <Download className="size-5" /> Ver código
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
          <div className="relative rounded-3xl border border-border bg-card/85 backdrop-blur-xl p-6 shadow-soft-lg">
            <img
              alt="Ronald Tellez"
              src="https://avatars.githubusercontent.com/u/80638821?v=4&size=720"
              className="w-full rounded-2xl object-cover aspect-square"
              loading="eager"
              width="480"
              height="480"
            />
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-muted p-3">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Proyectos</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <p className="text-2xl font-bold text-primary">1+</p>
                <p className="text-xs text-muted-foreground">Años</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Pasión</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
