import React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import realmadridpic from "../images/realmadridpic.png";
import barcelona from "../images/barcelona.jpeg";
import manchesterunited from "../images/manchesterunited.png";
import leichestercity from "../images/leichestercity.png";

// import featuredphoto from "../images/professional.jpg";

function SportsNews() {
  return (
    <div className="w-[25%]">
      <h1 className="text-xl font-bold text-center mb-[16px]">Sports News</h1>

      <div className="p-6 bg-white border-2 border-transparent rounded-lg mt-[20px]">
        <ul className="flex items-center justify-between">
          <li className="items-center pb-1 mb-1 text-lg font-bold">
            <img
              src={realmadridpic}
              alt="realmadridpic"
              className="w-[24%] rounded-[30px] mr-[20px]"
            />
            Real Madrid
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">3</li>
        </ul>

        <ul className="flex flex-row ml-[15px] items-center">
          <li className="pb-1 mb-1 font-bold text-slate-400">VS </li>
          <li className="pb-1 mb-1 ml-10 text-slate-400">Fulltime</li>
        </ul>

        <ul className="flex items-center justify-between">
          <li className="items-center pb-1 mb-1 text-lg font-bold">
            <img
              src={barcelona}
              alt="barcelona"
              className="w-[24%] rounded-[30px] mr-[20px]"
            />
            Barcelona
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">0</li>
        </ul>
        <div className="pb-1 mb-1 text-slate-400">
          Get statistics for the Real Madrid FC vs. Barcelona 2022 Audi
          Cup.Semifinals football match now.
        </div>
      </div>

      <div className="p-6 bg-white border-2 border-transparent rounded-lg mt-[20px]">
        <ul className="flex items-center justify-between">
          <li className="items-center pb-1 mb-1 text-lg font-bold">
            <img
              src={manchesterunited}
              alt="manchesterunited"
              className="w-[24%] rounded-[30px] mr-[20px]"
            />
            Manchester United
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">0</li>
        </ul>

        <ul className="flex flex-row ml-[15px]">
          <li className="pb-1 mb-1 font-bold text-slate-400">VS </li>
          <li className="pb-1 mb-1 ml-10 text-slate-400">Fulltime</li>
        </ul>

        <ul className="flex items-center justify-between">
          <li className="items-center pb-1 mb-1 text-lg font-bold">
            <img
              src={leichestercity}
              alt="leichestercity"
              className="w-[24%] rounded-[30px] mr-[20px]"
            />
            Leichester City
          </li>
          <li className="pb-1 mb-1 ml-12 text-lg font-bold">0</li>
        </ul>
        <div className="pb-1 mb-1 text-slate-400">
          Get statistics for the Manchester United vs. Leichester City 2022 Audi
          Cup.Semifinals football match now.
        </div>
      </div>
    </div>
  );
}

export default SportsNews;
