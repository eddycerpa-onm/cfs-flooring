# CFS Flooring - Astro SSG + Tailwind CSS v4

Replicación modular y optimizada en Astro + Tailwind CSS v4 del sitio de **CFS Flooring LLC** (Lake Oswego & West Linn, OR).

## Stack
- **Framework**: Astro 5.x (SSG)
- **CSS**: Tailwind CSS v4 (`@theme` configuration)
- **JS Client**: Alpine.js (17kb)
- **Content**: Astro Content Collections (YAML + MDX)
- **SEO/GEO**: OpenGraph, Twitter Cards, Schema.org (LocalBusiness, FAQPage, Service, ArticlePage)
- **Fonts**: Self-hosted Lexend Deca & DM Sans (via Fontsource)

## Routes
| Route | Purpose |
|-------|---------|
| `/` | Homepage (Hero video, Services grid, Testimonials, FAQ, CTABanner) |
| `/about-us` | About CFS Flooring & Team |
| `/our-services` | Hub de todos los servicios |
| `/contact-us` | Formulario de contacto y datos |
| `/services/[slug]` | 8 páginas dinámicas por servicio |
| `/blog` | Blog Hub geo-localizado (NUEVO) |
| `/blog/[slug]` | Artículos de blog SEO/GEO (NUEVO) |
| `/privacy-policy` | Política de privacidad |
| `/terms-and-conditions` | Términos y condiciones |

## Environment Variables
Ninguna requerida para build estático. Formulario conecta directo a la API de GHL.

## Scripts
```bash
pnpm install     # Instalar dependencias
pnpm run dev     # Servidor de desarrollo
pnpm run build   # Astro build
pnpm run preview # Preview del build
```
