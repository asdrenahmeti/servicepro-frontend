import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import LeftSide from "pages/profile/LeftSide";
import RightSide from "pages/profile/RightSide";
const useStyles = makeStyles((theme) => ({
  root: { width: "100%", padding: "20px 80px", backgroundColor: "#F9F9F9" },
  title: {
    ...theme.typography.cardTitle("lg"),
    margin: 20,
    textAlign: "center",
  },
}));

const Profile = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  
  const {type=null}=props
  const {
    language: { login },
  } = context;
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item lg={12}>
          <h1 className={classes.title}>Welcome back, Filan Fisteku</h1>
        </Grid>
        <Grid item lg={3}>
          <LeftSide />
        </Grid>
        <Grid item lg={9}>
          <RightSide type={type}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
