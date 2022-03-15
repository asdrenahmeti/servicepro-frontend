import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import { withStyles } from "@material-ui/core";
const styles = {
  paper: {
    display: "flex",
    // boxShadow: "4px 5px 6px black",
    boxShadow: "0px 0px 6px black",
    borderRadius: 4,
    padding:8,
    justifyContent: "center",
    background: "#F9F9F9",
    position:"relative"
  },
  rootContent: {
    // background: "#F9F9F9",
    margin: 0,
  },
  "@media screen and (max-width: 960px)": {
    paper: {
      boxShadow: "3px 4px 5px black",
      borderRadius: 4,
      padding: 4,
      justifyContent: "center",
    },
  },
};

class RootModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { classes, open, handleClose, children, ...rest } = this.props;
    return (
      <Dialog
        {...rest}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{ paper: classes.paper, root: classes.rootContent }}
      >
        <DialogContent classes={{ root: classes.rootContent }}>
          {children}
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(RootModal);
