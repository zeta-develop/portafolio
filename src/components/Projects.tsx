
import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, Code, Star } from "lucide-react";
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

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Preload images when component mounts
  useEffect(() => {
    projects.forEach((project) => {
      if (project.image) {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => ({
            ...prev,
            [project.id]: true
          }));
        };
        img.onerror = () => {
          setImageErrors(prev => ({
            ...prev,
            [project.id]: true
          }));
        };
        img.src = project.image;
      }
    });
  }, []);

  // Handle image load
  const handleImageLoad = (projectId: number) => {
    setLoadedImages((prev) => ({
      ...prev,
      [projectId]: true,
    }));
  };

  // Handle image error
  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [projectId]: true,
    }));
  };

  // Filter projects based on selected category
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.topics.includes(selectedCategory);
  });

  // Project filter categories
  const categories = [{ id: "all", label: t("projects.filter.all") }];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`section-padding transition-colors duration-300 ${theme === 'dark'
          ? 'bg-gradient-to-b from-black via-gray-900 to-black'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
        }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <span className={`inline-block py-2 px-4 mb-4 text-sm font-medium rounded-full transition-colors ${theme === 'dark'
              ? 'bg-primary/10 text-primary border border-primary/20'
              : 'bg-primary/10 text-primary border border-primary/30'
            }`}>
            {t("projects.subtitle")}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center flex-wrap gap-3 mb-12 animate-on-scroll opacity-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as ProjectCategory)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : theme === 'dark'
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                No projects found in this category
              </p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`animate-on-scroll opacity-0 group overflow-hidden transition-all duration-300 hover:scale-105 ${theme === 'dark'
                    ? 'bg-gray-900/50 border-gray-800 hover:border-primary/50 shadow-lg hover:shadow-xl'
                    : 'bg-white border-gray-200 hover:border-primary/30 shadow-sm hover:shadow-lg'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image with improved loading */}
                <div className={`w-full h-48 overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
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
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages[project.id] ? "opacity-100" : "opacity-0"
                          }`}
                        onLoad={() => handleImageLoad(project.id)}
                        onError={() => handleImageError(project.id)}
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                      <Code className="w-12 h-12" />
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg font-semibold line-clamp-1 mb-0 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                      {project.name}
                    </CardTitle>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current mr-1" />
                        <span className="text-xs font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className={`text-sm mb-4 line-clamp-3 h-[4.5rem] transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    {project.description || "No description available"}
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
                      className={`flex items-center text-sm font-medium transition-colors ${theme === 'dark'
                          ? 'text-gray-400 hover:text-primary'
                          : 'text-gray-600 hover:text-primary'
                        }`}
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
                      className={`flex items-center text-sm font-medium transition-colors ${theme === 'dark'
                          ? 'text-gray-400 hover:text-primary'
                          : 'text-gray-600 hover:text-primary'
                        }`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      {t("projects.viewProject")}
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
            className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 ${theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
              }`}
          >
            <Code className="mr-2 h-5 w-5" />
            {t("projects.viewMore")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
