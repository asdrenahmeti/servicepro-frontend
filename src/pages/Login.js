import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "assets/logo.svg";
import bg from "assets/bg_imgs/login_bg.png";
import { NavLink } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";
import { MAX_FORM_WIDTH } from "Constants";
import { useContext } from "react";
import { AppContext } from "AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    maxWidth: MAX_FORM_WIDTH,
    backgroundColor: "#F9F9F9",
  },
  imgCnt: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: "url(" + bg + ")",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    position: "relative",
    padding: "6% 8%",
    backgroundColor: "#F9F9F9",
  },
  linkCnt: {
    position: "absolute",
    right: 40,
    top: 40,
    "& a": {
      textDecoration: "none",
      color: theme.colors.secondary,
      fontSize: theme.fontSizes.sm,
      fontFamily: theme.fonts.inter,
      "& span": {
        fontWeight: "bold",
      },
    },
  },
  logo: {
    width: "100%",
    margin: "0px 0px 4rem 0px",
  },
  welcome_back: {
    fontFamily: theme.fonts.inter,
    fontSize: theme.fontSizes.xl,
    color: theme.colors.secondary,
    "& span": {
      color: theme.colors.primary,
    },
  },
  signIn: {
    fontFamily: theme.fonts.inter,
    fontSize: theme.fontSizes.sm,
    color: "#8A8C8D",
    margin: "1rem 0px",
  },
  forgotPass: {
    fontFamily: theme.fonts.inter,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.secondary,
    margin: "1rem 0",
    fontWeight: "600",
    textDecoration: "none",
    "& span": {
      color: theme.colors.primary,
    },
  },
  rootInput: {
    width: "100%",
    padding: "2.2rem",
  },
  "@media screen and (max-width: 800px)": {
    imgCnt: {
      display: "none",
    },
    linkCnt: {
      top: 20,
      right: 20,
    },
    content: {
      padding: "10%",
    },
  },
}));

const Login = (props) => {

  const classes = useStyles(props);
  const context = useContext(AppContext);
  const {
    language: { login },
  } = context;
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item lg={7} md={6} className={classes.imgCnt}></Grid>
      <Grid item lg={5} md={6} sm={12} xs={12} className={classes.content}>
        <div className={classes.linkCnt}>
          <NavLink to="/home">
            {login.home_link1}
            <span>{login.home_link2}</span>
          </NavLink>
        </div>
        <img className={classes.logo} src={logo} />
        <h1 className={classes.welcome_back}>
          {login.txt1} <span>{login.txt11}</span>
        </h1>
        <p className={classes.signIn}>{login.txt2}</p>
        <Input
          classes={{ root: classes.rootInput }}
          placeholder={login.in1_plc}
        />
        <Input
          classes={{ root: classes.rootInput }}
          placeholder={login.in2_plc}
        />
        <NavLink to="/" className={classes.forgotPass}>
          {login.txt3}
        </NavLink>
        <Button variant="normal" size="md">
          {login.bnt1}
        </Button>
        <p style={{ textAlign: "center" }} className={classes.forgotPass}>
          {login.txt4}
        </p>
        <Button variant="normal" size="md">
          {login.btn2}
        </Button>
        <NavLink to="/" className={classes.forgotPass}>
          {login.txt5} <span>{login.txt55}</span>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Login;
