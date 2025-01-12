import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
interface IPCard {
  icon: string;
  title: string;
  desc: string;
}
function Card({ item, index }: { item: IPCard; index: number }) {
  return (
    <div
      className={`${
        index === 1 ? "bg-semipurple" : ""
      } border border-thingray pt-10 pl-8 pr-10  pb-8 rounded-[40px]
       ${index === 1 || index === 4 ? "translate-y-[50px]" : ""} `}
      style={{
        boxShadow: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      }}
    >
      <ImageComponent src={item.icon} width="84px" height="72px" alt="" />
      <h2
        className={`${
          index === 1 ? "text-white" : " text-linksColor"
        } font-semibold mt-16 mb-4`}
      >
        {item.title}
      </h2>
      <p className={`${index === 1 ? "text-white" : "text-darkGray"} text-sm`}>
        {item.desc}
      </p>
    </div>
  );
}

export default Card;
