import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "anatomy/Page";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Terms from "pages/Terms";
const Factory = (props) => {
  const {
    match,
    match: { params: { page = "" } = {} } = {},
    location,
    history,
  } = props;
  switch (page) {
    case "home":
      return (
        <Page>
          <Home />
        </Page>
      );
    case "login":
      return (
        <Page noBar>
          <Login />
        </Page>
      );
    case "signup":
      return (
        <Page noBar>
          <Signup />
        </Page>
      );
    case "terms":
      return (
        <Page>
          <Terms />
        </Page>
      );
    default:
      return <h1>Not found</h1>;
  }
};

export default Factory;
