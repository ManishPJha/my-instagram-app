export type InstagramPost = {
  id: string;
  mediaUrl: string;
  placeholder: string | undefined;
  permalink: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
  dimensions: {
    width: number;
    height: number;
  };
  children?: {
    id: string;
    mediaUrl: string;
    mediaType: "IMAGE" | "VIDEO";
  }[];
};

export type Instagram = InstagramPost[];
