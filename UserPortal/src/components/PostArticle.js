import React, { useRef, useState } from "react";
import styles from "./PostArticles.module.css";

const getCurrentTime = () => {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let dateAndTime = new Date();
  let currentDate = dateAndTime.toLocaleDateString("en-US", options);
  let hour = dateAndTime.getHours();
  let ampm = "";
  if (hour > 12) {
    hour = hour % 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  let min = dateAndTime.getMinutes();
  let time = `${hour}:${min} ${ampm}`;
  return `${currentDate} ${time}`;
};

//component starts here
const PostArticle = ({ data, action, setIsDBUpdated }) => {
  //use states for managing input

  const [title, setTitle] = useState("" || data?.title);
  const [body, setBody] = useState("" || data?.body);
  const [labels, setLabels] = useState("" || data?.labels);
  const [author, setAuthor] = useState("" || data?.author);
  const [url, setUrl] = useState("" || data?.url);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let currentDateAndTime = getCurrentTime();

    const formData = {
      title,
      body,
      url: url,
      labels: labels
        .toString()
        .split(",")
        .map((ele) => ele.trim()),
      author,
      date: currentDateAndTime || data.date,
    };

    // let dataObj;
    // if (action == "update") {
    //   let newsId = data._id;

    if (action == "update") {
      let newsId = data._id;
      const response = await fetch(`http://localhost:3001/update/${newsId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const dataObj = await response.json();
      console.log(dataObj);

      setMessage(dataObj.message);
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsDBUpdated(true);
        console.log("Hope things will work");
      }, 1000);

      return;
    }

    const response = await fetch("http://localhost:3001/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const dataObj = await response.json();
    console.log(dataObj);
    setMessage(dataObj.message);
    setIsFormSubmitted(true);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleBody = (event) => {
    setBody(event.target.value);
  };
  const handleLabels = (event) => {
    setLabels(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  return (
    <form
      className={styles["post-form"]}
      method="post"
      onSubmit={handleSubmit}
      onClick={() => {
        setMessage("");
      }}
    >
      <div className={styles["form-field"]}>
        <label htmlFor="title">Headline</label>
        <input
          type="text"
          id="title"
          placeholder="Headline here..."
          required
          value={title}
          onChange={handleTitle}
        ></input>
      </div>
      <div className={styles["form-field"]}>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          rows="16"
          placeholder="Content..."
          required
          value={body}
          onChange={handleBody}
        ></textarea>
      </div>
      <div className={styles["form-field"]}>
        <label htmlFor="file">Image Url</label>
        <input type="text" value={url} onChange={handleUrl} />
      </div>
      <div className={styles["form-field"]}>
        <label htmlFor="label">Labels</label>
        <input
          type="text"
          id="label"
          placeholder="Labels..."
          required
          value={labels}
          onChange={handleLabels}
        ></input>
      </div>
      <div className={styles["form-field"]}>
        <label htmlFor="author">Author Name</label>
        <input
          type="text"
          id="author"
          placeholder="Author name..."
          required
          autoComplete="off"
          value={author}
          onChange={handleAuthor}
        ></input>
      </div>
      <button type="submit" className={styles["submit-btn"]}>
        Submit
      </button>
    </form>
  );
};
export default PostArticle;
