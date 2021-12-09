import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CreateAccount from "assets/createaccount.svg";
import PayMonthly from "assets/paymonthly.svg";
import CompleteProfile from "assets/completeprofile.svg";
import ClientsFind from "assets/clientsfind.svg";
import GetJobs from "assets/getjobs.svg";
import Question from "components/Accordion/Question.js";
import FaqHero from "assets/faqhero.png";
import Button from "components/Button";
import AppStore from "assets/appstore.png";
import GooglePlay from "assets/googleplay.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9F9F9",
    padding: "2rem 5rem",
    "@media(max-width: 880px)": {
      padding: "0 1rem",
    },
  },

  pageTitle: {
    ...theme.typography.sectionTitle,
    marginBottom: "2rem",
  },

  contactDesc: {
    ...theme.typography.description,
    fontFamily: theme.fonts.openSans,
    lineHeight: "2.7rem",
    marginBottom: "2rem",
  },

  column: {
    display: "flex",
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fonts.openSans,
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    color: theme.colors.terciary,
    "& img": {
      width: "5rem",
      height: "5rem",
    },
  },

  columnTitle: {
    marginBottom: "1rem",
  },

  faq: {
    margin: "8rem 0",
  },

  hero: {
    height: "400px",
    backgroundImage: "url(" + FaqHero + ")",
    backgroundSize: "cover",
    fontFamily: theme.fonts.inter,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  heroTitle: {
    color: "white",
    fontSize: theme.fontSizes.xl,
    maxWidth: "350px",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "2rem",
  },

  black: {
    color: theme.colors.secondary,
    fontStyle: "italic",
  },

  stores: {
    marginTop: "30px",
    display: "flex",
    gap: "2rem",
  },
}));

const HowItWorks = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={12}>
            <h1 className={classes.pageTitle}> How Service Pro Works</h1>
            <p className={classes.contactDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
              pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt
              luctus venenatis. In ac ornare augue. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Duis sollicitudin molestie commodo. Ut sagittis, purus et tempus
              congue, magna augue ultrices nisl, vel consequat leo massa a
              augue. Aenean a orci quis nunc lacinia pretium sed ac nunc. Proin
              tristique erat eget facilisis porttitor. Fusce sed velit vel nisi
              mollis pretium. Sed et eleifend ante, ut consequat purus.
            </p>

            <h1 className={classes.pageTitle}> Get started as a Servicer</h1>
            <Grid container direction="row" spacing={5}>
              <Grid item md={4} sm={6}>
                <div className={classes.column}>
                  <img src={CreateAccount} />
                  <div className={classes.info}>
                    <h3 className={classes.columnTitle}>Create account</h3>
                    <p className={classes.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={4} sm={6}>
                <div className={classes.column}>
                  <img src={PayMonthly} />
                  <div className={classes.info}>
                    <h3 className={classes.columnTitle}>
                      Pay monthly subscription
                    </h3>
                    <p className={classes.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={4} sm={6}>
                <div className={classes.column}>
                  <img src={CompleteProfile} />
                  <div className={classes.info}>
                    <h3 className={classes.columnTitle}>Complete profile </h3>
                    <p className={classes.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={4} sm={6}>
                <div className={classes.column}>
                  <img src={CreateAccount} />
                  <div className={classes.info}>
                    <h3 className={classes.columnTitle}>Offer services</h3>
                    <p className={classes.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={4} sm={6}>
                <div className={classes.column}>
                  <img src={ClientsFind} />
                  <div className={classes.info}>
                    <h3 className={classes.columnTitle}>
                      Let clients find you
                    </h3>
                    <p className={classes.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item md={4} sm={6}>
                <div className={classes.column}>
                  <img src={GetJobs} />
                  <div className={classes.info}>
                    <h3 className={classes.columnTitle}>Get jobs</h3>
                    <p className={classes.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            className={classes.faq}
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={12} md={8} className={classes.questions}>
              <h1 className={classes.pageTitle}> Frequently Asked Questions</h1>
            </Grid>

            <Grid item xs={12} sm={12} md={8} className={classes.questions}>
              <Question
                title="Lorem ipsum sit dolor amet"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue."
              ></Question>
            </Grid>
            <Grid item xs={12} sm={12} md={8} className={classes.questions}>
              <Question
                title="Lorem ipsum sit dolor amet"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue."
              ></Question>
            </Grid>
            <Grid item xs={12} sm={12} md={8} className={classes.questions}>
              <Question
                title="Lorem ipsum sit dolor amet"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue."
              ></Question>
            </Grid>
            <Grid item xs={12} sm={12} md={8} className={classes.questions}>
              <Question
                title="Lorem ipsum sit dolor amet"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue."
              ></Question>
            </Grid>
            <Grid item xs={12} sm={12} md={8} className={classes.questions}>
              <Question
                title="Lorem ipsum sit dolor amet"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue. Pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pharetra tellus. Pellentesque eu mattis lectus. Cras tincidunt luctus venenatis. In ac ornare augue."
              ></Question>
            </Grid>
          </Grid>
        </Grid>

        <div className={classes.hero}>
          <h1 className={classes.heroTitle}>
            Let a <span className={classes.black}> professional </span> handyman
            take over
          </h1>
          <Button variant="normal">Get started</Button>
          <div className={classes.stores}>
            <img src={AppStore} />
            <img src={GooglePlay} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
