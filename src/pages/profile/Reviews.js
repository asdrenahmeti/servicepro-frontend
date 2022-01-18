import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import ReviewsCard from "components/Cards/ReviewsCard";
const useStyles = makeStyles((theme) => ({
    root:{
        width:"100%",
        padding:10,
    }
}));
const Reviews = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  return (
      <div className={classes.root}>
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
          <ReviewsCard/>
      </div>
  );
};

export default Reviews;
