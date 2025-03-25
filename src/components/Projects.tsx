
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Code, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import projects from '@/data/projects';

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);
  
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

  // Handle image load
  const handleImageLoad = (projectId: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  // Filter projects based on selected category
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.topics.includes(selectedCategory);
  });

  // Project filter categories
  const categories = [
    { id: 'all', label: t('projects.filter.all') },
    { id: 'frontend', label: t('projects.filter.frontend') },
    { id: 'backend', label: t('projects.filter.backend') },
    { id: 'fullstack', label: t('projects.filter.fullstack') },
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-primary/10 rounded-full">
            {t('projects.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
        
        {/* Filter Categories */}
        <div className="flex justify-center flex-wrap gap-2 mb-10 animate-on-scroll opacity-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as ProjectCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-lg text-foreground/70">No projects found in this category</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="animate-on-scroll opacity-0 group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image with Skeleton Loading */}
                <div className="w-full h-48 overflow-hidden bg-muted">
                  {project.image && (
                    <>
                      {!loadedImages[project.id] && (
                        <div className="w-full h-full flex items-center justify-center">
                          <Skeleton className="w-full h-48" />
                        </div>
                      )}
                      <img 
                        src={`${project.image}?w=600&h=400&auto=format&fit=crop`}
                        alt={project.name}
                        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                          loadedImages[project.id] ? 'block' : 'hidden'
                        }`}
                        onLoad={() => handleImageLoad(project.id)}
                        loading="lazy"
                      />
                    </>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium line-clamp-1 mb-0">{project.name}</CardTitle>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current mr-1" />
                        <span className="text-xs">Featured</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-2">
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-3 h-[4.5rem]">
                    {project.description || "No description available"}
                  </p>
                  
                  {/* Project Topics */}
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.topics.slice(0, 3).map((topic) => (
                        <span 
                          key={topic}
                          className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {project.topics.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-primary/5 rounded-full">
                          +{project.topics.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="pt-0 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Code className="h-4 w-4 mr-1.5" />
                    {t('projects.viewCode')}
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      {t('projects.viewProject')}
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        
        {/* View More Link */}
        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <a 
            href="https://github.com/zeta-develop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground 
                      font-medium transition-colors hover:bg-secondary/80"
          >
            <Code className="mr-2 h-5 w-5" />
            {t('projects.viewMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
