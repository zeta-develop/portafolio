import React, { useEffect, useRef } from 'react';
import { Code, Briefcase, Github, GraduationCap, Award, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useGitHubUser } from '@/hooks/useGitHub';
const About: React.FC = () => {
  const {
    t
  } = useLanguage();
  const {
    data: githubUser,
    isLoading
  } = useGitHubUser();
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
  return <section id="about" ref={sectionRef} className="section-padding relative bg-secondary/30">
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
                Soy Ronald Tellez, un desarrollador de software especializado en crear experiencias web atractivas y funcionales. Cuento con una sólida formación en tecnologías modernas de desarrollo web y más de 5 años de experiencia en el sector.
              </p>
              
              <p className="text-lg">
                Mi enfoque se centra en construir soluciones tecnológicas que no solo cumplan con los requisitos técnicos, sino que también ofrezcan una experiencia de usuario excepcional. Me apasiona el aprendizaje continuo y me mantengo actualizado con las últimas tendencias y mejores prácticas en desarrollo web.
              </p>
              
              <p className="text-lg">
                En mi trayectoria profesional, he trabajado en proyectos diversos, desde aplicaciones web complejas hasta sitios corporativos, colaborando con equipos multidisciplinarios para entregar soluciones de alta calidad.
              </p>
            </div>
            
            <div className="mt-8 animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-4">Formación Académica</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ingeniería en Sistemas Computacionales</h4>
                    <p className="text-foreground/70">Universidad Tecnológica</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Certificación en Desarrollo Web Full Stack</h4>
                    <p className="text-foreground/70">Academia de Desarrollo Web</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-10 animate-on-scroll opacity-0">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm text-foreground/70">{t('about.experience')}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm text-foreground/70">{t('about.projects')}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">20+</div>
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
                <h3 className="text-xl font-bold">Experiencia Profesional</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 pb-1">
                  <h4 className="font-medium">Desarrollador Full Stack Senior</h4>
                  <p className="text-sm text-foreground/70 mb-1">Innovatech Solutions • 2020 - Presente</p>
                  <p className="text-sm">Desarrollo de aplicaciones web empresariales utilizando React, Node.js y bases de datos SQL/NoSQL. Implementación de arquitecturas escalables y optimización de rendimiento.</p>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-4 pb-1">
                  <h4 className="font-medium">Desarrollador Frontend</h4>
                  <p className="text-sm text-foreground/70 mb-1">WebTech Labs • 2018 - 2020</p>
                  <p className="text-sm">Diseño y desarrollo de interfaces de usuario responsivas utilizando HTML5, CSS3, JavaScript y frameworks modernos como React.</p>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium">Desarrollador Web Junior</h4>
                  <p className="text-sm text-foreground/70 mb-1">Digital Solutions • 2016 - 2018</p>
                  <p className="text-sm">Colaboración en el desarrollo de sitios web corporativos y tiendas online, implementando funcionalidades y realizando mantenimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;