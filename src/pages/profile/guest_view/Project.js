import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import clean_img from "assets/cleanning_img.jpeg";
import avatar_img from "assets/avatar.png";
import Profile from "pages/profile/guest_view/Profile";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { NavLink } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 10,
    position: "relative",
  },
  imgCnt: {
    maxHeight: 300,
    paddingBottom: 10,
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  smImgCnt: {
    padding: "0px 5px",
    height: 100,
    cursor: "pointer",
  },
  smImgsCnt: {
    "& > :first-child": {
      padding: "0px 5px 0px 0px",
    },
    "& > :last-child": {
      padding: "0px 0px 0px 5px",
    },
  },
  editCnt: {
    display: "flex",
    justifyContent: "flex-end",
    color: theme.colors.primary,
    fontSize: 18,
    "& span": {
      cursor: "pointer",
      ...theme.typography.placeholder,
      textDecoration: "underline",
    },
    // borderBottom:"0.1rem solid rgba(97, 100, 101, 0.1)"
  },
  projectDataCnt: {
    paddingTop: 14,
  },
  location: {
    ...theme.typography.cardTitle("md"),
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
    "& svg": {
      marginRight: 10,
    },
  },
  title: { ...theme.typography.cardTitle("lg"), margin: "20px 0px" },
  description: {
    ...theme.typography.placeholder,
    fontSize: 14,
    margin: "20px 0px",
  },
  delBtn: {
    padding: "6px 50px",
  },
  link: {
    textDecoration: "none",
  },
}));

const Project = (props) => {
  const images = [
    { id: 1, img: clean_img },
    { id: 2, img: avatar_img },
    { id: 3, img: clean_img },
    { id: 4, img: avatar_img },
  ];
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [activeImage, setActiveImage] = useState(images[0] || null);
  const [project, setProject] = useState({
    id: 1,
    title: "test",
    description: "test test test",
  });
  const { projects = [], getProjects, deleteProject } = context;
  let { u_id, p_id } = props;

  const _activeImage = images.find((item) => {
    item.id == activeImage;
  });
  return (
    <Profile u_id={u_id} p_id={p_id}>
      {(project && (
        <div className={classes.root}>
          <div style={{ position: "absolute", top: 10, left: 10 }}>
            <NavLink
              to={"/servicer/" + u_id}
              className={classes.link}
              style={{ fontSize: 38, color: "#F5961F" }}
            >
              <KeyboardBackspaceIcon fontSize="inherit" color="inherit" />
            </NavLink>
          </div>
          <Grid container justify="center">
            <Grid
              item
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={classes.imgCnt}
            >
              <img src={activeImage.img} className={classes.img} />
            </Grid>
            <Grid
              item
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={classes.imgCnt}
            >
              <Grid container className={classes.smImgsCnt}>
                {images.map((item) => {
                  return (
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={4}
                      xs={6}
                      className={classes.smImgCnt}
                    >
                      <img
                        src={item.img}
                        className={classes.img}
                        onClick={() => {
                          setActiveImage(item);
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={classes.projectDataCnt}
            >
              <h2 className={classes.location}>
                <LocationOnIcon fontSize="large" /> Gostivar
              </h2>
              <h2 className={classes.location}>
                <MonetizationOnIcon fontSize="large" /> {project.price}
              </h2>
              <h1 className={classes.title}>{project.title}</h1>
              <p className={classes.description}>{project.description}</p>
            </Grid>
          </Grid>
        </div>
      )) || (
        <div style={{ display: "flex" }}>
          <h1 className={classes.title}>
            We can't find this project!{" "}
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <NavLink
              to="/profile/projects"
              className={classes.link}
              style={{ marginLeft: 20 }}
            >
              Go back to your projects
            </NavLink>
          </h1>
        </div>
      )}
    </Profile>
  );
};

export default Project;
