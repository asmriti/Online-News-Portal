import React, { useState } from "react";
import styles from "./Form.module.css";
const Form = ({ getLoginInfo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const users = [
    {
      username: "bibek",
      password: "bibek",
    },
    {
      username: "prashant",
      password: "boss",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.split(" ").length > 1) {
      setNotification("Username cannot have space !");
      return;
    }

    const userData = users.find((user) => {
      return (
        user.username == username.toLocaleLowerCase() &&
        user.password == password
      );
    });

    if (userData?.username) {
      const credentials = {
        status: true,
        username: username.toLocaleLowerCase(),
        password: password,
      };
      getLoginInfo(credentials);
      setNotification("");
    } else {
      setNotification("Invalid username or password !");
    }
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className={styles["form-wrapper"]}>
      <h1 className={styles.heading}>Welcome Back</h1>
      <p className={styles.desc}>Welcome back! Please enter your details</p>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles["form-field"]}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your username"
            autoComplete="off"
            value={username}
            onChange={onChangeUsername}
            onClick={() => {
              setNotification("");
            }}
          ></input>
        </div>
        <div className={styles["form-field"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={onChangePassword}
            onClick={() => {
              setNotification("");
            }}
          ></input>
        </div>
        <div className={styles["features"]}>
          <label htmlFor="remember-me">Remember for 30 days</label>
          <input type="checkbox" id="remember-me" />
          <p className={styles["forget-password"]}>
            Forget <span>password</span>?
          </p>
        </div>
        <button id={styles.btn} type="submit">
          Sign In
        </button>
      </form>
      <p className={styles["footer"]}>
        Don't have an account? Contact <span>admin</span>
      </p>
      <span className={styles.notification}>{notification}</span>;
    </div>
  );
};
export default Form;
