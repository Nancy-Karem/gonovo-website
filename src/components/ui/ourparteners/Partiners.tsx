import companies from "@/app/data/companies";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";

function Partiners() {
  return (
    <section className="p-16">
      <div className="flex flex-col gap-8 max-w-[1280px] mx-auto text-center">
        <p className="text-darkGray font-medium">
          Join 4,000+ clients already growing
        </p>
        <div className="flex justify-between">
          {companies.map((item, index) => (
            <ImageComponent
              key={index}
              src={item.logo}
              width={item.width}
              height="84px"
              alt="partener company"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partiners;
