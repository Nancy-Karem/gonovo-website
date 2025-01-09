import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";

function Step1() {
  return (
    <div className="relative w-fit mx-auto my-10 flex flex-col">
      <ImageComponent
        src="/svgs/steps/step1.svg"
        alt="step clip path"
        width="1216px"
        height="443px"
      />
      <div className="absolute inset-0 grid grid-cols-2 px-20  items-center">
        <div>
          <div className="w-[378px] rounded-3xl  bg-white relative">
            <div className="pt-5 px-7 pb-2 border-b border-[#f2f2f2]">
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-full inline-block bg-[#999999]"></span>
                <span className="w-3 h-3 rounded-full inline-block bg-[#C8C8C8]"></span>
                <span className="w-3 h-3 rounded-full inline-block bg-[#DBDBDB]"></span>
              </div>
              <p className="text-sm font-medium mt-6">Project Requirements</p>
            </div>
            <div className="p-10">
              <div className="p-4 bg-[#F0F0F0] rounded-md flex flex-col gap-1">
                <p className="flex gap-1 items-center text-[10px] text-darkGray">
                  <span className="w-1 h-1 rounded-full bg-darkGray inline-block"></span>
                  Who are your target audience?
                </p>
                <p className="flex gap-1 items-center text-[10px] text-darkGray">
                  <span className="w-1 h-1 rounded-full bg-darkGray inline-block"></span>
                  Do you have a compatitors
                </p>
                <p className="flex gap-1 items-center text-[10px] text-darkGray">
                  <span className="w-1 h-1 rounded-full bg-darkGray inline-block"></span>
                  Products Features
                </p>
              </div>
            </div>
            <div className="absolute top-[-40px] left-[200px] px-6 py-4 rounded-[10px] bg-semipurple flex w-max">
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
              <ImageComponent
                src="/svgs/steps/percent.svg"
                alt="percent"
                width="69px"
                height="69px"
              />
            </div>
            <div
              className="absolute bottom-[-96.5px]
right-[-65px]"
            >
              <ImageComponent
                src="/svgs/steps/imagestep1.svg"
                alt="step1 image"
                width="222px"
                height="192px"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 w-fit ml-auto">
          <p className="ring-2 ring-black w-fit rounded-full px-[14px] py-[2px] text-sm font-medium">
            STEP 1
          </p>
          <h1 className="text-3xl font-medium text-[#111111] mt-10 mb-4">
            Requirements Exploration
          </h1>
          <p className="text-darkGray leading-[23px] max-w-[460px]">
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
