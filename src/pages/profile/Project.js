import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import ReviewsCard from "components/Cards/ReviewsCard";
import clean_img from "assets/cleanning_img.jpeg";
import Profile from "pages/profile/Profile";
import EditIcon from "@material-ui/icons/Edit";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "components/Button";
import EditProjectModal from "components/modals/EditProjectModal";
import ConfirmModal from "components/modals/ConfirmModal";
import userServices from "services/userServices";
import { NavLink } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
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

const Reviews = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [editModal, setEditModal] = useState(false);
  const [conModal, setconmodal] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { projects = [], getProjects, deleteProject } = context;
  let { id } = props;
  useEffect(() => {
    if (projects.length == 0) getProjects();
  }, []);
  const project = projects.find((item) => {
    return item.id == id;
  });
  const delProject = (id) => {
    userServices
      .deleteProject(id)
      .then((res) => {
        deleteProject(id);
        setconmodal(false);
        setDeleted(true);
      })
      .catch((err) => {});
  };
  return (
    <Profile>
      <EditProjectModal
        handleClose={() => {
          setEditModal(false);
        }}
        open={editModal}
        project={project}
      />
      <ConfirmModal
        open={conModal}
        handleClose={() => setconmodal(false)}
        confirmMethod={() => {
          delProject(project.id);
        }}
        text={"Are you sure you want to delete this project?"}
      />
      {(project && (
        <div className={classes.root}>
          <div style={{ position: "absolute", top: 10, left: 10 }}>
            <NavLink
              to="/profile/projects"
              className={classes.link}
              style={{fontSize:38,color:"#F5961F"}}
            >
              <KeyboardBackspaceIcon fontSize="inherit" color="inherit"/>
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
              <img src={clean_img} className={classes.img} />
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
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={4}
                      xs={6}
                      className={classes.smImgCnt}
                    >
                      <img src={clean_img} className={classes.img} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid
              item
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={classes.editCnt}
            >
              <span>Edit </span> <EditIcon fontSize="inherit" />
            </Grid>
            <Grid
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={classes.projectDataCnt}
            >
              <h2 className={classes.location}>
                {" "}
                <LocationOnIcon fontSize="large" /> Gostivar
              </h2>
              <h2 className={classes.location}>
                <MonetizationOnIcon fontSize="large" /> {project.price}
              </h2>
              <h1 className={classes.title}>{project.title}</h1>
              <p className={classes.description}>{project.description}</p>
            </Grid>
            <Grid
              item
              lg={8}
              md={10}
              sm={12}
              xs={12}
              className={classes.editCnt}
            >
              <span
                onClick={() => {
                  setEditModal(true);
                }}
              >
                Edit{" "}
              </span>{" "}
              <EditIcon fontSize="inherit" />
            </Grid>
            <Grid item lg={8} md={10} sm={12} xs={12}>
              <Button
                size="md"
                variant="outline"
                classes={{ root: classes.delBtn }}
                onClick={() => setconmodal(true)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </div>
      )) ||
        (deleted && (
          <Grid container justify="center">
            <Grid
              item
              lg={5}
              md={6}
              sm={10}
              xs={11}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1 className={classes.title}> Project deleted sucesfully! </h1>
              <NavLink to="/profile/projects" className={classes.link}>
                <Button
                  size="md"
                  variant="normal"
                  classes={{ root: classes.delBtn }}
                >
                  Go back to your projects
                </Button>
              </NavLink>
            </Grid>
          </Grid>
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

export default Reviews;
