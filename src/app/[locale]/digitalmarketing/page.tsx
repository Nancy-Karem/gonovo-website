"use client";
import Contactus from "@/components/contactus/Contactus";
import { useCallusContext } from "@/components/context/ContactusContext";
import DigitalMarketingServices from "@/components/ui/digitalmarket service/DigitalMarketingServices";
import HeroDigital from "@/components/ui/herodigital/HeroDigital";
import React from "react";

function Page() {
  const { contactModal } = useCallusContext();
  return (
    <>
      <HeroDigital />
      <DigitalMarketingServices />
      {contactModal && <Contactus />}
    </>
  );
}

export default Page;
