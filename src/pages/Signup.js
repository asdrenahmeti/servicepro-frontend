import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "assets/logo.svg";
import bg from "assets/bg_imgs/login_bg.png";
import { NavLink } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";
import { MAX_FORM_WIDTH } from "Constants";
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
    padding: "6% 2%",
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
  inputCnt: {
    padding: "0rem 1.2rem",
  },
  logo: {
    width: "80%",
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
    margin: "1rem 0px",
    fontWeight: "600",
    textDecoration: "none",
    paddingLeft: "1.2rem",
    "& span": {
      color: theme.colors.primary,
    },
  },
  rootInput: {
    width: "100%",
    padding: "2.2rem",
  },
  rootBtn: {
    width: "100%",
    marginTop: "1.8rem",
    marginBottom: "1.8rem",
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
    inputCnt: {
        padding: "0rem 0.2rem",
      },
  },
}));

const Signup = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item lg={5} md={4} className={classes.imgCnt}></Grid>
      <Grid item lg={7} md={8} sm={12} xs={12} className={classes.content}>
        <div className={classes.linkCnt}>
          <NavLink to="/home">
            back to <span>home</span>
          </NavLink>
        </div>
        <Grid container justify="center">
          <Grid item lg={7} md={8}>
            <img className={classes.logo} src={logo} />
          </Grid>
          <Grid item lg={8} md={10}>
            <h1 className={classes.welcome_back}>
              Welcome to <span>Service Pro</span>
            </h1>
            <p className={classes.signIn}>Create your account below</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Input classes={{ root: classes.rootInput }} placeholder="Email" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Input classes={{ root: classes.rootInput }} placeholder="Email" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Input classes={{ root: classes.rootInput }} placeholder="Email" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Input classes={{ root: classes.rootInput }} placeholder="Email" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Input classes={{ root: classes.rootInput }} placeholder="Email" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Input classes={{ root: classes.rootInput }} placeholder="Email" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Input classes={{ root: classes.rootInput }} placeholder="Email" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Button
              classes={{ root: classes.rootBtn }}
              variant="normal"
              size="md"
            >
              Sign up
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} className={classes.inputCnt}>
            <Button
              classes={{ root: classes.rootBtn }}
              variant="normal"
              size="md"
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
        <NavLink to="/" className={classes.forgotPass}>
          Have an account? <span>Login</span>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Signup;
