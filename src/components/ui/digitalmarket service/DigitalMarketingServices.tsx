import React from "react";
import Badge from "../common/Badge";
import Card from "../common/Card";
import digitalMarketingServices from "@/app/data/digitalmarketing";

function DigitalMarketingServices() {
  return (
    <section className="pt-12 pb-24 relative z-10 bg-white rounded-ee-[40px] rounded-es-[40px]">
      <Badge
        text="#Digital Marketing#"
        title="Digital Marketing services"
        desc="At Gonovo, we specialize in delivering tailored digital marketing strategies that drive growth and elevate your brand’s online presence. Our expert team focuses on maximizing results through a variety of services designed to reach and engage your target audience."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:max-w-[1280px] md:max-w-[96%]  xl:grid-cols-3  gap-6 mx-auto max-w-[405px] mt-12 overflow-x-hidden">
        {digitalMarketingServices.map((item, index) => (
          <Card item={item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default DigitalMarketingServices;
