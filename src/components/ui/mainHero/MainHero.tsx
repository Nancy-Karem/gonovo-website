import React from "react";
import styles from "./mainhero.module.css";
import Header from "../header/Header";
function MainHero() {
  return (
    <section className={styles.main_hero_container}>
      <Header />
    </section>
  );
}

export default MainHero;
