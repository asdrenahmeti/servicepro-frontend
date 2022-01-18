import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import Projects from "pages/profile/Projects";
import Requests from "pages/profile/Requests";
import Reviews from "pages/profile/Reviews";
import Settings from "pages/profile/Settings";
const useStyles = makeStyles((theme) => ({
  root: { margin: "18px 0px 18px 50px" },
  nav: {
    display: "flex",
    justifyContent: "flex-end",
  },
  navItem: {
    ...theme.typography.cardTitle("md"),
    marginLeft: "8%",
    textDecoration: "none",
  },
  navItemActive: {
    color: theme.colors.primary,
  },
  content: {
    margin: "36px 0px",
  },
}));
const getContent = (type) => {
  switch (type) {
    case "projects":
      return <Projects />;
      break;
    case "requests":
      return <Requests />;
      break;
    case "reviews":
      return <Reviews />;
      break;
    case "settings":
      return <Settings />;
      break;
    default:
      return <Projects />;
      break;
  }
};
const RightSide = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const { type, viewer } = props;
  return (
    <div className={classes.root}>
      {!(viewer == "guest") && (
        <div className={classes.nav}>
          <NavLink
            to="/profile/projects"
            className={classnames(
              classes.navItem,
              !type && classes.navItemActive
            )}
            activeClassName={classes.navItemActive}
          >
            Projects
          </NavLink>
          <NavLink
            to="/profile/requests"
            className={classes.navItem}
            activeClassName={classes.navItemActive}
          >
            Requests
          </NavLink>
          <NavLink
            to="/profile/reviews"
            className={classes.navItem}
            activeClassName={classes.navItemActive}
          >
            Reviews
          </NavLink>
          <NavLink
            to="/profile/settings"
            className={classes.navItem}
            activeClassName={classes.navItemActive}
          >
            Settings
          </NavLink>
        </div>
      )}

      <div className={classes.content}>{getContent(type)}</div>
    </div>
  );
};

export default RightSide;
