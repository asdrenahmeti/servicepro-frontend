import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "components/Button";
import { useContext } from "react";
import { AppContext } from "AppContext";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import avatar from "assets/avatar.png";
import userServices from "services/userServices";
import classnames from "classnames";
import MenuIcon from "@material-ui/icons/Menu";

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
    padding: 2,
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
  showMobile: {},
  hamburger: {
    display: "none",
    fontSize: 40,
    color: theme.colors.primary,
  },
  "@media screen and (max-width: 800px)": {
    showMobile: {
      display: "none",
    },
    hamburger: {
      display: "inline",
    },
    root: {
      justifyContent: "space-between",
      padding: "10px 20px",
    },
  },
}));

const Nav = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [avatarMenu, setAvatarMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const openAvatarMenu = (event) => {
    setAvatarMenu(event.currentTarget);
  };
  const closeAvatarMenu = () => {
    setAvatarMenu(null);
  };

  const openMobileMenu = (event) => {
    setMobileMenu(event.currentTarget);
  };
  const closeMobileMenu = () => {
    setMobileMenu(null);
  };

  const logout = () => {
    userServices.logout();
    window.location.reload(true);
  };
  const {
    language: { navBar },
    user,
  } = context;
  return (
    <div className={classes.root}>
      <Menu
        id="simple-menu"
        anchorEl={mobileMenu}
        keepMounted
        open={Boolean(mobileMenu)}
        onClose={closeMobileMenu}
      >
        <MenuItem>
          <NavLink
            style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
            onClick={() => {
              closeMobileMenu();
            }}
            to="/home"
          >
            {navBar.l1}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
            onClick={() => {
              closeMobileMenu();
            }}
            to="/howitworks"
          >
            {navBar.l2}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
            onClick={() => {
              closeMobileMenu();
            }}
            to="/terms"
          >
            {navBar.l3}
          </NavLink>
        </MenuItem>
        {user && (
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
              onClick={() => {
                closeMobileMenu();
              }}
              to="/profile"
            >
              {navBar.profile.l1}
            </NavLink>
          </MenuItem>
        )}
        {user && (
          <MenuItem
            onClick={() => {
              logout();
            }}
          >
            <span
              style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
            >
              {navBar.profile.l2}
            </span>
          </MenuItem>
        )}
        {!user && (
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
              onClick={() => {
                closeMobileMenu();
              }}
              to="/login"
            >
              {navBar.b1}
            </NavLink>
          </MenuItem>
        )}
        {!user && (
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "#202020", fontSize: 14 }}
              onClick={() => {
                closeMobileMenu();
              }}
              to="/register"
            >
              {navBar.b2}
            </NavLink>
          </MenuItem>
        )}
      </Menu>

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
            {navBar.profile.l1}
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
            {navBar.profile.l2}
          </span>
        </MenuItem>
      </Menu>
      <NavLink to="/" style={{ height: "100%" }}>
        <img src={logo} className={classes.logo} />
      </NavLink>
      <div className={classnames(classes.links, classes.showMobile)}>
        <NavLink
          to="/home"
          className={classes.navLinks}
          activeClassName={classes.activeLink}
        >
          {navBar.l1}
        </NavLink>
        <NavLink
          to="/howitworks"
          className={classes.navLinks}
          activeClassName={classes.activeLink}
        >
          {navBar.l2}
        </NavLink>
        <NavLink
          to="/terms"
          className={classes.navLinks}
          activeClassName={classes.activeLink}
        >
          {navBar.l3}
        </NavLink>
      </div>

      {(!user && (
        <div className={classes.showMobile}>
          <NavLink
            to="/login"
            className={classes.navLinks}
            activeClassName={classes.activeLink}
          >
            {navBar.b1}
          </NavLink>
          <NavLink className={classes.navLinks} to="/signup">
            <Button variant="normal" size="md">
              {navBar.b2}
            </Button>
          </NavLink>
        </div>
      )) || (
        <div className={classes.showMobile}>
          <img
            src={avatar}
            onClick={openAvatarMenu}
            className={classes.avatar}
          />
        </div>
      )}
      <div className={classes.hamburger}>
        <MenuIcon fontSize="inherit" color="inherit" onClick={openMobileMenu} />
      </div>
    </div>
  );
};

export default Nav;
