import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    loader: glob({ base: "content/work", pattern: "*.md" }),
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
