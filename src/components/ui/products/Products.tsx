import React from "react";
import Badge from "../common/Badge";
import ProductCard from "../productcard/ProductCard";
import productsData from "@/app/data/products";
import { useTranslations } from "next-intl";

function Products() {
  const t = useTranslations("products");

  return (
    <section className="py-12">
      <Badge
        text={t("badge_text")}
        title={t("title")}
        desc={t("description")}
      />
      <div className="flex  max-w-[1225px] justify-center flex-wrap mx-auto gap-x-8 gap-y-12 mt-12">
        {productsData.map((item, index) => (
          <ProductCard item={item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Products;
