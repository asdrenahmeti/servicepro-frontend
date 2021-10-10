import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "anatomy/Page";
import Home from "pages/Home";

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
    default:
      return <h1>Not found</h1>;
  }
};

export default Factory;
