import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      featured: z.boolean().optional(),
      publishDate: z.coerce.date(),
      url: z.string().optional(),
    }),
  }),
};
