import React from "react";
import Badge from "../common/Badge";
import smartsolution from "@/app/data/smartsolution";
import Card from "../common/Card";

function Smartsolutions() {
  return (
    <section className="pt-12 pb-24 relative z-10 bg-white rounded-ee-[40px] rounded-es-[40px] overflow-x-hidden">
      <Badge
        text="#Software Development Services#"
        title="Smart Software Solutions"
        desc="At Gonovo, we offer a comprehensive range of software development services tailored to meet your business needs. From custom software and CRM development to enterprise solutions and software integration, we focus on delivering innovative and efficient solutions."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:max-w-[1280px] md:max-w-[96%]  xl:grid-cols-3  gap-6 mx-auto max-w-[405px] mt-12">
        {smartsolution.map((item, index) => (
          <Card item={item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Smartsolutions;
