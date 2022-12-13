import React from "react";
import styles from "./Logout.module.css";
import BibekDai from "./../../Assets/Bibekdai.png";
import PrashantDai from "./../../Assets/Prashantdai.jpeg";

const Logout = ({ user, onLogout }) => {
  let username = localStorage.getItem("username");
  return (
    <div className={styles["user-profile"]}>
      <button
        onClick={() => {
          onLogout(false);
          // localStorage.setItem("isLoggedIn", false);
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("username");
        }}
      >
        Log out
      </button>
      <div className={styles["img-wrapper"]}>
        <img
          src={username == "bibek" ? BibekDai : PrashantDai}
          alt="profile of admin"
        />
      </div>
    </div>
  );
};

export default Logout;
