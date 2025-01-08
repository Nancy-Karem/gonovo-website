import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";

function Devsolution() {
  return (
    <section className="my-16">
      <div className="grid grid-cols-[1fr_637px]">
        <div className="flex">
          <div className="flex justify-between flex-col">
            <div>
              <h1 className="max-w-[427px] text-[64px] font-semibold leading-[77.4px]">
                Development Solutions
              </h1>
              <p className="text-xl mt-8">Fast, Easy, Unique</p>
            </div>
            <div className="relative w-[321px] mb-10">
              <div className="flex absolute right-10 top-6 items-center gap-1 text-xl">
                Design
                <ImageComponent
                  src="/svgs/star.svg"
                  width="15px"
                  height="15px"
                  alt="star icon"
                />
              </div>
              <ImageComponent
                src="/svgs/clipsoftdev1.svg"
                width="321px"
                height="225px"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <p className="-rotate-90">@2025</p>
            <p className="-rotate-90">All Right Reserved</p>
          </div>
        </div>
        <div
          className="w-[637px] h-[610px] relative"
          style={{ backgroundImage: "url(/svgs/clipsoftdev2.svg)" }}
        >
          <div
            className="flex gap-3 w-fit -rotate-90 absolute bottom-[90px]
    right-[-15px]"
          >
            <div className="rotate-90">
              <ImageComponent
                src="/svgs/downarrow.svg"
                height="24px"
                width="24px"
                alt="arrow"
              />
            </div>
            <span className="text-sm font-semibold">Scroll Down</span>
          </div>
          <div className="absolute top-10 right-12 p-6 rounded-[20px] bg-white w-[251px] flex flex-col gap-6 ">
            {/* /*h-[192px] */}
            <div className="flex justify-between items-center">
              <p className="text-[41px] font-semibold leading-7">100+</p>{" "}
              <ImageComponent
                src="/svgs/grow.svg"
                width="68px"
                height="24px"
                alt="grow badge"
              />
            </div>
            <p className="font-medium leading-7">
              Mobile, Web Software Projects Completed
            </p>
            <ImageComponent
              src="/svgs/goldstars.svg"
              width="116px"
              height="20px"
              alt="stars"
            />
          </div>
          <div className="absolute bottom-20 left-36">
            <ul className="border-l-2 pl-2 border-black flex flex-col gap-5">
              <li className="text-lg font-medium leading-4">
                Streamlining Efficiency
              </li>
              <li>
                <ImageComponent
                  src="/svgs/downarrow.svg"
                  width="24px"
                  height="24px"
                  alt="arrow down icon"
                />
              </li>
              <li className="text-lg font-medium leading-4">
                Elevating Standards
              </li>
              <li>
                <ImageComponent
                  src="/svgs/downarrow.svg"
                  width="24px"
                  height="24px"
                  alt="arrow down icon"
                />
              </li>
              <li className="text-lg font-medium leading-4">
                Ensuring Security
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Devsolution;
