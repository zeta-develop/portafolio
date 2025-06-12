
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Skill {
  name: string;
  icon: string;
}

interface SoftSkill {
  name: string;
}

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Technical skills data
  const technicalSkills: Skill[] = [
    { name: 'JavaScript', icon: '💻' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🔄' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'TypeScript', icon: '📝' },
    { name: 'Next.js', icon: '⚡' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Git', icon: '📊' },
    { name: 'RESTful APIs', icon: '🔌' },
  ];
  
  // Soft skills data
  const softSkills: SoftSkill[] = [
    { name: 'Teamwork' },
    { name: 'Communication' },
    { name: 'Problem Solving' },
    { name: 'Adaptability' },
    { name: 'Time Management' },
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
            }, index * 150);
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
    <section 
      id="skills" 
      ref={sectionRef} 
      className="section-padding transition-colors duration-300 bg-background"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-accent-subtle rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300 hover:scale-105">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground hover:text-primary transition-colors duration-300">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto transition-all duration-500 hover:w-32"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Technical Skills */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-6 text-foreground hover:text-primary transition-colors duration-300">{t('skills.technical')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="skill-item flex items-center p-3 bg-card border border-border rounded-lg shadow-soft transition-all duration-300 hover:bg-muted hover:scale-110 hover:rotate-1 hover:shadow-soft-lg cursor-pointer group animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${index * 50}ms`, animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="text-2xl mr-3 group-hover:animate-bounce transition-transform duration-300">{skill.icon}</span>
                  <span className="font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-6 animate-on-scroll opacity-0 text-foreground hover:text-accent transition-colors duration-300">{t('skills.soft')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-item bg-card border border-border rounded-2xl p-6 shadow-soft animate-on-scroll opacity-0 text-center transition-all duration-300 hover:bg-muted hover:scale-105 hover:shadow-soft-lg cursor-pointer group hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 100}ms`, animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <h4 className="font-medium text-card-foreground group-hover:text-accent transition-colors duration-300">{skill.name}</h4>
                </div>
              ))}
            </div>
            
            {/* Skills Summary */}
            <div className="mt-8 bg-card border border-border rounded-2xl p-6 shadow-soft animate-on-scroll opacity-0 hover:shadow-soft-lg hover:scale-102 transition-all duration-300">
              <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                {t('skills.summary')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
