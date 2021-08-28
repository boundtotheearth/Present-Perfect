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

import { Grid, SvgIcon, Stepper, Step, StepLabel, Box, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  },
  actionButton: {
      width: "50%",
      height: 40
  }
})

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
  }
});

const App = (props) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div height="100vh">
            <Grid item container direction="column" justifyContent='center' alignItems='center'>
                <img src={logo}/>
                <h1 className={classes.title}>
                    The perfect gift for every occasion
                </h1>
                <Button className={classes.actionButton} variant="contained" color="primary" size='large'>
                    Get it here
                </Button>
            </Grid>
        </div>
        
        <Grid
            justifyContent="center"
            spacing={10}
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
            <KeyPoint 
                title='Satisfaction guarenteed with facts and evidence'
                image={RecDetail}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date info"
                ]}
                buttonText='Try It Now'
            />
            <KeyPoint 
                title='Shop for gifts with our AI-powered recommendation system'
                image={Tinder}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date info"
                ]}
                buttonText='Try It Now'
            />
            <KeyPoint 
                title='All your past recommendations at your fingertips'
                image={PrevRec}
                subtitles={[
                    'Automatically look through their social media posts',
                    "Find out what they're thinking about",
                    "Get the most relevant, up-to-date info"
                ]}
                buttonText='Get Started Now'
            />
        </Grid>
    </ThemeProvider>
  );
};

const KeyPoint = (props) => {
    const classes = useStyles()
    const {title, image, subtitles, buttonText} = props
    return (
    <Grid item container justifyContent='center' alignItems='stretch'>
        <Grid item xs={12}>
            <h1 className={classes.title}>
                {title}
            </h1>
        </Grid>
        <Grid item container justifyContent='center' xs={12} alignItems='center' spacing={10}>
            <Grid item container xs={12} md={5} justifyContent='center'>
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