import { defineCollection, z } from 'astro:content';

// Services collection schema
const servicesCollection = defineCollection({
  type: 'data',
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

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
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
