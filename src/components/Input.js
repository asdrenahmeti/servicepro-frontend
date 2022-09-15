import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.fontSizes.xs,
    width: "100%",
    color: theme.colors.secondary,
    height: "5rem",
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
  const classes = useStyles(props);
  const {
    styleType,
    children,
    ...others
  } = props;
  const mergedClasses = classnames(
    classes.root,
    styleType == "leftRounded" && classes.leftRounded,
    styleType == "leftRounded" && classes.iconPadding
  );
  return (
    <div className={classes.formControl}>
      <input
        placeholder={props.placeholder}
        className={mergedClasses}
        {...others}
        
      />
      {children}
    </div>
  );
}

export default Input;
