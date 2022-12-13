import React, { useState } from "react";
import Overlay from "./Overlay";
import styles from "./Update.module.css";
import Notification from "./Notification";
import "./commonStyle.css";
import NewsForm from "./NewsForm";
import NewsIdInput from "./NewsIdInput";
const Update = ({ onclick, resetUpdate, setIsDBUpdated }) => {
  const [getDetails, setGetDetails] = useState(false);
  const [newsObj, setNewsObj] = useState({});
  const updateNews = {};
  const showDetails = async (newsId) => {
    console.log(newsId);
    //get the news data of NewsId
    const res = await fetch(`http://localhost:3001/news/${newsId}`);
    const obj = await res.json();
    console.log(obj.data);
    setNewsObj(obj.data);

    setGetDetails(true);
  };

  return (
    <React.Fragment>
      <Overlay overlayOff={onclick} />
      <div className="wrapper">
        <h1 className="heading">
          Will permanently <span className="highlight">update </span> database !{" "}
        </h1>
        <NewsIdInput
          action="update"
          btnText="Get Details"
          showDetails={showDetails}
        ></NewsIdInput>
        {getDetails && (
          <NewsForm
            resetUpdate={resetUpdate}
            data={newsObj}
            action={"update"}
            setIsDBUpdated={setIsDBUpdated}
          ></NewsForm>
        )}
      </div>
    </React.Fragment>
  );
};

export default Update;
