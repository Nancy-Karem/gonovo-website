import React from "react";

function Step2() {
  return (
    <div className="relative w-fit xl:w-full  bg-orangebg rounded-[31px] h-auto xl:h-[443px] my-10 flex flex-col">
      <div className="w-[150px] h-[150px] rounded-ee-[31px] bg-white left-0 top-0 absolute"></div>
      <div
        style={{ boxShadow: "-10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute left-[150px] rounded-ss-[31px]"
      ></div>
      <div
        style={{ boxShadow: "-10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute top-[150px]  rounded-ss-[31px]"
      ></div>
      <div className="grid grid-cols-1 gap-8 ml-auto xl:gap-0 xl:grid-cols-[1fr_378px] xl:p-20 p-12 xl:px-16 h-full w-fit  items-center justify-items-end">
        <div className="mt-5 w-fit ml-auto xl:order-0 order-1">
          <p className="ring-2 text-[12px] px-2 py-[1px] text-white ring-white w-fit rounded-full xl:px-[14px] xl:py-[2px] xl:text-sm font-medium ">
            STEP 2
          </p>
          <h1 className="text-[24px] xl:text-3xl font-medium text-white mt-10 mb-4">
            Design and Prototyping
          </h1>
          <p className="text-sm xl:text-base text-white leading-[23px] max-w-[460px]">
            Next, we create a software design, focusing on building a Minimum
            Viable Product (MVP). We actively seek feedback from relevant
            parties during this stage. Our goal is to refine the software’s
            architecture through iterative prototypes.
          </p>
        </div>
        <div className="w-[229px] h-[176px] xl:h-auto xl:w-[378px] rounded-3xl  bg-white relative order-0 xl:order-1">
          <div className="pt-5 px-7 pb-2 border-b border-[#f2f2f2]">
            <div className="flex gap-1">
              <span className="w-3 h-3 rounded-full inline-block bg-[#999999]"></span>
              <span className="w-3 h-3 rounded-full inline-block bg-[#C8C8C8]"></span>
              <span className="w-3 h-3 rounded-full inline-block bg-[#DBDBDB]"></span>
            </div>
            <p className="text-[12px] xl:text-[22px] leading-5 font-medium mt-2 xl:mt-6">
              Design Phase
            </p>
          </div>
          <div className="px-4 pt-10 pb-2 xl:px-10 xl:pt-24 xl:pb-4">
            <div className=" flex flex-wrap gap-3">
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121]">
                Wireframes
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121] ml-[-23px] origin-right rotate-[20deg]">
                User Flow
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121] ml-[-7px]">
                Prototype
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121]">
                Design System
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121]">
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
