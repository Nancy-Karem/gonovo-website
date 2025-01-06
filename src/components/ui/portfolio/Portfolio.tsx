import React from "react";
import LinkNavigation from "../link/LinkNavigation";
import ImageComponent from "@/components/imagecomponent/ImageComponent";

function Portfolio() {
  return (
    <section className="my-12">
      <p className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full">
        #ABOUT THE COMPANY#
      </p>
      <h1 className="text-[60px] font-semibold  mt-8 w-fit mx-auto">
        WHO WE ARE !
      </h1>
      <p className="max-w-[1216px] text-[23px] mx-auto text-center text-secondaryblack leading-[43px] mt-6">
        GONOVO Tech is founded by driven computer scientists, researchers and
        developers that combined their decade of expertise in multiple facets of
        computer science and digital marketing with their passion for client
      </p>
      <div className="flex gap-7 mt-10 justify-center">
        <LinkNavigation
          text="+ Become a Client"
          bg="#FF732C"
          link="/"
          color="#fff"
        />
        <LinkNavigation text="Contact us" link="/" ring={true} />
      </div>
      <div className="relative flex justify-center">
        <ImageComponent
          src="/svgs/tablet.svg"
          width="1024px"
          height="682px"
          alt="tablet"
        />
        <ImageComponent
          src="/svgs/mobilepro.svg"
          width="383px"
          height="781px"
          alt="tablet"
        />
      </div>
    </section>
  );
}

export default Portfolio;
