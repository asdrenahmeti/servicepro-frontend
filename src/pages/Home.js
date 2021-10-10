import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
  },
}));

const Home = (...rest) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>home page</h1>
    </div>
  );
};

export default Home;
