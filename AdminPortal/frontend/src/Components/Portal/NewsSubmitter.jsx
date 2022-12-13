import React from "react";
import Wrapper from "../Login/Wrappper";
import styles from "./NewsSubmitter.module.css";
import Logout from "./Logout";
import NewsForm from "./NewsForm";

const NewsSubmitter = ({ user, onLogout }) => {
  return (
    <Wrapper class="news-form-wrapper">
      <Logout user={user} onLogout={onLogout} />
      <NewsForm action={"submit"} />
    </Wrapper>
  );
};
export default NewsSubmitter;
