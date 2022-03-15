import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
import TermsContent from "pages/terms/TermsContent";

const termItems = [
  {
    id: "1",
    link: "Accepting the terms",
    title: "Terms and conditions",
    date: "Updated at April 2020",
    subTitle: "Accepting the terms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sollicitudin molestie commodo. Ut sagittis, purus et tempus congue, magna augue ultrices nisl, vel consequat leo massa a augue. Aenean a orci quis nunc lacinia pretium sed ac nunc. Proin tristique erat eget facilisis porttitor. Fusce sed velit vel nisi mollis pretium. Sed et eleifend ante, ut consequat purus",
  },
  {
    id: "2",
    link: "Changes to terms",
    title: "Changes to terms",
    date: "Updated at April 2020",
    subTitle: "Changes to terms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sollicitudin molestie commodo. Ut sagittis, purus et tempus congue, magna augue ultrices nisl, vel consequat leo massa a augue. Aenean a orci quis nunc lacinia pretium sed ac nunc. Proin tristique erat eget facilisis porttitor. Fusce sed velit vel nisi mollis pretium. Sed et eleifend ante, ut consequat purus",
  },
  {
    id: "3",
    link: "Accepting the terms",
    title: "Terms and conditions",
    date: "Updated at April 2020",
    subTitle: "Accepting the terms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sollicitudin molestie commodo. Ut sagittis, purus et tempus congue, magna augue ultrices nisl, vel consequat leo massa a augue. Aenean a orci quis nunc lacinia pretium sed ac nunc. Proin tristique erat eget facilisis porttitor. Fusce sed velit vel nisi mollis pretium. Sed et eleifend ante, ut consequat purus",
  },
  {
    id: "4",
    link: "Changes to terms",
    title: "Changes to terms",
    date: "Updated at April 2020",
    subTitle: "Changes to terms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sollicitudin molestie commodo. Ut sagittis, purus et tempus congue, magna augue ultrices nisl, vel consequat leo massa a augue. Aenean a orci quis nunc lacinia pretium sed ac nunc. Proin tristique erat eget facilisis porttitor. Fusce sed velit vel nisi mollis pretium. Sed et eleifend ante, ut consequat purus",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "24px 80px",
  },
  title: {
    ...theme.typography.sectionTitle,
    fontFamily: theme.fonts.inter,
  },
  subTitle: {
    ...theme.typography.description,
    fontFamily: theme.fonts.openSans,
  },
  data: {
    marginTop: 20,
    borderRadius: 15,
    width: "100%",
    marginBottom: 20,
    minHeight:"50vh"
  },
  leftSide: {
    borderRadius: "15px 0 0 15px",
    backgroundColor: theme.colors.secondary,
    padding: 20,
    display: "flex",
    justifyContent: "center",
  },
  rightSide: {
    borderRadius: "0 15px 15px 0",
    borderTop: "solid #E5E5E5 2px",
    borderRight: "solid #E5E5E5 2px",
    borderBottom: "solid #E5E5E5 2px",
  },
  link: {
    fontFamily: theme.fonts.inter,
    fontSize: "2 rem",
    margin: "20px 4px",
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
    paddingBottom:4
  },
  activeItem: {
    borderBottom: "solid #F5961F 2px",
  },
}));
function Terms(props) {
  const [activeItem, setActive] = useState(termItems[0]);
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={12}>
          <h1 className={classes.title}>Terms and conditions</h1>
          <p className={classes.subTitle}>
            General Data Protection Regulation (GDPR) Update
          </p>
        </Grid>
      </Grid>
      <Grid container className={classes.data}>
        <Grid item lg={3} md={3} className={classes.leftSide}>
          <div>
            {termItems.map((item) => {
              return (
                <h1
                  onClick={() => {
                    setActive(item);
                  }}
                  key={item.link}
                  className={classnames(
                    classes.link,
                    item.id == activeItem.id && classes.activeItem
                  )}
                >
                  {item.link}
                </h1>
              );
            })}
          </div>
        </Grid>
        <Grid item lg={9} md={9} className={classes.rightSide}>
          {activeItem && (
            <TermsContent
              title={activeItem.title}
              date={activeItem.date}
              subtitle={activeItem.subTitle}
              description={activeItem.description}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
export default Terms;
