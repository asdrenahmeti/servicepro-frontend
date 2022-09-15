import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "components/Input";
import Button from "components/Button";
import Grid from "@material-ui/core/Grid";
import VerticalCard from "components/cards/VerticalCard";
import clean_img from "assets/cleanning_img.jpeg";
import intro from "assets/home/intro.png";
import hw1 from "assets/home/how_works1.png";
import hw2 from "assets/home/how_works2.png";
import hw3 from "assets/home/how_works3.png";
import become_pro from "assets/home/become_pro.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BuildIcon from "@material-ui/icons/Build";
import { NavLink } from "react-router-dom";
import publicServices from "services/publicServices";
import { useContext } from "react";
import { AppContext } from "AppContext";
import Loader from "components/Loader";
import Select from "components/Select";
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
    padding: "0px 80px",
    backgroundColor: "white",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 100%",
    backgroundPosition: "right",
    backgroundImage: "url(" + intro + ")",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 500,
  },
  featured: {
    padding: "0px 80px",
  },
  featuredHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0px",
  },
  featuredTitle: {
    ...theme.typography.sectionTitle,
    margin: "60px 0px 24px 0px ",
  },
  featuredContent: {},
  featuredItem: {
    padding: "0px 8px 0px 8px",
    marginBottom: 20,
  },
  searchPart: {
    padding: "30px 0px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  howItWorksItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: 20,
    "& img": {
      height: 100,
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
  startEarning: {
    marginBottom: 40,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 100%",
    backgroundPosition: "right",
    backgroundImage: "url(" + become_pro + ")",
  },
  "@media screen and (max-width: 800px)": {
    jumbotron: {
      backgroundImage: "none",
      padding: "0px 10px",
      minHeight: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    featured: {
      padding: "0px 10px",
    },
  },
}));
const Home = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [inCategory, setInCategory] = useState("");
  const [inLocation, setInLocation] = useState("");
  const [services, setservices] = useState([]);
  const [activeService, setactiveService] = useState(null);
  const {
    language: { home },
    isLoading,
    changeLoading,
  } = context;
  useEffect(() => {
    changeLoading(true);
    publicServices
      .topServices()
      .then((res) => {
        const s = res.data.map((item, index) => {
          item.cmps = item.users.map((u) => {
            return u;
          });
          if (index == 0) {
            item.isActive = true;
          } else {
            item.isActive = false;
          }
          return item;
        });
        if (s.length > 0) {
          setservices(s);
          setactiveService(s[0]);
        }
        changeLoading(false);
      })
      .catch((err) => {
        setservices([]);
        changeLoading(false);
      });
  }, []);
  const setActieService = (id) => {
    let activeitem = null;
    const _services = services.map((item) => {
      if (item.id == id) {
        activeitem = item;
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
    if (activeitem) {
      setactiveService(activeitem);
      setservices(_services);
    }
  };

  return (
    <div className={classes.root}>
      <Loader show={isLoading} />
      <div className={classes.jumbotron}>
        <h1>
          {home.p1.txt1}{" "}
          <span>
            {" "}
            <i>{home.p1.txt2}</i>
          </span>{" "}
          <br /> {home.p1.txt3}
        </h1>
        <div className={classes.searchPart}>
          <div style={{ minWidth: 300 }}>
            <Select
              placeholder={home.p1.plc1}
              isMulti={true}
              type="home"
              onSelectChange={(e) => {
                setInCategory(
                  e.map((v) => {
                    return v.value;
                  })
                );
              }}
              options={[
                { value: "1", label: "Carpentry" },
                { value: "2", label: "Gardering" },
                { value: "3", label: "Electronics" },
                { value: "4", label: "Computer services" },
              ]}
            />
          </div>

          {/* <Input
            styleType="leftRounded"
            placeholder={home.p1.plc1}
            type="text"
            value={inCategory}
            onChange={(e) => {
              setInCategory(e.target.value);
            }}
          >
            <BuildIcon />
          </Input> */}
          <div style={{ width: 20 }}></div>
          <div style={{ minWidth: 300 }}>
            <Select
              placeholder={home.p1.plc2}
              isMulti={true}
              type="home"
              onSelectChange={(e) => {
                setInLocation(
                  e.map((v) => {
                    return v.value;
                  })
                );
              }}
              options={[
                { value: "1", label: "Carpentry" },
                { value: "2", label: "Gardering" },
                { value: "3", label: "Electronics" },
                { value: "4", label: "Computer services" },
              ]}
            />
          </div>

          {/* <Input
            styleType="leftRounded"
            placeholder={home.p1.plc2}
            type="text"
            value={inLocation}
            onChange={(e) => {
              setInLocation(e.target.value);
            }}
            classes={{ root: classes.rootInput }}
          >
            <LocationOnIcon />
          </Input> */}
          <div>
            <NavLink
              to={"/search?" + "cat=" + inCategory + "&" + "loc=" + inLocation}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="normal"
                size="md"
                classes={{ root: classes.rootSrchBtn }}
              >
                {home.p1.btn}
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <Grid container className={classes.featured} justify="center">
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.featuredHeader}
        >
          <h1 className={classes.featuredTitle}>{home.p2.title}</h1>
          <NavLink to="/search" className={classes.explore}>
            {home.p2.link}
          </NavLink>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          {services.length > 0 && (
            <Grid container justify="center">
              <Grid item lg={3} md={3} sm={10} xs={10}>
                {services.map((item) => {
                  return (
                    <Button
                      variant={"group"}
                      size="lg"
                      style={{ width: "90%", marginBottom: 10 }}
                      active={item.isActive}
                      key={item.id}
                      onClick={() => {
                        setActieService(item.id);
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Grid container justify="center">
                  {activeService &&
                    activeService.cmps.map((item) => {
                      return (
                        <Grid
                          item
                          key={item.user_service.id}
                          lg={4}
                          md={4}
                          sm={11}
                          xs={11}
                          className={classes.featuredItem}
                        >
                          <VerticalCard
                            id={item.user_service.userId}
                            img={clean_img}
                            title={item.name}
                            name={item.phone}
                            location={item.city}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h1 className={classes.featuredTitle}>{home.p3.title}</h1>
          <Grid container justify="space-around">
            <Grid
              item
              lg={3}
              md={3}
              sm={7}
              xs={11}
              className={classes.howItWorksItem}
            >
              <img src={hw1} />
              <p className={classes.howItWorksItemDesc}>{home.p3.txt1}</p>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={7}
              xs={11}
              className={classes.howItWorksItem}
            >
              <img src={hw2} />
              <p className={classes.howItWorksItemDesc}>{home.p3.txt2}</p>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={7}
              xs={11}
              className={classes.howItWorksItem}
            >
              <img src={hw3} />
              <p className={classes.howItWorksItemDesc}>{home.p3.txt3}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <NavLink to="/howitworks" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="lg">
              {home.p3.btn}
            </Button>
          </NavLink>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.startEarning}
        >
          <Grid container justify="space-between">
            <Grid item lg={6} md={6} sm={10} xs={12}>
              <h1 className={classes.featuredTitle} style={{ marginBottom: 0 }}>
                {home.p4.title}
              </h1>
              <p
                className={classes.howItWorksItemDesc}
                style={{ textAlign: "left", padding: 0 }}
              >
                {home.p4.txt1}
              </p>
              <div style={{ marginTop: 40 }}>
                <Button variant="normal" size="md">
                  {home.p4.btn}
                </Button>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={10} xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
