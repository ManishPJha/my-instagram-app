import { getPlaiceholder } from "plaiceholder";

async function normaliseInstagramPost(
  post: InstagramPost
): Promise<InstagramPost> {
  let placeholder;
  if (post.mediaType === "IMAGE") {
    try {
      const buffer = await fetch(post.mediaUrl).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      const { base64 } = await getPlaiceholder(buffer);
      placeholder = base64;
    } catch {
      placeholder = undefined;
    }
  }
  return {
    id: post.id,
    mediaUrl: post.mediaUrl,
    placeholder,
    permalink: post.permalink,
    caption: post.caption,
    mediaType: post.mediaType,
    timestamp: post.timestamp,
    sizes: post.sizes,
    prunedCaption: post.prunedCaption,
    hashtags: post.hashtags,
    mentions: post.mentions,
    colorPalette: post.colorPalette,
  };
}

export default async function normaliseInstagramFeed(
  feed: InstagramFeedResponse
): Promise<InstagramPost[]> {
  const normalisedPosts = await Promise.all(
    feed.posts.map(normaliseInstagramPost)
  );
  return normalisedPosts;
}
