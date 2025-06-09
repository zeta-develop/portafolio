
import React, { useEffect, useRef } from 'react';
import { Code, Briefcase, Github, GraduationCap, Award, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Enhanced animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }, index * 100);
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
    <section id="about" ref={sectionRef} className="section-padding relative bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* About Content */}
          <div className="lg:w-1/2">
            <div className="mb-8 animate-on-scroll opacity-0">
              <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300">
                {t('about.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground hover:text-primary transition-colors duration-300">{t('about.title')}</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6 transition-all duration-500 hover:w-32"></div>
            </div>
            
            <div className="space-y-4 animate-on-scroll opacity-0">
              <p className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 leading-relaxed">
                {t('about.description')}
              </p>
            </div>
            
            <div className="mt-8 animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-4 text-foreground">{t('about.education')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-102 cursor-pointer group">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                    <GraduationCap className="w-5 h-5 text-primary group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{t('about.degree1')}</h4>
                    <p className="text-muted-foreground">{t('about.school1')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-102 cursor-pointer group">
                  <div className="mt-1 p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110">
                    <Award className="w-5 h-5 text-accent group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">{t('about.degree2')}</h4>
                    <p className="text-muted-foreground">{t('about.school2')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-10 animate-on-scroll opacity-0">
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-110 cursor-pointer group">
                <div className="text-3xl font-bold mb-2 text-primary group-hover:animate-pulse">1+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{t('about.experience')}</div>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-110 cursor-pointer group">
                <div className="text-3xl font-bold mb-2 text-primary group-hover:animate-pulse">3+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{t('about.projects')}</div>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-110 cursor-pointer group">
                <div className="text-3xl font-bold mb-2 text-primary group-hover:animate-pulse">4+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{t('about.technologies')}</div>
              </div>
            </div>
            
            <div className="mt-8 animate-on-scroll opacity-0">
              <a href="https://github.com/zeta-develop" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground 
                          font-medium shadow-soft transition-all duration-300 hover:bg-primary/90 hover:shadow-soft-lg 
                          hover:translate-y-[-2px] hover:scale-105 group">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                {t('hero.viewGithub')}
              </a>
            </div>
          </div>
          
          {/* About Image */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card backdrop-blur-md border border-border shadow-soft overflow-hidden rounded-2xl group-hover:shadow-soft-lg transition-all duration-500 hover:scale-105">
                <img 
                  src="https://avatars.githubusercontent.com/u/80638821?v=4&size=720"
                  alt="Ronald Tellez" 
                  className="w-full h-auto rounded-2xl transform transition-transform hover:scale-110 duration-700"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />
                
                {/* Floating badges with enhanced animations */}
                <div className="absolute top-4 left-4 bg-card backdrop-blur-md border border-border p-3 rounded-full shadow-soft hover:scale-110 hover:rotate-12 transition-all duration-300 animate-float">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                
                <div className="absolute bottom-4 right-4 bg-card backdrop-blur-md border border-border p-3 rounded-full shadow-soft hover:scale-110 hover:rotate-12 transition-all duration-300 animate-float" style={{ animationDelay: '2s' }}>
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                
                {/* Info card with hover animation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-card backdrop-blur-md border border-border px-6 py-4 rounded-xl shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <h3 className="font-medium text-center text-foreground">{t('hero.title')}</h3>
                  <p className="text-muted-foreground text-sm text-center">Ronald Tellez</p>
                </div>
              </div>
            </div>
            
            {/* Experience Section with enhanced animations */}
            <div className="mt-12 bg-card backdrop-blur-md border border-border p-6 rounded-xl shadow-soft animate-on-scroll opacity-0 hover:shadow-soft-lg hover:scale-102 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors duration-300 hover:scale-110">
                  <Rocket className="w-5 h-5 text-accent hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-foreground hover:text-accent transition-colors duration-300">{t('about.professionalExperience')}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 pb-1 hover:border-primary/60 transition-colors duration-300 hover:translate-x-2">
                  <h4 className="font-medium text-foreground hover:text-primary transition-colors duration-300">{t('about.jobTitle1')}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{t('about.jobCompany1')} • {t('about.jobPeriod1')}</p>
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
