"use client";

import { useLayoutEffect, useRef, useState } from "react";

const VideoAsset = ({
  feed,
}: {
  feed: InstagramPost & { placeholder?: string };
}) => {
  const mainDiv = useRef<any>();
  const [divHeight, setdivHeight] = useState(0);

  useLayoutEffect(() => {
    if (mainDiv.current) {
      setdivHeight(mainDiv.current.offsetWidth / 2);
    }
  }, []);

  return (
    <div
      ref={mainDiv}
      style={{ height: divHeight }}
      className="relative flex w-full h-auto bg-gray-300 dark:bg-appColor-appLight rounded-xl justify-center items-center"
    >
      <video
        className="h-auto max-w-full rounded-xl overflow-hidden flipVideo object-cover"
        controls
        autoPlay
        loop
        src={feed.mediaUrl}
        poster={feed.placeholder}
      />
    </div>
  );
};

export default VideoAsset;
