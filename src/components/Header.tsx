
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: t('navigation.home'), href: '#home' },
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.projects'), href: '#projects' },
    { label: t('navigation.skills'), href: '#skills' },
    { label: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-black/80 backdrop-blur-md border-b border-white/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="font-bold text-xl text-primary tracking-tight transition-all hover:opacity-80"
        >
          R.A.T.R.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="relative text-sm font-medium transition-colors hover:text-primary
                    after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                    after:bottom-[-4px] after:left-0 after:bg-primary 
                    after:origin-bottom-right after:transition-transform 
                    after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitch />
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground rounded-full hover:bg-secondary/80 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-lg transition-transform duration-300 ease-in-out transform md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col h-full p-8">
          <ul className="flex flex-col space-y-6 items-center pt-10">
            {navigationItems.map((item) => (
              <li key={item.href} className="w-full">
                <a 
                  href={item.href}
                  className="block py-2 text-center text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
