import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import Input from "components/Input";
import Button from "components/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 10,
  },
  user: {
    ...theme.typography.cardTitle("lg"),
    margin: "0px 0px 20px 0px",
  },
  mail: {
    ...theme.typography.placeholder,
  },
  inputCnt: {
    paddingRight: 20,
  },
  changeSession: {
    padding: "20px 0px",
    "& h3": {
      ...theme.typography.cardTitle("md"),
      textDecoration: "none",
      marginBottom: 18,
    },
  },
  saveChangesCnt: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
const Settings = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  return (
    <div className={classes.root}>
      <h2 className={classes.user}>Personal information</h2>
      <p className={classes.mail}>filan@gmail.com</p>
      <Grid container>
        <Grid item lg={6} className={classes.inputCnt}>
          <Input placeholder="Lirst Name" />
        </Grid>
        <Grid item lg={6} className={classes.inputCnt}>
          <Input placeholder="Last Name" />
        </Grid>
        <Grid item lg={6} className={classes.inputCnt}>
          <Input placeholder="Lirst Name" />
        </Grid>
        <Grid item lg={6} className={classes.inputCnt}>
          <Input placeholder="Last Name" />
        </Grid>
        <Grid item lg={6} className={classes.inputCnt}>
          <Input placeholder="Lirst Name" />
        </Grid>
        <Grid item lg={6} className={classes.inputCnt}>
          <Input placeholder="Last Name" />
        </Grid>
        <Grid item lg={6} className={classes.inputCnt}>
          <textarea
            style={{
              width: "100%",
              paddingLeft: "2.5rem",
              borderRadius: "0.8rem",
              border: "0.1rem solid rgba(97, 100, 101, 0.1)",
            }}
            placeholder="bio"
            rows={5}
          ></textarea>
        </Grid>
        <Grid item lg={12} style={{ padding: "18px 0px" }}>
          <Button variant="normal" size="md">
            Save
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.changeSession} justify="space-between">
        <Grid item lg={4} className={classes.saveChangesCnt}>
          <div>
            <h3>Change email</h3>
            <Input placeholder="Current e-mail" />
            <Input placeholder="New email" />
          </div>
          <div>
            <Button variant="normal" size="md">
              Submit
            </Button>
          </div>
        </Grid>
        <Grid item lg={4} className={classes.saveChangesCnt}>
          <div>
            <h3>Change password</h3>
            <Input placeholder="Current password" />
            <Input placeholder="New Password" />
            <Input placeholder="Confirm new password" />
          </div>
          <div>
            <Button variant="normal" size="md">
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
