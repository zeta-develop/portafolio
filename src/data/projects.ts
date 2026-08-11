export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'marca' | 'cliente';
export type ProjectType = 'personal' | 'cliente';

export interface Project {
  id: number;
  name: string;
  description: string;
  category: Exclude<ProjectCategory, 'cliente'> | 'cliente';
  type: ProjectType;
  image?: string;
  topics: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'PrestaFacil',
    description: 'Plataforma multiplataforma (web y móvil Android) para la administración de préstamos: control de clientes, cobros diarios, gestión de caja, planificación de rutas de cobro y generación de recibos PDF. Concebida para prestamistas y cobradores, con indicadores en tiempo real.',
    category: 'cliente',
    type: 'cliente',
    image: '/projects/prestafacil.webp',
    topics: ['Next.js', 'Supabase', 'Capacitor', 'Android'],
    github: 'https://github.com/zeta-develop/PrestaFacil',
  },
  {
    id: 2,
    name: 'PrestaFacil SaaS',
    description: 'Versión SaaS multi-tenant de la plataforma de gestión de préstamos: autenticación por tenant, esquema de base de datos compartido con aislamiento de datos y métricas por cliente. Arquitectura de microservicios de API.',
    category: 'fullstack',
    type: 'personal',
    topics: ['Next.js', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/zeta-develop/prestafacil-saas',
    demo: 'https://prestafacil-saas-iota.vercel.app',
  },
  {
    id: 3,
    name: 'PrestaFacil Mobile SaaS',
    description: 'Experiencia móvil nativa (Android) de la plataforma de préstamos SaaS, enfocada en cobradores en terreno.',
    category: 'frontend',
    type: 'personal',
    topics: ['Kotlin', 'Android', 'Capacitor'],
    github: 'https://github.com/zeta-develop/PrestaFacil-Mobile-SaaS',
    demo: 'https://presta-facil-mobile-saa-s.vercel.app',
  },
  {
    id: 4,
    name: 'LegendX',
    description: 'Frontend del sistema LegendsX de gestión para negocios; interfaz moderna y responsiva para operaciones y administración.',
    category: 'frontend',
    type: 'personal',
    topics: ['TypeScript', 'React'],
    github: 'https://github.com/zeta-develop/Legendx',
    demo: 'https://legendx-eg9x.vercel.app',
  },
  {
    id: 5,
    name: 'Portafolio — Nexo Digital',
    description: 'Sitio oficial de la agencia Nexo Digital: portafolio de servicios, proyectos de su fundador y espacio para proyectos de clientes. Optimizado para rendimiento y SEO, 100% en español, contacto por WhatsApp.',
    category: 'frontend',
    type: 'personal',
    topics: ['React', 'TypeScript', 'Tailwind', 'Astro'],
    github: 'https://github.com/zeta-develop/portafolio',
    demo: 'https://ronaldtellez.dev',
    featured: true,
  },
];

export default projects;