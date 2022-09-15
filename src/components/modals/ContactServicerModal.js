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
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "20px 10px",
    minWidth: 500,
  },
  iconcnt: {
    color: theme.colors.primary,
    position: "absolute",
    fontSize: 40,
    right: 10,
    top: 4,
    "&:hover": {
      color: "red",
    },
    "& svg": {
      cursor: "pointer",
    },
  },
  lblError: {
    color: "red",
    fontSize: 12,
  },
  itemCnt: {
    marginBottom: 20,
  },
}));
const ContactServicerModal = (props) => {
  const { open, handleClose } = props;
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const validateInputs = () => {
    if (!name) {
      setErrors("Name is required!");
      return false;
    }
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      setErrors("Incorrect email format!");
      return false;
    }

    if (!message) {
      setErrors("message cannot be empty!");
      return false;
    }
    return true;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
  };

  return (
    <RootModal maxWidth="lg" open={open} handleClose={handleClose}>
      <div className={classes.iconcnt} onClick={handleClose}>
        <CloseIcon fontSize="inherit" color="inherit" />
      </div>
      <Grid container justify="center" className={classes.root}>
        <Grid item lg={10} md={11} sm={12} xs={12} className={classes.itemCnt}>
          <form className={classes.form} onSubmit={onSubmit}>
            <span className={classes.lblError}>{errors}</span>
            <Input
              placeholder="Full Name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors(null);
              }}
            />

            <Input
              placeholder="E-mail"
              name="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors(null);
              }}
            />

            <TextArea
              rows={6}
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors(null);
              }}
            />

            <div
              style={{
                padding: "10px 0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="normal"
                size="md"
                style={{ minWidth: 100 }}
                type="submit"
              >
                Send
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </RootModal>
  );
};

export default ContactServicerModal;
