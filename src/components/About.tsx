
import React, { useEffect, useRef } from 'react';
import { Code, Briefcase, Github, GraduationCap, Award, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative bg-secondary/30" >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* About Content */}
          <div className="lg:w-1/2">
            <div className="mb-8 animate-on-scroll opacity-0">
              <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-primary/10 rounded-full">
                {t('about.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>
            
            <div className="space-y-4 animate-on-scroll opacity-0">
              <p className="text-lg">
                {t('about.description')}
              </p>
            </div>
            
            <div className="mt-8 animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-4">{t('about.education')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('about.degree1')}</h4>
                    <p className="text-foreground/70">{t('about.school1')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('about.degree2')}</h4>
                    <p className="text-foreground/70">{t('about.school2')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-10 animate-on-scroll opacity-0">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">1+</div>
                <div className="text-sm text-foreground/70">{t('about.experience')}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-sm text-foreground/70">{t('about.projects')}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-sm text-foreground/70">{t('about.technologies')}</div>
              </div>
            </div>
            
            <div className="mt-8 animate-on-scroll opacity-0">
              <a href="https://github.com/zeta-develop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground 
                          font-medium shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:translate-y-[-2px]">
                <Github className="mr-2 h-5 w-5" />
                {t('hero.viewGithub')}
              </a>
            </div>
          </div>
          
          {/* About Image */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative glass glass-dark overflow-hidden rounded-2xl shadow-soft-lg">
                <img 
                  src="https://avatars.githubusercontent.com/u/80638821?v=4&size=720"
                  alt="Ronald Tellez" 
                  className="w-full h-auto rounded-2xl transform transition-transform hover:scale-105 duration-700"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 glass glass-dark p-3 rounded-full shadow-soft">
                  <Code className="w-5 h-5" />
                </div>
                
                <div className="absolute bottom-4 right-4 glass glass-dark p-3 rounded-full shadow-soft">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                {/* Info card */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass glass-dark px-6 py-4 rounded-xl shadow-soft-lg">
                  <h3 className="font-medium text-center">Ronald Tellez</h3>
                  <p className="text-foreground/70 text-sm text-center">{t('hero.title')}</p>
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="mt-12 glass glass-dark p-6 rounded-xl shadow-soft animate-on-scroll opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t('about.professionalExperience')}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 pb-1">
                  <h4 className="font-medium">{t('about.jobTitle1')}</h4>
                  <p className="text-sm text-foreground/70 mb-1">{t('about.jobCompany1')} • {t('about.jobPeriod1')}</p>
                  <p className="text-sm">{t('about.jobDescription1')}</p>
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
