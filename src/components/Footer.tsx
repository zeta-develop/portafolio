import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/profile';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="px-6 md:px-10 lg:px-16 pb-8">
      <div className="max-w-6xl mx-auto rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} {profile.displayName}. {t('footer.rights')}.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-accent" />
            Hecho en Astro + React
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-110 hover:bg-primary/90"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
