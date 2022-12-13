import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>Sandesh Khabar</div>
      </header>
    </React.Fragment>
  );
};
export default Header;
