import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://cfsflooring.com',
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'never',
  image: {
    service: passthroughImageService(),
  },
  redirects: {
    // Old HighLevel root URLs -> New /services/ URLs
    '/Carpet-Installation': '/services/carpet-installation',
    '/Sand-and-Finish': '/services/sand-and-finish',
    '/Ceramic-Tile': '/services/ceramic-tile',
    '/Sheet-Vinyl': '/services/sheet-vinyl',
    '/VCT-flooring': '/services/vct-flooring',
    '/flooring-removal': '/services/flooring-removal',
    '/counters-and-decks': '/services/counters-and-decks',
    '/hardwood-laminate-and-lvp': '/services/hardwood-laminate-and-lvp',

    // Legacy Astro route aliases -> New /services/ URLs
    '/services/hardwood-flooring': '/services/hardwood-laminate-and-lvp',
    '/services/laminate-flooring': '/services/hardwood-laminate-and-lvp',
    '/services/lvp-flooring': '/services/hardwood-laminate-and-lvp',
    '/services/tile-flooring': '/services/ceramic-tile',
    '/services/commercial-flooring': '/services/vct-flooring',
    '/services/flooring-repair': '/services/sand-and-finish',
    '/services/maintenance': '/services/counters-and-decks',
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
