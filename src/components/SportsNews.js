import React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import realmadridpic from "../images/realmadridpic.png";
import barcelona from "../images/barcelona.png";
import manchesterunited from "../images/manchesterunited.png";
import leicester from "../images/leicester.png";
import ScoreCard from "./ScoreCard";

function SportsNews() {
  return (
    <div className="w-[25%]">
      <h1 className="mb-2 text-2xl font-bold text-center">Sports News</h1>
      <div className="p-6 mb-4 bg-white rounded-2xl">
        <ScoreCard image={realmadridpic} title="Real Madrid" score="3" />
        <ScoreCard image={barcelona} title="Barcelona" score="3" />

        <div className="p-2 text-slate-400">
          Get the statistics for the Real Madrid FC vs. Barcelona 2022 Audi cup
          Semifinals football match now.
        </div>
      </div>

      <div className="p-6 bg-white rounded-2xl">
        <ScoreCard
          image={manchesterunited}
          title="Manchester United"
          score="3"
        />
        <ScoreCard image={leicester} title="Leichester City" score="3" />
        <div className="p-2 text-slate-400">
          Get the statistics for the Real Madrid FC vs. Barcelona 2022 Audi cup
          Semifinals football match now.
        </div>
      </div>
    </div>
  );
}

export default SportsNews;
