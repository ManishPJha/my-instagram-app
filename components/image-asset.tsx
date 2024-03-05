import Image from "next/image";

type ImageAssetProps = {
  altText: string;
  mediaUrl: string;
  imageHeight?: number;
  imageWidth?: number;
  placeholder?: string;
};

const ImageAsset = ({
  altText,
  mediaUrl,
  imageHeight,
  imageWidth,
  placeholder,
}: ImageAssetProps) => {
  return (
    <div>
      <Image
        alt={altText}
        src={mediaUrl}
        height={imageHeight || 200}
        width={imageWidth || 200}
        placeholder={"blur"}
        blurDataURL={placeholder}
      />
    </div>
  );
};

export default ImageAsset;
