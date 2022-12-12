import React, { useEffect, useState } from "react";

import SideBar from "../SideBar";
import SportsNews from "../SportsNews";

import GetNews from "../../Common/GetNews";
import NewsList from "../../Common/NewsList";

const Nature = ({ category }) => {
  const [newsArr, setNewsArr] = useState([]);
  useEffect(() => {
    let data;
    async function getNews() {
      data = await GetNews("nature");
      setNewsArr(data);
    }
    getNews();
  }, []);

  return (
    <div className="container flex justify-between py-5 mx-auto ">
      <SideBar />
      {newsArr && <NewsList newsArr={newsArr} category={category} />}
      <SportsNews />
    </div>
  );
};

export default Nature;
