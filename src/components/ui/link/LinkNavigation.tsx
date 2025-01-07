import Link from "next/link";
import React from "react";
interface IPLink {
  text: string;
  bg?: string;
  color?: string;
  link: string;
  ring?: boolean;
  inline?: boolean;
}
function LinkNavigation({ text, bg, link, color, ring, inline }: IPLink) {
  return (
    <Link
      href={link}
      style={{ backgroundColor: bg, color }}
      className={`${ring ? "ring-1 ring-black" : ""} ${
        inline ? "w-fit" : "block"
      } bg-white rounded-full py-[12px] px-[18px] text-[17px] font-medium`}
    >
      {text}
    </Link>
  );
}

export default LinkNavigation;
