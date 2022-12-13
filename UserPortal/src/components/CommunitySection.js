import React from "react";
// import community from "../images/community.png";
import community from "../images/commu.png";

import shareevents from "../images/shareevents.png";
import information from "../images/information.png";
import communication from "../images/communication.png";

function CommunitySection() {
  return (
    <div className="container mx-auto my-[1rem]">
      <div className="flex items-center justify-between p-28">
        <div className="">
          <h1 className="text-5xl font-bold">
            Your <span className="text-[#ffc400]">Community</span> Knows Best.
          </h1>
          <p className="mt-5 text-lg w-[80%]">
            Get in touch with people and see what they are upto. Experience the
            power of community.
          </p>
          <button className="text-lg text-black border-4 border-solid rounded-2xl bg-[#ffab00] border-transparent w-40 mt-10 font-bold p-2">Join Now</button>
        </div>
        <div>
          <img src={community} alt="community" className="h-[30rem]" />
        </div>
        <div></div>
      </div>
      <div className="p-6">
        <div>
          <h1 className="text-3xl font-bold text-center">Features</h1>
          <p className="m-3 text-lg text-center">
            Keeps you on top of everything happening in your community.
          </p>
        </div>
        <div className="flex items-center justify-center p-6">
          <div className="p-6">
            <img src={shareevents} alt="share-events" className="rounded-2xl" />
            <h1 className="m-2 text-xl font-bold text-center">Share Events</h1>
            <p className="text-lg text-center">Share events and news.</p>
          </div>

          <div className="p-6">
            <img
              src={information}
              alt="information"
              className="w-[97%] rounded-2xl"
            />
            <h1 className="m-2 text-xl font-bold text-center">
              Get information
            </h1>
            <p className="text-lg text-center">Share events and news.</p>
          </div>

          <div className="p-6">
            <img
              src={communication}
              alt="communication"
              className="rounded-2xl"
            />
            <h1 className="m-2 text-xl font-bold text-center">
              Build community
            </h1>
            <p className="text-lg text-center">
              Easy communication with your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;
