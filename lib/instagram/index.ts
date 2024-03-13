import { ZodError } from "zod";

import fetch from "../helpers/fetch";

import * as Instagram from "@/types/instagram";

import normaliseInstagramFeed from "./normalise";

export async function fetchInstagramFeeds(): Promise<InstagramPost[]> {
  const request = await fetch(
    `https://feeds.behold.so/${process.env.NEXT_PUBLIC_SECRET_KEY}`
  );

  const response = await request.json();
  try {
    Instagram.PostFeedSchema.parse(response.posts);
  } catch (e) {
    const error = e as ZodError;
    throw new Error(`Invalid instagram data: ${JSON.stringify(error)}`);
  }

  return normaliseInstagramFeed(response);
}
