import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

import HomeWorkIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Button from "components/Button";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: "1.5rem",
    backgroundColor: "white",
    boxShadow: "0px 20px 30px -6px rgba(0, 0, 0, 0.06)",
  },
  bgImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    minHeight: "20rem",
    borderRadius: "1.5rem 1.5em 0rem 0rem",
    width: "100%",
  },
  content: {
    width: "100%",
    display: "flex",
    padding: "1.2rem 1.5rem 2.5rem 1.8rem",
    flexDirection: "column",
  },
  title: {
    ...theme.typography.cardTitle("lg"),
    padding: "1.5rem 0rem",
  },
  dataDescription: {
    ...theme.typography.cardData("xs"),
    padding: "0.5rem",
  },
  cardRow: {
    display: "flex",
    color: theme.colors.primary,
    fontSize: theme.typography.fontSizes.md,
    alignItems: "center",
  },
  btnCnt: {
    marginTop: "1rem",
  },
  navLink:{
    textDecoration:"none"
  }
}));
function VerticalCard(props) {
  const {
    children,
    title = "company name",
    name = "044 444 444",
    location = "missing",
    reviews = 0,
    img,
    ...others
  } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div
        className={classes.bgImage}
        style={{ backgroundImage: 'url("' + img + '")' }}
      ></div>
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.cardRow}>
          <HomeWorkIcon fontSize="inherit" color="inherit" />
          <h2 className={classes.dataDescription}> {name}</h2>
        </div>
        <div className={classes.cardRow}>
          <LocationOnIcon fontSize="inherit" color="inherit" />
          <h2 className={classes.dataDescription}> {location}</h2>
        </div>
        {/* TODO: create special component for reviews */}
        <div className={classes.cardRow}>
          <StarBorderIcon fontSize="inherit" color="inherit" />
          <StarBorderIcon fontSize="inherit" color="inherit" />
          <StarBorderIcon fontSize="inherit" color="inherit" />
          <StarBorderIcon fontSize="inherit" color="inherit" />
          <StarBorderIcon fontSize="inherit" color="inherit" />
          <h2 className={classes.dataDescription}> ({reviews} reviews)</h2>
        </div>
        <div className={classes.btnCnt}>
          <NavLink to="/servicer_profile" className={classes.navLink}>
            <Button variant="normal"> See more </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
