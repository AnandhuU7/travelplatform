// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  schema: ({ image }) => z.object ({
  id: z.number(),
  title: z.string(),
  subtitle: z.string()
, description: z.string(),
  link: z.string(),
  pubDate: z.date(),
  cardImage: image(),
  cardImageAlt: z.string(),
  stars: z.number(),
  tags: z.array(z.string()).optional(),
  details: z.array(z.string().optional()),
  }),
});

const packagesCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishedTime: z.string(),
    modifiedTime: z.string(),
    price: z.number(),
    currency: z.string(),
    cardImage: image(),
    route: z.string(),
    pdfUrl: z.string(),
  }),
});

const testimonialsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    name: z.string(),
    designation: z.string(),
    review: z.string(),
    image: image(),
  }),
});

const newsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      category: z.string(),
      excerpt: z.string(),
      author: z.string(),
      readTime: z.string(),
      image: image(),
    }),
});

export const collections = {
  'services': servicesCollection,
  'packages': packagesCollection,
  'testimonials': testimonialsCollection,
  'news': newsCollection,
};