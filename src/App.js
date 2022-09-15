import PrivateRoutes from "utils/private_routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import React from "react";
import "App.css";
import AppContext from "AppContext";
import Factory from "anatomy/Factory";
import ProfileFactory from "anatomy/ProfileFactory";
import ServicerFactory from "anatomy/ServicerFactory";
import { ThemeProvider } from "@material-ui/core";
import theme from "styles/theme";
import Projects from "pages/profile/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppContext>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Switch>
              <PrivateRoutes
                exact
                path="/profile/:page/:id"
                component={ProfileFactory}
              />
              <PrivateRoutes
                exact
                path="/profile/:page"
                component={ProfileFactory}
              />
              <PrivateRoutes exact path="/profile" component={ProfileFactory} />
              <Route
                exact
                path="/servicer/:u_id/projects/:p_id"
                component={ServicerFactory}
              />
              <Route path="/servicer/:u_id" component={ServicerFactory} />
              <Route path="/:page/:type" component={Factory} />
              <Route path="/:page" component={Factory} />
              <Route path="/" component={Factory} />
            </Switch>
          </ThemeProvider>
        </Router>
      </AppContext>
    );
  }
}
export default App;
