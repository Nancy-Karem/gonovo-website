import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";
import React from "react";
interface IPServices {
  category: string;
  bg: string;
  icon: string;
  items: string[];
  mainBg?: string;
  bggradient?: string;
}
function ServicesCard({ item }: { item: IPServices }) {
  return (
    <div
      data-aos="fade-up"
      style={{ boxShadow: "0px 4px 6px -2px #10182808" }}
      className="relative w-[384px] rounded-[46px] border border-thingray"
    >
      <div
        style={
          item.mainBg
            ? {
                backgroundColor: item.mainBg,
                paddingBottom: "16px",
                borderTopLeftRadius: "46px",
                borderTopRightRadius: "46px",
              }
            : {}
        }
        className="px-12  flex gap-5 flex-col bg-${item.mainBg"
      >
        <div
          className="w-[84px] h-[72px] rounded-ee-[18px] rounded-es-[18px]  flex justify-center items-center"
          style={
            item.mainBg
              ? { backgroundColor: item.bg, position: "relative", top: "-2px" }
              : { backgroundColor: item.bg }
          }
        >
          <ImageComponent
            src={item.icon}
            width="26.67px"
            height="26.67px"
            alt="icon of srvice"
          />
        </div>
        <p className="px-4 py-2 rounded-2xl bg-badgecolor text-textbadge w-fit font-semibold">
          {item.category}
        </p>
      </div>
      <div className="pl-12 pr-11 py-6 ">
        {item.items.map((service, index) => (
          <p
            key={index}
            className="flex gap-4 items-center text-darkGray leading-5 mb-3"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-semiblue"></span>
            {service}
          </p>
        ))}
      </div>
      {item.bggradient && (
        <div className="relative h-[108px] w-full  overflow-hidden rounded-ee-[46px] rounded-es-[46px]">
          <Image
            src={item.bggradient}
            alt="gradient"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ServicesCard;
