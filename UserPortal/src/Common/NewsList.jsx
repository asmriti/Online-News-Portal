import React from "react";
import styles from "./common.module.css";
import {
  HandThumbUpIcon,
  ShareIcon,
  ChatBubbleBottomCenterIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import featuredimg from "../images/img1.jpg";

const NewsList = ({ newsArr }) => {
  return (
    <div className={styles["news-wrapper"]}>
      <h1 className="text-4xl font-bold"></h1>
      {newsArr.map((news, index) => {
        return (
          <div className="w-[55%%]" key={index}>
            <h1 className={styles["news-title"]}>
              G20 summit to happen in India
            </h1>
            <img
              src={featuredimg}
              alt=""
              className="max-w-2xl p-2 rounded-3xl"
            />
            <div className={styles["news-body"]}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={styles["news-footer"]}>
              <span className={styles["author"]}>Smerty Aryal</span>

              <span className={styles["date"]}>
                Sun, December 11, 2022 12:32 AM
              </span>
            </div>
            <div>
              <ul className="flex justify-end  mt-[10px] mr-[70px]">
                <li className="mr-1 border-indigo-500 rounded-2xl">
                  <HandThumbUpIcon className="w-10 p-2 text-slate-400 " />
                  <div className="p-2">Like</div>
                </li>
                <li className="mr-1 border-indigo-500 rounded-2xl ">
                  <ShareIcon className="w-10 p-2 text-slate-400" />
                  <div className="p-2">Share</div>
                </li>
                <li className="mr-1 border-indigo-500 rounded-2xl ">
                  <ChatBubbleBottomCenterIcon className="w-10 p-2 text-slate-400" />
                  <div className="p-2">Comment</div>
                </li>

                <li className="mr-1 border-indigo-500 rounded-2xl ">
                  <BookmarkIcon className="w-10 p-2 text-slate-400" />
                  <div className="p-2">Bookmark</div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default NewsList;
