import { z, defineCollection } from "astro:content";
const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      prio: z.number(),
    })
});

export const collections = {
  projects: projectCollection,
};