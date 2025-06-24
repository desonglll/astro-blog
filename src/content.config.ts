// Import the glob loader
import {glob} from "astro/loaders";
// Import utilities from `astro:content`
import {defineCollection, z} from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/blog"}),
    schema: z.object({
        title: z.string(),
        pubDate: z.date().optional().default(() => new Date()),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string().optional().default("/2017.12.29-nnmmmbbb-3240x2160.jpg"),
            alt: z.string().optional().default("A cover image.")
        }),
        tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {blog};