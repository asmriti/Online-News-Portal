import React from "react";

import PollsCard from "./PollsCard";
import PollsReverse from "./PollsCard";

import polls1 from "../images/polls1.png";
import polls from "../images/polls.png";

function PollsSection() {
  return (
    <div className="container mx-auto my-[1rem]">
      <div className="flex items-center justify-between p-40">
        <div>
          <h1 className="text-5xl font-bold">
            Make Your <span className="text-[#ffc400]">Voice</span> Count.
          </h1>
          <p className="mt-5 text-lg w-[80%]">Your vote is your voice.</p>
        </div>

        <div>
          <img src={polls} alt="community" className="h-[20rem] rounded-2xl" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center">
        Roll to the <span className="text-[#ffc400]">Poll</span>
      </h1>

      <PollsCard
        image={polls1}
        question="Who do you think would be appropriate to be the next Prime Minister
            of Nepal?"
        option1="Someone"
        option2="Someone"
        option3="Someone"
        option4="Someone"
      />

      <PollsReverse
        image={polls1}
        question="Who do you think would be appropriate to be the next Prime Minister
            of Nepal?"
        option1="Someone"
        option2="Someone"
        option3="Someone"
        option4="Someone"
      />

      <PollsCard
        image={polls1}
        question="Who do you think would be appropriate to be the next Prime Minister
            of Nepal?"
        option1="Someone"
        option2="Someone"
        option3="Someone"
        option4="Someone"
      />
    </div>
  );
}

export default PollsSection;
