# Nexo Digital — Portafolio & Sitio de Agencia

[![Estado del Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/zeta-develop)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)
[![Licencia](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> **Nexo Digital** — Agencia de desarrollo de software fundada por **Ronald Tellez**. Desarrollo web, apps Android, cloud y automatización.

🌐 **Sitio en Vivo**: [ronaldtellez.dev](https://ronaldtellez.dev)

## 📋 Acerca de

Sitio oficial de **Nexo Digital**, agencia de desarrollo de software fundada por Ronald Tellez. Presenta los servicios de la agencia (desarrollo web, desarrollo móvil Android, cloud y automatización), los proyectos personales de su fundador y un espacio dedicado a proyectos de clientes. Construido con tecnologías web modernas y optimizado para rendimiento y SEO.

## ✨ Características

- 🎨 **UI/UX Moderna** — Diseño limpio y responsivo con soporte de tema oscuro/claro
- 🇪🇸 **Solo Español** — Contenido 100% en español (ES), sin selector de idioma
- 💬 **Contacto por WhatsApp** — El formulario arma el mensaje y abre WhatsApp directo (+505 8605 3630)
- 🚀 **Rendimiento Optimizado** — Carga diferida, división de código y recursos optimizados
- 🔍 **SEO Optimizado** — Meta tags completos, datos estructurados (Organization + Person) y sitemap
- ♿ **Accesible** — Cumple con WCAG con etiquetas ARIA apropiadas
- 📱 **Totalmente Responsivo** — Funciona perfectamente en todos los dispositivos

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/) + [React 18.3](https://reactjs.org/) con [TypeScript 5.5](https://www.typescriptlang.org/)
- **Herramienta de Build**: [Vite 5.4](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Gestión de Estado**: [React Query](https://tanstack.com/query)

## 🚀 Comenzar

### Prerequisitos

- Node.js 18+ y npm
- Git

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/zeta-develop/portafolio.git

# Navegar al directorio del proyecto
cd portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Build
npm run build        # Compilar para producción
npm run build:dev    # Compilar para desarrollo

# Calidad
npm run lint         # Ejecutar ESLint
npm run preview      # Previsualizar build de producción
```

## 📁 Estructura del Proyecto

```
portafolio/
├── public/              # Recursos estáticos
│   ├── robots.txt      # Instrucciones para crawlers SEO
│   ├── sitemap.xml     # Estructura del sitio para motores de búsqueda
│   └── og-image.png    # Imagen Open Graph (Nexo Digital)
├── src/
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes shadcn/ui
│   │   └── ...        # Componentes personalizados
│   ├── context/       # Contextos React (Tema, Idioma)
│   ├── hooks/         # Hooks personalizados de React
│   ├── pages/         # Componentes de página
│   ├── translations/  # Traducciones (ES)
│   ├── utils/         # Funciones utilitarias
│   └── data/          # Datos estáticos (perfil, proyectos)
├── astro.config.mjs   # Configuración de Astro
└── components.json    # Configuración de shadcn/ui
```

## 🎯 Características SEO

- ✅ Meta tags completos (Open Graph, Twitter Cards) con marca Nexo Digital
- ✅ Datos estructurados (JSON-LD Schema.org: Organization + Person/fundador)
- ✅ Sitemap XML
- ✅ robots.txt
- ✅ URLs canónicas en `ronaldtellez.dev`
- ✅ Carga optimizada de fuentes
- ✅ Estructura HTML semántica

## 🔧 Configuración

### Personalización

- **Tema**: Edita `src/index.css` para el esquema de colores
- **Contenido**: Actualiza `src/data/` para proyectos e información
- **Contacto**: Edita `src/data/profile.ts` (email, WhatsApp, redes) y `src/translations/es.ts` (textos)

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

## 👤 Agencia & Fundador

**Nexo Digital** — Agencia de desarrollo de software

**Ronald Adan Tellez Ramos** — Fundador

- Sitio Web: [ronaldtellez.dev](https://ronaldtellez.dev)
- WhatsApp: [+505 8605 3630](https://wa.me/50586053630)
- Email: micorreo@ronaldtellez.dev
- GitHub: [@zeta-develop](https://github.com/zeta-develop)
- Ubicación: León, Nicaragua

## 🙏 Agradecimientos

- [shadcn/ui](https://ui.shadcn.com/) por los hermosos componentes UI
- [Radix UI](https://www.radix-ui.com/) por las primitivas accesibles
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de estilos utility-first
- [Lucide](https://lucide.dev/) por el conjunto de iconos

---

⭐ **Dale una estrella a este repo** si te resulta útil!

Hecho con ❤️ por Nexo Digital y Ronald Tellez