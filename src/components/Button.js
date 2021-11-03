import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { ButtonBase } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    fontFamily: theme.fonts.inter,
    padding: "1rem 2rem",
    fontSize:"1.5rem",
    fontWeight:"500",
    borderRadius: "0.8rem",
    color: "white",
    boxShadow:"0px 0px 3px grey",
    "&:active": {
        transform: "translateY(1.5px)",
      },
  },
  normal: {
    background: theme.colors.primary,
    "&:hover": {
      background: theme.colors.secondary,
      color: "white",
    },
  },
  group: {
    background: theme.colors.primaryTint,
    boxShadow:"none",
    "&:hover": {
      background: theme.colors.primary,
    },
  },
  outline: {
    border: "solid #F5961F 0.2rem",
    background: "white",
    color: theme.colors.primary,
    "&:hover": {
      background: theme.colors.primary,
      color: "white",
    },
  },
  rightRounded:{
    borderRadius: "0rem 0.8rem 0.8rem 0rem",
  },
  active:{
    background: theme.colors.primary,
  },
  xs:{
    padding: "0.6rem 1.6rem",
    fontSize:theme.fontSizes.xs
  },
  sm:{
    padding: "0.8rem 1.8rem",
    fontSize:theme.fontSizes.sm
  },
  md:{
    padding: "1rem 2rem",
    fontSize:theme.fontSizes.md
  },
  lg:{
    padding: "1.2rem 2.2rem",
    fontSize:theme.fontSizes.lg
  }
}));
function Button(props) {
  const { children, variant,rightRounded,active,size="xs", ...others } = props;
  const classes = useStyles(props);
  const btnClasses = classnames(
    classes.root,
    variant == "normal" && classes.normal,
    variant == "outline" && classes.outline,
    variant == "group" && classes.group,
    rightRounded && classes.rightRounded,
    size=="sm" && classes.sm,
    size=="md" && classes.md,
    size=="lg" && classes.lg,
    (variant=="group" && active) && classes.active
  );
  return <ButtonBase className={btnClasses}>{children}</ButtonBase>;
}

export default Button;
