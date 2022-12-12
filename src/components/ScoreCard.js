import React from "react";

function ScoreCard(props) {
  return (
    <div className="flex items-center justify-between my-4 ">
      <div className="flex items-center justify-between">
        <div>
          <img src={props.image} alt={props.title} className="w-10 mr-3" />
        </div>
        <div className="text-xl font-bold">{props.title}</div>
      </div>
      <div className="text-xl font-bold">{props.score}</div>
    </div>
  );
}

export default ScoreCard;
