
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zeta-develop', label: 'GitHub' },
    { icon: Mail, href: 'mailto:ronaldadantellez@gmail.com', label: 'Email' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark'
            ? 'py-2 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg' 
            : 'py-2 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Enhanced Logo */}
        <a 
          href="#home" 
          className="group flex items-center space-x-2 transition-all hover:opacity-80"
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-primary to-purple-600' 
              : 'bg-gradient-to-br from-primary to-blue-600'
          } group-hover:scale-105`}>
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-primary tracking-tight hidden sm:block">
            R.A.T.R.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <ul className="flex items-center space-x-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  } after:content-[''] after:absolute after:w-0 after:h-0.5 
                  after:bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 
                  after:bg-primary after:transition-all after:duration-300 
                  hover:after:w-6`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Social Links - Desktop */}
          <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-border/30">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-white/10'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-2 ml-4">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </nav>
        
        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 lg:hidden">
          <LanguageSwitch />
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-200 ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-white/10'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        style={{ top: isScrolled ? '60px' : '80px' }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-black/50 backdrop-blur-sm' 
              : 'bg-gray-900/20 backdrop-blur-sm'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`relative ${
            theme === 'dark' 
              ? 'bg-black/95 border-white/10' 
              : 'bg-white/95 border-gray-200/50'
          } backdrop-blur-lg border-b shadow-xl`}
        >
          <nav className="container mx-auto px-4 py-6">
            {/* Navigation Links */}
            <ul className="space-y-2 mb-6">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links - Mobile */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-border/30">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-white/10'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
