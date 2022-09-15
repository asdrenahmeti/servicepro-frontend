import React from "react";
import PropTypes from "prop-types";
import { fade } from "@material-ui/core/styles/colorManipulator";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import LoadingIndicatorGif from "assets/loader.gif";

const styles = {
  root: {
    zIndex: 50,
    width: "100%",
    height: "100%",
    background: fade("#fff", 0.9),
    backdropFilter: "blur(3px)",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexFlow: "row wrap",
    pointerEvents: "none",
  },
  indicatorStyle: {
    marginBottom: 8,
    maxWidth: 206,
    boxShadow: "none",
  },
  indicatorStyleNoMsg: {
    marginBottom: 0,
  },
  messageStyle: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    margin: 0,
    fontSize:16,
    fontFamily:"inter"
  },
};

/**
 * Renders a loading indicator within a parent
 */
export const LoadingIndicator = (props) => {
  const { show, isInside, message, style, className: cls, classes } = props;

  return (
    <div
      className={classNames(classes.root, cls)}
      style={{
        display: show ? "flex" : "none",
        position: isInside ? "absolute" : "fixed",
        ...style,
      }}
    >
      <img
        className={classNames(
          classes.indicatorStyle,
          !message && classes.indicatorStyleNoMsg
        )}
        draggable={false}
        src={LoadingIndicatorGif}
        alt="loadingIndicator"
      />
      {message && <p className={classes.messageStyle}>{message}</p>}
    </div>
  );
};

/**
 * propTypes
 * @type {object}
 * @property {boolean} show - is shown
 * @property {boolean} isInside - display inside a parent or display in a fixed position
 * @property {string} message - if set a message will be displayed together with loading indicator
 */
LoadingIndicator.propTypes = {
  // provided by parent
  show: PropTypes.bool,
  isInside: PropTypes.bool,
  message: PropTypes.string,
  // provided by redux store
  strings: PropTypes.object,
};

LoadingIndicator.defaultProps = {
  isInside: true,
};

export default withStyles(styles)(LoadingIndicator);
