import React from "react";

import ScoreCard from "./ScoreCard";

import barcelona from "../images/barcelona.png";
import leicester from "../images/leicester.png";
import realmadridpic from "../images/realmadridpic.png";
import manchesterunited from "../images/manchesterunited.png";

function SportsNews() {
  return (
    <div className="w-[25%] sports-wrapper">
      <h1 className="mb-2 text-2xl font-bold text-center">Sports Highlights</h1>
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
