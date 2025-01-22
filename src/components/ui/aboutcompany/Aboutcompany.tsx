import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import LinkNavigation from "../link/LinkNavigation";
import Badge from "../common/Badge";
import Image from "next/image";
import styles from "./aboutstyle.module.css";
function Aboutcompany() {
  return (
    <section className="my-12" id="about">
      <Badge
        text="#ABOUT THE COMPANY#"
        title="WHO WE ARE !"
        desc="GONOVO Tech is founded by driven computer scientists, researchers and
        developers that combined their decade of expertise in multiple facets of
        computer science and digital marketing with their passion for client
        success, to create bespoke strategies and solutions for success in the
        digital age. At GONOVO we build software and provide digital marketing
        strategy"
      />

      <div className={styles.about_main_Wrapper}>
        <div className={styles.left_side}>
          <div className={styles.clip_cont}>
            <ImageComponent
              src="/svgs/clip.svg"
              width="595px"
              height="271px"
              alt="image"
            />
          </div>
          <div className={styles.text}>
            <p className="">
              A strategic experience agency crafting brands, websites, Products
              and pretty much anything you can imagine
            </p>
            <p className="">
              Want to grow your brand and reach more eyes? Our digital marketing
              team will help you create the perfect user growth, engagement and
              retention strategies. Our team will tailor custom go to market
              plans for your product or service. Set up an introductory call to
              learn what GONOVO can do for you
            </p>
            <div className="flex gap-4">
              <LinkNavigation
                text="+ Become a Client"
                bg="#FF732C"
                link="/"
                color="#fff"
              />
              <LinkNavigation text="Contact us" link="/" ring={true} />
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <div
            style={{
              backgroundImage: "url(/assets/about1.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className={styles.view2_cont}
          >
            <div
              className={`${styles.sec_clip} hidden bg-white w-[147px] h-[79px] px-[2px] py-1 absolute bottom-10 left-[-40px]`}
              style={{
                clipPath: `path(
    "M0 18.4581C0 9.16241 7.4664 1.59038 16.7612 1.4598L109.545 0.15628C115.529 0.0722038 120.304 5.12697 119.879 11.0969C119.459 17.0101 124.143 22.0386 130.071 22.0386H135.541C139.66 22.0386 143 25.3782 143 29.4979V36.279V44.5879C143 46.6191 142.063 48.5367 140.46 49.7849C139.557 50.4884 138.486 50.9443 137.353 51.1078L136.513 51.2289C131.364 51.9717 127.702 56.6917 128.17 61.8735C128.741 68.1952 123.352 73.5397 117.05 72.7822L115.184 72.5579H104.997L18.0411 77.8931C8.26119 78.4931 0 70.7233 0 60.925V18.4581Z"
  )`,
              }}
            >
              <h1 className="text-[11px]  font-medium">CREATING GREAT</h1>
              <h1 className="text-[11px]  mt-[6px] font-medium">
                EXPERIENCE & Seamless
              </h1>
              <h1 className="text-[11px]  mt-[6px] font-medium relative flex gap-1 items-center">
                <ImageComponent
                  src="/svgs/onestar.svg"
                  alt="image star"
                  width="12px"
                  height="12px"
                />{" "}
                Flow For The User
              </h1>
            </div>
            <div className={styles.blure_box2}>
              <h1 className="">98%</h1>
              <p className="">Successful Market Plan</p>
            </div>
          </div>
          <div className={styles.divide_th_part}>
            <div className="flex justify-between items-center">
              <div className={styles.text_third}>
                <div className={styles.line_top}>
                  <span>Reach More Eyes</span>
                  <span className={`${styles.responsive} relative w-6 h-6`}>
                    <Image
                      src="/svgs/star.svg"
                      alt="star icon"
                      fill
                      className="hidden sm:block"
                    />
                    <Image
                      src="/svgs/starmob.svg"
                      alt="star icon"
                      fill
                      className="block sm:hidden"
                    />
                  </span>
                </div>
                <p className={styles.line_bottom}>
                  Transform Your Business Grow With Us
                </p>
              </div>
              <div
                className={`${styles.target_res} relative w-[134px] h-[103px]`}
              >
                <Image
                  src="/svgs/simplestatic.svg"
                  alt="projects completed"
                  fill
                  className="hidden sm:block"
                />
                <Image
                  src="/svgs/simplestaticsmob.svg"
                  alt="projects completed"
                  fill
                  className="block sm:hidden"
                />
              </div>
            </div>
            <div
              className={styles.third_view}
              style={{
                backgroundImage: "url(/assets/about2.webp)",
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.blur_box1}>
                <p>
                  Our Digital Marketing Team Will Help You Create The Perfect
                  User Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutcompany;
