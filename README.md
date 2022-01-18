# ServiceProFront

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
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 50,
  },
  jumbotron: {
    "& h1": {
      ...theme.typography.sectionTitle,
      "& span": {
        color: theme.colors.primary,
      },
    },

    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 100%",
    backgroundImage: "url(" + bg + ")",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 500,
  },
  searchPart: {
    padding: "30px 0px",
    display: "flex",
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
            placeholder="Paint room, fix doors..."
            type="text"
            styleType="leftRounded"
          >
            <CloseIcon></CloseIcon>
          </Input>
          <Input styleType="leftRounded">
            <LocationOnIcon />
          </Input>
          <Button>
            
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;


///////////////////////////////////////
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../components/Input";
import CloseIcon from "@material-ui/icons/LocationOn";
import Button from "components/Button";
import Grid from "@material-ui/core/Grid";
import VerticalCard from "components/cards/VerticalCard"
import clean_img from "assets/cleanning_img.jpeg"
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
    backgroundColor:"#F9F9F9"
  },

  test: {
    ...theme.typography.menu,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.test}>home page</h1>
      <Grid container>
        <Grid item lg={2}>
          <Input
            placeholder="Paint room, fix doors..."
            type="text"
            styleType="leftRounded"
          >
            <CloseIcon></CloseIcon>
          </Input>

          <Input placeholder="E-mail address..." type="text"></Input>

          <Input placeholder="Password..." type="password"></Input>
          <div style={{ padding: 20 }}>
            <Button variant="normal">See more</Button>
          </div>
          <div style={{ padding: 20 }}>
            <Button variant="outline">See more</Button>
          </div>
          <div style={{ padding: 20 }}>
            <Button variant="group">See more</Button>
          </div>
          <div style={{ padding: 20 }}>
            <Button variant="normal" size="md" rightRounded>
              See more
            </Button>
          </div>
          <div style={{ padding: 20 }}>
            <Button variant="group" size="lg" active>
              See more
            </Button>
          </div>
        </Grid>
        <Grid item lg={10}>
          <Grid container>
            <Grid item lg={3} style={{padding:6}}>
              <VerticalCard img={clean_img}/>
            </Grid>
            <Grid item lg={3} style={{padding:6}}>
              <VerticalCard img={clean_img}/>
            </Grid>
            <Grid item lg={3} style={{padding:6}}>
              <VerticalCard img={clean_img}/>
            </Grid>
            <Grid item lg={3} style={{padding:6}}>
              <VerticalCard img={clean_img}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;



//
next po mesin 
1. Settings ne profile,
2.me ba per mobile krej faqet
3.me ba login signup 
4.me i marr data per user

