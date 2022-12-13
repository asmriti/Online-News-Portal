import React, { useEffect, useState } from "react";

import LoginPage from "./Components/Login/LoginPage";
import NewsSubmitter from "./Components/Portal/NewsSubmitter";
import PortalHome from "./Components/Portal/PortalHome";

const App = () => {
  const [userLoginData, setUserLoginData] = useState("");
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [reload, setReload] = useState(false);

  const getLoginInfo = (response) => {
    if (response.status) {
      //set local storage
      window.localStorage.setItem("isLoggedIn", true);
      window.localStorage.setItem("username", response.username);
      setUserLoginData(response);
      // setIsLoginSuccessful(response.status);
      setIsLoginSuccessful(true);
    }
  };
  useEffect(() => {
    setIsLoginSuccessful(localStorage.getItem("isLoggedIn"));
  }, []);

  function reloadHome(toggle) {
    console.log("I was here");
    setReload(toggle ? false : true);
    console.log(reload);
  }

  return (
    <React.Fragment>
      {!isLoginSuccessful && <LoginPage getLoginInfo={getLoginInfo} />}
      {isLoginSuccessful && (
        <PortalHome
          user={userLoginData}
          onLogout={setIsLoginSuccessful}
          setReload={reloadHome}
          reload={reload}
        />
      )}
    </React.Fragment>
  );
};

export default App;
