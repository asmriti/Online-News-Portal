import { OptionUnstyled } from "@mui/base";
import React from "react";

function PollsCard(props) {
  return (
    <div className="flex justify-around mt-8">
      <img src={props.image} alt="polls.title" className="w-1/4 rounded-2xl" />
      <div className="items-center p-6 bg-white rounded-2xl">
        <h1 className="text-xl font-bold">{props.question}</h1>
        <div className="mt-4">
          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option1}
          </div>
          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option2}
          </div>

          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option3}
          </div>

          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option4}
          </div>
          <button className="text-lg text-black border-4 border-solid rounded-2xl bg-[#ffab00] border-transparent w-40  font-bold p-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export function PollsReverse(props) {
  return (
    <div className="flex flex-row-reverse mt-8">
      <img src={props.image} alt="polls.title" className="w-1/4 rounded-2xl" />
      <div className="items-center p-6 bg-white rounded-2xl">
        <h1 className="text-xl font-bold">{props.question}</h1>
        <div className="mt-4">
          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option1}
          </div>
          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option2}
          </div>

          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option3}
          </div>

          <div className="my-4 text-xl">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              className="mr-2"
            />
            {props.option4}
          </div>
          <button className="text-lg text-black border-4 border-solid rounded-2xl bg-[#ffab00] border-transparent w-40  font-bold p-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default PollsCard;
