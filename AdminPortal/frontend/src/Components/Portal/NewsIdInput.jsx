import React, { useEffect, useState } from "react";
import styles from "./NewsIdInput.module.css";
import Notification from "./Notification";
const NewsIdInput = ({
  action,
  btnText,
  showDetails,
  onclick,
  setReload,
  setIsDBUpdated,
}) => {
  const [input, setInput] = useState("");
  const [notification, setNotification] = useState("");

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (action == "update") {
    }

    if (input.trim() == "") {
      setNotification("NewsId cannot be empty 💥!");
      return;
    }
    if (input.length != 24) {
      setNotification("Incorrect Id, check again 💥 !");
      return;
    }
    if (input.length == 24) {
      if (action == "update") {
        showDetails(input);
      }
      if (action == "delete") {
        //delete the news of input from db and set new notification
        const res = await fetch(`http://localhost:3001/delete/${input}`, {
          method: "DELETE",
        });
        const data = await res.json();
        console.log("Delete Clicked");
        setNotification(data.message);
        setIsDBUpdated(true);
        // setTimeout(() => {
        //   onclick(false);
        // }, 3000);

        console.log(data.message);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="input">Enter NewsId to {action}</label>
        <input
          type="text"
          id="input"
          placeholder="Paste here..."
          autoComplete="off"
          onChange={onChangeInput}
          onClick={() => {
            setNotification("");
          }}
        />
      </div>
      {notification && (
        <Notification class="update-notification">{notification}</Notification>
      )}
      <button
        style={{ marginTop: "12px" }}
        type="submit"
        className={styles["delete-btn"]}
      >
        {btnText}
      </button>
    </form>
  );
};

export default NewsIdInput;
