import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import LinkNavigation from "../link/LinkNavigation";
import Badge from "../common/Badge";

function Aboutcompany() {
  return (
    <section className="my-12">
      <Badge
        text="#ABOUT THE COMPANY#"
        title="WHO WE ARE !"
        desc="GONOVO Tech is founded by driven computer scientists, researchers and
        developers that combined their decade of expertise in multiple facets of
        computer science and digital marketing with their passion for client
        success, to create bespoke strategies and solutions for success in the
        digital age. At GONOVO we build software and provide digital marketing
        strategy"
      />

      <div className="mx-10 my-12 grid grid-cols-[416px,442px,442px] items-end gap-5">
        <div className="flex flex-col z-10">
          <ImageComponent
            src="/svgs/clip.svg"
            width="595px"
            height="271px"
            alt="image"
          />
          <div className="flex flex-col gap-[18px]">
            <p className="text-darkGray text-[16px] leading-7 max-w-[416px]">
              A strategic experience agency crafting brands, websites, Products
              and pretty much anything you can imagine
            </p>
            <p className="text-darkGray text-[16px] leading-7 max-w-[416px]">
              Want to grow your brand and reach more eyes? Our digital marketing
              team will help you create the perfect user growth, engagement and
              retention strategies. Our team will tailor custom go to market
              plans for your product or service. Set up an introductory call to
              learn what GONOVO can do for you
            </p>
            <div className="flex gap-4 mt-4">
              <LinkNavigation
                text="+ Become a Client"
                bg="#FF732C"
                link="/"
                color="#fff"
              />
              <LinkNavigation text="Contact us" link="/" ring={true} />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(/assets/about1.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-[442px] h-[697px] rounded-[40px] relative"
        >
          <div
            style={{ backdropFilter: "blur(24px)" }}
            className="w-[257px] h-[120px] bg-bgdrop text-white absolute  top-10 right-10 pt-6 px-6 pb-8 rounded-[20px]"
          >
            <h1 className="text-4xl font-semibold">98%</h1>
            <p className="mt-4 text-[18px] font-medium">
              Successful Market Plan
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex max-w-[191px] gap-2 pb-2 border-b border-black font-medium">
                <span>Reach More Eyes</span>
                <span>
                  <ImageComponent
                    src="/svgs/star.svg"
                    alt="star icon"
                    width="24px"
                    height="24px"
                  />
                </span>
              </div>
              <p className="max-w-[191px] pt-2 font-medium">
                Transform Your Business Grow With Us
              </p>
            </div>
            <div>
              <ImageComponent
                src="/svgs/simplestatic.svg"
                alt="simple static"
                width="134px"
                height="103px"
              />
            </div>
          </div>
          <div
            className="rounded-[40px] overflow-hidden w-[442px] h-[563px] relative"
            style={{
              backgroundImage: "url(/assets/about2.webp)",
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          >
            <div
              className="ring-1 ring-ringLight rounded-[20px] px-6 pb-8 pt-6 w-fit absolute left-[50%] translate-x-[-50%] bottom-6 bg-offwight "
              style={{ backdropFilter: "blur(24px)" }}
            >
              <p className="w-[348px] text-white text-lg">
                Our Digital Marketing Team Will Help You Create The Perfect User
                Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutcompany;
