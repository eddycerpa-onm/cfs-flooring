import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://cfsflooring.com',
  trailingSlash: 'never',
  image: {
    service: passthroughImageService(),
  },
  build: {
    format: 'file'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['alpinejs'],
    },
  },
});
