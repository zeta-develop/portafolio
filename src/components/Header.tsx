import React, { useEffect, useState } from 'react';
import { Code2, Github, Mail, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';
import { profile } from '@/data/profile';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigationItems = [
    { label: t('navigation.home'), href: '#home' },
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.projects'), href: '#projects' },
    { label: t('navigation.skills'), href: '#skills' },
    { label: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-card/85 border-border shadow-soft-lg'
            : 'backdrop-blur-md bg-card/65 border-border/60'
        }`}
      >
        <div className="h-16 px-4 md:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-soft">
              <Code2 className="size-5" />
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="font-semibold text-foreground">Ronald Tellez</p>
              <p className="text-xs text-muted-foreground">Portfolio 2026</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
            <LanguageSwitch />
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitch />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen((state) => !state)}
              className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`lg:hidden border-t ${theme === 'dark' ? 'border-white/10' : 'border-border/80'}`}>
            <nav className="p-3 flex flex-col gap-1">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
