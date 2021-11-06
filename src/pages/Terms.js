import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding:"2rem 5rem",
  },
  title: {
    ...theme.typography.sectionTitle,
    fontFamily: theme.fonts.inter,
  },
  subTitle: {
    ...theme.typography.description,
    fontFamily: theme.fonts.openSans,
  },
  data: {
    marginTop: 20,
    borderRadius: 15,
    width: "100%",
    marginBottom:20
  },
  leftSide: {
    borderRadius: "15px 0 0 15px",
    backgroundColor: theme.colors.primaryTint,
    padding: 20,
    display: "flex",
    justifyContent: "center",
  },
  rightSide: {
    borderRadius: "0 15px 15px 0",
    borderTop: "solid #E5E5E5 2px",
    borderRight: "solid #E5E5E5 2px",
    borderBottom: "solid #E5E5E5 2px",
  },
  link: {
    fontFamily: theme.fonts.inter,
    fontSize: "2 rem",
    margin: "20px 4px",
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      color: "#3B3B3B",
    },
  },
}));

function Terms(props) {
  const [value, setValue] = useState("");
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={12}>
          <h1 className={classes.title}>Terms and conditions</h1>
          <p className={classes.subTitle}>
            General Data Protection Regulation (GDPR) Update
          </p>
        </Grid>
      </Grid>
      <Grid container className={classes.data}>
        <Grid item lg={3} md={3} className={classes.leftSide}>
          <div>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
            <h1 className={classes.link}>Accepting the terms</h1>
          </div>
        </Grid>
        <Grid item lg={9} md={9} className={classes.rightSide}>
            sadadadasdad
        </Grid>
      </Grid>
    </div>
  );
}

export default Terms;
