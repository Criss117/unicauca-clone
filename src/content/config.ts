import { ContentSchema } from "@lib/models";
import { file } from "astro/loaders";
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

const newsList = defineCollection({
  loader: file("src/content/data/news-list.json"),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    link: z.string(),
    title: z.string(),
    description: z.string(),
    img: z.string(),
    content: z.array(ContentSchema),
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

const events = defineCollection({
  loader: file("src/content/data/events.json"),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    short_date: z.string(),
    hour: z.string(),
    location: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  navMenu,
  footer,
  publicDocuments,
  events,
  newsList,
};
