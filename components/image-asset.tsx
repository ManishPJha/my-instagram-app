import Image from "next/image";

type ImageAssetProps = {
  altText: string;
  mediaUrl: string;
  imageHeight?: number;
  imageWidth?: number;
};

const ImageAsset = ({
  altText,
  mediaUrl,
  imageHeight,
  imageWidth,
}: ImageAssetProps) => {
  return (
    <div>
      <Image
        alt={altText}
        src={mediaUrl}
        height={imageHeight || 200}
        width={imageWidth || 200}
      />
    </div>
  );
};

export default ImageAsset;
