
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SoftSkill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Technical skills data
  const technicalSkills: Skill[] = [
    { name: 'JavaScript', level: 90, icon: '💻' },
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 80, icon: '🔄' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'TypeScript', level: 75, icon: '📝' },
    { name: 'Next.js', level: 80, icon: '⚡' },
    { name: 'SQL', level: 70, icon: '🗄️' },
    { name: 'Python', level: 65, icon: '🐍' },
    { name: 'Git', level: 85, icon: '📊' },
    { name: 'RESTful APIs', level: 90, icon: '🔌' },
  ];
  
  // Soft skills data
  const softSkills: SoftSkill[] = [
    { name: 'Teamwork', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Adaptability', level: 80 },
    { name: 'Time Management', level: 75 },
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
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
    <section id="skills" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-primary/10 rounded-full">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Technical Skills */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-6">{t('skills.technical')}</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex items-center mb-2">
                    <span className="mr-2 text-xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-secondary/50"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-6 animate-on-scroll opacity-0">{t('skills.soft')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-item glass glass-dark rounded-2xl p-6 shadow-soft animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-4">
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-secondary/50"
                  />
                </div>
              ))}
            </div>
            
            {/* Skills Summary */}
            <div className="mt-8 glass glass-dark rounded-2xl p-6 shadow-soft animate-on-scroll opacity-0">
              <p className="text-foreground/80">
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
