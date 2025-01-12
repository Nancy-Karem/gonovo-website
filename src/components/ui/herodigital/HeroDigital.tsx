import React from "react";
import Header from "../header/Header";
import LinkNavigation from "../link/LinkNavigation";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";

function HeroDigital() {
  return (
    <section className="h-[865px] bg-semipurple">
      <div className="w-[91%] pt-12 mx-auto">
        <Header />
        <div className="grid grid-cols-[600px_695px] mt-12 items-end w-fit mx-auto">
          <div>
            <h1 className="text-white text-[94px] leading-[135px] max-w-[600px]">
              Solid Design{" "}
              <span className="text-[#313131] bg-[#E1E2F4] px-6 ml-[-24px]">
                Solutions
              </span>
            </h1>
            <div className="ml-[-24px] mt-10 flex gap-3">
              <LinkNavigation
                link="/"
                text="+ Become a Client"
                color="#fff"
                bg="#FF732C"
                inline={true}
              />
              <LinkNavigation link="/" text="Contact Us" inline={true} />
            </div>
            <div className="flex mt-16 ml-[-24px] gap-6">
              <div className="relative h-[187px] w-[402px] overflow-hidden rounded-[41px]">
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
          <div>
            <div className="relative w-[585px] h-[652px] rounded-[30px] bg-[#FF732C]">
              <div className="bg-white py-6 px-5 w-[343px] rounded-[20px] absolute top-7 left-7">
                <ImageComponent
                  src="/svgs/digitalMarketing/orangestars.svg"
                  width="116px"
                  height="20px"
                  alt="rate"
                />
                <h1 className="text-[#2d2d2d] text-3xl font-semibold mt-4 mb-4">
                  Build Strategy
                </h1>
                <p className="font-medium">
                  We have successfully completed a total of 300+ projects
                </p>
              </div>
              <div className="absolute bg-semipurple rounded-[20px] p-4 text-white w-[244px] top-[250px] left-[-15px]">
                <h1 className="text-5xl mb-6">97%</h1>
                <p>Generate trending content to boost your social media</p>
                <div className="absolute right-[-25px] top-[-15px]">
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
    left-[25px]"
              >
                <ImageComponent
                  src="/assets/hand.webp"
                  width="671px"
                  height="622px"
                  alt="hand"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroDigital;
