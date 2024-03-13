import { fetchInstagramFeeds } from "@/lib/instagram";

import ImageAsset from "@/components/image-asset";
import VideoAsset from "@/components/video-asset";

export const revalidate = 60;

export default async function Home() {
  const feeds = await fetchInstagramFeeds();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-4">
        {/* {feeds.map(renderInstagramPosts)} */}
        {feeds.map((feed) => {
          return (
            <div key={feed.id}>
              {feed.mediaType === "VIDEO" ? (
                <VideoAsset feed={feed} />
              ) : (
                <ImageAsset
                  altText={feed.caption}
                  mediaUrl={feed.mediaUrl}
                  imageHeight={200}
                  imageWidth={200}
                  placeholder={feed.placeholder}
                />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}

// export const renderInstagramPosts = async (components: InstagramPost) => {
//   const component = {
//     IMAGE: ImageAsset,
//     VIDEO: VideoAsset,
//   };

//   const Component = component[components.mediaType];

//   return (
//     <Component
//       altText={components.caption}
//       feed={components}
//       mediaUrl={components.mediaUrl}
//       imageHeight={200}
//       imageWidth={200}
//       placeholder={components.placeholder}
//       key={components.id}
//     />
//   );
// };
