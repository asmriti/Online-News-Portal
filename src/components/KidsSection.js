import React from "react";
import games from "../images/games-1.jpg";
import poems from "../images/poems.jpg";
import stories from "../images/stories-1.jpg";
import biography from "../images/biography-1.jpg";

function KidsSection() {
  return (
    <div className="flex justify-between p-4 bg-white">
      <ul className="p-6 border-solid">
        <li className="inline-block ">
          <h1 className="p-2 mb-4 text-xl font-semibold text-center">Poems</h1>
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
          <h1 className="p-2 mb-4 text-lg font-semibold text-center">Games</h1>
          <img src={games} alt="games" className=" rounded-2xl" />
          <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl">
            <a href="https://sudoku.com/" target="_blank">
              Play Games
            </a>
          </div>
        </li>
      </ul>
    </div>

    // <div
    //   style={{
    //     backgroundImage: `url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,
    //   }}
    // >
    //   <div className="p-2">
    //     <div>navbar</div>

    //     <div className="flex justify-between p-6 mt-11">
    //       <h1 className="text-5xl font-bold">Showcase your Talent</h1>
    //       <button className="p-4 border-2 border-red-400 Class rounded-2xl">
    //         Post here
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default KidsSection;
