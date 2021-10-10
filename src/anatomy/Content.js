import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
  },
}));

const Content = (props) => {
  const classes = useStyles();
  const {children}=props
  return (
    <div className={classes.root} >
        {children}
    </div>
  );
};

export default Content;
