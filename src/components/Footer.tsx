
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/70">
              &copy; {currentYear} Ronald Tellez. {t('footer.rights')}.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-foreground/70 mr-2">
              {t('footer.madeWith')} 
              <Heart className="h-3 w-3 inline mx-1 text-red-500" />
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-primary text-primary-foreground 
                     transition-transform duration-300 hover:scale-110"
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
