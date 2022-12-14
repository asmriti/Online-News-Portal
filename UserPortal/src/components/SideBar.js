import React from "react";

import "./Styles.css";
import { CogIcon } from "@heroicons/react/24/solid";

import featuredphoto from "../images/professional.jpg";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function SideBar() {
  return (
    <div className="p-4 w-[25%] sidebar">
      <div className="bg-white border-2 rounded-lg color-white w-[100%]">
        <ul className="box-border flex justify-between items-center  h-[30%] p-4 text-base  ">
          <li>
            <img
              src={featuredphoto}
              alt="professional photo"
              className="rounded-full border-cyan-100 w-[40%] ml-[40px]"
            />
          </li>

          <li className="h-0">
            <CogIcon className="h-10 w-30 text-black-500" />
          </li>
        </ul>
        <div className="text-lg font-bold ml-[35px] mb-[20px]">
          Shreyaa Shrestha
        </div>
      </div>

      <ul className="items-center p-4 mt-2 bg-white border-2 rounded-lg color-white w-[100%]">
        <li className="text-xl font-bold">Categories</li>

        <li className="p-1 ">
          <Link to="/international" className="text-lg link">
            International
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/politics" className="text-lg link">
            {" "}
            Politics
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/business" className="text-lg link">
            {" "}
            Business
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/entertainment" className="text-lg link">
            {" "}
            Entertainment
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/health" className="text-lg link">
            Health
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="lifestyle" className="text-lg link">
            {" "}
            LifeStyle
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/sports" className="text-lg link">
            Sports
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/travel" className="text-lg link">
            Travel
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/food" className="text-lg link">
            Food
          </Link>
        </li>
        <li className="p-1 ">
          <Link to="/technology" className="text-lg link">
            Technology
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
