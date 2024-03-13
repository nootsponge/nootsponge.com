import { z, defineCollection } from "astro:content";

const secretCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  secret: secretCollection,
};
