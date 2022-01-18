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
    // height:"100%"
    borderBottom: "solid " + theme.colors.border_color + " 1px",
  },
  companyName: {
    ...theme.typography.placeholder,
    fontWeight: "600",
  },
  time: {
    ...theme.typography.placeholder,
    fontSize: 14,
  },
  data: {
    fontSize: 12,
  },
  firstPart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "14px 20px 14px 20px",
    "& div": {
      padding: "6px 0px",
    },
  },
  secondPart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "14px 20px 14px 20px",
    "& div": {
      padding: "6px 0px",
    },
  },
  confReqBtn: {
    border: "solid #F5961F 0.3rem",
  },
  description: {
    ...theme.typography.description,
    fontSize: "1.6rem",
  },
}));

const RequestCard = (props) => {
  const classes = useStyles(props);
  const { variant } = props;
  const context = useContext(AppContext);
  return (
    <Grid container className={classes.root}>
      <Grid item lg={4} md={4} className={classes.firstPart}>
        <div>
          <h1 className={classes.companyName}>Merrit Williams</h1>
          <p className={classes.time}> 2 days ago </p>
        </div>
        <div>
          <p className={classes.time}> Hart Lane #49, Oregon </p>
          <p className={classnames(classes.time, classes.data)}>
            Start date: 01.12.2021{" "}
          </p>
        </div>
        {variant == "pending" && (
          <div>
            <Button variant="normal" size="xs" style={{ padding: "6px 8px" }}>
              Confirm Request
            </Button>
          </div>
        )}
      </Grid>
      <Grid item lg={8} md={8} className={classes.secondPart}>
        <div style={{ flex: "1" }}>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            molestie dictum ante at interdum. Esent erat nisl, lacinia sed
            tellus et, iaculis viverra sapien. Vestibulum accumsan mi ne
            consecte consectetur as molestie dict ante at interdum, icaluis
            viviera solor civi..
          </p>
        </div>
        {(variant == "pending" && (
          <div>
            <Button variant="outline" size="xs" style={{ padding: "4px 8px" }}>
              Cancel Request
            </Button>
          </div>
        )) || (
          <div style={{display:'flex',justifyContent:"flex-end"}}>
            <Button variant="outline" size="xs" style={{ padding: "4px 8px" }}>
              Delete
            </Button>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default RequestCard;
