
export interface Project {
  id: number;
  name: string;
  description: string;
  category: "frontend" | "backend" | "fullstack"|  "Marca";
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
    description: "Eshop es un SaaS de comercio electronico e inventario multi-tenant diseñada para permitir que multiples negocios gestionen sus tiendas desde un sistema centralizado mientras sus datos se encuentran totalmente aislados",
    category: "fullstack",
    image: "/projects/Eshop.webp",
    topics: ["Next.js", "Supabase", "API"],
    featured: true,
    demo: "https://eshop.zetastudio.space",
  },
    {
    id: 2,
    name: "Zeta - Studio",
    description: "Zeta-Studio es una marca de desarrolo de software donde pongo mis servicios a tu dispocion para tus grandes ideas.",
    category: "Marca",
    image: "/projects/Eshop.webp",
    topics: ["NodeJs", "PosgresSQL"],
    featured: false,
    github: "https://github.com/zeta-develop",
    demo: "https://zetastudio.space",
  },
  
];

export default projects;
