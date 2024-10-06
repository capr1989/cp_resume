// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const cvsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),
    about: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  cvs: cvsCollection,
};
