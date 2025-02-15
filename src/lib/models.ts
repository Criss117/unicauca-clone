import { z } from "astro:content";

// Definición del esquema para ListContent
const ListContentSchema = z.object({
  type: z.literal("li"),
  content: z.string(),
});

// Definición del esquema para Content
export const ContentSchema = z.array(
  z.object({
    type: z.union([
      z.literal("p"),
      z.literal("img"),
      z.literal("ul"),
      z.literal("li"),
    ]),
    alt: z.string().optional(),
    content: z.union([z.string(), z.array(ListContentSchema)]),
  })
);

export type ListContent = z.infer<typeof ListContentSchema>;
export type Content = z.infer<typeof ContentSchema>;
