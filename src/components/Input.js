import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";
import { NoEncryption } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.colors.secondary,
    height: "4rem",
    paddingLeft: "1rem",
    borderRadius: "0.8rem",
    border: "0.1rem solid rgba(97, 100, 101, 0.1)",
    "&:focus": {
      outline: "none",
      border: `0.1rem solid ${theme.colors.primary}`,
    },
    "&::placeholder": {
      color: theme.colors.terciary,
    },
  },
  leftRounded: {
    borderRadius: "0rem",
    borderTopLeftRadius: "0.8rem",
    borderBottomLeftRadius: "0.8rem",
  },

  formControl: {
    margin: "1rem 0",
    position: "relative",
    "& svg": {
      width: "2.2rem",
      height: "2.2rem",
      color: theme.colors.primary,
      position: "absolute",
      left: "0.7rem",
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  iconPadding: {
    paddingLeft: "3.5rem",
  },
}));

function Input(props) {
  const [value, setValue] = useState("");

  const classes = useStyles(theme);

  return (
    <div className={classes.formControl}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={value}
        className={`${classes.root} ${
          props.styleType == "leftRounded"
            ? `${classes.leftRounded} ${classes.iconPadding}`
            : ""
        }`}
        onChange={(e) => setValue(e.target.value)}
      />
      {props.children}
    </div>
  );
}

export default Input;
