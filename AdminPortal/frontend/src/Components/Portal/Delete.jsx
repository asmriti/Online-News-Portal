import React from "react";
import styles from "./Delete.module.css";
import dangerImage from "./../../Assets/db-icon.png";
import Overlay from "./Overlay";
import "./commonStyle.css";
import NewsIdInput from "./NewsIdInput";

const Delete = ({ onclick, setReload, setIsDBUpdated }) => {
  return (
    <React.Fragment>
      <Overlay overlayOff={onclick} />
      <div className="wrapper">
        <h1 className="heading">
          Warning, are you <span className="highlight">concious</span>?{" "}
        </h1>
        <div className={styles["img-wrapper"]}>
          <img src={dangerImage} alt="" />
        </div>

        <NewsIdInput
          action="delete"
          btnText="Delete"
          onclick={onclick}
          setReload={setReload}
          setIsDBUpdated={setIsDBUpdated}
        />
      </div>
    </React.Fragment>
  );
};
export default Delete;
