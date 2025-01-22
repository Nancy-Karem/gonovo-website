import React from "react";
import LinkNavigation from "../link/LinkNavigation";
import Badge from "../common/Badge";
import ShapeOne from "./shape1/ShapeOne";
import ShapeTwo from "./shape2/ShapeTwo";
import Shapethree from "./shape3/Shapethree";
import styles from "./mainsection.module.css";
import ShapeShort from "./shapshort/ShapeShort";
function Portfolio() {
  return (
    <section className="py-12">
      <Badge
        text="#Company Portfolio#"
        title="Some of our work!"
        desc="Explore some of the exciting projects we've worked on! From innovative mobile apps to dynamic websites, we craft digital solutions that are tailored to meet the unique needs of our clients."
      />
      <div className="flex justify-center gap-4">
        <LinkNavigation
          text="+ Become a Client"
          bg="#FF732C"
          link="/"
          color="#fff"
        />
        <LinkNavigation text="Contact us" link="/" ring={true} />
      </div>
      <div
        className={`${styles.main_sec_cont} my-10 grid grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-6 max-w-[1307px] mx-auto justify-items-center`}
      >
        {/* work__1 */}
        <ShapeOne
          bgColor="#feff76"
          index={1}
          text="Chef’s Choice"
          link="https://www.chefschoicefruits.com/"
        />
        {/* work__2 */}
        <ShapeTwo
          bgColor="linear-gradient(96.71deg, #514FFF -1.8%, #6724F5 99.73%)"
          index={2}
          text="Bling Weddings"
          link="/"
        />
        {/* <ShapeTwo bgImage="/assets/3.png" text="F2F Scaffolding" link="/" /> */}
        <ShapeShort/>
        <ShapeOne
          bgColor="linear-gradient(96.71deg, #FED2F2 -1.8%, #9724F5 99.84%)
"
          text="Mobile View"
          link="/"
          index={3}
        />
        <Shapethree />
        <div className={styles.main_Shape_cont}></div>
      </div>
    </section>
  );
}

export default Portfolio;
