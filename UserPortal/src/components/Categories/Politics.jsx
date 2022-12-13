import React, { useEffect, useState } from "react";

import SideBar from "../SideBar";
import SportsNews from "../SportsNews";

import GetNews from "../../Common/GetNews";
import NewsList from "../../Common/NewsList";
import Nav from "../Nav";
import MainContent from "../MainContent";

const Politics = () => {
  return (
    <div className="container flex justify-between py-5 mx-auto ">
      <Nav />
      <SideBar />
      <MainContent category={"Politics"} />
      <SportsNews />
    </div>
  );
};

export default Politics;
