import React from "react";
import Header from "../header/Header";

import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";
import { useCallusContext } from "@/components/context/ContactusContext";

function HeroDigital() {
  const { toggleOpen } = useCallusContext();
  return (
    <section className="h-auto pb-[2rem] xl:h-[865px] bg-semipurple">
      <div className="w-[91%] pt-12 mx-auto">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-3 xl:gap-0 xl:grid-cols-[600px_695px] mt-12 lg:items-center xl:items-end w-full xl:w-fit mx-auto">
          <div data-aos="fade-right">
            <h1 className="text-white  text-[48px] sm:leading-[135px]  sm:text-[94px] lg:text-[70px] xl:text-[94px] xl:leading-[135px] max-w-[600px]">
              Solid Design{" "}
              <span className="text-[#313131] bg-[#E1E2F4] px-6 sm:ml-[-24px]">
                Solutions
              </span>
            </h1>
            <div className="sm:ml-[-24px]  my-10 lg:mb-0 sm:mt-10 flex gap-3">
              <button
                onClick={toggleOpen}
                className="text-white bg-[#FF732C] rounded-full py-[12px] px-[18px] text-[17px] font-medium"
              >
                + Become a Client
              </button>
              <button
                onClick={toggleOpen}
                className="text-black bg-[#FFF] rounded-full py-[12px] px-[18px] text-[17px] font-medium"
              >
                Contact us
              </button>
            </div>
            <div className="hidden lg:flex mt-16 sm:ml-[-24px] gap-6">
              <div className="relative max-h-[187px] max-w-[402px] overflow-hidden rounded-[41px]">
                <Image
                  src="/assets/digitalMarketing.webp"
                  alt="digital markrting"
                  height={187}
                  width={402}
                  className="bg-cover"
                />
              </div>
              <div className="w-[186px] h-[187px] bg-[#E1E2F4] rounded-[41px] flex justify-center items-center">
                <ImageComponent
                  src="/svgs/digitalMarketing/arrowdown.svg"
                  width="142px"
                  height="141px"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="relative w-full xl:w-[585px] h-[370px] sm:h-[652px] sm:rounded-[30px] rounded-[16px] bg-[#FF732C]">
              <div className="bg-white sm:py-6 sm:px-5 p-3 w-[40%] sm:w-[60%] xl:w-[343px] rounded-[20px] absolute top-7 left-7">
                <ImageComponent
                  src="/svgs/digitalMarketing/orangestars.svg"
                  width="116px"
                  height="20px"
                  alt="rate"
                />
                <h1 className="text-[#2d2d2d] text-base sm:text-3xl font-semibold mt-4 mb-4">
                  Build Strategy
                </h1>
                <p className="text-[10px] sm:text-base font-medium">
                  We have successfully completed a total of 300+ projects
                </p>
              </div>
              <div className="absolute bg-semipurple rounded-[16px] sm:rounded-[20px] ps-4 p-2 sm:p-4 sm:ps-5 text-white w-[158px] sm:w-[244px] top-[188px] sm:top-[250px] sm:left-[-18px] left-[-15px]">
                <h1 className="text-[24px] sm:text-5xl mb-2 sm:mb-6">97%</h1>
                <p className="text-[10px] sm:text-base">
                  Generate trending content to boost your social media
                </p>
                <div className="hidden sm:block absolute right-[-25px] top-[-15px]">
                  <ImageComponent
                    src="/svgs/digitalMarketing/corner.svg"
                    width="87px"
                    height="87px"
                    alt="go icon"
                  />
                </div>
              </div>
              <div
                className="absolute bottom-0
    left-[10px] sm:left-[25px] w-full h-full"
              >
                <div className="relative w-[100%] h-[100%]  xl:w-[671px] xl:h-[652px]">
                  <Image src="/assets/hand.webp" alt="hand" fill />
                </div>
                {/* <ImageComponent
                  src="/assets/hand.webp"
                  width="671px"
                  height="622px"
                  alt="hand"
                /> */}
              </div>
            </div>
            <div className="flex lg:hidden mt-4 sm:ml-[-24px] gap-6">
              <div className="relative w-[263px] h-[111px] sm:h-[187px] sm:w-[402px] overflow-hidden sm:rounded-[41px] rounded-[16px]">
                <Image
                  src="/assets/digitalMarketing.webp"
                  alt="digital markrting"
                  fill
                  className="bg-cover"
                />
              </div>
              <div className="relative w-[123px] h-[110px] sm:w-[186px] sm:h-[187px] bg-[#E1E2F4] rounded-[26px] sm:rounded-[41px] flex justify-center items-center">
                <Image src="/svgs/digitalMarketing/arrowdown.svg" alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroDigital;
