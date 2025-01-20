
import Image from "next/image";
import React from "react";

function Step1() {
  // xl:max-w-[1216px]
  return (
    <div className="relative w-fit xl:w-full  bg-semiyellow rounded-[31px] h-auto xl:h-[443px]  my-10 flex flex-col mx-auto">
      <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-es-[31px] bg-white right-0 top-0 absolute"></div>
      <div
        style={{ boxShadow: "10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute lg:right-[150px] right-[120px] rounded-se-[31px]"
      ></div>
      <div
        style={{ boxShadow: "10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute right-[0px] lg:top-[150px] top-[120px] rounded-se-[31px]"
      ></div>

      <div className="grid grid-cols-1 gap-8 xl:gap-0 xl:grid-cols-2 lg:px-10 lg:py-20 px-5 py-10 xl:px-20 h-full w-fit xl:w-full  justify-center">
        <div>
          <div className="rounded-3xl  bg-white relative w-[65%] sm:w-[70%]  xl:w-[378px]">
            <div className="pt-5 px-7 pb-2 border-b border-[#f2f2f2]">
              <div className="flex gap-1">
                <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#999999]"></span>
                <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#C8C8C8]"></span>
                <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#DBDBDB]"></span>
              </div>
              <p className="text-[12px] xl:text-sm font-medium mt-3 xl:mt-6">
                Project Requirements
              </p>
            </div>
            <div className="py-4 px-2 xl:p-10">
              <div className="p-4 bg-[#F0F0F0] rounded-md flex flex-col gap-1">
                <p className="flex gap-1 items-center text-[7px] xl:text-[10px] text-darkGray">
                  <span className="w-1 h-1 rounded-full bg-darkGray inline-block"></span>
                  Who are your target audience?
                </p>
                <p className="flex gap-1 items-center text-[7px] xl:text-[10px] text-darkGray">
                  <span className="w-1 h-1 rounded-full bg-darkGray inline-block"></span>
                  Do you have a compatitors
                </p>
                <p className="flex gap-1 items-center text-[7px] xl:text-[10px]text-darkGray">
                  <span className="w-1 h-1 rounded-full bg-darkGray inline-block"></span>
                  Products Features
                </p>
              </div>
            </div>
            <div className="absolute xl:top-[-40px] sm:top-[-25px] sm:left-[100px] top-[-12px] left-[80px] xl:left-[200px] px-3 py-2 lg:px-4 lg:py-3 rounded-[10px] bg-semipurple flex w-max xl:scale-100  sm:scale-75 scale-50">
              <div>
                <h2 className="text-[12px] text-[#111111] font-medium mb-2">
                  Project almost finished
                </h2>
                <div className="relative flex">
                  <p className="text-[8px] w-fit font-medium bg-white rounded-full py-1 px-[6px] h-fit">
                    User Research
                  </p>
                  <p className="text-[9px] w-fit font-medium bg-white rounded-full py-1 px-[6px] mt-3 mx-2">
                    Market Research
                  </p>
                </div>
              </div>
              <div className="relative  xl:w-[69px] xl:h-[69px] w-[45px] h-[45px]">
                <Image src="/svgs/steps/percent.svg" alt="" fill />
              </div>
            </div>
            <div
              className="absolute xl:bottom-[-96.5px]
xl:right-[-65px] -bottom-10 -right-10"
            >
              <div className="relative xl:w-[222px] xl:h-[192px] w-[114px] h-[100px]">
                <Image src="/svgs/steps/imagestep1.svg" alt="" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-fit ml-auto">
          <p className="ring-2 ring-black w-fit rounded-full xl:px-[14px] xl:py-[2px] text-[12px] px-2 py-[1px] xl:text-sm font-medium">
            STEP 1
          </p>
          <h1 className="text-[24px] xl:text-3xl font-medium text-[#111111] mt-10 mb-4">
            Requirements Exploration
          </h1>
          <p className="text-sm xl:text-base text-darkGray leading-[23px] max-w-[460px]">
            In this initial phase, we deeply analyze project requirements,
            understand the target audience, assess the competitive landscape,
            and evaluate market conditions. Effective communication between all
            stakeholders is key.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step1;
