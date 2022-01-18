import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "anatomy/Page";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Terms from "pages/terms/Terms";
import HowItWorks from "pages/HowItWorks";
import Contact from "pages/Contact";
import Profile from "pages/profile/Profile";
import ServicerProfile from "pages/ServicerProfile";

const Factory = (props) => {
  const {
    match,
    match: { params: { page = "", type = null } = {} } = {},
    location,
    history,
  } = props;
  switch (page) {
    case "home":
      return (
        <Page footer nav_bar>
          <Home />
        </Page>
      );
    case "login":
      return (
        <Page noBar>
          <Login history={history} />
        </Page>
      );
    case "signup":
      return (
        <Page noBar>
          <Signup history={history}/>
        </Page>
      );
    case "terms":
      return (
        <Page footer nav_bar>
          <Terms />
        </Page>
      );
    case "howitworks":
      return (
        <Page footer nav_bar>
          <HowItWorks />
        </Page>
      );
    case "contact":
      return (
        <Page footer nav_bar>
          <Contact />
        </Page>
      );
    case "profile":
      return (
        <Page footer nav_bar>
          <Profile type={type} />
        </Page>
      );
      case "servicer_profile":
        return (
          <Page footer nav_bar>
            <ServicerProfile type={type} />
          </Page>
        );
    default:
      return (
        <Page footer nav_bar>
          <Home />
        </Page>
      );
  }
};

export default Factory;
