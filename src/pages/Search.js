import Checkbox from "@material-ui/core/Checkbox";
import React, { useState } from "react";
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
    margin:"20px 10px "
  },
  filterHeader: {
    "& h1": {
      ...theme.typography.cardTitle("lg"),
      margin: "0px 20px 0px 0px",
    },
    margin:"20px 10px 10px 0px",
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    color: theme.colors.primary,
    fontSize: 30,
    cursor: "pointer",
  },
  cardCnt: {
    padding: 10,
  },
  categoryCnt: {
    height: 300,
    overflowY: "auto",
    border:"solid 2px "+theme.colors.primary,
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
  let query = useQuery();
  const category=query.get('cat')
  const location=query.get('loc')
  console.log("location,,,:",location)
  console.log("category,,,:",category)
  return (
    <div className={classes.root}>
      <div className={classes.fPart}>
        <div
          className={classes.filterHeader}
          onClick={() => {
            setExpCategory(!expCategory);
          }}
        >
          <h1 >Category</h1>
          {(expCategory && <ExpandMoreIcon fontSize="inherit" />) || (
            <ExpandLessIcon fontSize="inherit" />
          )}
        </div>

        <div
          className={classes.categoryCnt}
          style={{ display: !expCategory && "none" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 3, 3, 3, 3, 3].map((item) => {
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
        <div
          className={classes.filterHeader}
          onClick={() => {
            setExpCategory(!expCategory);
          }}
        >
          <h1 >City</h1>
          {(expCategory && <ExpandMoreIcon fontSize="inherit" />) || (
            <ExpandLessIcon fontSize="inherit" />
          )}
        </div>

        <div
          className={classes.categoryCnt}
          style={{ display: !expCategory && "none" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 3, 3, 3, 3, 3].map((item) => {
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <Grid key={item} item lg={3} className={classes.cardCnt}>
                <VerticalCard  img={clean_img}/>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Search;
