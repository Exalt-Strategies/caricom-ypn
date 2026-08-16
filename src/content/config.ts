import { defineCollection, z } from "astro:content";

/**
 * Two collections, one engine:
 *  - updates: short news items (≤ 25-word excerpt) → homepage rail → /updates/[slug]
 *  - blog:    longer reads (400–800 words)          → homepage grid  → /blog/[slug]
 * Tags are a small fixed taxonomy per collection — add sparingly.
 */

const updates = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(70),
    date: z.date(),
    tag: z.enum(["win", "campaign", "chapter", "event", "announcement"]),
    excerpt: z.string().max(160),
    image: z.string().optional(),   // public/ path to a card photo, e.g. "/img/updates/x.jpg"
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(70),
    date: z.date(),
    tag: z.enum(["essay", "explainer", "interview"]),
    excerpt: z.string().max(160),
  }),
});

export const collections = { updates, blog };
