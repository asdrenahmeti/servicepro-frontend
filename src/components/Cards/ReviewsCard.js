import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "AppContext";
import clean_img from "assets/cleanning_img.jpeg";
import StarIcon from "@material-ui/icons/Star";
import Button from "components/Button";
import RoomIcon from "@material-ui/icons/Room";
import { Grid } from "@material-ui/core";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    background: "white",
    padding: "20px 40px 20px 20px",
    display: "flex",
    alignItems: "center",
    position:"relative"
  },
  rImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  userData: {
    padding: "0px 20px",
    "& h3": {
      ...theme.typography.cardTitle("sm"),
      fontWeight: "bold",
    },
    "& span": {
      ...theme.typography.placeholder,
      fontSize: 10,
    },
  },
  description: {
    ...theme.typography.description,
    fontSize: "1.6rem",
    paddingTop:20
  },
  quoteSign:{
      position:"absolute",
      right:"10%",
      top:"10%",
      color:theme.colors.primary,
      fontSize:60
  }
}));

const ReviewsCard = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  return (
    <div className={classes.root}>
        <h1 className={classes.quoteSign}>
        ”
        </h1>
      <div>
        <img className={classes.rImage} src={clean_img} />
      </div>
      <div className={classes.userData}>
        <div
          style={{ display: "flex", color: "#F5961F", alignItems: "center" }}
        >
          <h3 style={{ paddingRight: 10 }}>Filan Fisteku</h3>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        <span>2 months ago</span>
        <p className={classes.description}>
          If you’re in need of home cleaning, apartment cleaning, or a maid
          service, we’re simply the best.
          If you’re in need of home cleaning, apartment cleaning, or a maid
          service, we’re simply the best.
          If you’re in need of home cleaning, apartment cleaning, or a maid
          service, we’re simply the best.
        </p>
      </div>
    </div>
  );
};

export default ReviewsCard;
