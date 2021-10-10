import React from "react";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "AppContext";
const useStyles = makeStyles(() => ({}));

const Test = () => {
  const ctn = useContext(AppContext);
  return <div>sadsfd</div>;
};

export default Test;
