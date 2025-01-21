import React from "react";
// import styles from "./steps.module.css";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";

function Step4() {
  return (
    <div className="relative w-fit xl:w-full  bg-[#FED2F2] rounded-[31px] h-auto xl:h-[443px] xl:my-10 flex flex-col mx-auto">
      <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-ee-[31px] bg-white left-[-2px] top-[-2px] absolute"></div>
      <div
        style={{ boxShadow: "-10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute left-[118px] lg:left-[148px] rounded-ss-[31px]"
      ></div>
      <div
        style={{ boxShadow: "-10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute top-[118px] lg:top-[148px]  rounded-ss-[31px]"
      ></div>
      <div className="grid grid-cols-1  ml-auto xl:gap-20 xl:grid-cols-[1fr_378px] xl:p-20  xl:px-16 h-full w-full  xl:justify-items-center justify-items-end lg:px-10 lg:py-20 px-5 py-10 ">
        <div className="xl:flex flex-col justify-center mt-10 mg:mt-5 w-fit ml-auto xl:order-1 order-2">
          <p className="ring-2 ring-black w-fit rounded-full xl:px-[14px] xl:py-[2px] text-[12px] px-2 py-[1px] xl:text-sm font-medium">
            STEP 4
          </p>
          <h1 className="text-[24px] xl:text-3xl font-medium text-[#111111]  mt-3 sm:mt-10 mb-2 sm:mb-4">
            Testing and Quality Assurance
          </h1>
          <p className="text-sm xl:text-base text-darkGray leading-[23px] max-w-[460px]">
            Before deployment, rigorous testing takes place. We evaluate
            performance, speed, and functionality to catch any bugs or errors.
            Our commitment is to deliver a seamless user experience, free from
            glitches.
          </p>
        </div>
        <div className="relative xl:order-2 order-1 w-full md:w-fit">
          <div className="relative w-[65%] ms-auto  h-[162px] lg:w-[300px] xl:w-[378px] md:h-[250px] md:w-[378px] xl:h-[296px]">
            <Image src="/assets/step4image.png" alt="explain image" fill />
          </div>

          <div className="scale-50 sm:scale-75  left-[15%] -bottom-20 md:scale-90 xl:scale-100 absolute bg-white w-[191px] h-[154px] flex  flex-col md:-bottom-[20px] xl:bottom-[-80px] items-center rounded-ss-[25px] rounded-se-[25px] sm:left-[84px] md:-left-10">
            <div className="absolute top-[25px]">
              <ImageComponent
                src="/svgs/steps/toggle.svg"
                width="146px"
                height="20px"
                alt="toggle Image"
              />
            </div>
            <div className="absolute top-[75px]">
              <ImageComponent
                src="/svgs/steps/counter.svg"
                width="149px"
                height="127px"
                alt="percent image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
