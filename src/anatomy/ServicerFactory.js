import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "anatomy/Page";
import Projects from "pages/profile/guest_view/Projects";
import Project from "pages/profile/guest_view/Project";
const Factory = (props) => {
  const {
    match,
    match: {
      params: { page = "projects", u_id = null, p_id = null } = {},
    } = {},
    location,
    history,
  } = props;
  if (!p_id) {
    return (
      <Page nav_bar>
        <Projects u_id={u_id} />
      </Page>
    );
  } else {
    return (
      <Page nav_bar>
        <Project u_id={u_id} p_id={p_id}/>
      </Page>
    );
  }
};

export default Factory;
