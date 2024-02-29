interface InstagramFeedResponse {
  username: string;
  biography: string;
  profilePictureUrl: string | null;
  website: string | null;
  followersCount: number | null;
  posts: InstagramPost[];
}

type MediaTypes = "IMAGE" | "VIDEO";

type MediaSizes<T = {}> = {
  small: T;
  medium: T;
  large: T;
  full: T;
};

type Sizes = {
  mediaUrl: string;
  height: number;
  width: number;
};

type InstagramPost = {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: MediaTypes;
  mediaUrl: string;
  sizes: MediaSizes<Sizes>;
  caption: string;
  prunedCaption: string;
  hashtags: string[];
  mentions: string[];
  colorPalette: {
    dominant: string;
    muted: string;
    mutedLight: string;
    mutedDark: string;
    vibrant: string;
    vibrantLight: string;
    vibrantDark: string;
  };
};
