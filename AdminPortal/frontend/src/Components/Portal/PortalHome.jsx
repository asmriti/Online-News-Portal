import React, { useEffect, useState } from "react";

import Header from "../Login/Header";
import Wrapper from "../Login/Wrappper";
import styles from "./PortalHome.module.css";
import NewsSubmitter from "./NewsSubmitter";
import Logout from "./Logout";
import NewsForm from "./NewsForm";
import Overlay from "./Overlay";
import Delete from "./Delete";
import Update from "./Update";
import DisplayNews from "./DisplayNews";

const PortalHome = ({ user, onLogout, setReload }) => {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState();

  const [isDbUpdated, setIsDBUpdated] = useState(false);
  const [submitNews, setSubmitNews] = useState(false);
  const [deleteNews, setDeleteNews] = useState(false);
  const [updateNews, setUpdateNews] = useState(false);
  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const updateDB = (dbStageChanger) => {
    dbStateInfo.isDbUpdated = dbStageChanger;
  };
  useEffect(() => {
    async function getNews() {
      try {
        const response = await fetch("http://localhost:3001/news");
        const data = await response.json();
        setNews([...data]);
      } catch (err) {
        console.log(err.message);
      }
    }
    getNews();
  }, [submitNews, deleteNews, updateNews]);

  return (
    <React.Fragment>
      <Header />

      <Logout user={user} onLogout={onLogout} />
      <Wrapper class="crud-wrapper">
        <div
          className={`${styles["submit-section"]} ${styles["section"]}`}
          onClick={() => {
            setSubmitNews(true);
          }}
        >
          Submit
          <br /> News
        </div>
        <div
          className={`${styles["update-section"]} ${styles["section"]}`}
          onClick={() => {
            setUpdateNews(true);
          }}
        >
          Update
          <br /> News
        </div>
        <div
          className={`${styles["delete-section"]} ${styles["section"]}`}
          onClick={() => {
            setDeleteNews(true);
          }}
        >
          Delete
          <br /> News
        </div>
      </Wrapper>
      <button href="#news-id" className={styles["show-btn"]}>
        <a href="#news">Show Database</a>
      </button>
      {/* <NewsSubmitter user={user} onLogout={onLogout} /> */}

      <Wrapper class="database-wrapper">
        <div className={styles["search-wrapper"]}>
          <label htmlFor="search">Search from News Database</label>
          <input
            type="search"
            id="search"
            value={query}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>

        <DisplayNews
          news={news}
          query={query}
          updateDB={updateDB}
        ></DisplayNews>
      </Wrapper>
      {submitNews && (
        <React.Fragment>
          <Overlay overlayOff={setSubmitNews} />
          <Wrapper class="news-form-wrapper">
            <NewsForm
              resetSubmit={setSubmitNews}
              setIsDBUpdated={setIsDBUpdated}
            />
          </Wrapper>
        </React.Fragment>
      )}
      {updateNews && (
        <Update
          onclick={setUpdateNews}
          resetUpdate={setUpdateNews}
          setIsDBUpdated={setIsDBUpdated}
        />
      )}

      {deleteNews && (
        <Delete
          onclick={setDeleteNews}
          setReload={setReload}
          setIsDBUpdated={setIsDBUpdated}
        />
      )}
    </React.Fragment>
  );
};

export default PortalHome;
