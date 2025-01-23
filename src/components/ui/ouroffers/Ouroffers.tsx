import React from "react";
import Badge from "../common/Badge";
import ServicesCard from "../cards/ServicesCard";
import cardsservicesdata from "@/app/data/services";

function Ouroffers() {
  return (
    <section className="pt-0 pb-12 xl:py-12">
      <Badge
        text="#What We Offer#"
        title="Products Provide For You"
        desc="No matter the industry, company size, or complexity of the software challenge, we’re up for it!"
      />
      <div className="max-w-[1216px] gap-4 mx-auto flex items-end justify-center my-10 xl:flex-nowrap flex-wrap">
        {cardsservicesdata.map((item, index) => (
          
          <ServicesCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Ouroffers;
