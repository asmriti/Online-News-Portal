import React from "react";

import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import SportsNews from "../components/SportsNews";
import MainContent from "../components/MainContent";

function Home() {
  return (
    <div className="container flex justify-between pb-5 mx-auto ">
      <Nav />
      <SideBar />
      <MainContent category={"National"} />
      <SportsNews />
    </div>
  );
}

export default Home;
