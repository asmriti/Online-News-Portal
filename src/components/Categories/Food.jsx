import React, { useEffect, useState } from "react";

import SideBar from "../SideBar";
import SportsNews from "../SportsNews";

import GetNews from "../../Common/GetNews";
import NewsList from "../../Common/NewsList";
import MainContent from "../MainContent";
import Nav from "../Nav";

const Food = () => {
  return (
    <div className="container flex justify-between py-5 mx-auto ">
      <Nav />
      <SideBar />
      <MainContent category={"Food"} />
      <SportsNews />
    </div>
  );
};

export default Food;
