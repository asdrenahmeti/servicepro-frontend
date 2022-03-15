// F9F9F9
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "AppContext";
import RootModal from "components/modals/RootModal";
import Button from "components/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: 20,
    minWidth: 400,
  },
  text: {
    ...theme.typography.cardTitle("lg"),
    margin: 20,
    textAlign: "center",
  },
  footer: {
    padding: "20px 10px",
    display: "flex",
    justifyContent: "space-around",
  },
}));
const ConfirmModal = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const { open, handleClose, confirmMethod, text } = props;
  return (
    <RootModal maxWidth="md" open={open} handleClose={handleClose}>
      <div className={classes.root}>
        <h1 className={classes.text}> {text}</h1>
      </div>
      <div className={classes.footer}>
        <Button variant="outline" onClick={handleClose}>
          No
        </Button>
        <Button variant="normal" onClick={confirmMethod}>
          Yes
        </Button>
      </div>
    </RootModal>
  );
};

export default ConfirmModal;
