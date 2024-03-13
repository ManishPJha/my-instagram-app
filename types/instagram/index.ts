import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  mediaUrl: z.string(),
  permalink: z.string(),
  caption: z.string(),
  hashtags: z.array(z.string()),
  mentions: z.array(z.string()),
  mediaType: z.union([
    z.literal("IMAGE"),
    z.literal("VIDEO"),
    z.literal("CAROUSEL_ALBUM"),
  ]),
  isReel: z.boolean().optional(),
  thumbnailUrl: z.string().optional(),
  timestamp: z.string(),
  colorPalette: z.object({
    dominant: z.string(),
    muted: z.string(),
    vibrant: z.string(),
    vibrantLight: z.string(),
    mutedDark: z.string(),
    vibrantDark: z.string(),
    mutedLight: z.string(),
  }),
  sizes: z.object({
    small: z.object({
      mediaUrl: z.string(),
      height: z.number(),
      width: z.number(),
    }),
    medium: z.object({
      mediaUrl: z.string(),
      height: z.number(),
      width: z.number(),
    }),
    large: z.object({
      mediaUrl: z.string(),
      height: z.number(),
      width: z.number(),
    }),
    full: z.object({
      mediaUrl: z.string(),
      height: z.number(),
      width: z.number(),
    }),
  }),
});

export type Post = z.infer<typeof PostSchema>;

export const PostFeedSchema = z.array(PostSchema);

export type PostFeed = z.infer<typeof PostFeedSchema>;
