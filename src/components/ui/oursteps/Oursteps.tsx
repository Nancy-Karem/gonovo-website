import React from "react";
import Badge from "../common/Badge";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function Oursteps() {
  return (
    <section className="py-16">
      <Badge
        text="#Products Journey#"
        title="Four Simple Steps!"
        desc="Gonovo’s team of skilled developers is committed to crafting tailor-made software solutions that meet the specific needs of each client."
      />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </section>
  );
}

export default Oursteps;
