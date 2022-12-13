import React from "react";
import styles from "./Overlay.module.css";

const Overlay = (props) => {
  const handleSubmit = () => {
    props.overlayOff(false);
  };
  return <div className={styles.overlay} onClick={handleSubmit}></div>;
};
export default Overlay;
