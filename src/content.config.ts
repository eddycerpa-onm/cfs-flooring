import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Services collection schema with glob loader
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    cardDescription: z.string(),
    features: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    order: z.number(),
  }),
});

// Blog collection schema with glob loader
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    metaTitle: z.string(),
    metaDescription: z.string(),
  }),
});

export const collections = {
  services: servicesCollection,
  blog: blogCollection,
};
