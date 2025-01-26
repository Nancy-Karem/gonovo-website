import React from "react";

interface IPBage {
  text: string;
  title: string;
  desc: string;
  boldText?: string;
  descsize?: string;
}
function Badge({ text, title, desc, descsize, boldText }: IPBage) {
  return (
    <div className="py-1">
      <p
        data-aos="flip-left"
        className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full"
      >
        {text}
      </p>
      <h1
        data-aos="fade-up"
        data-aos-delay={100}
        className="lg:text-[60px] font-semibold text-[30px]  mt-8 w-fit mx-auto text-center"
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay={200}
        className={`max-w-[100%] md:max-w-[720px] md:mx-auto mx-4 xl:max-w-[1216px] sm:text-[20px] ${
          descsize ? "text-[16px]" : "text-[17px]"
        } lg:mx-auto text-center text-secondaryblack md:leading-7 lg:leading-[43px] mt-6 mb-10`}
        // style={{ fontSize: descsize }}
      >
        {boldText && <span className="font-semibold">{boldText}</span>} {desc}
      </p>
    </div>
  );
}

export default Badge;
