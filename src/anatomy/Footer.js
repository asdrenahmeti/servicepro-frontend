import React from "react";
import Logo from "assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import { useContext } from "react";
import { AppContext } from "AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    fontFamily: theme.fonts.openSans,
    justifyContent: "space-around",
    padding: "4rem 3rem 2rem 3rem",
    background: "#fff",
    flexWrap: "wrap",
    width: "100%",
    "@media(max-width: 700px)": {
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
    "&:nth-child(1)": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    "@media(max-width: 992px)": {
      "&:nth-child(1)": {
        display: "none",
      },
    },
    "@media(max-width: 700px)": {
      margin: "1rem 0",

      "&:nth-child(1)": {
        display: "flex",
        width: "100%",
      },
      "&:nth-child(n+2):nth-child(-n+5)": {
        flex: "0 0 50%",
        boxSizing: "border-box",
        padding: "0 5%",
        display: "flex",
        flexDirection: "column",
      },
      "&:nth-child(6)": {
        display: "flex",
        flexDirection: "row",
      },
    },
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    "@media(max-width: 740px)": {
      textAlign: "left",
    },
  },
  footerLogo: {
    width: "20rem",
  },
  footerList: {
    padding: "0",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    alignItems: "flex-start",
  },
  footerItem: {
    textDecoration: "none",
    color: theme.colors.terciary,
    fontSize: theme.fontSizes.xs,
  },
  footerIcon: {
    "& svg": {
      width: "2.6rem",
      height: "2.6rem",
      color: theme.colors.primary,
    },
  },
  copyrightText: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.terciary,
    width: "100%",
    textAlign: "center",
    marginTop: "3rem",
    letterSpacing: "-0.06rem",
  },
}));

function Footer() {
  const classes = useStyles();
  const context = useContext(AppContext);
  const {
    language: { footer },
  } = context;
  return (
    <footer className={classes.root}>
      <div className={classes.column} style={{ justifyContent: "center" }}>
        <img src={Logo} className={classes.footerLogo} alt="Service Pro Logo" />
        <p
          className={classes.footerItem}
          style={{ textAlign: "center", marginTop: "0.5rem" }}
        >
          {footer.p1.txt1} <br /> {footer.p1.txt2}
        </p>
      </div>

      <div className={classes.column}>
        <h2 className={classes.title}>{footer.p2.txt}</h2>
        <ul className={classes.footerList}>
          <Link to="/home" className={classes.footerItem}>
            {footer.p2.l1}
          </Link>
          <Link to="/login" className={classes.footerItem}>
            {footer.p2.l2}
          </Link>
          <Link to="/signup" className={classes.footerItem}>
            {footer.p2.l3}
          </Link>
        </ul>
      </div>

      <div className={classes.column}>
        <h2 className={classes.title}>{footer.p3.txt}</h2>
        <ul className={classes.footerList}>
          <Link to="/about" className={classes.footerItem}>
            {footer.p3.l1}
          </Link>
          <Link to="/faq" className={classes.footerItem}>
            {footer.p3.l2}
          </Link>
        </ul>
      </div>

      <div className={classes.column}>
        <h2 className={classes.title}>{footer.p4.txt}</h2>
        <ul className={classes.footerList}>
          <Link to="/pricacy" className={classes.footerItem}>
          {footer.p4.l1}
          </Link>
          <Link to="/faq" className={classes.footerItem}>
          {footer.p4.l2}
          </Link>
          <Link to="/terms" className={classes.footerItem}>
          {footer.p4.l3}
          </Link>
        </ul>
      </div>

      <div className={classes.column}>
        <h2 className={classes.title}>{footer.p5.txt}</h2>
        <ul className={classes.footerList}>
          <Link to="/news" className={classes.footerItem}>
          {footer.p5.l1}
          </Link>
          <Link to="/contact" className={classes.footerItem}>
          {footer.p5.l2}
          </Link>
          <Link to="/terms" className={classes.footerItem}>
          {footer.p5.l3}
          </Link>
        </ul>
      </div>

      <div className={classes.column} style={{ gap: "1.5rem", flex: "0" }}>
        <Link to="/twitter" className={classes.footerIcon}>
          <TwitterIcon></TwitterIcon>
        </Link>
        <Link to="/facebook" className={classes.footerIcon}>
          <Facebook></Facebook>
        </Link>
        <Link to="/instagram" className={classes.footerIcon}>
          <Instagram></Instagram>
        </Link>
      </div>

      <p className={classes.copyrightText}>
        © All rights reserved. Service Pro {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
