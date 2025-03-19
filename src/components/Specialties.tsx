
import React from 'react';
import { Code, Server, Cpu } from 'lucide-react';

const Specialties: React.FC = () => {
  const specialties = [
    {
      title: 'Desarrollo Web',
      description: 'Creación de aplicaciones web modernas utilizando Next.js, React y TypeScript',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Sistemas en la Nube',
      description: 'Diseño e implementación de soluciones de facturación y gestión en la nube',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Electrónica y Automatización',
      description: 'Desarrollo de sistemas de control electrónico e instrumentación industrial',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-16" style={{ background: 'linear-gradient(to bottom, #090718, #0D0D20)' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-300 glow-text">
          Áreas de Especialización
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card">
              <div className="specialty-icon">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
              <p className="text-muted-foreground">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
