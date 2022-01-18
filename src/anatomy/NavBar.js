import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import theme from "../styles/theme";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "components/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width:"100%",
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 3rem",
    "@media(max-width: 880px)": {
      alignItems: "center",
      justifyContent: "space-between",
      overflowX: "hidden",
    },
  },

  logo: {
    height: 45,
  },

  navList: {
    ...theme.typography.menu,
    listStyleType: "none",
    display: "flex",
    gap: "2.5rem",
    flex: "3",
    padding: "0",
    justifyContent: "center",
    "@media(max-width: 880px)": {
      alignItems: "center",
      flexDirection: "column",
      gap: "1rem",
      fontSize: "3.4rem",
      flex: "0",
    },
  },

  navLinks: {
    textDecoration: "none",
    color: theme.colors.secondary,
    "&:hover": {
      textDecoration: "none",
      color: theme.colors.primary,
      transition: "color 0.2s",
    },
  },

  navItems: { display: "inline-block" },

  buttonContainer: { display: "flex", justifyContent: "center" },

  hamburgerIcon: {
    fontSize: "4rem",
    display: "none",
    "@media(max-width: 880px)": {
      display: "flex",
      cursor: "pointer",
    },
  },

  menuContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem",
    flex: 2,
    "@media(max-width: 880px)": {
      height: "calc(100vh - 70px)",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "5000px",
      visibility: "hidden",
      top: "75px",
      width: "100%",
      transition: "left 0.5s ease-out",
      zIndex: "100",
      background: "white",
      overflowX: "hidden",
    },
  },

  responsive: {
    left: "0px",
    visibility: "visible",
    transition: "left 0.5s ease-out",
    overflowX: "hidden",
  },
}));


const NavBar = () => {
  const [showToggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!showToggle);
  };

  const classes = useStyles(theme);
  console.log(classes);
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo"></img>

      <div
        className={`${classes.menuContainer} ${
          showToggle ? classes.responsive : ""
        }`}
      >
        <ul className={classes.navList}>
          <li className={classes.navItems}>
            <Link className={classes.navLinks} to="/home">
              Home
            </Link>
          </li>
          <li className={classes.navItems}>
            <Link className={classes.navLinks} to="/howitworks">
              How it works
            </Link>
          </li>
          <li className={classes.navItems}>
            <Link className={classes.navLinks} to="/terms">
              Terms & Conditions
            </Link>
          </li>
          <li className={classes.navItems}>
            <Link className={classes.navLinks} to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <ul className={classes.navList} style={{justifyContent:"flex-end",alignItems:"center"}}>
          <li className={classes.navItems}>
            <Link className={classes.navLinks} to="/login">
              Login
            </Link>
          </li>
          <li className={classes.navItems}>
            <Link className={classes.navLinks} to="/signup">
            <Button variant="normal">Register</Button>
            </Link>
          </li>
        </ul>
      </div>

      {showToggle ? (
        <CloseIcon
          className={classes.hamburgerIcon}
          onClick={toggleMenu}
        ></CloseIcon>
      ) : (
        <MenuIcon
          className={classes.hamburgerIcon}
          onClick={toggleMenu}
        ></MenuIcon>
      )}
    </div>
  );
};

export default NavBar;
