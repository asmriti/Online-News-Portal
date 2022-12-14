import "./Styles.css";

import React from "react";

import { Link } from "react-router-dom";
import logoimg from "../images/logo1.png";

import {
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

function Nav() {
  return (
    <nav className="bg-white navbar kids-navbar">
      <div className="container p-2 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={logoimg}
              alt="logo"
              className="h-[70px] ml-10 w-[74%] cursor-pointer"
            />{" "}
          </div>

          <div className="flex items-center justify-between">
            <ul className="flex justify-between">
              <li className="flex mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <HomeIcon className="w-8 pr-2 text-slate-400 " />
                <Link to="/">Home</Link>
              </li>
              <li className="flex mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <UserGroupIcon className="w-8 pr-2 text-slate-400" />
                <Link to="/community">Community</Link>
              </li>
              <li className="flex mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <NewspaperIcon className="w-8 pr-2 text-slate-400 " />
                <Link to="/post-article">Post article</Link>
              </li>
              <li className="flex mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <ChartBarIcon className="w-8 pr-2 text-slate-400 " />
                <a href="/polls">Polls</a>
              </li>

              <li className="flex mr-8 border-indigo-500 last:mr-0 rounded-2xl">
                <UsersIcon className="w-8 pr-2 text-slate-400" />
                <Link to="/kids-section">Kids Section</Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between bg-transparent border-4 border-solid rounded-2xl w-[15%] h-12 items-center">
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
