import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

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

const RightSide = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const { children, type } = props;
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <NavLink
          to="/profile/projects"
          className={classnames(
            classes.navItem,
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

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default RightSide;
