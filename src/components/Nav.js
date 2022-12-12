import React from "react";
import { Route } from "react-router-dom";
import logoimg from "../images/logo1.png";
import logoimage from "../images/logo2.png";

import {
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import KidsSection from "./KidsSection";

function Nav() {
  return (
    <nav className="pb-5 ">
      <div className="container fixed p-2 mx-auto bg-white rounded-2xl">
        <div className="flex justify-between text-center">
          {/* <img src={logoimage} alt="logo" className="h-[100px]" /> */}
          <img src={logoimg} alt="logo" className="h-[70px] ml-[40px]" />

          <div className="flex items-center justify-between">
            <ul className="items-center hidden md:flex">
              <li className="mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <HomeIcon className="w-8 pr-2 text-slate-400 " />
                <a href="/">Home</a>
              </li>
              <li className="mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <UserGroupIcon className="w-8 pr-2 text-slate-400" />
                <a href="/community">Community</a>
              </li>
              <li className="mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <NewspaperIcon className="w-8 pr-2 text-slate-400 " />
                <a href="/post-article">Post article</a>
              </li>
              <li className="mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <ChartBarIcon className="w-8 pr-2 text-slate-400 " />
                <a href="/post-article">Polls</a>
              </li>

              <li className="mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <UsersIcon className="w-8 pr-2 text-slate-400" />
                <a href="/kids-section">Kids Section</a>
              </li>
              {/* <Route path="/kids-section">
                <KidsSection />
              </Route> */}
            </ul>
          </div>
          <div className="flex justify-between bg-transparent border-4 border-solid rounded-2xl w-[18%]">
            <input
              className="text-center bg-transparent "
              placeholder="Search"
            />
            <MagnifyingGlassIcon className="w-8 p-2 text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
