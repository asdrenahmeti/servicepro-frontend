import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import theme from "../styles/theme";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "components/Button";
import { useContext } from "react";
import { AppContext } from "AppContext";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import avatar from "assets/avatar.png";
import userServices from "services/userServices";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 68,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    height: "90%",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: "50%",
    border: "solid #F5961F 2px",
    cursor: "pointer",
    padding:2
  },
  navLinks: {
    textDecoration: "none",
    color: theme.colors.secondary,
    marginLeft: 20,
    ...theme.typography.menu,
    fontSize: theme.fontSizes.md,
    "&:hover": {
      textDecoration: "none",
      color: theme.colors.primary,
      transition: "color 0.2s",
    },
  },
  activeLink: {
    textDecoration: "none",
    color: theme.colors.primary,
    transition: "color 0.2s",
  },
}));

const Nav = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [avatarMenu, setAvatarMenu] = useState(false);
  const openAvatarMenu = (event) => {
    setAvatarMenu(event.currentTarget);
  };
  const closeAvatarMenu = () => {
    setAvatarMenu(null);
  };
  const logout = () => {
    userServices.logout();
    window.location.reload(true);
  };
  const {
    language: { login },
    user,
  } = context;
  return (
    <div className={classes.root}>
      <Menu
        id="simple-menu"
        anchorEl={avatarMenu}
        keepMounted
        open={Boolean(avatarMenu)}
        onClose={closeAvatarMenu}
      >
        <MenuItem>
          <NavLink
            style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
            onClick={() => {
              closeAvatarMenu();
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
          }}
        >
          <span
            style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
          >
            Logout
          </span>
        </MenuItem>
      </Menu>
      <NavLink to="/" style={{ height: "100%" }}>
        <img src={logo} className={classes.logo} />
      </NavLink>
      <div className={classes.links}>
        <NavLink
          to="/home"
          className={classes.navLinks}
          activeClassName={classes.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/howitworks"
          className={classes.navLinks}
          activeClassName={classes.activeLink}
        >
          How it works
        </NavLink>
        <NavLink
          to="/terms"
          className={classes.navLinks}
          activeClassName={classes.activeLink}
        >
          Terms & Conditions
        </NavLink>
      </div>
      {(!user && (
        <div>
          <NavLink
            to="/login"
            className={classes.navLinks}
            activeClassName={classes.activeLink}
          >
            Login
          </NavLink>
          <NavLink className={classes.navLinks} to="/signup">
            <Button variant="normal" size="md">
              Register
            </Button>
          </NavLink>
        </div>
      )) || (
        <div>
          <img
            src={avatar}
            onClick={openAvatarMenu}
            className={classes.avatar}
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
