import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("sp_user") || null;
  const usrRole = user && JSON.parse(user).role || null;
  return (
    <Route
      {...rest}
      render={(props) =>
        usrRole == "COMPANY" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
export default PrivateRoute;
