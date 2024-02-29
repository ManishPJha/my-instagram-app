import fetch from "../helpers/fetch";

export async function fetchInstagramFeeds(): Promise<InstagramFeedResponse> {
  try {
    const response = await fetch(
      `https://feeds.behold.so/${process.env.NEXT_PUBLIC_SECRET_KEY}`
    );

    return response as InstagramFeedResponse;
  } catch (error: unknown) {
    console.error(`instagram fetch request error:`, error);
    throw new Error((error as any).mesasge);
  }
}
