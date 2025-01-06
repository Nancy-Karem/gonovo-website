import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";
import React from "react";
import LinkNavigation from "../link/LinkNavigation";

function Buildsoftware() {
  const skills = [
    "JavaScript",
    "React",
    "Bootstrap",
    "Python",
    "node js",
    "Kotlin",
    "Spring",
  ];
  const data = [
    {
      title: "Healthcare Software Development ",
      image: "/assets/1.webp",
    },
    {
      title: "Banking Software Development",
      image: "/assets/3.webp",
    },
    {
      title: "Real Estate App Development",
      image: "/assets/2.webp",
    },
  ];
  return (
    <section className="py-16">
      <div className="bg-semipurple py-16">
        <div className="max-w-[829px] m-auto flex flex-col gap-5">
          <h1 className="text-[60px] leading-[72px] flex justify-between items-center">
            Lets Build Your Software !
            <ImageComponent
              src="/svgs/angels.svg"
              width="58px"
              height="58px"
              alt="angels"
            />
          </h1>
          <p className="text-lightblack leading-[28px] font-medium text-center">
            GONOVO provides a complete end to end solution for your needs. Our
            unique approach to client success has helped us deliver robust
            products
          </p>
        </div>
        <div className="max-w-[766px] mx-auto flex justify-between mt-6">
          {skills.map((item, index) => (
            <p
              key={index}
              className={`${
                index === 0 ? "bg-white ring-white" : "ring-darkring"
              } px-3 py-1 ring-[1.5px] text-darkring  rounded-full`}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="w-[87%] ml-[8%] mr-[5%] grid grid-cols-2 mt-16  items-center justify-items-center">
          <div className="relative">
            <div
              style={{ backdropFilter: "blur(24px)" }}
              className="w-[566px] h-[381px] bg-offwight rounded-[20px] overflow-hidden p-6 flex gap-2 ring-1 ring-ringLight"
            >
              <p className="h-[13px] w-[13px] rounded-full bg-white"></p>
              <p className="h-[13px] w-[13px] rounded-full bg-dotlight"></p>
              <p className="h-[13px] w-[13px] rounded-full bg-ringLight"></p>
            </div>

            <div className="grid grid-cols-3 gap-3 absolute top-[68px] left-[-70px] w-max">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-[221px] h-[290px] rounded-xl  overflow-hidden ${
                    index === 1 && "ring-1 ring-offwight"
                  }`}
                >
                  <Image
                    src={item.image}
                    width={221}
                    height={290}
                    alt="view"
                    style={{
                      height: index === 1 ? "180px" : "290px",
                      objectFit: index === 1 ? "fill" : "cover",
                      width: index === 1 ? "90%" : "100%",
                      margin: index === 1 ? "4px auto 0px" : "0",
                    }}
                    className={`object-cover ${
                      index === 2 && "object-[50%_58%]"
                    }`}
                  />

                  <div
                    className="ring-1 ring-ringLight rounded-lg p-3 w-[201px] absolute left-[50%] translate-x-[-50%] bottom-3 bg-bgdrop"
                    style={{ backdropFilter: "blur(24px)" }}
                  >
                    <p className="text-white text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-5 mt-10 flex-col ms-20 justify-end">
            <h1 className="text-3xl font-semibold">
              Our Software Development Services
            </h1>
            <p className="leading-[28px] text-lightblack">
              We offer bespoke software development services that are customized
              to your exact requirements. Our team of experts will work with you
              from conception to delivery to ensure that you receive
              intelligent, high-tech software solutions that are tailored to
              your specific needs.
            </p>
            <div className="flex gap-7 mt-4">
              <LinkNavigation
                text="Learn More"
                bg="#FF732C"
                link="/"
                color="#fff"
              />
              <LinkNavigation text="Contact us" link="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buildsoftware;
