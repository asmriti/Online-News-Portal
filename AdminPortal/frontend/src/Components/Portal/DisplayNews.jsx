import React, { useState } from "react";
import styles from "./DisplayNews.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
const DisplayNews = ({ news, query }) => {
  return (
    <React.Fragment>
      {news &&
        news
          .filter(
            (ele) =>
              ele.author.toLowerCase().includes(query.toLowerCase()) ||
              ele.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((data, index) => {
            return (
              <div key={index} className={styles["news-wrapper"]} id="news">
                <h1 className={styles["heading"]}>{data.title}</h1>
                <div className={styles["news-id"]}>
                  <span className={styles.label}>News Id : </span>
                  {data._id}{" "}
                  <CopyToClipboard text={data._id}>
                    <span className={styles["copy-btn"]}>Copy</span>
                  </CopyToClipboard>
                </div>
                <p className={styles.author}>
                  <span className={styles.label}>Author : </span>
                  {data.author}
                </p>
                <p className={styles["published-date"]}>
                  <span className={styles.label}>Published On : </span>{" "}
                  {data?.date}
                </p>
                <p className={styles.labels}>
                  <span className={styles.label}>Labels : </span>
                  {data.labels.join(", ")}
                </p>
              </div>
            );
          })}
    </React.Fragment>
  );
};

export default DisplayNews;
