import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import theme from "../styles/theme";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "components/Button"

const useStyles = makeStyles((theme) => ({
    root:{
        width:"100%",
        height:50,
        backgroundColor:"yellow"
    }
  }));

  const Nav =(props)=>{
    const classes = useStyles(props);
      return (
          <div className={classes.root}>

          </div>
      )
  }

  export default Nav;