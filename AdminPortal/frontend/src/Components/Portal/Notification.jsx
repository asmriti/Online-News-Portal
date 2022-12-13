import React from "react";
import styles from "./Notification.module.css";
const Notification = (props) => {
  return (
    <span className={`${styles.notification} ${styles[props.class]}`}>
      {props.children}
    </span>
  );
};

export default Notification;
