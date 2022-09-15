// F9F9F9
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "AppContext";
import RootModal from "components/modals/RootModal";
import Input from "components/Input";
import { Grid } from "@material-ui/core";
import Button from "components/Button";
import create_new_img from "assets/create_new.png";
import CloseIcon from "@material-ui/icons/Close";
import TextArea from "components/TextArea";
import Select from "components/Select";
import Loader from "components/Loader";
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: 20,
    minWidth: 600,
    position:"relative"
  },
  header: {
    ...theme.typography.cardTitle("lg"),
    marginBottom:20
  },
  imgCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  errors: {
    color: "red",
    fontSize: 12,
  },
  uploadButtonCnt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    border: "dashed  " + theme.colors.primary + " 2px",
    borderRadius: 10,
    margin: "16px 0px",
    background: "white",
  },
  fileNameCnt: {
    background: "white",
    borderRadius: 8,
    padding: "10px 20px",
    margin: "16px 0px",
    border: "solid #EFEFF0 2px",
    "& p": {
      ...theme.typography.placeholder,
    },
  },
  img: {
    width: "80%",
  },
  iconcnt: {
    color: theme.colors.primary,
    position: "absolute",
    width: 60,
    height: 60,
    fontSize: 40,
    right: 0,
    "&:hover": {
      color: "red",
    },
    "& svg": {
      cursor: "pointer",
    },
  },
}));
const NewProjectModal = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const { open, handleClose,isLoading,error=null } = props;
  const [title, setTitle] = useState("");
  const [desctiption, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [valute, setValute] = useState("DIN");
  const [location, setLocation] = useState("");
  const [img_url, setImgUrl] = useState(null);
  const [errors, setErrors] = useState(null);
  const hiddenFileInput = React.useRef(null);
  const validateInputs = () => {
    if (!title) {
      setErrors("Project name is required!");
      return false;
    }
    if (!desctiption) {
      setErrors("Description is required!");
      return false;
    }

    if (!price) {
      setErrors("Price is required!");
      return false;
    }
    if (!img_url) {
      setErrors("You need at least 1 image!");
    }
    return true;
  };
  const onSubmit = (e) => {
    const { createNewProject, handleClose } = props;
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    let data = new FormData();
    data.append("title", title);
    data.append("description", desctiption);
    data.append("price", price);
    console.log(img_url);
    console.log(typeof img_url);
    for (const key of Object.keys(img_url)) {
      data.append("img_url", img_url[key]);
    }
    createNewProject(data);
    setImgUrl(null);
    setTitle("");
    setDescription("");
    setLocation("");
    setPrice("");
    setValute("DIN");
  };
  const onSelectChange = (e) => {
    setValute(e.value);
  };
  const onFileChange = (e) => {
    setImgUrl(e.target.files);
  };
  const handleFileInputClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <RootModal maxWidth="md" open={open} handleClose={handleClose} >
      <div className={classes.iconcnt} onClick={handleClose}>
        <CloseIcon fontSize="inherit" color="inherit" />
      </div>
      <Grid container className={classes.root}>
      <Loader show={isLoading} isInside message={error && error || "Please wait!"}  style={{zIndex:20000}}/>
        <Grid item lg={12} md={12} >
          <h2 className={classes.header}>Share your projects with clients</h2>
        </Grid>
        <Grid item lg={5} md={5}>
          <form onSubmit={onSubmit}>
            <span className={classes.errors}>{errors}</span>
            <Input
              placeholder="Project Name"
              name="title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Input
              placeholder="Location"
              name="location"
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "70%" }}>
                <Input
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div style={{ width: "24%" }}>
                <Select onSelectChange={onSelectChange} />
              </div>
            </div>
            <TextArea
              rows={6}
              placeholder="Description"
              value={desctiption}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <div className={classes.uploadButtonCnt}>
              <Button
                size="md"
                style={{
                  color: "black",
                  boxShadow: "0px 0px 30px grey",
                  background: "#F5F5F5",
                }}
                onClick={handleFileInputClick}
              >
                Browse
              </Button>
              <input
                type="file"
                multiple
                onChange={onFileChange}
                style={{ display: "none" }}
                ref={hiddenFileInput}
              />
            </div>
            {img_url &&
              Object.keys(img_url).map((item) => {
                return (
                  <div className={classes.fileNameCnt}>
                    <p>{img_url[item].name}</p>
                  </div>
                );
              })}

            <div style={{ padding: "10px 0px" }}>
              <Button
                variant="normal"
                size="md"
                style={{ minWidth: 100 }}
                type="submit"
              >
                Post
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item lg={7} md={7} className={classes.imgCont}>
          <img src={create_new_img} className={classes.img} />
        </Grid>
      </Grid>
    </RootModal>
  );
};

export default NewProjectModal;
