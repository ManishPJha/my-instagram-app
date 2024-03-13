const VideoAsset = ({
  feed,
}: {
  feed: InstagramPost & { placeholder?: string };
}) => {
  return (
    <div className="relative flex w-full h-auto bg-transparent dark:bg-appColor-appLight rounded-xl justify-center items-center">
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
