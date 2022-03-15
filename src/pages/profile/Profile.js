import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import LeftSide from "pages/profile/LeftSide";
import RightSide from "pages/profile/RightSide";
import NewProjectModal from "components/modals/NewProjectModal";
import userServices from "services/userServices";
import Loader from "components/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px 80px",
    backgroundColor: "#F9F9F9",
    position: "relative",
  },
  title: {
    ...theme.typography.cardTitle("lg"),
    margin: 20,
    textAlign: "center",
  },
}));

const Profile = (props) => {
  const context = useContext(AppContext);
  const { isLoading, changeLoading } = context;
  const classes = useStyles(props);

  const [addProjectModal, setaddProjectModal] = useState(false);
  const { children, openNewProject, closeNewProject } = props;
  const { addProject } = context;
  const createNewProject = (data) => {
    changeLoading(true);
    return userServices.addNewProject(data).then((newProject) => {
      newProject.data.is_new = true;
      newProject.data.job_images = newProject.images || [];
      addProject(newProject.data);
      setaddProjectModal(false);
      changeLoading(false);
    });
  };
  return (
    <div className={classes.root}>
      <Loader show={isLoading}/>
      <NewProjectModal
        open={addProjectModal}
        createNewProject={createNewProject}
        handleClose={() => {
          setaddProjectModal(false);
        }}
      />
      <Grid container justify="center">
        {/* <Grid item lg={12}>
          <h1 className={classes.title}>Welcome back, Filan Fisteku</h1>
        </Grid> */}
        <Grid item lg={3}>
          <LeftSide
            addNewProject={() => {
              setaddProjectModal(true);
            }}
          />
        </Grid>
        <Grid item lg={9}>
          <RightSide>{children}</RightSide>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
