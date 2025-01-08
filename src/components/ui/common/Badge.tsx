import React from "react";

interface IPBage {
  text: string;
  title: string;
  desc: string;
}
function Badge({ text, title, desc }: IPBage) {
  return (
    <>
      <p className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full">
        {text}
      </p>
      <h1 className="text-[60px] font-semibold  mt-8 w-fit mx-auto">{title}</h1>
      <p className="max-w-[1216px] text-[23px] mx-auto text-center text-secondaryblack leading-[43px] mt-6">
        {desc}
      </p>
    </>
  );
}

export default Badge;
