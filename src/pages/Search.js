import Checkbox from "@material-ui/core/Checkbox";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import Input from "components/Input";
import Button from "components/Button";
import VerticalCard from "components/cards/VerticalCard";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import classnames from "classnames";
import clean_img from "assets/cleanning_img.jpeg";
import { useLocation } from "react-router-dom";
import publicServices from "services/publicServices";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    // background:"white"
  },
  fPart: {
    height: "100%",
    overflowY: "auto",
    width: 360,
    padding: "20px 20px 20px 80px",
  },
  title: {
    ...theme.typography.cardTitle("lg"),
    margin: "20px 10px ",
  },
  filterHeader: {
    "& h1": {
      ...theme.typography.cardTitle("lg"),
      margin: "0px 20px 0px 0px",
    },
    margin: "20px 10px 10px 0px",
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    color: theme.colors.primary,
    fontSize: 30,
    cursor: "pointer",
    backgroundColor:"#E5E5E5",
    padding:'2px 10px'
  },
  cardCnt: {
    padding: 10,
  },
  categoryCnt: {
    overflowY: "auto",
    padding: 10,
  },
  sPart: {
    height: "100%",
    overflowY: "auto",
    padding: "20px 80px 20px 40px",
    flex: 1,
  },
  formLabelRoot: {
    ...theme.typography.cardData("md"),
  },
  rootCheckbox: {
    width: 40,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    border: "solid #C4C4C4 3px",
  },
  checkedIcon: {
    background: theme.colors.primary,
  },
}));
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Search = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [expCategory, setExpCategory] = useState(true);
  const [expCity, setExpCity] = useState(true);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  let query = useQuery();
  const category = query.get("cat");
  const location = query.get("loc");
  useEffect(() => {
    let _location = location ? location.split(",") : [];
    let _category = category ? category.split(",") : [];
    let data = {
      cities: _location,
      services: _category,
    };
    publicServices
      .searchUsers(JSON.stringify(data))
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("error..:", err);
      });
    publicServices.getServices().then((items) => {
      console.log("services..:", items.data);
      setServices(items.data);
    });
  }, []);
  console.log("services..:", users);
  return (
    <div className={classes.root}>
      <div className={classes.fPart}>
        <div
          className={classes.filterHeader}
          onClick={() => {
            setExpCategory(!expCategory);
          }}
        >
          <h1>Category</h1>
          {(expCategory && <ExpandMoreIcon fontSize="inherit" />) || (
            <ExpandLessIcon fontSize="inherit" />
          )}
        </div>

        <div
          className={classes.categoryCnt}
          style={{ display: !expCategory && "none" }}
        >
          {services.map((item) => {
            return (
              <div>
                <FormControlLabel
                  classes={{ label: classes.formLabelRoot }}
                  control={
                    <Checkbox
                      onClick={() => {
                        setServices(
                          services.map((i) => {
                            if (i.id == item.id) {
                              i.status = !i.status;
                            }
                            return i;
                          })
                        );
                      }}
                      checked={item.status}
                      icon={<span className={classes.icon}></span>}
                      checkedIcon={
                        <span
                          className={classnames(
                            classes.icon,
                            classes.checkedIcon
                          )}
                        ></span>
                      }
                    />
                  }
                  label={item.name}
                />
              </div>
            );
          })}
        </div>
        <div
          className={classes.filterHeader}
          onClick={() => {
            setExpCity(!expCity);
          }}
        >
          <h1>City</h1>
          {(expCity && <ExpandMoreIcon fontSize="inherit" />) || (
            <ExpandLessIcon fontSize="inherit" />
          )}
        </div>

        <div
          className={classes.categoryCnt}
          style={{ display: !expCity && "none" }}
        >
          {users.map((item) => {
            return (
              <div>
                <FormControlLabel
                  classes={{ label: classes.formLabelRoot }}
                  control={
                    <Checkbox
                      checked={item % 3 == 0}
                      icon={<span className={classes.icon}></span>}
                      checkedIcon={
                        <span
                          className={classnames(
                            classes.icon,
                            classes.checkedIcon
                          )}
                        ></span>
                      }
                    />
                  }
                  label="Primary"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.sPart}>
        <Grid container>
          <Grid item lg={12}>
            <h1 className={classes.title}>Servicers</h1>
          </Grid>
          {users.map((item) => {
            return (
              <Grid key={item} item lg={3} className={classes.cardCnt}>
                <VerticalCard
                  title={item.user.name}
                  name={item.user.phone}
                  location={item.user.city}
                  reviews={14}
                  img={clean_img}
                  id={item.user.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Search;
