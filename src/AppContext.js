import React from "react";
import { withStyles } from "@material-ui/core";
import en from "i18n/en";
import al from "i18n/al";
export const AppContext = React.createContext({
  language: en,
  languageChange: () => {},
  user:null,
  registerUser: () => {},
});
const styles = {};
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: en,
      user:null
    };
  }
  componentDidMount() {
    let user=localStorage.getItem('sp_user')
    if(user){
      this.setState({user:user})
    }
  }
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
  registerUser=(user)=>{
    this.setState({user:user})
  }
  render() {
    let { children } = this.props;
    let { language, user } = this.state;
    return (
      <AppContext.Provider
        value={{
          language,
          languageChange: (to) => {
            this.languageChange(to);
          },
          user,
          registerUser:(user)=>{
            this.registerUser(user)
          }
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}
export default withStyles(styles)(Page);
