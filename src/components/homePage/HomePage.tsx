import React from "react";
import MainHero from "../ui/mainHero/MainHero";
import Partiners from "../ui/ourparteners/Partiners";
import Aboutcompany from "../ui/aboutcompany/Aboutcompany";
import Buildsoftware from "../ui/buildyoursoftware/Buildsoftware";
import Reviews from "../ui/clientsreviews/Reviews";
import Portfolio from "../ui/portfolio/Portfolio";
import HomeLeadSection from "./HomeLeadSection";

function HomePage() {
  return (
    <>
      <MainHero />
      <Partiners />
      <Aboutcompany />
      <Buildsoftware />
      <Portfolio />
      <Reviews />
      <HomeLeadSection />
    </>
  );
}

export default HomePage;
