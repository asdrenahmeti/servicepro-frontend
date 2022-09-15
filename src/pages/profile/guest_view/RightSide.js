import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "AppContext";
import ProjectCard from "components/ProjectCard";
import { NavLink } from "react-router-dom";
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
  projects: {
    margin: "18px 0px",
  },
}));

const RightSide = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  let {children}=props

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default RightSide;
