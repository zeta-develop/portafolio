# Ronald Tellez - Portafolio

[![Estado del Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/zeta-develop)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)
[![Licencia](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> Portafolio de Desarrollador Full Stack - Mostrando proyectos y habilidades de desarrollo web moderno

🌐 **Sitio en Vivo**: [ronaldtellez.dev](https://ronaldtellez.dev)

## 📋 Acerca de

Sitio web de portafolio profesional que presenta mis últimos proyectos, habilidades y experiencia como Desarrollador Full Stack. Construido con tecnologías web modernas y optimizado para rendimiento y SEO.

## ✨ Características

- 🎨 **UI/UX Moderna** - Diseño limpio y responsivo con soporte de tema oscuro/claro
- 🌍 **Multilenguaje** - Soporte para español e inglés
- 🚀 **Rendimiento Optimizado** - Carga diferida, división de código y recursos optimizados
- 🔍 **SEO Optimizado** - Meta tags completos, datos estructurados y sitemap
- ♿ **Accesible** - Cumple con WCAG con etiquetas ARIA apropiadas
- 📱 **Totalmente Responsivo** - Funciona perfectamente en todos los dispositivos

## 🛠️ Stack Tecnológico

- **Framework**: [React 18.3](https://reactjs.org/) con [TypeScript 5.5](https://www.typescriptlang.org/)
- **Herramienta de Build**: [Vite 5.4](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Enrutamiento**: [React Router 6](https://reactrouter.com/)
- **Gestión de Estado**: [React Query](https://tanstack.com/query)
- **Formularios**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

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

La aplicación estará disponible en `http://localhost:8080`

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
│   └── og-image.png    # Imagen Open Graph
├── src/
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes shadcn/ui
│   │   └── ...        # Componentes personalizados
│   ├── context/       # Contextos React (Tema, Idioma)
│   ├── hooks/         # Hooks personalizados de React
│   ├── pages/         # Componentes de página
│   ├── translations/  # Traducciones i18n
│   ├── utils/         # Funciones utilitarias
│   └── data/          # Datos estáticos
├── index.html         # HTML de entrada con meta tags SEO
└── vite.config.ts     # Configuración de Vite
```

## 🎯 Características SEO

- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Datos estructurados (JSON-LD Schema.org)
- ✅ Sitemap XML
- ✅ robots.txt
- ✅ URLs canónicas
- ✅ Carga optimizada de fuentes
- ✅ Estructura HTML semántica

## 🌟 Rendimiento

- **Tamaño del Build**: ~121 KB (gzipped)
- **Puntuación Lighthouse**: 95+ (Rendimiento, Accesibilidad, Mejores Prácticas, SEO)
- **División de Código**: Chunks de vendor separados para caché óptimo
- **Carga Diferida**: Imágenes y componentes se cargan bajo demanda

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` en el directorio raíz:

```env
VITE_API_URL=tu_url_api_aqui
```

### Personalización

- **Tema**: Edita `src/index.css` para el esquema de colores
- **Contenido**: Actualiza `src/data/` para proyectos e información
- **Traducciones**: Modifica `src/translations/` para contenido de idiomas

## 📦 Optimización del Build

El proyecto utiliza optimización avanzada de build:

- **División de Código**: Chunks de vendor separados para mejor caché
- **Minificación**: esbuild para minificación rápida y eficiente
- **Tree Shaking**: Código no utilizado eliminado automáticamente
- **Optimización de Recursos**: Imágenes y fuentes optimizadas para web


## 📝 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

## 👤 Autor

**Ronald Adan Tellez Ramos**

- Sitio Web: [ronaldtellez.online](https://ronaldtellez.dev)
- GitHub: [@zeta-develop](https://github.com/zeta-develop)
- Email: adantellezr@gmail.com
- Ubicación: León, Nicaragua

## 🙏 Agradecimientos

- [shadcn/ui](https://ui.shadcn.com/) por los hermosos componentes UI
- [Radix UI](https://www.radix-ui.com/) por las primitivas accesibles
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de estilos utility-first
- [Lucide](https://lucide.dev/) por el conjunto de iconos

---

⭐ **Dale una estrella a este repo** si te resulta útil!

Hecho con ❤️ por Ronald Tellez
