import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import logo from "./PP_Logo_Full.svg"
import PrevRec from "./PP_Screens/Previous Recommendation.png"
import Socials from "./PP_Screens/Step 2 Filled.png"
import Tinder from "./PP_Screens/Tinder.png"
import RecDetail from "./PP_Screens/Recommendation detail.png"
import bgImage from "./bg.png"

import { Grid, SvgIcon, Stepper, Step, StepLabel, Box, Divider, Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  },
  actionButton: {
      width: "50%",
      height: 40
  },
  fullScreen: {
      minHeight: "100vh",
      minWidth: "100wh",
      paddingTop: 50,
      paddingBottom: 50,
      [theme.breakpoints.down("sm")]: {
          paddingLeft: 20,
          paddingRight: 20
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: 200,
        paddingRight: 200
      },
      backgroundImage: `url(${bgImage})`
  },
  emailField: {
      width: "100%"
  },
  emailButton: {
      minWidth: 200
  },
  bgImage: {
      objectFit: 'cover'
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
        <Grid className={classes.fullScreen} item container direction="column" justifyContent='center' alignItems='center' spacing={2}>
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
                <Grid item xs={12} md={8}>
                    <TextField className={classes.emailField} id="outlined-basic" label="Enter your email address" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button className={classes.emailButton} variant="contained" color="primary" width="100%" height="100%">
                    Let Me Know
                    </Button>
                </Grid>
            </Grid>
            
        </Grid>
        <Divider/>
        <Grid
            justifyContent="center"
        >
            <KeyPoint 
                title='Discover their interests through their social media posts'
                image={Socials}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date info"
                ]}
                buttonText='Find Out How'
            />
            <Divider/>
            <KeyPoint 
                className={classes.fullScreen}
                title='Satisfaction guarenteed with facts and evidence'
                image={RecDetail}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date info"
                ]}
                buttonText='Try It Now'
                reverse
            />
            <Divider/>
            <KeyPoint
                className={classes.fullScreen}
                title='Shop for gifts with our AI-powered recommendation system'
                image={Tinder}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date info"
                ]}
                buttonText='Try It Now'
            />
            <Divider/>
            <KeyPoint
                className={classes.fullScreen}
                title='All your past recommendations at your fingertips'
                image={PrevRec}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date info"
                ]}
                buttonText='Get Started Now'
                reverse
            />

        </Grid>
        <Divider/>
        <Grid className={classes.fullScreen} item container direction="column" justifyContent='center' alignItems='center' spacing={2}>
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
                <Grid item xs={12} md={8}>
                    <TextField className={classes.emailField} id="outlined-basic" label="Enter your email address" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button className={classes.emailButton} variant="contained" color="primary" width="100%" height="100%">
                        Let Me Know
                    </Button>
                </Grid>
            </Grid>
            
        </Grid>
    </ThemeProvider>
  );
};

const KeyPoint = (props) => {
    const classes = useStyles()
    const {title, image, subtitles, buttonText, reverse} = props
    const direction = reverse ? 'row-reverse' : 'reverse'
    return (
    <Grid className={classes.fullScreen} item container justifyContent='center' alignItems='stretch' spacing={5}>
        <Grid item xs={12}>
            <h1 className={classes.title}>
                {title}
            </h1>
        </Grid>
        <Grid item container direction={direction} justifyContent='center' xs={12} alignItems='stretch' spacing={10}>
            <Grid item container xs={12} sm={5} justifyContent='center'>
                <img src={image} height="100%" width='90%'/>
            </Grid>
            <Grid item container xs={12} md={7} direction="column" justifyContent='center' alignItems='center'>
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