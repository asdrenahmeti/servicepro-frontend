import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
  },

  test: {
    ...theme.typography.menu
  }
}));

const Home = (...rest) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.test}>home page</h1>
    </div>
  );
};

export default Home;
