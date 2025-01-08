import React from "react";
import Badge from "../common/Badge";
import ServicesCard from "../cards/ServicesCard";
import cardsservicesdata from "@/app/data/services";

function Ouroffers() {
  return (
    <section className="py-16">
      <Badge
        text="#What We Offer#"
        title="Products Provide For You"
        desc="No matter the industry, company size, or complexity of the software challenge, we’re up for it!"
      />
      <div className="max-w-[1216px] mx-auto grid grid-cols-3 items-end justify-items-center my-10">
        {cardsservicesdata.map((item, index) => (
          <ServicesCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Ouroffers;
