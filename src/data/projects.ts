
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
    name: "NexusCP",
    description: "Panel de control para la administración de servicios de hosting, con soporte para múltiples servidores y usuarios.",
    image: "/projects/NexusCP.webp",
    topics: ["fullstack", "react", "nextjs", "PrismaORM", "TypeScript"],
    demo: "https://nexuscp.ronaldtellez.online",
    featured: true
  },
  {
    id: 2,
    name: "PterodactylCP",
    description: "Cliente web para la administración de servidores de juegos, utilizando Pterodactyl Panel.",
    image: "/projects/pterodactylcp.webp",
    topics: ["Nextjs", "API", "LocalStorage"],
    github: "https://github.com/zeta-develop/PterodactylCP",
    demo: "https://ptcp.ronaldtellez.online",
    featured: true
  },
  {
    id: 3,
    name: "Nexus Billing",
    description: "Sistema de facturación y gestión de clientes para un proveedor de servicios de hosting.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&auto=format&fit=crop&q=80",
    topics: ["Laravel", "Nextjs", "postgreSQL"],
    demo: "https://nexusbill.ronaldtellez.online",
  },
];

export default projects;
