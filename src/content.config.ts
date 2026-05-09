import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ base: "./content/blog", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        emoji: z.string().default("📝"),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false)
    })
})

const pages = defineCollection({
    loader: glob({ base: "./content/pages", pattern: "*.md" }),
    schema: z.object({
        title: z.string(),
        description: z.string()
    })
})

export const collections = { blog, pages };