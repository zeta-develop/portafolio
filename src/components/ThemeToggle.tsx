
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <Sun
          className={`w-full h-full absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
            theme === 'dark' ? 'rotate-[-100deg] scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon
          className={`w-full h-full absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
            theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-[100deg] scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
