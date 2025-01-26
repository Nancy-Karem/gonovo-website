import React from "react";
import InfinityScroll from "../infinityscroll/InfinityScroll";
import reviews from "@/app/data/reviews";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="scroll-container relative pb-16 bg-white rounded-ee-[40px] rounded-es-[40px]"
    >
      <p
        data-aos="fade-down"
        className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full my-6"
      >
        #WHAT PEOPLE SAY ABOUT US#
      </p>
      <div className="w-fit mx-auto pb-2 overflow-hidden">
        <p
          data-aos="fade-right"
          className="w-fit text-[30px] md:text-[60px] text-semiblue font-medium ms-28 mb-2"
        >
          friends
        </p>
        <h1
          data-aos="fade-left"
          className="w-full text-[30px] md:text-[60px] font-semibold leading-5"
        >
          Our
          <span className="relative">
            <span className="h-[3.5px] w-[96%] absolute bg-semiblue top-[52%] left-[50%] translate-x-[-50%] hidden md:block"></span>{" "}
            clients{" "}
          </span>
          are our WHY!
        </h1>
      </div>

      <div className="mt-8 md:mt-16 flex flex-col gap-6 ">
        <InfinityScroll elements={reviews.line1} />
        <InfinityScroll elements={reviews.line2} reverse={true} />
      </div>
    </section>
  );
};

export default Reviews;
