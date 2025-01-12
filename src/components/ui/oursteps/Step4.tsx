import React from "react";
import styles from "./steps.module.css";
import ImageComponent from "@/components/imagecomponent/ImageComponent";

function Step4() {
  return (
    <div
      className={`${styles.step4} relative w-fit mx-auto my-10 flex flex-col`}
    >
      <div className="absolute inset-0 grid grid-cols-2 pl-56 pr-20  items-center justify-items-end">
        <div className="mt-5 w-fit ml-auto">
          <p className="ring-2 text-black ring-black w-fit rounded-full px-[14px] py-[2px] text-sm font-medium">
            STEP 4
          </p>
          <h1 className="text-3xl font-medium text-black mt-10 mb-4">
            Testing and Quality Assurance
          </h1>
          <p className="text-black leading-[23px] max-w-[460px]">
            Before deployment, rigorous testing takes place. We evaluate
            performance, speed, and functionality to catch any bugs or errors.
            Our commitment is to deliver a seamless user experience, free from
            glitches.
          </p>
        </div>
        <div className="relative">
          <ImageComponent
            src="/svgs/steps/step4image.svg"
            alt=""
            width="378px"
            height="296px"
          />
          <div className="absolute bg-white w-[191px] h-[154px] flex  flex-col bottom-[-80px] items-center rounded-ss-[25px] rounded-se-[25px] left-[-40px]">
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
