import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";

function Step2() {
  return (
    <div className="relative w-fit mx-auto my-10 flex flex-col">
      <ImageComponent
        src="/svgs/steps/step2.svg"
        alt="step clip path"
        width="1216px"
        height="443px"
      />
      <div className="absolute inset-0 grid grid-cols-2 pl-56 pr-20  items-center justify-items-end">
        <div className="mt-5 w-fit ml-auto">
          <p className="ring-2 text-white ring-white w-fit rounded-full px-[14px] py-[2px] text-sm font-medium">
            STEP 2
          </p>
          <h1 className="text-3xl font-medium text-white mt-10 mb-4">
            Design and Prototyping
          </h1>
          <p className="text-white leading-[23px] max-w-[460px]">
            Next, we create a software design, focusing on building a Minimum
            Viable Product (MVP). We actively seek feedback from relevant
            parties during this stage. Our goal is to refine the software’s
            architecture through iterative prototypes.
          </p>
        </div>
        <div className="w-[378px] rounded-3xl  bg-white relative">
          <div className="pt-5 px-7 pb-2 border-b border-[#f2f2f2]">
            <div className="flex gap-1">
              <span className="w-3 h-3 rounded-full inline-block bg-[#999999]"></span>
              <span className="w-3 h-3 rounded-full inline-block bg-[#C8C8C8]"></span>
              <span className="w-3 h-3 rounded-full inline-block bg-[#DBDBDB]"></span>
            </div>
            <p className="text-[22px] leading-5 font-medium mt-6">
              Design Phase
            </p>
          </div>
          <div className="px-10 pt-24 pb-4">
            <div className=" flex flex-wrap gap-3">
              <p className="text-sm text-white px-4 py-2 rounded-full bg-[#212121]">
                Wireframes
              </p>
              <p className="text-sm text-white px-4 py-2 rounded-full bg-[#212121] ml-[-23px] origin-right rotate-[20deg]">
                User Flow
              </p>
              <p className="text-sm text-white px-4 py-2 rounded-full bg-[#212121] ml-[-7px]">
                Prototype
              </p>
              <p className="text-sm text-white px-4 py-2 rounded-full bg-[#212121]">
                Design System
              </p>
              <p className="text-sm text-white px-4 py-2 rounded-full bg-[#212121]">
                User Journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
