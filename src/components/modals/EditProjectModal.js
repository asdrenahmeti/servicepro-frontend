// F9F9F9
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "AppContext";
import RootModal from "components/modals/RootModal";
import Input from "components/Input";
import { Grid } from "@material-ui/core";
import Button from "components/Button";
import CloseIcon from "@material-ui/icons/Close";
import TextArea from "components/TextArea";
import Select from "components/Select";
import clean_img from "assets/cleanning_img.jpeg";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "20px 10px",
    minWidth: 500,
  },
  iconcnt: {
    color: theme.colors.primary,
    position: "absolute",
    fontSize: 40,
    right: 10,
    top: 4,
    "&:hover": {
      color: "red",
    },
    "& svg": {
      cursor: "pointer",
    },
  },
  errors: {
    color: "red",
    fontSize: 12,
  },
  itemCnt: {
    marginBottom: 20,
  },
}));
const EditProjectModal = (props) => {
  const {
    project = {
      title: "",
      description: "",
      price: 0,
      location: "",
    },
    open,
    handleClose,
  } = props;
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [title, setTitle] = useState(project.title);
  const [desctiption, setDescription] = useState(project.description);
  const [price, setPrice] = useState(project.price);
  const [valute, setValute] = useState("DIN");
  const [location, setLocation] = useState(project.location);
  const [images, setImages] = useState([]);
  const [img_url, setImgUrl] = useState(null);
  const [errors, setErrors] = useState(null);
  // const [activeImage, seEerros] = useState(null);
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
    return true;
  };
  const hiddenFileInput = React.useRef(null);
  useEffect(() => {
    setTitle(project.title);
    setDescription(project.description);
    setPrice(project.price);
    setLocation(project.location);
  }, [props.open]);
  const onSubmit = (e) => {
    const { editProject, handleClose } = props;
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    let data = new FormData();
    data.append("title", title);
    data.append("description", desctiption);
    data.append("price", price);
    editProject(data);
  };
  const onSelectChange = (e) => {
    setValute(e.value);
  };
  return (
    <RootModal maxWidth="lg" open={open} handleClose={handleClose}>
      <div className={classes.iconcnt} onClick={handleClose}>
        <CloseIcon fontSize="inherit" color="inherit" />
      </div>
      <Grid container justify="center" className={classes.root}>
        <Grid item lg={10} md={11} sm={12} xs={12} className={classes.itemCnt}>
          <form className={classes.form} onSubmit={onSubmit}>
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

            <div
              style={{
                padding: "10px 0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="normal"
                size="md"
                style={{ minWidth: 100 }}
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </RootModal>
  );
};

export default EditProjectModal;
