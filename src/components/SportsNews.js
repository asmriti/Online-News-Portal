import React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

function SportsNews() {
  return (
    <div className="w-[25%]">
      <h1 className="text-xl font-bold text-center mb-[16px]">Sports News</h1>
      <div className="p-6 bg-white border-2 border-transparent rounded-lg">
        <ul className="flex justify-between">
          <li className="pb-1 mb-1 text-lg font-bold">
            <PhotoIcon className="ml-0 mr-3 h-7 w-7 text-black-500" />
            Real Madrid
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">3</li>
        </ul>
        <ul className="flex flex-row">
          <li className="pb-1 mb-1 font-bold text-slate-400">VS </li>
          <li className="pb-1 mb-1 ml-10 text-slate-400">Fulltime</li>
        </ul>
        <ul className="flex justify-between">
          <li className="pb-1 mb-1 text-lg font-bold">
            <PhotoIcon className="ml-0 mr-3 h-7 w-7 text-black-500" /> Barcelona
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">0</li>
        </ul>
        <div className="pb-1 mb-1 text-slate-400">
          Get statistics for the Real Madrid vs.Tottenhams Hotspur 2022 Audi
          Cup.Semifinals football match now.
        </div>
      </div>
      <div className="p-6 bg-white border-2 border-transparent rounded-lg mt-[20px]">
        <ul className="flex justify-between">
          <li className="pb-1 mb-1 text-lg font-bold">
            <PhotoIcon className="ml-0 mr-3 h-7 w-7 text-black-500" />{" "}
            Manchester United
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">0</li>
        </ul>

        <ul className="flex flex-row">
          <li className="pb-1 mb-1 font-bold text-slate-400">VS </li>
          <li className="pb-1 mb-1 ml-10 text-slate-400">Fulltime</li>
        </ul>

        <ul className="flex justify-between">
          <li className="pb-1 mb-1 text-lg font-bold">
            <PhotoIcon className="ml-0 mr-3 h-7 w-7 text-black-500" />
            Leichester City
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">0</li>
        </ul>
        <div className="pb-1 mb-1 text-slate-400">
          Get statistics for the Real Madrid vs.Tottenhams Hotspur 2022 Audi
          Cup.Semifinals football match now.
        </div>
      </div>
    </div>
  );
}

export default SportsNews;
