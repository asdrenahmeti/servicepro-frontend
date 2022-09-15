
 const usrType = {
    servicer: "SERVICER",
    client: "GUEST",
  };
 
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

  const [userType, setUserType] = useState(usrType.servicer);
  const changeUserType = () => {
    if (userType == usrType.servicer) {
      setUserType(usrType.client);
    } else {
      setUserType(usrType.servicer);
    }
  };

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