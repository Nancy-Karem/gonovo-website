"use client";
import React from "react";
import MainHero from "../ui/mainHero/MainHero";
import Partiners from "../ui/ourparteners/Partiners";
import Aboutcompany from "../ui/aboutcompany/Aboutcompany";
import Buildsoftware from "../ui/buildyoursoftware/Buildsoftware";
import Reviews from "../ui/clientsreviews/Reviews";
import Portfolio from "../ui/portfolio/Portfolio";
import { useCallusContext } from "../context/ContactusContext";
import Contactus from "../contactus/Contactus";

function HomePage() {
  const { contactModal } = useCallusContext();
  return (
    <>
      <MainHero />
      <Partiners />
      <Aboutcompany />
      <Buildsoftware />
      <Portfolio />
      <Reviews />
      {contactModal && <Contactus />}
    </>
  );
}

export default HomePage;
