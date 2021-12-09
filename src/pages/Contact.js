import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../components/Input";
import Button from "components/Button";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import ContactImage from "./../assets/contact.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9F9F9",
    padding: "2rem 5rem",
  },

  textarea: {
    width: "100%",
    fontFamily: theme.fonts.openSans,
    color: theme.colors.secondary,
    padding: "1.2rem 0",
    height: "4rem",
    paddingLeft: "2.5rem",
    borderRadius: "0.8rem",
    border: "0.1rem solid rgba(97, 100, 101, 0.1)",
    "&:focus": {
      outline: "none",
      border: `0.1rem solid ${theme.colors.primary}`,
    },
    "&::placeholder": {
      color: theme.colors.terciary,
    },
    resize: "none",
    minHeight: "20rem",
    fontSize: theme.fontSizes.xs,
    marginBottom: "2rem",
  },

  pageTitle: {
    ...theme.typography.sectionTitle,
    marginBottom: "1rem",
  },

  contactDesc: {
    ...theme.typography.description,
    fontFamily: theme.fonts.openSans,
    lineHeight: "2.7rem",
    marginBottom: "2rem",
  },

  contactInfo: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fonts.openSans,
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    color: theme.colors.terciary,
    "& svg": {
      width: "4rem",
      height: "4rem",
      color: theme.colors.primary,
    },
  },

  columnInfo: {
    fontWeight: "600",
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12} lg={5}>
          <h1 className={classes.pageTitle}> Let's talk</h1>
          <p className={classes.contactDesc}>
            Do you have any specific questions, suggestions or advice for us? Do
            not hesitate we are open for discussions
          </p>
          <Input placeholder={"Your name"} type={"text"} />
          <Input placeholder={"Your email"} type={"email"} />
          <textarea
            placeholder={"Your message"}
            className={classes.textarea}
          ></textarea>

          <Button variant="normal">Send message</Button>
        </Grid>
        <Grid item md={12} lg={7}>
          <img src={ContactImage} />

          <div className={classes.contactInfo}>
            <div className={classes.column}>
              <LocationOnIcon />
              <p className={classes.columnInfo}>151 New Park Ave</p>
            </div>

            <div className={classes.column}>
              <LocalPhoneIcon />
              <p className={classes.columnInfo}>+1 (123) 456789123</p>
            </div>

            <div className={classes.column}>
              <EmailIcon />
              <p className={classes.columnInfo}> info@service-pro.mk</p>
            </div>
          </div>
          <Grid container></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
