import React from "react";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import Wrapper from "./Wrappper";

const LoginPage = ({ getLoginInfo }) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper class="wrapper">
        <Form getLoginInfo={getLoginInfo} />
        <Hero />
      </Wrapper>
    </React.Fragment>
  );
};
export default LoginPage;
