import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../components/Input";
import CloseIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
  },

  test: {
    ...theme.typography.menu,
  },
}));

const Home = (...rest) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.test}>home page</h1>
      <Input
        placeholder="Paint room, fix doors..."
        type="text"
        styleType="leftRounded"
      >
        <CloseIcon></CloseIcon>
      </Input>

      <Input placeholder="E-mail address..." type="text"></Input>

      <Input placeholder="Password..." type="password"></Input>
    </div>
  );
};

export default Home;
