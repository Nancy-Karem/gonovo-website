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
      <h1 className="lg:text-[60px] font-semibold text-[30px]  mt-8 w-fit mx-auto">
        {title}
      </h1>
      <p className="max-w-[100%] md:max-w-[720px] md:mx-auto mx-4 xl:max-w-[1216px] sm:text-[20px] text-[17px] lg:mx-auto text-center text-secondaryblack md:leading-7 lg:leading-[43px] mt-6 mb-10">
        {desc}
      </p>
    </>
  );
}

export default Badge;
