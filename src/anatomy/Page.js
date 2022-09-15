import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "App.css";
import NavBar from "anatomy/Nav";
import Content from "anatomy/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    width: "100%",
    alignItems:"center",
    background:"#F9F9F9"
  }
}));

const Page = (props) => {
  const classes = useStyles();
  const { children, nav_bar, footer, ...rest } = props;
  return (
    <div className={classes.root}>
      {nav_bar && <NavBar />}
      <Content footer={footer}>{children}</Content>
    </div>
  );
};

export default Page;
