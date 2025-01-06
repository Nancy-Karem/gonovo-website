import Image from "next/image";
import React from "react";
interface IImageProps {
  width: string;
  height: string;
  src: string;
  alt: string;
  background?: string;
  radius?: string;
}
function ImageComponent({
  width,
  height,
  src,
  alt,
  background,
  radius,
}: IImageProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: background,
        borderRadius: radius,
      }}
      className="relative"
    >
      <Image src={src} alt={alt} fill />
    </div>
  );
}

export default ImageComponent;
