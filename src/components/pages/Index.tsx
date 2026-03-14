import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Specialties from '@/components/Specialties';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <div className="absolute -top-16 left-0 h-72 w-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute top-[35%] right-0 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <Header />
        <main className="flex-grow">
          <Hero />
          <Projects />
          <About />
          <Specialties />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
