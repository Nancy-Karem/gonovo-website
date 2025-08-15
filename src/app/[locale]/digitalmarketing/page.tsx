import DigitalMarketingServices from "@/components/ui/digitalmarket service/DigitalMarketingServices";
import HeroDigital from "@/components/ui/herodigital/HeroDigital";
import { ContactusContext } from "@/components/context/ContactusContext";
import { Contact } from "@/components/contactcomp/Contact";
import React from "react";

function Page() {
  return (
    <ContactusContext>
      <HeroDigital />
      <DigitalMarketingServices />
      <Contact />
    </ContactusContext>
  );
}

export default Page;
