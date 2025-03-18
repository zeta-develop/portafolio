
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 border border-border/50 rounded-full p-1">
      <button
        onClick={() => setLanguage('es')}
        className={`text-xs font-medium px-2 py-1 rounded-full transition-all ${
          language === 'es'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'hover:bg-secondary/80'
        }`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`text-xs font-medium px-2 py-1 rounded-full transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'hover:bg-secondary/80'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
