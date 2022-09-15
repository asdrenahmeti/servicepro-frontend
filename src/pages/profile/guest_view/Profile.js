import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { AppContext } from "AppContext";
import LeftSide from "pages/profile/guest_view/LeftSide";
import RightSide from "pages/profile/guest_view/RightSide";
import ContactServicerModal from "components/modals/ContactServicerModal";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px 80px",
    backgroundColor: "#F9F9F9",
    position: "relative",
  },
  title: {
    ...theme.typography.cardTitle("lg"),
    margin: 20,
    textAlign: "center",
  },
}));

const Profile = (props) => {
  const classes = useStyles(props);
  const context = useContext(AppContext);
  const [contactModal, setContactModal] = useState(false);
  const { children,u_id } = props;
  return (
    <div className={classes.root}>
      <ContactServicerModal
        u_id={u_id}
        open={contactModal}
        handleClose={() => {
          setContactModal(false);
        }}
      />
      <Grid container justify="center">
        <Grid item lg={3}>
          <LeftSide
            u_id={u_id}
            contactModal={() => {
              setContactModal(true);
            }}
          />
        </Grid>
        <Grid item lg={9}>
          <RightSide>{children}</RightSide>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
