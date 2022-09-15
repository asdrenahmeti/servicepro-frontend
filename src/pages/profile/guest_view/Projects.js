import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import ProjectCard from "pages/profile/guest_view/ProjectCard";
import Profile from "pages/profile/guest_view/Profile";
import publicServices from "services/publicServices";
import ContactServicerModal from "components/modals/ContactServicerModal";
import Loader from "components/Loader";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "18px 0px",
    position: "realtive",
  },
  title: {
    ...theme.typography.cardTitle("lg"),
    // fontSize: 24,
    marginBottom: 29,
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
  const [contactModal, setContactModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loaderMsg, setLoaderMsg] = useState(null);
  let { u_id } = props;
  useEffect(() => {
    publicServices
      .getUser(u_id)
      .then((user) => {
        setProjects(user.data.user ? user.data.user.jobs : false);
        setLoader(false);
      })
      .catch((err) => {
        setLoaderMsg(
          "Something went wrong! Please check your internet connection and reload the page!"
        );
      });
  }, []);
  if (!projects) {
    return (
      <h1 style={{ textAlign: "center",margin:"100px 0px" }} className={classes.title}>
        This profile does not exists!
      </h1>
    );
  }
  if (projects.length > 0) {
    return (
      <Profile u_id={u_id}>
        <Loader show={loader} message={loaderMsg} />
        <ContactServicerModal
          u_id={u_id}
          open={contactModal}
          handleClose={() => {
            setContactModal(false);
          }}
        />
        <h1 className={classes.title}>
          You may be here, because you liked my job.
          <br /> Let’s get in touch!{" "}
          <span
            onClick={() => {
              setContactModal(true);
            }}
            style={{
              paddingLeft: 4,
              color: "#F5961F",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {" "}
            Contact me{" "}
          </span>
        </h1>
        <div className={classes.root}>
          {projects.map((item) => {
            return (
              <NavLink
                className={classes.link}
                to={"/servicer/" + u_id + "/projects/" + item.id}
              >
                <ProjectCard key={item.id} data={item} />
              </NavLink>
            );
          })}
        </div>
      </Profile>
    );
  } else {
    return (
      <Profile u_id={u_id}>
        <Loader show={loader} message={loaderMsg} />
        <div className={classes.root}>
          <Grid container justify="space-between">
            <Grid item lg={6} md={6}>
              <h1 className={classes.title}>
                Servicer does not publish any project yet!
              </h1>
            </Grid>
          </Grid>
        </div>
      </Profile>
    );
  }
};

export default Projects;
