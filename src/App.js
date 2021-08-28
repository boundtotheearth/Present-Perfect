import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import logo from "./PP_Logo_Full.svg"
import { ReactComponent as Achievement} from "./PP_Icons/Achievement.svg"
import { ReactComponent as Anniversary} from "./PP_Icons/Aniversary.svg"
import { ReactComponent as Birthday} from "./PP_Icons/Birthday.svg"
import { ReactComponent as Christmas} from "./PP_Icons/Christmas.svg"
import { ReactComponent as Father} from "./PP_Icons/Father.svg"
import { ReactComponent as Mother} from "./PP_Icons/Mother.svg"
import { ReactComponent as Others} from "./PP_Icons/Others.svg"

import { Grid, SvgIcon, Stepper, Step, StepLabel, Box } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    height: 110,
    width: 110
  },
  label: {
    flexDirection: 'column',
  },
  icon: {
    fontSize: '32px !important',
  },
  title: {
    textAlign: 'center'
  },
  stepper: {
    backgroundColor: 'transparent'
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

function getSteps() {
  return ['Occasion', 'Social Media', 'Chat History', 'Interests'];
}

const App = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const classes = useStyles()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={logo}/>
      </Box>
      <h1 className={classes.title}>
        Find the best gifts based on social media activity!
      </h1>
      <Stepper className={classes.stepper} color='transparent' activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <h1 className={classes.title}>
        What’s the special occasion?
      </h1>
      <Grid
        container
        justifyContent="center"
        spacing={1}
      >
        <Grid item key='Christmas'>
          <Button
            classes={{ root: classes.button, label: classes.label }}
            variant="contained"
            color="primary"
          >
            <Christmas classes={classes.icon}/>
            Christmas
          </Button>
        </Grid>
        <Grid item key='Birthday'>
          <Button
            classes={{ root: classes.button, label: classes.label }}
            variant="contained"
            color="primary"
          >          
            <Birthday classes={classes.icon}/>
            Birthday
          </Button>
        </Grid>
        <Grid item key="Father's Day">
          <Button
            classes={{ root: classes.button, label: classes.label }}
            variant="contained"
            color="primary"
          >          
            <Father classes={classes.icon}/>
            Father's Day
          </Button>
        </Grid>
        <Grid item key="Mother's Day">
          <Button
            classes={{ root: classes.button, label: classes.label }}
            variant="contained"
            color="primary"
          >          
            <Mother classes={classes.icon}/>
            Mother's Day
          </Button>
        </Grid>
        <Grid item key='Achievement'>
          <Button
            classes={{ root: classes.button, label: classes.label }}
            variant="contained"
            color="primary"
          >
            <Achievement classes={classes.icon}/>
            Achievement
          </Button>
        </Grid>
        <Grid item key='Anniversary'>
          <Button
            classes={{ root: classes.button, label: classes.label }}
            variant="contained"
            color="primary"
          >
            <Anniversary classes={classes.icon}/>
            Anniversary
          </Button>
        </Grid>
        <Grid item key='Others'>
          <Button
            classes={{ root: classes.button, label: classes.label }}
            variant="contained"
            color="primary"
          >
            <Others classes={classes.icon}/>
            Others
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App