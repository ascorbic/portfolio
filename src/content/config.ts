import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      featured: z.boolean().optional(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      url: z.string().optional(),
    }),
  }),
};
