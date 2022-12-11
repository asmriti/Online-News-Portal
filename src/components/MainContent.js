import React from "react";
import {
  HandThumbUpIcon,
  ShareIcon,
  ChatBubbleBottomCenterIcon,
  EllipsisVerticalIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import SideBar from "./SideBar";
import SportsNews from "./SportsNews";
import featuredimg from "../images/img1.jpg";

function MainContent() {
  return (
    <div className="container flex justify-between py-5 mx-auto ">
      <SideBar />

      <div className="w-[55%%]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Today's Headlines</h1>
          <EllipsisVerticalIcon className="w-10 p-2 rounded-full cursor-pointer text-slate-400 " />
        </div>
        <img src={featuredimg} alt="" className="max-w-2xl p-2 rounded-3xl" />
        <div>
          <ul className="flex justify-end  mt-[10px] ">
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
          <div className="text-3xl font-bold">Headlines Here</div>
        </div>
      </div>

      <SportsNews />
    </div>
  );
}

export default MainContent;
