import React from "react";
import logoimg from "../images/logo1.png";
import kidsimg from "../images/kidsimg.png";

function KidsUp() {
  return (
    <div className="container box-border px-3 py-5 mx-auto mt-10 border-4 border-solid rounded-3xl color-black ">
      <nav className="flex items-center justify-between py-4 bg-white rounded-2xl">
        <img src={logoimg} alt="logoimg" className="h-[70px] ml-[40px]" />
        <div className="text-lg font-bold cursor-pointer mr-[20px] text-black ">
          Quote of the Day
        </div>
      </nav>

      <div className="flex items-center justify-around">
        <div className="pb-20 mt-10 mb-5  font-serif text-4xl  w-[50%] text-black tracking-wide ">
          Learning fun, sharing the joy
        </div>
        <img src={kidsimg} className="w-[50%] " />
      </div>

      <ul className="flex justify-start p-4">
        <li className="p-2 text-lg border-4 border-solid rounded-2xl mr-[10rem] text-black">
          Start Learning
        </li>
        <li className="p-2 text-lg text-black border-4 border-solid rounded-2xl">
          Showcase your work
        </li>
      </ul>

      {/* <ul className="flex flex-row">
        <div className="box-border absolute left-0 ml-40 text-center bg-white border-2 h-15 w-60 rounded-3xl bottom-50 border-zinc-900">
          <li className="mb-5 text-3xl pb-15 mt-">Start learning</li>
        </div>
        <div className="box-border absolute text-center bg-white border-2 h-15 w-80 rounded-3xl border-zinc-900 bottom-50 left-60 ml-60 ">
          <li className="mb-5 text-3xl text-center pb-15">
            Showcase Your Work
          </li>
        </div>
      </ul> */}
    </div>
  );
}

export default KidsUp;
