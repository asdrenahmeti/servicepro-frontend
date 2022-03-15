import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import ProjectCard from "components/ProjectCard";
import Button from "components/Button";
import Profile from "pages/profile/Profile";
import NewProjectModal from "components/modals/NewProjectModal";
import userServices from "services/userServices";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "18px 0px",
  },
  title: {
    ...theme.typography.cardTitle("lg"),
    fontSize: 24,
  },
  description: {
    ...theme.typography.placeholder,
    margin: "12px 0px",
    paddingBottom: 18,
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  link: {
    textDecoration: "none",
  },
}));
const Projects = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const { projects = [], getProjects, addProject } = context;
  const [addProjectModal, setaddProjectModal] = useState(false);

  const createNewProject = (data) => {
    return userServices.addNewProject(data).then((newProject) => {
      newProject.data.is_new = true;
      newProject.data.job_images = newProject.images || [];
      addProject(newProject.data);
      setaddProjectModal(false);
    });
  };
  useEffect(() => {
    getProjects();
  }, []);
  const { mode, openEditProject, addNewProject, deleteProject } = props;
  if (projects.length > 0) {
    return (
      <Profile>
        <div className={classes.root}>
          {projects.map((item) => {
            return (
              <NavLink
                className={classes.link}
                to={"/profile/projects/" + item.id}
              >
                <ProjectCard
                  key={item.id}
                  mode={mode}
                  openEditProject={openEditProject}
                  data={item}
                  deleteProject={deleteProject}
                />
              </NavLink>
            );
          })}
        </div>
      </Profile>
    );
  } else {
    return (
      <Profile>
        <NewProjectModal
          open={addProjectModal}
          createNewProject={createNewProject}
          handleClose={() => {
            setaddProjectModal(false);
          }}
        />
        <div className={classes.root}>
          <Grid container justify="space-between">
            <Grid item lg={6} md={6}>
              <h1 className={classes.title}>
                You don’t have any projects yet !
              </h1>
              <p className={classes.description}>
                Start by offering a service. We’ll take care of clients.
              </p>
              <Button variant="normal" size="md" onClick={()=>{setaddProjectModal(true)}}>
                Start a project
              </Button>
            </Grid>
            <Grid item lg={6} md={6} className={classes.rightSide}>
              <h1 className={classes.title}>Having trouble getting started?</h1>
              <p
                className={classes.description}
                style={{ paddingBottom: 0, marginBottom: 0 }}
              >
                Click{" "}
                <NavLink to="/howitworks" style={{ color: "#F5961F" }}>
                  here
                </NavLink>{" "}
                to get more information on how Service Pro works, or contact us
                for more.
              </p>
            </Grid>
          </Grid>
        </div>
      </Profile>
    );
  }
};

export default Projects;
