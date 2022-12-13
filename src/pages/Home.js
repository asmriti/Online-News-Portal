import React from "react";
import Sports from "../components/Categories/Sports";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import SportsNews from "../components/SportsNews";

function Home() {
  return (
    <div className="container flex justify-between py-5 mx-auto ">
      <Nav />
      <SideBar />
      <MainContent category={"National"} />
      <SportsNews />
    </div>
  );
}

export default Home;
