import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px 100px",
  },
  title: {
    ...theme.typography.sectionTitle,
    fontFamily: theme.fonts.inter,
  },
  date: {
    ...theme.typography.description,
    fontFamily: theme.fonts.openSans,
  },
  subtitle:{
    fontFamily: theme.fonts.inter,
    fontSize: "2rem",
    margin:"20px 0px"
  },
  description:{
    fontFamily: theme.fonts.openSans,
    fontSize: "1.8rem",
    color:theme.colors.terciary
  }
}));
function TermsContent(props) {
  const { title, date, subtitle, description } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.date}>{date}</p>
      <h2 className={classes.subtitle}>{subtitle}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
export default TermsContent;
