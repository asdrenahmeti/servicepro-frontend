import React from "react";
import { withStyles } from "@material-ui/core";
import en from "i18n/en";
import al from "i18n/al";
export const AppContext = React.createContext({
  language: en,
  test: ":asd",
  languageChange: () => {},
});
const styles = {};
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: en,
      test: "asdasd",
    };
  }
  // componentDidMount() {}
  languageChange = (to) => {
    switch (to) {
      case "en":
        this.setState({ language: en });
        break;
      case "al":
        this.setState({ language: al });
        break;
      case "mk":
        this.setState({ language: mk });
        break;
    }
  };
  changeTest = () => {
    this.setState({ test: "hamdi" });
    
  };
  render() {
    let { children } = this.props;
    let { language, test } = this.state;
    return (
      <AppContext.Provider
        value={{
          language,
          test,
          changeTest: () => {
            this.changeTest();
          },
          languageChange: (to) => {
            this.languageChange(to);
          },
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}
export default withStyles(styles)(Page);
