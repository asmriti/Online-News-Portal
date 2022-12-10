import React from "react";
import games from "../images/games-1.jpg";
import chess from "../images/chess.jpg";
import ludo from "../images/ludo.jpg";
import puzzle from "../images/puzzle.jpg";
import gkquestions from "../images/gkquestions.jpg";

function PlayGames() {
  return (
    <div className="flex justify-between p-4 bg-white">
      {" "}
      <ul className="p-6 ">
        <li className="inline-block">
          <h1 className="p-2 mb-4 text-lg font-semibold text-center">Games</h1>
          <img src={chess} alt="chess" className=" rounded-2xl" />
          <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl">
            <a href="https://www.chess.com/" target="_blank">
              Play Chess
            </a>
          </div>
        </li>
      </ul>
      <ul className="p-6">
        <li className="inline-block">
          <h1 className="p-2 mb-4 text-lg font-semibold text-center">Games</h1>
          <img src={ludo} alt="ludo" className=" rounded-2xl" />
          <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl">
            <a
              href="https://gameforge.com/en-US/littlegames/ludo-online/#"
              target="_blank"
            >
              Play Ludo
            </a>
          </div>
        </li>
      </ul>
      <ul className="p-6">
        <li className="inline-block">
          <h1 className="p-2 mb-4 text-lg font-semibold text-center">Games</h1>
          <img src={puzzle} alt="puzzle" className=" rounded-2xl" />
          <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl">
            <a href="https://solveme.edc.org/" target="_blank">
              Solve puzzles
            </a>
          </div>
        </li>
      </ul>
      <ul className="p-6">
        <li className="inline-block">
          <h1 className="p-2 mb-4 text-lg font-semibold text-center">Games</h1>
          <img
            src={gkquestions}
            alt="gk - questions"
            className=" rounded-2xl"
          />
          <div className="p-2 mt-4 text-center bg-transparent border-4 border-solid rounded-2xl">
            <a
              href="https://www.gkiqtest.com/most-important-nepali-gk/"
              target="_blank"
            >
              Solve general knowledge questions
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PlayGames;
