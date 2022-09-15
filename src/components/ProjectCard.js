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
import classnames from "classnames";
import { IMAGES_URL } from "Constants";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "12px 4px",
    display: "flex",
    backgroundColor: "#FFF",
  },
  is_new: {
    border: "solid green 1px",
  },
  imgCnt: {
    width: "50%",
    height: 228,
  },
  fImg: {
    width: "50%",
    height: 226,
    objectFit: "cover",
    border: "solid white 1px",
    // maxHeight: 200,
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
const renderImages = (job_images = []) => {
  const classes = useStyles();
  const imagesLength = job_images.length;
  switch (imagesLength) {
    case 1:
      return (
        <div className={classes.imgCnt} >
          {job_images.map((item) => {
            return (
              <img
                src={IMAGES_URL + "/" + item.img_url}
                className={classes.fImg}
                style={{ width: "100%" }}
              />
            );
          })}
        </div>
      );
      break;
    case 2:
      return (
        <div className={classes.imgCnt}>
          {job_images.map((item) => {
            return (
              <img
                src={IMAGES_URL + "/" + item.img_url}
                className={classes.fImg}
                style={{ width: "50%" }}
              />
            );
          })}
        </div>
      );
  }
  return (
    <React.Fragment>
      <div className={classes.imgCnt} style={{ display: "flex" }}>
        <img
          src={IMAGES_URL + "/" + job_images[0].img_url}
          className={classes.fImg}
          style={{ width: "50%" }}
        />
        <div style={{ width: "50%", height: "100%", position: "relative" }}>
          <img
            src={IMAGES_URL + "/" + job_images[1].img_url}
            className={classes.fImg}
            style={{ width: "100%", height: 112 }}
          />
          <img
            src={IMAGES_URL + "/" + job_images[2].img_url}
            className={classes.fImg}
            style={{ width: "100%", height: 112 }}
          />
          <div
            style={{
              width: "100%",
              height: 112,
              position: "absolute",
              right: 1,
              bottom: 1,
              background: "rgba(255, 255, 0,0.3)",
              border: "solid white 1px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:22,
              color:"white",
              fontFamily:"inter"
            }}
          >
            <span>See more</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const ProjectCard = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [delModal, setDelModal] = useState(false);
  const { mode, openEditProject, data, deleteProject } = props;
  const { job_images } = data || { job_images: [] };

  return (
    <div className={classnames(classes.root, data.is_new && classes.is_new)}>
      {renderImages(job_images)}
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
