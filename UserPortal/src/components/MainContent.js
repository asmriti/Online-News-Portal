import React, { useEffect, useState } from "react";

import styles from "../Common/common.module.css";

import {
  HandThumbUpIcon,
  ShareIcon,
  ChatBubbleBottomCenterIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";

import GetNews from "../Common/GetNews";
import Popular from "./Popular";
function MainContent({ category }) {
  const [newsArr, setNewsArr] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const response = await GetNews(category);
      setNewsArr(response);
    }
    fetchNews();
  }, []);

  return (
    <div className="container py-5 mx-auto mt-[1rem] ">
      <div className={styles["news-wrapper"]}>
        {newsArr &&
          newsArr.map((news, index) => {
            return (
              <div className={`w-[55%] ${styles.newsItem}`} key={index}>
                <h1 className={styles["news-title"]}>{news.title}</h1>
                <div className={styles["img-wrapper"]}>
                  <img
                    src={news.url}
                    alt=""
                    className="max-w-2xl p-2 rounded-3xl"
                  />
                </div>
                <div className={styles["news-body"]}>
                  <p>{news.body}</p>
                </div>
                <div className={styles["news-footer"]}>
                  <div>
                    <ul className="flex justify-end  mt-[10px] mr-[70px]">
                      <li className="mr-1 border-indigo-500 rounded-2xl">
                        <HandThumbUpIcon
                          className={`w-10 p-2 text-slate-400  ${styles.icon}`}
                        />
                      </li>
                      <li className="mr-1 border-indigo-500 rounded-2xl ">
                        <ShareIcon
                          className={`w-10 p-2 text-slate-400  ${styles.icon}`}
                        />
                      </li>
                      <li className="mr-1 border-indigo-500 rounded-2xl ">
                        <ChatBubbleBottomCenterIcon
                          className={`w-10 p-2 text-slate-400  ${styles.icon}`}
                        />
                      </li>

                      <li className="mr-1 border-indigo-500 rounded-2xl ">
                        <BookmarkIcon
                          className={`w-10 p-2 text-slate-400  ${styles.icon}`}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className={styles["author-info"]}>
                    <span className={styles["author"]}>{news.author}</span>

                    <span className={styles["date"]}>{news.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {category != "National" && <Popular newsArr={newsArr} />}
    </div>
  );
}

export default MainContent;
