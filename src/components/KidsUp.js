import React from "react";
import logoimg from "../images/logo1.png";
import kidsimg from "../images/kidsimg.png";

function KidsUp() {
  return (
    <div className="container box-border px-3 py-5 mx-auto mt-10 border-4 border-solid rounded-3xl color-black bg-[#bcaaa4] ">
      <nav className="flex items-center justify-between py-4 bg-white rounded-2xl">
        <img src={logoimg} alt="logoimg" className="h-[70px] ml-[40px]" />
        <div className="text-lg font-bold cursor-pointer mr-[20px] text-black ">
          Quote of the Day
        </div>
      </nav>

      <div className="mt-[5rem]">
        <h1 className="text-5xl font-bold tracking-wide text-center text-[#6d4c41]">
          Learning fun, Sharing the joy
        </h1>
        <p className="p-2 text-center bg-[#6d4c41] text-white mt-[3rem]  rounded-2xl">
          Let the child be actor and director in his own play.
        </p>
        <img src={kidsimg} className="mt-[-18rem]" />
      </div>

      <div className="flex justify-center p-4 ml-[3rem] items-center">
        <button className="p-3 text-lg border-4 border-transparent rounded-2xl mr-[2rem] text-white bg-[#6d4c41] ">
          Start learning today
        </button>
        <button className="p-3 text-lg text-white border-4 border-solid rounded-2xl bg-[#6d4c41] border-transparent">
          Showcase your work
        </button>
      </div>
    </div>
  );
}

export default KidsUp;
