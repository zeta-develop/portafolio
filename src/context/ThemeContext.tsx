
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Create the context with a default value to prevent the "must be used within a Provider" error
const defaultThemeContext: ThemeContextType = {
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark theme
  const [mounted, setMounted] = useState(false);

  // Update state when mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    console.log('ThemeProvider mounted');
  }, []);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    if (!mounted) return;
    
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      console.log('Theme loaded from localStorage:', savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
      console.log('Theme set based on system preference: dark');
    }
  }, [mounted]);

  // Update document when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Store in localStorage
    localStorage.setItem('theme', theme);
    
    // Log for debugging
    console.log('Theme applied to document:', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('Toggling theme from', prevTheme, 'to', newTheme);
      return newTheme;
    });
  };

  // Create the context value
  const contextValue = {
    theme,
    setTheme,
    toggleTheme
  };

  console.log('ThemeProvider rendering with theme:', theme);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  console.log('useTheme called, current theme:', context.theme);
  return context;
}
