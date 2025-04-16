// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  schema: ({ image }) => z.object ({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(), 
  description: z.string(), 
  link: z.string().optional(),
  cardImage: image(),
  cardImageAlt: z.string(),
  rating: z.number().min(0).max(5).optional(),
  reviewCount: z.number().min(0).optional(),
  publishedTime: z.string(),
  modifiedTime: z.string(),
  tags: z.array(z.string()).optional(),
  details: z.array(z.string()).optional(),
  price: z.number(),
  category: z.string(),
  contact: z.string().optional(),
  }),
});

const packagesCollection = defineCollection({
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    publishedTime: z.string(),
    modifiedTime: z.string(),
    price: z.number(),
    currency: z.string(),
    cardImage: image(),
    cardImageAlt: z.string(),
    rating: z.number().min(0).max(5).optional(),
    reviewCount: z.number().min(0).optional(),
    route: z.string(),
    pdfUrl: z.string(),
    location: z.string(),
    itinerary: z.array(z.string()).optional(),
    duration: z.string().optional(),
    inclusions: z.array(z.string()).optional(),
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
    rating: z.number().min(0).max(5).optional(),
    datePublished: z.string(),
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

const eventsCollection = defineCollection({
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    startdate: z.string(),
    enddate: z.string(),
    time: z.string(),
    location: z.string(),
    imageCard: image(),
    imageAlt: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    featured: z.boolean(),
    rating: z.number().min(0).max(5).optional(),
    reviews: z.number().min(0).optional(),
    postalCode: z.string(),
  }),
});

export const collections = {
  'services': servicesCollection,
  'packages': packagesCollection,
  'testimonials': testimonialsCollection,
  'news': newsCollection,
  'events': eventsCollection,
};