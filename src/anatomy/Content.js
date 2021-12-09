import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "anatomy/Footer";
const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
    width:"100%",
    maxWidth:1800,
  },
}));

const Content = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      {children}
      {props.footer && <Footer />}
    </div>
  );
};

export default Content;
