import PrivateRoutes from "utils/private_routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import React from "react";
import "App.css";
import AppContext from "AppContext";
import Test from "pages/Test";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppContext>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Test} />
          </Switch>
        </Router>
      </AppContext>
    );
  }
}
export default App;
