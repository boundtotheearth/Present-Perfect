import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Carousel from "react-material-ui-carousel";

import logo from "./PP_Logo_Full.svg"
import PrevRec from "./PP_Screens/Previous Recommendation.png"
import Socials from "./PP_Screens/Step 2 Filled.png"
import Tinder from "./PP_Screens/Tinder.png"
import RecDetail from "./PP_Screens/Recommendation detail.png"
import bgImage from "./bg.png"

import { Grid, SvgIcon, Stepper, Step, StepLabel, Box, Divider, Typography, TextField } from "@material-ui/core";
import { Facebook, FavoriteBorder, History, Instagram, Twitter } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  },
  actionButton: {
      width: "50%",
      minWidth: 200,
      height: 40
  },
  fullScreen: {
      minHeight: "100vh",
      minWidth: "100wh",
      paddingTop: 50,
      paddingBottom: 50,
      [theme.breakpoints.down("sm")]: {
          paddingLeft: 50,
          paddingRight: 50
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: 150,
        paddingRight: 150
      },
  },
  emailField: {
      width: "100%",
      minWidth: 200
  },
  emailButton: {
      width: "20%",
      minWidth: 200
  },
  bgImage: {
      objectFit: 'cover'
  },
  contentPoints: {
    minHeight: "50vh",
    maxWidth: "100wh",
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 50,
      paddingRight: 50
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 120,
      paddingRight: 120
    },
  },
  contentPoint: {
    padding: 20
  },
  bigIcon: {
    height: 50,
    width: 50
  },
  background: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'repeat-y'
  },
  border: {
    borderStyle: 'solid',
  },
  keyPointImage: {
    objectFit: 'contain',
    height: "60vh",
  }
}))

const theme = createTheme({
  palette: {
    background: {
      main: "#fffffc"
    },
    text: {
      primary: "#515151"
    },
    primary: {
      main: "#c88787",
      contrastText: "#fffffc"
    }
  },
  typography: {
      fontFamily: [
          'Varela Round'
      ].join(','),
  }
});

const App = (props) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className={classes.background}>
        <Grid className={classes.fullScreen} item container direction="column" justifyContent='center' alignItems='center'>
            <Grid item>
                <img src={logo}/>
            </Grid>
            <Grid item>
            <h1 className={classes.title}>
                The perfect gift for every occasion
            </h1>
            </Grid>
            <Grid item>
            <h2 className={classes.subtitle}>
                AI powered gift recommendations for your loved ones
            </h2>
            </Grid>
            <Grid item>
            <h3 className={classes.subtitle}>
                (Coming Soon)
            </h3>
            </Grid>
            <Grid item>
            <h3 className={classes.subtitle}>
                We'll let you know when the app is ready
            </h3>
            </Grid>
            <Grid item container justifyContent='center' alignItems='center' alignContent='center' spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box width="100%">
                    <TextField fullWidth label="Enter your email address" variant="outlined" />
                  </Box>
                </Grid>
                <Grid item>
                    <Button className={classes.emailButton} variant="contained" color="primary" width="100%" height="100%">
                    Let Me Know
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid className={classes.contentPoints} container justifyContent='center' alignContent='center' alignItems='space-evenly' direction='row'>
          <Grid className={classes.contentPoint} item container direction='column' xs={12} md={4}>
            <Grid item direction='row'>
              <Facebook className={classes.bigIcon}/>
              <Twitter className={classes.bigIcon}/>
              <Instagram className={classes.bigIcon}/>
            </Grid>
            <h2>
              Discover interests through their social media
            </h2>
            <h3>
              Don't know what they like? We'll find their latest interests from their social media posts. Stop speculating and have confidence that your gift is exactly what they're looking for.
            </h3>
          </Grid>
          <Grid className={classes.contentPoint} item direction='column' xs={12} md={4}>
            <FavoriteBorder className={classes.bigIcon}/>
            <h2>
              AI-powered recommendation system
            </h2>
            <h3>
              Not sure what to buy? Let our cutting edge AI recommendation system find the perfect gift for you. Simply swipe to give us some ideas, and we'll improve our recommendations.
            </h3>
          </Grid>
          <Grid className={classes.contentPoint} item direction='column' xs={12} md={4}>
            <History className={classes.bigIcon}/>
            <h2>
              Past recommendations at your fingertips
            </h2>
            <h3>
              Change your mind? Come back to take another look at the recommendations again, anytime you want.
            </h3>
          </Grid>
        </Grid>
        <Carousel className={classes.contentPoints}>
          <KeyPoint 
                title='Discover their interests through their social media posts'
                image={Socials}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date information"
                ]}
                buttonText='Find Out How'
            />
            <KeyPoint 
                className={classes.fullScreen}
                title='Satisfaction guarenteed with facts and evidence'
                image={RecDetail}
                subtitles={[
                    'Know exactly which posts inspired the recommendation',
                    "Find out what they think before you buy",
                    "Have confidence in your choices"
                ]}
                buttonText='Try It Now'
                reverse
            />
            <KeyPoint
                className={classes.fullScreen}
                title='Shop for gifts with our AI-powered recommendation system'
                image={Tinder}
                subtitles={[
                    'Swipe to see better recommendations',
                    "Narrow down your preferred gifts",
                    "Get the shopping experience anytime"
                ]}
                buttonText='Try It Now'
            />
            <KeyPoint
                className={classes.fullScreen}
                title='All your past recommendations at your fingertips'
                image={PrevRec}
                subtitles={[
                    'Look at the gifts that you previously shortlisted',
                    "Remembers the profiles you entered previously",
                    "Find a new gift without having to enter the information again"
                ]}
                buttonText='Get Started Now'
                reverse
            />
        </Carousel>
        <Grid className={classes.fullScreen} item container direction="column" justifyContent='center' alignItems='center'>
            <Grid item>
                <img src={logo}/>
            </Grid>
            <Grid item>
            <h3 className={classes.subtitle}>
                (Coming Soon)
            </h3>
            </Grid>
            <Grid item>
            <h3 className={classes.subtitle}>
                We'll let you know when the app is ready
            </h3>
            </Grid>
            <Grid item container justifyContent='center' alignItems='center' alignContent='center' spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box width="100%">
                    <TextField fullWidth label="Enter your email address" variant="outlined" />
                  </Box>
                </Grid>
                <Grid item>
                    <Button className={classes.emailButton} variant="contained" color="primary" width="100%" height="100%">
                    Let Me Know
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    </ThemeProvider>
  );
};


const KeyPoint = (props) => {
  const classes = useStyles()
  const {title, image, subtitles, buttonText, reverse} = props
  const direction = reverse ? 'row-reverse' : 'reverse'
  return (
  <Grid item container justifyContent='center' alignItems='stretch' spacing={2}>
      <Grid item xs={12}>
          <h1 className={classes.title}>
              {title}
          </h1>
      </Grid>
      <Grid item container direction={direction} justifyContent='center' xs={12} alignItems='center' alignContent="center" spacing={10}>
          <Grid item container xs={12} lg={5} justifyContent='center'>
              <img src={image} className={classes.keyPointImage}/>
          </Grid>
          <Grid item container xs={12} lg={7} direction="column" justifyContent='center' alignItems='center' alignContent="center">
              {subtitles.map((subtitle) => {
                  return (
                  <Grid item>
                      <h2 className={classes.subtitle}>
                          {subtitle}
                      </h2>
                  </Grid>
                  );}
              )}
              
              <Grid item container justifyContent='center'>
                  <Button className={classes.actionButton} variant="contained" color="primary" size='large'>
                      {buttonText}
                  </Button>
              </Grid>
          </Grid>
      </Grid>
  </Grid>
  );
}

export default App