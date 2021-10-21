import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../components/Input";
import CloseIcon from "@material-ui/icons/LocationOn";
import Button from "components/Button";
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

const Home = (props) => {
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
      <div style={{padding:20}}>
        <Button variant="normal">See more</Button>
      </div>
      <div style={{padding:20}}>
        <Button variant="outline">See more</Button>
      </div>
      <div style={{padding:20}}>
        <Button variant="group">See more</Button>
      </div>
      <div style={{padding:20}}>
        <Button variant="normal" rightRounded>See more</Button>
      </div>
      <div style={{padding:20}}>
        <Button variant="group" active>See more</Button>
      </div>
    </div>
  );
};

export default Home;
