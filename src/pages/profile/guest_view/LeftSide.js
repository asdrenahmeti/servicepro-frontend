import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import EditIcon from "@material-ui/icons/Edit";
import RateReviewIcon from "@material-ui/icons/RateReview";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import clean_img from "assets/cleanning_img.jpeg";
import Button from "components/Button";
import NewProjectModal from "components/modals/NewProjectModal";
import publicServices from "services/publicServices";
const useStyles = makeStyles((theme) => ({
  root: { marginRight: 50 },
  imgCnt: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& img": {
      width: 130,
      height: 130,
      borderRadius: "50%",
      margin: 12,
      objectFit: "cover",
    },
  },
  editTxt: {
    cursor: "pointer",
    ...theme.typography.placeholder,
    textDecoration: "underline",
  },
  user: {
    ...theme.typography.cardTitle("lg"),
    color: theme.colors.primary,
    margin: "18px 0",
  },
  bio: {
    ...theme.typography.placeholder,
    margin: "18px 0px",
    borderBottom: "solid #E5E5E5 2px",
    paddingBottom: 18,
  },
  categories: {
    ...theme.typography.description,
    fontWeight: "600",
    margin: "18px 0px",
    listStyleType: "none",
  },
  stats: {
    margin: "18px 0px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: theme.colors.primary,
    fontSize: "2.8rem",
    "& span": {
      ...theme.typography.placeholder,
      paddingLeft: 12,
    },
  },
  rateNum: {
    ...theme.typography.placeholder,
    width: 30,
    height: 24,
    color: theme.colors.primary,
    border: "solid " + theme.colors.primary + " 2px",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
}));

const LeftSide = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [user, setUser] = useState({ services: [], jobs: [] });
  const [rating, setRating] = useState({ reviews: 0, rating: 0 });
  const { contactModal } = props;
  useEffect(() => {
    publicServices.getUser(props.u_id).then((user) => {
      setUser(user.data.user ? user.data.user : false);
      setRating(user.data.userRatings);
    });
  }, []);
  const {
    language: { login },
  } = context;
  if (!user) {
    return (
      <React.Fragment></React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <div className={classes.imgCnt}>
        <img src={clean_img} />
      </div>
      <h2 className={classes.user} style={{ textAlign: "center" }}>
        {user.name}
      </h2>
      <p className={classes.bio}>{user.bio}</p>
      <h2 className={classes.user} style={{ color: "#3B3B3B" }}>
        Services
      </h2>
      {user.services.map((item) => {
        return <li className={classes.categories}>{item.name}</li>;
      })}
      <div className={classes.stats}>
        <div className={classes.rateNum}>
          {(rating.rating && rating.rating) || 0}
        </div>{" "}
        <span>Rating</span>
      </div>
      <div className={classes.stats}>
        <DoneAllIcon fontSize="inherit" />{" "}
        <span>{user.jobs.length} projects done</span>
      </div>
      <div className={classes.stats}>
        <RateReviewIcon fontSize="inherit" />{" "}
        <span>{rating.reviews} Reviews</span>
      </div>
      <Button variant="normal" size="md" onClick={contactModal}>
        Contact me
      </Button>
    </div>
  );
};

export default LeftSide;
