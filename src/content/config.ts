import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      featured: z.number().optional(),
      publishDate: z.coerce.date(),
      url: z.string().optional(),
      image: z.string().optional(),
      icon: z.string().optional(),
    }),
  }),
};
