import React from "react";
import InfinityScroll from "../infinityscroll/InfinityScroll";
import reviews from "@/app/data/reviews";

const Reviews = () => {
  return (
    <section className="scroll-container relative pb-16 bg-white rounded-ee-[40px] rounded-es-[40px]">
      <p className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full">
        #WHAT PEOPLE SAY ABOUT US#
      </p>
      <h1 className="text-[60px] font-semibold mt-8 w-fit mx-auto">
        Don’t take our word for it.
      </h1>
      <div className="mt-16 flex flex-col gap-6 ">
        <InfinityScroll elements={reviews.line1} />
        <InfinityScroll elements={reviews.line2} reverse={true} />
      </div>
    </section>
  );
};

export default Reviews;
