import { fetchInstagramFeeds } from "@/lib/instagram";
import Image from "next/image";

import VideoView from "@/components/video-view";

export const revalidate = 60;

export default async function Home() {
  const feeds = await fetchInstagramFeeds();

  const { posts, username } = feeds || {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="h-3">Feeds of user : {username}</h3>
      <div className="grid grid-cols-3 gap-4">
        {posts &&
          posts.length &&
          posts.map((post) => {
            if (post.mediaType === "IMAGE") {
              return (
                <Image
                  key={post.id}
                  alt="instagram feed image"
                  src={post.mediaUrl}
                  height={200}
                  width={200}
                />
              );
            }

            return <VideoView key={post.id} feed={post} />;
          })}
      </div>
    </main>
  );
}
