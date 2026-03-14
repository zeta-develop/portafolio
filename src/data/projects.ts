
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
    description: "Eshop es un SaaS de comercio electronico e inventario multi-tenant diseñada para permitir que multiples negocios gestionen sus tiendas desde un sistema centralizado mientras sus datos se encuentran totalmente aislados",
    image: "/eshop.png",
    topics: ["Nextjs", "SupaBase", "api"],
    featured: true,
    demo: "https://nexusbill.ronaldtellez.online",
  },
];

export default projects;
