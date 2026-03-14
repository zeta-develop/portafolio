import React, { useEffect, useRef } from 'react';
import { Code, Briefcase, Github, GraduationCap, Award, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef} className="section-padding relative bg-background opacity-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300">
                {t('about.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('about.title')}</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">{t('about.description')}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">{t('about.education')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300 group">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{t('about.degree1')}</h4>
                    <p className="text-muted-foreground">{t('about.school1')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300 group">
                  <div className="mt-1 p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">{t('about.degree2')}</h4>
                    <p className="text-muted-foreground">{t('about.school2')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <div className="text-3xl font-bold mb-2 text-primary">1+</div>
                <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <div className="text-3xl font-bold mb-2 text-primary">3+</div>
                <div className="text-sm text-muted-foreground">{t('about.projects')}</div>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                <div className="text-3xl font-bold mb-2 text-primary">4+</div>
                <div className="text-sm text-muted-foreground">{t('about.technologies')}</div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://github.com/zeta-develop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-soft transition-colors duration-300 hover:bg-primary/90 hover:shadow-soft-lg group"
              >
                <Github className="mr-2 h-5 w-5" />
                {t('hero.viewGithub')}
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card backdrop-blur-md border border-border shadow-soft overflow-hidden rounded-2xl group-hover:shadow-soft-lg transition-shadow duration-300">
                <img
                  src="https://avatars.githubusercontent.com/u/80638821?v=4&size=720"
                  alt="Ronald Tellez"
                  className="w-full h-auto rounded-2xl"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />

                <div className="absolute top-4 left-4 bg-card backdrop-blur-md border border-border p-3 rounded-full shadow-soft transition-colors duration-300 hover:bg-muted">
                  <Code className="w-5 h-5 text-primary" />
                </div>

                <div className="absolute bottom-4 right-4 bg-card backdrop-blur-md border border-border p-3 rounded-full shadow-soft transition-colors duration-300 hover:bg-muted">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-card backdrop-blur-md border border-border px-6 py-4 rounded-xl shadow-soft-lg">
                  <h3 className="font-medium text-center text-foreground">{t('hero.title')}</h3>
                  <p className="text-muted-foreground text-sm text-center">Ronald Tellez</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-card backdrop-blur-md border border-border p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors duration-300">
                  <Rocket className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t('about.professionalExperience')}</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 pb-1 hover:border-primary/60 transition-colors duration-300">
                  <h4 className="font-medium text-foreground hover:text-primary transition-colors duration-300">{t('about.jobTitle1')}</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {t('about.jobCompany1')} • {t('about.jobPeriod1')}
                  </p>
                  <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t('about.jobDescription1')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
