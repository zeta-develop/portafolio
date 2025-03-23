
export interface Project {
  id: number;
  name: string;
  description: string;
  image?: string;
  topics: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.",
    topics: ["frontend", "fullstack", "react"],
    github: "https://github.com/zeta-develop/ecommerce-platform",
    demo: "https://ecommerce-demo.example.com",
    featured: true
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features include dark mode, multilingual support, and animations.",
    topics: ["frontend", "react", "nextjs"],
    github: "https://github.com/zeta-develop/portfolio",
    demo: "https://portfolio-demo.example.com",
    featured: true
  },
  {
    id: 3,
    name: "Task Management API",
    description: "A RESTful API for task management built with Express.js and MongoDB. Features include user authentication, task CRUD operations, and task assignments.",
    topics: ["backend", "nodejs", "express"],
    github: "https://github.com/zeta-develop/task-api"
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Built with React and OpenWeatherMap API.",
    topics: ["frontend", "react", "api"],
    github: "https://github.com/zeta-develop/weather-app",
    demo: "https://weather-demo.example.com"
  },
  {
    id: 5,
    name: "Blog CMS",
    description: "A content management system for blogs built with React and Firebase. Features include markdown editor, image uploads, and comments.",
    topics: ["fullstack", "react", "firebase"],
    github: "https://github.com/zeta-develop/blog-cms",
    demo: "https://blog-cms-demo.example.com"
  },
  {
    id: 6,
    name: "Chat Application",
    description: "A real-time chat application built with Socket.io and React. Features include private messaging, group chats, and notifications.",
    topics: ["fullstack", "react", "socketio"],
    github: "https://github.com/zeta-develop/chat-app",
    demo: "https://chat-app-demo.example.com"
  },
  {
    id: 7,
    name: "Finance Tracker",
    description: "A personal finance tracker built with React and Chart.js. Features include expense tracking, budget planning, and visualization.",
    topics: ["frontend", "react", "chartjs"],
    github: "https://github.com/zeta-develop/finance-tracker"
  },
  {
    id: 8,
    name: "Note Taking App",
    description: "A note-taking application built with React and local storage. Features include markdown support, tags, and search functionality.",
    topics: ["frontend", "react"],
    github: "https://github.com/zeta-develop/notes-app",
    demo: "https://notes-app-demo.example.com"
  }
];

export default projects;
