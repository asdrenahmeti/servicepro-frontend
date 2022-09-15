// F9F9F9
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "AppContext";
import RootModal from "components/modals/RootModal";
import Input from "components/Input";
import { Grid } from "@material-ui/core";
import Button from "components/Button";
import CloseIcon from "@material-ui/icons/Close";
import TextArea from "components/TextArea";
import Select from "components/Select";
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "20px 10px",
    minWidth: 500,
    padding:20
  },
  imgCnt:{
      height:80,

  }
}));
const EditProjectModal = (props) => {
  const {
    images,
    open,
    handleClose,
  } = props;
  const classes = useStyles(props);
  const context = useContext(AppContext);

  const hiddenFileInput = React.useRef(null);
  return (
    <RootModal maxWidth="lg" open={open} handleClose={handleClose}>
        <Grid container className={classes.root} justify="center">
            
        </Grid>
    </RootModal>
  );
};

export default EditProjectModal;
