import React from "react";
import styles from "./Hero.module.css";
import hero from "../../Assets/Hero.jpg";
const Hero = () => {
  return (
    <div className={styles["hero-section"]}>
      <img src={hero} alt="news image" />
    </div>
  );
};
export default Hero;
