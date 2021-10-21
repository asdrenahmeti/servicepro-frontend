import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "App.css";
import NavBar from "anatomy/NavBar";
import Content from "anatomy/Content";
import Input from "../components/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: theme.palette.leadColor,
  },
}));

const Page = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <div className={classes.root} {...rest}>
      <NavBar />
      <Content>{props.children}</Content>
    </div>
  );
};

export default Page;
