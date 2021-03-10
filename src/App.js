import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Sidebar from './components/Sidebar';
import './App.css';
import {data} from './data';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      ligit: "#b4dfe5",
      main: "#5667ac",
      dark: "#303c6c"
    },
    secondary: {
      light: "#fbe8a6", //yellow
      main: "#f4976c" //orange
    },
    white: "#fff",
    danger: "#F76C6C" //red
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.light,
  },
  gridContainer: {
    background: theme.palette.white,
  }
}));

const App = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container className={classes.root}>
            <Grid item xs={12} lg={4}>
              <Sidebar data={data} />
            </Grid>
    
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
