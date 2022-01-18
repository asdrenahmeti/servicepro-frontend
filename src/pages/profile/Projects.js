import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import ProjectCard from "components/ProjectCard";
const projects = [
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "18px 0px",
  },
}));
const Projects = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const { children } = props;
  return (
    <div className={classes.root}>
      {projects.map((item) => {
        return <ProjectCard />;
      })}
    </div>
  );
};

export default Projects;
