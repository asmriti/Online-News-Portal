import React from "react";
import games from "../images/games-1.jpg";
import poems from "../images/poems.jpg";
import stories from "../images/stories-1.jpg";
import biography from "../images/biography-1.jpg";
import logoimg from "../images/logo1.png";
import kidsimg from "../images/kidsimg.png";
import kiidsimg from "../images/kiiddd.png";
import PlayGames from "../components/PlayGames";

function KidsSection() {
  return (
    <div className="container box-border px-3  mx-auto  w-[100%]">
      <div className="bg-[#bcaaa4]">
        <nav className="flex items-center justify-between py-4 bg-white rounded-b-2xl">
          <img src={logoimg} alt="logoimg" className="h-[70px] ml-[40px]" />
          <div className="text-lg font-bold cursor-pointer mr-[20px] text-black ">
            Quote of the Day
          </div>
        </nav>

        <div className="mt-[5rem]">
          <h1 className="text-5xl font-bold tracking-wide text-center text-[#6d4c41]">
            Learning fun, Sharing the joy
          </h1>
          <p className="p-2 text-center  text-white mt-[3rem]  rounded-2xl ">
            Let the child be actor and director in his own play.
          </p>
          <img src={kidsimg} className="w-[40%] mt-[-8rem]" />
        </div>

        <div className="flex justify-center p-4 ml-[3rem] items-center ">
          <button className="p-3 text-lg border-4 border-transparent rounded-2xl mr-[2rem] text-white bg-[#6d4c41] ">
            Start learning today
          </button>
          <button className="p-3 text-lg text-white border-4 border-solid rounded-2xl bg-[#6d4c41] border-transparent">
            Showcase your work
          </button>
        </div>
      </div>

      <div className="flex justify-between p-4 bg-white rounded-2xl my-[5rem]">
        <ul className="p-6 border-solid">
          <li className="inline-block ">
            <h1 className="p-2 mb-4 text-xl font-semibold text-center">
              Poems
            </h1>
            <img src={poems} alt="poems" className=" rounded-2xl" />
            <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl">
              Visit Poems
            </div>
          </li>
        </ul>
        <ul className="p-6">
          <li className="inline-block">
            <h1 className="p-2 mb-4 text-lg font-semibold text-center">
              Stories
            </h1>
            <img src={stories} alt="stories" className=" rounded-2xl" />
            <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl ">
              Visit Stories
            </div>
          </li>
        </ul>
        <ul className="p-6">
          <li className="inline-block">
            <h1 className="p-2 mb-4 text-lg font-semibold text-center">
              Biography
            </h1>
            <img src={biography} alt="biography" className=" rounded-2xl" />
            <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl ">
              <a hfre="">Visit Biography</a>
            </div>
          </li>
        </ul>
        <ul className="p-6">
          <li className="inline-block">
            <h1 className="p-2 mb-4 text-lg font-semibold text-center">
              Games
            </h1>
            <img src={games} alt="games" className=" rounded-2xl" />
            <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl">
              <a href="https://sudoku.com/" target="_blank">
                Play Games
              </a>
            </div>
          </li>
        </ul>
      </div>
      <PlayGames/>
    </div>
  );
}

export default KidsSection;
