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
import Select from "components/Select";
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
  servicer: "COMPANY",
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
  const [services, setServices] = useState([]);
  const context = useContext(AppContext);
  const {
    language: { register },
    registerUser,
  } = context;
  const validateInputs = () => {
    let _errors = [];
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      _errors.push(register.errors.email);
    }
    if (password.length < 6) {
      _errors.push(register.errors.shortPass);
    }
    if (name.length == 0) {
      _errors.push(register.errors.name);
    }
    if (password !== confirmPassword) {
      _errors.push(register.errors.passNotMatch);
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
        let user = {
          token: user_data.token,
          email: user_data.user.email,
          id: user_data.user.id,
          username: user_data.user.username,
          role: user_data.user.role,
        };
        localStorage.setItem("sp_user", JSON.stringify(user));
        const { history } = props;
        registerUser(user_data.user);
        if (user.role == "COMPANY") history.push("/profile");
        else history.push("/");
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
  const onSelectChange = (e) => {
    console.log("select event..:", e);
  };
  const changeUserType = () => {
    if (userType == usrType.servicer) {
      setUserType(usrType.client);
    } else {
      setUserType(usrType.servicer);
    }
  };
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item lg={5} md={4} className={classes.imgCnt}></Grid>
      <Grid item lg={7} md={8} sm={12} xs={12} className={classes.content}>
        <div className={classes.linkCnt}>
          <NavLink to="/home">
            {register.home_link1} <span>{register.home_link2}</span>
          </NavLink>
        </div>
        <Grid container justify="center">
          <Grid item lg={7} md={8}>
            <img className={classes.logo} src={logo} />
          </Grid>
          <Grid item lg={8} md={10}>
            <h1 className={classes.welcome_back}>
              {register.title1}
              <span>{register.title2}</span>
            </h1>
            <p className={classes.signIn}>{register.subTitle}</p>
          </Grid>
        </Grid>
        {(userType == usrType.servicer && (
          <div className={classes.switchBtnCl1}>
            <Button
              classes={{ root: classes.switchBtnV1 }}
              onClick={changeUserType}
            >
              {register.switchBtn1}
            </Button>
          </div>
        )) || (
          <div className={classes.switchBtnCl2}>
            <Button
              classes={{ root: classes.switchBtnV2 }}
              onClick={changeUserType}
            >
              {register.switchBtn2}
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
                  placeholder={register.inputPlcs.name}
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
                  placeholder={register.inputPlcs.email}
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
                  placeholder={register.inputPlcs.password}
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
                  placeholder={register.inputPlcs.confirm_pass}
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
                  placeholder={register.inputPlcs.phone}
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
                  placeholder={register.inputPlcs.adress}
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
                
                <Select
                  placeholder={register.inputPlcs.services}
                  isMulti={true}
                  onSelectChange={onSelectChange}
                  options={[
                    { value: "1", label: "Carpentry" },
                    { value: "2", label: "Gardering" },
                    { value: "3", label: "Electronics" },
                    { value: "4", label: "Computer services" },
                  ]}
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
                  placeholder={register.inputPlcs.c_name}
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
                  placeholder={register.inputPlcs.email}
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
                  placeholder={register.inputPlcs.password}
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
                  placeholder={register.inputPlcs.confirm_pass}
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
                {register.signupBtn}
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
                {register.googleSignup}
              </Button>
            </Grid>
          </Grid>
        </form>
        <NavLink to="/login" className={classes.forgotPass}>
          {register.haveAcc1} <span>{register.loginTxt}</span>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Signup;
