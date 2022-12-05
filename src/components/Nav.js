import React from "react";
import {
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function Nav() {
  return (
    <nav className="container flex justify-around p-4 mx-auto ">
      <div className="py-3 text-2xl font-bold">E-News</div>

      <ul className="flex ">
        <li className="mr-1 border-indigo-500 rounded-2xl hover:border-b-4 ">
          <HomeIcon className="w-8 pr-2 text-slate-400 " />
          Home
        </li>
        <li className="mr-1 border-indigo-500 rounded-2xl hover:border-b-4">
          <UserGroupIcon className="w-8 pr-2 text-slate-400" />
          Community
        </li>
        <li className="mr-1 border-indigo-500 rounded-2xl hover:border-b-4">
          <NewspaperIcon className="w-8 pr-2 text-slate-400 " />
          Post article
        </li>
        <li className="mr-1 border-indigo-500 rounded-2xl hover:border-b-4">
          <UsersIcon className="w-8 pr-2 text-slate-400" />
          Kids Section
        </li>
      </ul>
      <div className="flex justify-between border-4 border-solid border-blue rounded-2xl">
        <input className="text-center bg-transparent" placeholder="Search" />
        <MagnifyingGlassIcon className="w-8 p-2 text-center text-black" />
      </div>
    </nav>
  );
}

export default Nav;
