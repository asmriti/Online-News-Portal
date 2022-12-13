import React from "react";
import polls1 from "../images/polls1.png";

function PollsSection() {
  return (
    <div className="p-2">
      <h1 className="text-4xl font-bold text-center ">Roll to the Poll</h1>
      <div className="flex justify-around">
        <img src={polls1} alt="polls1" className="w-1/4 rounded-2xl" />
        <div className="items-center p-6 bg-white rounded-2xl">
          <h1 className="text-xl font-bold">
            Who do you think would be appropriate to be the next Prime Minister
            of Nepal?
          </h1>
          <div className="mt-4">
            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>
            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>

            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>

            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>
            <button className="text-lg text-black border-4 border-solid rounded-2xl bg-[#ffab00] border-transparent w-40  font-bold p-2">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-10">
        <div className="items-center p-6 bg-white rounded-2xl">
          <h1 className="text-xl font-bold">
            Who do you think would be appropriate to be the next Prime Minister
            of Nepal?
          </h1>
          <div className="mt-4">
            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>
            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>

            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>

            <div className="my-4 text-xl">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2"
              />
              Someone
            </div>
            <button className="text-lg text-black border-4 border-solid rounded-2xl bg-[#ffab00] border-transparent w-40  font-bold p-2">
              Submit
            </button>
          </div>
        </div>

        <img src={polls1} alt="polls1" className="w-1/4 rounded-2xl" />
      </div>
    </div>
  );
}

export default PollsSection;
