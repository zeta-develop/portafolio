
export interface Project {
  id: number;
  name: string;
  description: string;
  image?: string;
  topics: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Eshop - Admin",
    description: "Eshop es una plataforma SaaS de comercio electrónico e inventario multi-tenant, diseñada para que múltiples negocios gestionen sus tiendas desde un sistema centralizado, con datos completamente aislados y seguros para cada cliente.",
    image: "/projects/Eshop.webp",
    topics: ["Nextjs", "SupaBase", "api"],
    featured: true,
    demo: "https://eshop.zetastudio.space",
  },
];

export default projects;
