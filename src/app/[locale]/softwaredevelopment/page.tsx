import { Contact } from "@/components/contactcomp/Contact";
import { ContactusContext } from "@/components/context/ContactusContext";
import Devsolution from "@/components/ui/devsolution/Devsolution";
import Header from "@/components/ui/header/Header";
import Ouroffers from "@/components/ui/ouroffers/Ouroffers";
import Oursteps from "@/components/ui/oursteps/Oursteps";
import Products from "@/components/ui/products/Products";
import Smartsolutions from "@/components/ui/smartsolution/Smartsolutions";
import React from "react";

function Page() {
  return (
      <ContactusContext>
        <div className="w-[91%] pt-12 mx-auto">
          <Header />
          <Devsolution />
          <Ouroffers />
          <Products />
          <Oursteps />
        </div>
        <Smartsolutions />
        <Contact />
      </ContactusContext>
  );
}

export default Page;
