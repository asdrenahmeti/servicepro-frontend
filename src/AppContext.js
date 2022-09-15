import React from "react";
import { withStyles } from "@material-ui/core";
import en from "i18n/en";
import al from "i18n/al";
import userServices from "services/userServices";
export const AppContext = React.createContext({
  language: en,
  languageChange: () => {},
  user: null,
  registerUser: () => {},

  getProjects: () => {},
  editProject: () => {},
  deleteProject: () => {},
  addProject: () => {},

  getRequests: () => {},
  acceptRequest: () => {},
  declineRequest: () => {},
  deleteRequest: () => {},

  getReviews: () => {},
  projects: [],
  requests: [],
  reviews: [],
  apiErrors: [],
  isLoading: false,
  setLoader: () => {},
  // files
});
const styles = {};
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: en,
      user: null,
      projects: [],
      requests: [],
      reviews: [],
      apiErrors: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    let user = localStorage.getItem("sp_user");
    if (user) {
      this.setState({ user: user });
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
  registerUser = (user) => {
    this.setState({ user: user });
  };

  
  getProjects = () => {
    userServices
      .getProjects()
      .then((res) => {
        console.log("projects..:", res);
        this.setState({ projects: res.data });
      })
      .catch((err) => {
        console.log("err..:", err);
      });
  };
  addProject = (project) => {
    let { projects } = this.state;
    this.setState({ projects: [project, ...projects] });
  };
  editProject = (data, project_id) => {
    userServices
      .editProject(data, project_id)
      .then((res) => {
        this.setState({ requests: res.data });
      })
      .catch((err) => {});
  };

  deleteProject = (id) => {
    let { projects } = this.state;
    let _projects = projects.filter((item) => {
      return item.id != id;
    });
    this.setState({ projects: _projects });
  };

  getRequests = () => {
    userServices
      .getRequests()
      .then((res) => {
        this.setState({ requests: res.data });
      })
      .catch((err) => {});
  };
  acceptRequest = (id) => {
    const { requests } = this.state;
    userServices.acceptRequest(id).then((res) => {
      let _requests = requests.map((item) => {
        if (item.id == res.data.id) {
          item.status = "DONE";
        }
        return item;
      });
      this.setState({ requests: _requests });
    });
  };

  declineRequest = (id) => {
    const { requests } = this.state;
    userServices.declineRequest(id).then((res) => {
      let _requests = requests.map((item) => {
        if (item.id == res.data.id) {
          item.status = "DECLINE";
        }
        return item;
      });
      this.setState({ requests: _requests });
    });
  };
  changeLoading = (val) => {
    this.setState({ isLoading: !!val });
  };
  deleteRequest = (id) => {
    const { requests } = this.state;
  };
  render() {
    let { children } = this.props;
    let { language, user, projects, requests, reviews, isLoading } = this.state;
    return (
      <AppContext.Provider
        value={{
          language,
          projects,
          requests,
          reviews,
          user,
          isLoading,
          languageChange: (to) => {
            this.languageChange(to);
          },
          registerUser: (user) => {
            this.registerUser(user);
          },
          getProjects: () => {
            this.getProjects();
          },
          deleteProject: (id) => {
            this.deleteProject(id);
          },
          editProject: (data, id) => {
            this.editProject(data, id);
          },
          getRequests: () => {
            this.getRequests();
          },
          acceptRequest: (id) => {
            this.acceptRequest(id);
          },
          declineRequest: (id) => {
            this.declineRequest(id);
          },
          deleteRequest: (id) => {
            this.deleteRequest();
          },
          addProject: (data) => {
            this.addProject(data);
          },
          changeLoading: (val) => {
            this.changeLoading(val);
          },
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}
export default withStyles(styles)(Page);
