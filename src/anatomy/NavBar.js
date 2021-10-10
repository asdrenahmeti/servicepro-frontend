import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: 50,
    backgroundColor:"green"
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return <div className={classes.root} ></div>;
};

export default NavBar;
