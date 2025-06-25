// Import the glob loader
import {glob} from "astro/loaders";
// Import utilities from `astro:content`
import {defineCollection, z} from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/blog"}),
    schema: z.object({
        title: z.string().optional(),
        date: z.date().optional().default(() => new Date()),
        description: z.string().optional(),
        published: z.boolean().optional().default(false),
        author: z.string().optional(),
        cover: z.string().optional().default("/2017.12.29-nnmmmbbb-3240x2160.jpg"),
        tags: z.array(z.string()).optional().default([]),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {blog};