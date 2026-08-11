import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, Code, Star, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import projects from "@/data/projects";
import { profile } from '@/data/profile';

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack" | "marca";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const whatsappLink = `${profile.whatsapp}?text=${encodeURIComponent(
    'Hola Nexo Digital, quiero contarles mi proyecto.'
  )}`;

  // Animation on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animate-fade-in");
            section.classList.remove("opacity-0");
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Preload images when component mounts
  useEffect(() => {
    projects.forEach((project) => {
      if (project.image) {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [project.id]: true }));
        };
        img.onerror = () => {
          setImageErrors(prev => ({ ...prev, [project.id]: true }));
        };
        img.src = project.image;
      }
    });
  }, []);

  // Handle image load
  const handleImageLoad = (projectId: number) => {
    setLoadedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  // Handle image error
  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  // Personal projects (filtered by category)
  const personalProjects = projects.filter((project) => project.type === "personal");
  const filteredProjects = personalProjects.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.category === selectedCategory;
  });

  // Client projects (filtered by category too)
  const clientProjects = projects.filter((project) => project.type === "cliente");
  const filteredClientProjects = clientProjects.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.category === selectedCategory;
  });

  // Project filter categories
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t("projects.filter.all") },
    { id: "frontend", label: t("projects.filter.frontend") },
    { id: "backend", label: t("projects.filter.backend") },
    { id: "fullstack", label: t("projects.filter.fullstack") },
    { id: "marca", label: t("projects.filter.marca") },
  ];

  const renderProjectCard = (project: { id: number; name: string; description: string; image?: string; topics: string[]; github?: string; demo?: string; featured?: boolean; type: string }) => (
    <Card
      key={project.id}
      className={`group overflow-hidden transition-all duration-300 hover:shadow-soft-lg ${theme === 'dark'
          ? 'bg-gray-900/50 border-gray-800 hover:border-primary/50 shadow-lg hover:shadow-xl'
          : 'bg-white border-gray-200 hover:border-primary/30 shadow-sm hover:shadow-lg'
        }`}
    >
      {/* Project Image with improved loading */}
      <div className={`w-full h-48 overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {project.image && !imageErrors[project.id] ? (
          <>
            {!loadedImages[project.id] && (
              <div className="w-full h-full flex items-center justify-center">
                <Skeleton className="w-full h-48" />
              </div>
            )}
            <img
              src={project.image}
              alt={project.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[project.id] ? "opacity-100" : "opacity-0"}`}
              onLoad={() => handleImageLoad(project.id)}
              onError={() => handleImageError(project.id)}
              loading="lazy"
            />
          </>
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-400'}`}>
            <Code className="w-12 h-12" />
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className={`text-lg font-semibold line-clamp-1 mb-0 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {project.name}
          </CardTitle>

          {/* Featured / Client Badge */}
          {project.featured && (
            <div className="flex items-center text-yellow-500 shrink-0">
              <Star className="h-4 w-4 fill-current mr-1" />
              <span className="text-xs font-medium">{t('projects.featured')}</span>
            </div>
          )}
          {!project.featured && project.type === "cliente" && (
            <div className="flex items-center shrink-0">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                {t('projects.clientBadge')}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className={`text-sm mb-4 line-clamp-3 h-[4.5rem] transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description || t('projects.noDescription')}
        </p>

        {/* Project Topics */}
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {project.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${theme === 'dark'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-primary/10 text-primary border border-primary/20'
                  }`}
              >
                {topic}
              </span>
            ))}
            {project.topics.length > 3 && (
              <span className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 border border-gray-600'
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}>
                +{project.topics.length - 3}
              </span>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'}`}
          >
            <Code className="h-4 w-4 mr-1.5" />
            {t("projects.viewCode")}
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'}`}
          >
            <ExternalLink className="h-4 w-4 mr-1.5" />
            {t("projects.viewProject")}
          </a>
        )}
        {!project.github && !project.demo && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'}`}
          >
            <MessageCircle className="h-4 w-4 mr-1.5" />
            {t("contact.whatsapp")}
          </a>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`section-padding transition-colors duration-300 opacity-0 ${theme === 'dark'
          ? 'bg-gradient-to-b from-black via-gray-900 to-black'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
        }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className={`inline-block py-2 px-4 mb-4 text-sm font-medium rounded-full transition-colors ${theme === 'dark'
              ? 'bg-primary/10 text-primary border border-primary/20'
              : 'bg-primary/10 text-primary border border-primary/30'
            }`}>
            {t("projects.subtitle")}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as ProjectCategory)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : theme === 'dark'
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Personal Projects Heading */}
        <h3 className={`text-xl md:text-2xl font-bold mb-8 text-center transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {t("projects.personal")}
        </h3>

        {/* Personal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('projects.emptyCategory')}
              </p>
            </div>
          ) : (
            filteredProjects.map((project) => renderProjectCard(project))
          )}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors duration-300 ${theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
              }`}
          >
            <Code className="mr-2 h-5 w-5" />
            {t("projects.viewMore")}
          </a>
        </div>

        {/* Client Projects Section */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t("projects.clientsTitle")}
            </h3>
            <p className={`text-base transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t("projects.clientsSubtitle")}
            </p>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredClientProjects.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('projects.emptyCategory')}
                </p>
              </div>
            ) : (
              filteredClientProjects.map((project) => renderProjectCard(project))
            )}
          </div>

          {/* Client CTA */}
          <div className={`mt-14 rounded-2xl border p-8 md:p-10 text-center transition-colors ${theme === 'dark'
              ? 'bg-gray-900/60 border-gray-800'
              : 'bg-white border-gray-200'
            }`}>
            <h4 className={`text-xl md:text-2xl font-bold mb-2 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t("projects.clientsCta")}
            </h4>
            <p className={`mb-6 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t("projects.clientsCtaText")}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium shadow-soft transition-all duration-300 hover:bg-accent/90 hover:shadow-soft-lg group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("contact.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;