import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.fonts.openSans,
    marginBottom: "1rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "0.5px solid",
    borderColor: "#8A8C8D",
  },
  question: {
    fontSize: theme.fontSizes.md,
    fontWeight: "400",
  },

  btnExpand: {
    background: "none",
    border: "none",
    "& svg": {
      fontSize: theme.fontSizes.lg,
    },
  },

  content: {
    fontSize: theme.fontSizes.xs,
    marginTop: "1rem",
    lineHeight: "2.7rem",
  },

  orange: {
    color: theme.colors.primary,
  },
}));

const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.question}>{props.title}</h2>
        <button
          className={classes.btnExpand}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      {showInfo && <p className={classes.content}>{props.info}</p>}
    </div>
  );
};

export default Question;
