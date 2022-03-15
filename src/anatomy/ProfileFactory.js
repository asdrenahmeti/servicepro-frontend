import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "anatomy/Page";
import Projects from "pages/profile/Projects";
import Requests from "pages/profile/Requests";
import Reviews from "pages/profile/Reviews";
import Settings from "pages/profile/Settings";
import Project from "pages/profile/Project";
const Factory = (props) => {
  const {
    match,
    match: { params: { page = "", id = null } = {} } = {},
    location,
    history,
  } = props;
  switch (page) {
    case "projects":
      if (id) {
        return (
          <Page  nav_bar>
            <Project id={id} />
          </Page>
        );
      }
      return (
        <Page  nav_bar>
          <Projects />
        </Page>
      );
    case "requests":
      return (
        <Page  nav_bar>
          <Requests />
        </Page>
      );
    case "reviews":
      return (
        <Page  nav_bar>
          <Reviews />
        </Page>
      );
    case "settings":
      return (
        <Page  nav_bar>
          <Settings />
        </Page>
      );

    default:
      return (
        <Page footer nav_bar>
          <Projects />
        </Page>
      );
  }
};

export default Factory;
