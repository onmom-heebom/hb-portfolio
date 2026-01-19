import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    category: z.enum(["personal", "collab", "education", "info"]),
    year: z.number().optional(),
    roles: z.array(z.string()).optional(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    versions: z
      .array(
        z.object({
          label: z.string(),
          date: z.string().optional(),
          venue: z.string().optional(),
          program: z.string().optional(),
          overview: z.string().optional(),
          credits: z.array(z.string()).optional(),
          images: z.array(z.string()).optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { projects };
