import Devsolution from "@/components/ui/devsolution/Devsolution";
import Header from "@/components/ui/header/Header";
import Ouroffers from "@/components/ui/ouroffers/Ouroffers";
import Oursteps from "@/components/ui/oursteps/Oursteps";
import Products from "@/components/ui/products/Products";
import Smartsolutions from "@/components/ui/smartsolution/Smartsolutions";
import React from "react";

function page() {
  return (
    <>
      <div className="w-[91%] pt-12 mx-auto">
        <Header />
        <Devsolution />
        <Ouroffers />
        <Products />
        <Oursteps />
      </div>
      <Smartsolutions />
    </>
  );
}

export default page;
