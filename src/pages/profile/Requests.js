import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import classnames from "classnames";
import RequestCard from "components/Cards/RequestCard";
const requests = [
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
  { id: "", images: [], name: "", description: "", place: "", price: "" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "18px 0px",
  },
  requestCardsCnt: {
    padding: 10,
    background: "white",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  sideBar: {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    padding: 10,
    background: theme.colors.secondary,
    height:"100%"
  },
  activeLink: {
    color: theme.colors.secondary,
  },
  sideLink: {
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& h3": {
      ...theme.typography.menu,
      color: "white",
      cursor: "pointer",
      paddingBottom:2,
      "&:hover": {
        // borderBottom:"solid #F5961F 2px"
      },
    },
    "& span": {
      ...theme.typography.menu,
      background: "#F5961F",
      borderRadius: "50%",
      fontSize: "1.2rem",
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color:"white"
    },
  },
}));
const Requests = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [requestType, setRequestType] = useState("pending");
  const changeRequestType = (type) => {
    setRequestType(type);
  };
  return (
    <Grid container>
      <Grid item lg={3}>
        <div  className={classes.sideBar}>
          <div
            className={classes.sideLink}
            onClick={() => changeRequestType("pending")}
          >
            <h3 style={{ borderBottom: requestType == "pending" && "solid #F5961F 2px" }}>
              PENDING
            </h3>
            {requestType == "pending" && <span>36</span>}
          </div>
          <div
            className={classes.sideLink}
            onClick={() => changeRequestType("done")}
          >
            <h3 style={{ borderBottom: requestType == "done" && "solid #F5961F 2px" }}>DONE</h3>
            {requestType == "done" && <span>36</span>}
          </div>
          <div
            className={classes.sideLink}
            onClick={() => changeRequestType("declined")}
          >
            <h3 style={{ borderBottom: requestType == "declined" && "solid #F5961F 2px" }}>
              DECLINED
            </h3>
            {requestType == "declined" && <span>36</span>}
          </div>
        </div>
      </Grid>
      <Grid item lg={9} md={9} className={classes.requestCardsCnt}>
        <RequestCard variant={requestType} />
        <RequestCard variant={requestType} />
        <RequestCard variant={requestType} />
        <RequestCard variant={requestType} />
      </Grid>
    </Grid>
  );
};

export default Requests;
