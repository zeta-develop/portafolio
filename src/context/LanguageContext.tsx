import React, { createContext, useContext } from 'react';
import esTranslations from '../translations/es';

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // El sitio es 100% en español: se mantiene el contexto para conservar la API `t()`
  // y no reescribir todos los componentes. El inglés fue retirado por decisión de marca.
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: Record<string, unknown> | string = esTranslations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k] as Record<string, unknown> | string;
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Translation key not found: ${key}`);
        }
        return key;
      }
    }

    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}