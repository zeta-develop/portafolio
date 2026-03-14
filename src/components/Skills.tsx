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

  const softSkills: SoftSkill[] = [
    { name: 'Teamwork' },
    { name: 'Communication' },
    { name: 'Problem Solving' },
    { name: 'Adaptability' },
    { name: 'Time Management' },
  ];

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
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding transition-colors duration-300 bg-background opacity-0"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-accent-subtle rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-6 text-foreground">{t('skills.technical')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item flex items-center p-3 bg-card border border-border rounded-lg shadow-soft transition-colors duration-300 hover:bg-muted hover:shadow-soft-lg cursor-pointer group"
                >
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <span className="font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-6 text-foreground">{t('skills.soft')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item bg-card border border-border rounded-2xl p-6 shadow-soft text-center transition-colors duration-300 hover:bg-muted hover:shadow-soft-lg cursor-pointer group"
                >
                  <h4 className="font-medium text-card-foreground group-hover:text-accent transition-colors duration-300">{skill.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
              <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">{t('skills.summary')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
