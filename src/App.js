import PrivateRoutes from "utils/private_routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import React from "react";
import "App.css";
import AppContext from "AppContext";
import Factory from "anatomy/Factory";
import { ThemeProvider } from "@material-ui/core";
import theme from "styles/theme";
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
