import { fetchInstagramFeeds } from "@/lib/instagram";
import { getPlaiceholder } from "plaiceholder";

import ImageAsset from "@/components/image-asset";
import VideoAsset from "@/components/video-asset";

export const revalidate = 60;

export default async function Home() {
  const feeds = await fetchInstagramFeeds();

  const { posts, username } = feeds || {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="h-3">Feeds of user : {username}</h3>
      <div className="grid grid-cols-2 gap-4">
        {posts && posts.map(renderInstagramPosts)}
      </div>
    </main>
  );
}

export const renderInstagramPosts = async (components: InstagramPost) => {
  const component = {
    IMAGE: ImageAsset,
    VIDEO: VideoAsset,
  };

  const Component = component[components.mediaType];

  if (components.mediaType === "IMAGE") {
    const response = await fetch(components.mediaUrl);

    if (!response.ok) {
      throw new Error("invalid fetch media url request!");
    }

    const arrayBuffer = await response.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    const { base64 } = await getPlaiceholder(buffer);

    return (
      <Component
        altText={components.caption}
        feed={components}
        mediaUrl={components.mediaUrl}
        imageHeight={200}
        imageWidth={200}
        placeholder={base64}
        key={components.id}
      />
    );
  }

  return (
    <Component
      altText={components.caption}
      feed={components}
      mediaUrl={components.mediaUrl}
      imageHeight={200}
      imageWidth={200}
      key={components.id}
    />
  );
};
