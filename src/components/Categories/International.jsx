import React, { useEffect, useState } from "react";

import SideBar from "../SideBar";
import SportsNews from "../SportsNews";
import Nav from "../Nav";
import GetNews from "../../Common/GetNews";
import NewsList from "../../Common/NewsList";
import MainContent from "../MainContent";

const International = () => {
  console.log("I am here");
  return (
    <div className="container flex justify-between py-5 mx-auto ">
      <Nav />
      <SideBar />
      <MainContent category={"International"} />
      <SportsNews />
    </div>
  );
};

export default International;
