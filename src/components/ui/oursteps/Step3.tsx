import React from "react";
import styles from "./steps.module.css";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
function Step3() {
  const tech = [
    "/svgs/js.svg",
    "/svgs/html.svg",
    "/svgs/css.svg",
    "/svgs/react.svg",
  ];
  const tech2 = [
    "/svgs/go.svg",
    "/svgs/php.svg",
    "/svgs/java.svg",
    "/svgs/c++.svg",
    "/svgs/nodejs.svg",
    "/svgs/csharp.svg",
  ];
  return (
    <div
      className={`${styles.main_clip_path} relative w-fit mx-auto my-10 flex flex-col`}
    >
      <div className="absolute inset-0 grid grid-cols-2 px-20  items-center">
        <div className="relative">
          <div className={`${styles.clip} w-[403px]   bg-white relative`}>
            <div className="pt-5 px-7 pb-2 border-b border-[#f2f2f2]">
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-full inline-block bg-[#999999]"></span>
                <span className="w-3 h-3 rounded-full inline-block bg-[#C8C8C8]"></span>
                <span className="w-3 h-3 rounded-full inline-block bg-[#DBDBDB]"></span>
              </div>
              <p className="text-sm font-medium mt-6">Software Developments</p>
            </div>
            <div className="px-8 pt-6 pb-8">
              <div className="flex gap-2 mb-2">
                {tech.map((tech, index) => (
                  <ImageComponent
                    key={index}
                    src={tech}
                    alt=""
                    width="30px"
                    height="30px"
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-2 max-w-28">
                {tech2.map((tech, index) => (
                  <ImageComponent
                    key={index}
                    src={tech}
                    alt=""
                    width="30px"
                    height="30px"
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-[-75px]
right-[60px]"
          >
            <ImageComponent
              src="/svgs/dotsback.svg"
              alt="step1 image"
              width="143px"
              height="196px"
            />
          </div>
          <div
            className="absolute bottom-[-90px]
right-[80px]"
          >
            <ImageComponent
              src="/svgs/steps/stepimage3.svg"
              alt="image step3"
              width="237px"
              height="199px"
            />
          </div>
          <div className="absolute top-[30px] right-[150px]">
            <ImageComponent
              src="/svgs/steps/angelss.svg"
              width="37.5px"
              height="33.75px"
              alt=""
            />
          </div>
        </div>
        <div className="mt-5 w-fit ml-auto">
          <p className="ring-2 ring-black w-fit rounded-full px-[14px] py-[2px] text-sm font-medium">
            STEP 3
          </p>
          <h1 className="text-3xl font-medium text-[#111111] mt-10 mb-4">
            Development and Integration
          </h1>
          <p className="text-darkGray leading-[23px] max-w-[460px]">
            Here, we split our efforts into front-end and back-end development.
            We weave together APIs and third-party integrations to infuse the
            software with its core functionalities. This step ensures a robust
            foundation for the final product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step3;
