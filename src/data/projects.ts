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
    name: 'Eshop - Admin',
    description: 'Eshop es un SaaS de comercio electrónico e inventario multi-tenant diseñado para permitir que múltiples negocios gestionen sus tiendas desde un sistema centralizado mientras sus datos se encuentran totalmente aislados.',
    category: 'fullstack',
    type: 'personal',
    image: '/projects/Eshop.webp',
    topics: ['Next.js', 'Supabase', 'API'],
    featured: true,
    demo: 'https://eshop.zetastudio.space',
  },
  {
    id: 2,
    name: 'Zeta - Studio',
    description: 'Zeta Studio es la marca de desarrollo de software donde Nexo Digital pone sus servicios a disposición de tus grandes ideas.',
    category: 'marca',
    type: 'personal',
    image: '/projects/Eshop.webp',
    topics: ['Node.js', 'PostgreSQL'],
    featured: false,
    github: 'https://github.com/zeta-develop',
    demo: 'https://zetastudio.space',
  },
  {
    id: 3,
    name: 'Sitio Web Corporativo',
    description: 'Sitio web institucional para un negocio local: presencia digital moderna, rápida y optimizada para SEO.',
    category: 'fullstack',
    type: 'cliente',
    topics: ['React', 'Tailwind CSS', 'SEO'],
    featured: false,
  },
  {
    id: 4,
    name: 'App Móvil Android',
    description: 'Aplicación Android a la medida para mejorar la operación de un comercio: catálogo, pedidos y notificaciones.',
    category: 'frontend',
    type: 'cliente',
    topics: ['Kotlin', 'Android', 'Firebase'],
    featured: false,
  },
];

export default projects;