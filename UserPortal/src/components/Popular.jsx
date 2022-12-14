import React from "react";
import "./Styles.css";
const Popular = ({ newsArr }) => {
  return (
    <div className="popular-section">
      <h1>Popular</h1>

      {newsArr.map((news, index) => {
        return <li key={index}>{news.title}</li>;
      })}
    </div>
  );
};
export default Popular;
