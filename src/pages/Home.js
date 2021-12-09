import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../components/Input";
import CloseIcon from "@material-ui/icons/LocationOn";
import Button from "components/Button";
import Grid from "@material-ui/core/Grid";
import VerticalCard from "components/cards/VerticalCard";
import clean_img from "assets/cleanning_img.jpeg";
import bg from "assets/bg_imgs/login_bg.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BuildIcon from "@material-ui/icons/Build";
import { NavLink } from "react-router-dom";
import { colors } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: theme.colors.light_bg,
  },
  explore: {
    textDecoration: "none",
    fontSize: theme.fontSizes.md,
    fontFamily: "inter",
    color: "#8A8C8D",
    fontWeight: "500",
    "&:hover": {
      color: theme.colors.primary,
    },
  },
  rootSrchBtn: {
    padding: "1.3rem 2.2rem",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  rootInput: {
    borderRadius: "0px",
  },
  jumbotron: {
    "& h1": {
      ...theme.typography.sectionTitle,
      "& span": {
        color: theme.colors.primary,
      },
    },
    padding: 50,
    backgroundColor: "white",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 100%",
    backgroundImage: "url(" + bg + ")",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 500,
  },
  featured: {
    padding: 50,
  },
  featuredHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0px",
  },
  featuredTitle: {
    ...theme.typography.sectionTitle,
  },
  featuredContent: {
    padding: "10px 0px 50px 0px",
  },
  featuredItem: {
    padding: "0px 8px 0px 8px",
  },
  searchPart: {
    padding: "30px 0px",
    display: "flex",
    alignItems: "center",
  },
  howItWorksItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: 20,
    "& img": {
      width: "60%",
    },
  },
  howItWorksItemDesc: {
    ...theme.typography.description,
    textAlign: "center",
    padding: 10,
  },
  subScribeSection: {
    backgroundColor: theme.colors.primary,
    borderRadius: "20px",
    padding: 40,
    margin: "100px 0px 40px 0px",
    display: "flex",
    flexDirection: "column",
  },
  subscribeMail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px",
  },
  btnNormalVariant: {
    background: theme.colors.terciary,
    padding: "1.3rem 2.2rem",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "&:hover": {
      background: "white",
      color: theme.colors.terciary,
    },
  },
}));

const Home = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.jumbotron}>
        <h1>
          Let a{" "}
          <span>
            {" "}
            <i>professional</i>
          </span>{" "}
          <br /> handyman take over.
        </h1>
        <div className={classes.searchPart}>
          <Input
            styleType="leftRounded"
            placeholder="Paint room, fix doors..."
            type="text"
          >
            <BuildIcon />
          </Input>
          <div style={{ width: 20 }}></div>
          <Input
            styleType="leftRounded"
            placeholder="Location"
            type="text"
            classes={{ root: classes.rootInput }}
          >
            <LocationOnIcon />
          </Input>
          <div>
            <Button
              variant="normal"
              size="md"
              classes={{ root: classes.rootSrchBtn }}
            >
              {" "}
              Search
            </Button>
          </div>
        </div>
      </div>
      <Grid container className={classes.featured} justify="center">
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.featuredHeader}
        >
          <h1 className={classes.featuredTitle}>Featured handymans</h1>
          <NavLink to="/" className={classes.explore}>
            Explore all
          </NavLink>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Grid container className={classes.featuredContent}>
            <Grid item lg={3}>
              <Button
                variant={"group"}
                size="lg"
                style={{ width: "90%", marginBottom: 10 }}
                active={true}
              >
                Popular
              </Button>
              <Button
                variant={"group"}
                size="lg"
                style={{ width: "90%", marginBottom: 10 }}
              >
                Carpentry
              </Button>
              <Button
                variant={"group"}
                size="lg"
                style={{ width: "90%", marginBottom: 10 }}
              >
                Gardening
              </Button>
              <Button
                variant={"group"}
                size="lg"
                style={{ width: "90%", marginBottom: 10 }}
              >
                Electricians
              </Button>
              <Button
                variant={"group"}
                size="lg"
                style={{ width: "90%", marginBottom: 10 }}
              >
                Computer Service
              </Button>
            </Grid>
            <Grid item lg={9}>
              <Grid container>
                <Grid lg={4} className={classes.featuredItem}>
                  <VerticalCard img={clean_img} />
                </Grid>
                <Grid lg={4} className={classes.featuredItem}>
                  <VerticalCard img={clean_img} />
                </Grid>
                <Grid lg={4} className={classes.featuredItem}>
                  <VerticalCard img={clean_img} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <h1 className={classes.featuredTitle}>How it works</h1>
          <Grid container justify="space-around">
            <Grid item lg={3} className={classes.howItWorksItem}>
              <img src={clean_img} />
              <p className={classes.howItWorksItemDesc}>
                {" "}
                Contact the servicer directly from the website
              </p>
            </Grid>
            <Grid item lg={3} className={classes.howItWorksItem}>
              <img src={clean_img} />
              <p className={classes.howItWorksItemDesc}>
                Contact the servicer directly from the website
              </p>
            </Grid>
            <Grid item lg={3} className={classes.howItWorksItem}>
              <img src={clean_img} />
              <p className={classes.howItWorksItemDesc}>
                Contact the servicer directly from the website
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <NavLink to="/howitworks" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </NavLink>
        </Grid>

        <Grid item lg={6} className={classes.subScribeSection}>
          <h1
            className={classes.featuredTitle}
            style={{ color: "white", textAlign: "center" }}
          >
            Subscribe To Our Newsletter
          </h1>
          <p className={classes.howItWorksItemDesc} style={{ color: "white" }}>
            New updates & notifications
          </p>
          <div className={classes.subscribeMail}>
            <Input
              styleType="leftRounded"
              placeholder="Type your email"
            ></Input>
            <Button
              variant="normal"
              size="md"
              classes={{ normal: classes.btnNormalVariant }}
            >
              Subscribe
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
