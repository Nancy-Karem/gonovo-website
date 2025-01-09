import React from "react";
import Badge from "../common/Badge";
import ProductCard from "../productcard/ProductCard";
import productsData from "@/app/data/products";

function Products() {
  return (
    <section className="py-12">
      <Badge
        text="#Software Development Services#"
        title="Products Provide For You"
        desc="Gonovo’s dedicated team of software developers diligently crafts bespoke software solutions. Our commitment has enabled us to extend our digital footprint across diverse industries."
      />
      <div className="grid grid-cols-3 w-fit mx-auto gap-x-8 gap-y-12 mt-12">
        {productsData.map((item, index) => (
          <ProductCard item={item} key={index} index={index} />
        ))}
      </div>
      {/* <ProductCard /> */}
    </section>
  );
}

export default Products;
