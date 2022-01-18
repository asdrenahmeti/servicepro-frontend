import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import Input from "components/Input";
import Button from "components/Button";
const useStyles = makeStyles((theme) => ({

}));
const Search = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  return (
    <div className={classes.root}>
        
    </div>
  );
};

export default Search;
