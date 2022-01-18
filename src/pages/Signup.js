import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "assets/logo.svg";
import bg from "assets/bg_imgs/login_bg.png";
import { NavLink } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";
import { MAX_FORM_WIDTH } from "Constants";
import userServices from "services/userServices";
import { useContext } from "react";
import { AppContext } from "AppContext";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    maxWidth: MAX_FORM_WIDTH,
    backgroundColor: "#F9F9F9",
  },
  imgCnt: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: "url(" + bg + ")",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    position: "relative",
    padding: "6% 2%",
    backgroundColor: "#F9F9F9",
  },
  errors: {
    color: "red",
    fontSize: 12,
    paddingLeft: 10,
  },
  linkCnt: {
    position: "absolute",
    right: 40,
    top: 40,
    "& a": {
      textDecoration: "none",
      color: theme.colors.secondary,
      fontSize: theme.fontSizes.sm,
      fontFamily: theme.fonts.inter,
      "& span": {
        fontWeight: "bold",
      },
    },
  },
  inputCnt: {
    padding: "0rem 1.2rem",
  },
  switchBtnV1: {
    borderRadius: 40,
    backgroundColor: theme.colors.secondary,
    color: "white",
    width: "70%",
    "&:active": {
      transform: "translateY(0px)",
    },
  },
  switchBtnV2: {
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    color: "white",
    width: "70%",
    "&:active": {
      transform: "translateY(0px)",
    },
  },
  switchBtnCl1: {
    backgroundColor: theme.colors.primary,
    borderRadius: 40,
    margin: 16,
    width: 120,
  },

  switchBtnCl2: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 40,
    margin: 16,
    width: 120,
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    width: "80%",
    margin: "0px 0px 4rem 0px",
  },
  welcome_back: {
    fontFamily: theme.fonts.inter,
    fontSize: theme.fontSizes.xl,
    color: theme.colors.secondary,
    "& span": {
      color: theme.colors.primary,
    },
  },
  signIn: {
    fontFamily: theme.fonts.inter,
    fontSize: theme.fontSizes.sm,
    color: "#8A8C8D",
    margin: "1rem 0px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  forgotPass: {
    fontFamily: theme.fonts.inter,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.secondary,
    margin: "1rem 0px",
    fontWeight: "600",
    textDecoration: "none",
    paddingLeft: "1.2rem",
    "& span": {
      color: theme.colors.primary,
    },
  },
  rootInput: {
    width: "100%",
    padding: "2.2rem",
  },
  rootBtn: {
    width: "100%",
    marginTop: "1.8rem",
    marginBottom: "1.8rem",
  },

  "@media screen and (max-width: 800px)": {
    imgCnt: {
      display: "none",
    },
    linkCnt: {
      top: 20,
      right: 20,
    },
    content: {
      padding: "10%",
    },
    inputCnt: {
      padding: "0rem 0.2rem",
    },
  },
}));
const usrType = {
  servicer: "SERVICER",
  client: "GUEST",
};

const Signup = (props) => {
  const classes = useStyles(props);
  const [userType, setUserType] = useState(usrType.servicer);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState([]);

  const context = useContext(AppContext);
  const {
    language: { login },
    registerUser,
  } = context;
  const validateInputs = () => {
    let _errors = [];
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      _errors.push("Incorrect email format!");
    }
    if (password.length < 6) {
      _errors.push("Password must be at least 6 characters!");
    }
    if (name.length == 0) {
      _errors.push("Name is required!");
    }
    if (password !== confirmPassword) {
      _errors.push("Password and confirm password don't match");
    }
    if (_errors.length > 0) {
      setErrors(_errors);
      return false;
    }
    return true;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    let data = {
      name: name,
      username: name,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
      phone: phone,
      role: userType,
      city: "",
      zip_code: "",
      country: "",
      adress: address,
    };
    userServices
      .register(data)
      .then((user_data) => {
        console.log(user_data.token);
        localStorage.setItem("sp_user", JSON.stringify(user_data.token));
        const { history } = props;
        registerUser(user_data.user);
        history.push("/profile");
      })
      .catch((err) => {
        console.log("error", err);
        setErrors([err.message]);
      });
  };
  const onEmailChange = (e) => {
    setErrors([]);
    setEmail(e.target.value);
  };

  const onNamechange = (e) => {
    setErrors([]);
    setName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setErrors([]);
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    setErrors([]);
    setConfirmPassword(e.target.value);
  };

  const onPhoneChange = (e) => {
    setErrors([]);
    setPhone(e.target.value);
  };

  const onAddressChange = (e) => {
    setErrors([]);
    setAddress(e.target.value);
  };

  const changeUserType = () => {
    if (userType == usrType.servicer) {
      setUserType(usrType.client);
    } else {
      setUserType(usrType.servicer);
    }
  };
  console.log("errors..:", errors);
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item lg={5} md={4} className={classes.imgCnt}></Grid>
      <Grid item lg={7} md={8} sm={12} xs={12} className={classes.content}>
        <div className={classes.linkCnt}>
          <NavLink to="/home">
            back to <span>home</span>
          </NavLink>
        </div>
        <Grid container justify="center">
          <Grid item lg={7} md={8}>
            <img className={classes.logo} src={logo} />
          </Grid>
          <Grid item lg={8} md={10}>
            <h1 className={classes.welcome_back}>
              Welcome to <span>Service Pro</span>
            </h1>
            <p className={classes.signIn}>Create your account below</p>
          </Grid>
        </Grid>
        {(userType == usrType.servicer && (
          <div className={classes.switchBtnCl1}>
            <Button
              classes={{ root: classes.switchBtnV1 }}
              onClick={changeUserType}
            >
              Servicer
            </Button>
          </div>
        )) || (
          <div className={classes.switchBtnCl2}>
            <Button
              classes={{ root: classes.switchBtnV2 }}
              onClick={changeUserType}
            >
              Client
            </Button>
          </div>
        )}
        <form className={classes.form} onSubmit={onSubmit}>
          <div>
            {errors.map((item) => {
              return (
                <span className={classes.errors}>
                  {item}
                  <br></br>
                </span>
              );
            })}
          </div>

          {(userType == usrType.servicer && (
            <Grid container>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Person or company name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={onNamechange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Email address"
                  name="email"
                  type="text"
                  value={email}
                  onChange={onEmailChange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onPasswordChange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={onConfirmPasswordChange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Phone number"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={onPhoneChange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Address"
                  name="address"
                  type="text"
                  value={address}
                  onChange={onAddressChange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  // placeholder="Select up three services"
                  placeholder="Main service"
                  type="select"
                />
              </Grid>
            </Grid>
          )) || (
            <Grid container>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Your name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={onNamechange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Email address"
                  name="email"
                  type="text"
                  value={email}
                  onChange={onEmailChange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onPasswordChange}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputCnt}
              >
                <Input
                  classes={{ root: classes.rootInput }}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={onConfirmPasswordChange}
                />
              </Grid>
            </Grid>
          )}

          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className={classes.inputCnt}
            >
              <Button
                classes={{ root: classes.rootBtn }}
                variant="normal"
                size="md"
                type="submit"
              >
                Sign up
              </Button>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className={classes.inputCnt}
            >
              <Button
                classes={{ root: classes.rootBtn }}
                variant="normal"
                size="md"
              >
                Continue with google
              </Button>
            </Grid>
          </Grid>
        </form>
        <NavLink to="/login" className={classes.forgotPass}>
          Have an account? <span>Login</span>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Signup;
