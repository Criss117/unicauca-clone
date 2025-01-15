import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const navMenu = defineCollection({
  loader: file("src/content/data/nav-menu.json"),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    items: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
  }),
});

const footer = defineCollection({
  loader: file("src/content/data/footer.json"),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    items: z.array(
      z.object({
        label: z.string(),
        href: z.string().optional(),
      })
    ),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "src/content/news/*.md" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.date(),
    hero: z.string(),
    description: z.string(),
  }),
});

const publicDocuments = defineCollection({
  loader: file("src/content/data/public-documents.json"),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    content: z.array(
      z.object({
        title: z.string(),
        published: z.string(),
        emited: z.string(),
        href: z.string(),
        resolution: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  navMenu,
  footer,
  news,
  publicDocuments,
};
