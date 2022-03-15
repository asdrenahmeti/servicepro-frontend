import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "AppContext";
import clean_img from "assets/cleanning_img.jpeg";
import StarIcon from "@material-ui/icons/Star";
import Button from "components/Button";
import RoomIcon from "@material-ui/icons/Room";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmModal from "components/modals/confirmModal";
import classnames from "classnames"
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "12px 4px",
    display: "flex",
    backgroundColor: "#FFF",
  },
  is_new:{
    border:"solid green 1px"
  },
  imgCnt: {
    width: "50%",
    minHeight: 200,
  },
  fImg: {
    width: "50%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    margin: 12,
    width: "50%",
    height: 200,
    overflowY: "hidden",
    position: "relative",
    padding: "8px 14px",
  },
  contentHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  userData: {
    display: "flex",
    "& h3": {
      ...theme.typography.cardTitle("sm"),
      fontWeight: "bold",
    },
    "& p": {
      ...theme.typography.placeholder,
      fontSize: 10,
    },
  },
  headerImg: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover",
  },
  serviceType: {
    ...theme.typography.cardTitle("md"),
    margin: "10px 0px",
  },
  serviceDescription: {
    ...theme.typography.placeholder,
    fontSize: 12,
  },
  contentFooter: {
    position: "absolute",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "8px 10px 0px 12px",
    bottom: 0,
    right: 0,
    ...theme.typography.placeholder,
    fontSize: 12,
    backgroundColor: "#FFF",
  },
}));
const ProjectCard = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [delModal, setDelModal] = useState(false);
  const { mode, openEditProject, data, deleteProject } = props;
  return (
    <div className={classnames(classes.root,data.is_new && classes.is_new)}>
      <div className={classes.imgCnt}>
        <img src={clean_img} className={classes.fImg} />
        <img src={clean_img} className={classes.fImg} />
      </div>
      <div className={classes.content}>
        <div className={classes.contentHeader}>
          <div className={classes.userData}>
            <img src={clean_img} className={classes.headerImg} />
            <div style={{ margin: "0px 10px" }}>
              <h3>Filan Fisteku</h3>
              <p>company@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className={classes.serviceType}>{data.title}</h2>
          <p className={classes.serviceDescription}>{data.description}</p>
        </div>
        <div className={classes.contentFooter}>
          <div
            style={{ display: "flex", alignItems: "center", color: "#F5961F" }}
          >
            <RoomIcon />
            <span> Gostivar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
