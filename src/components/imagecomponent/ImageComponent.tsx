import Image from "next/image";
import React from "react";
interface IImageProps {
  width: string;
  height: string;
  src: string;
  alt: string;
}
function ImageComponent({ width, height, src, alt }: IImageProps) {
  return (
    <div style={{ width, height }} className="relative">
      <Image src={src} alt={alt} fill />
    </div>
  );
}

export default ImageComponent;
