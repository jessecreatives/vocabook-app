import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';

// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#303c6c",
        light: "#b4dfe5"
      },
      secondary: {
        main: "#f4976c", //orange
        light: "#fbe8a6" //yellow
      },
      background: {
          default: "#b4dfe5"
      }
    },
    typography: {
      fontFamily: "'M PLUS 1p', sans-serif",
    },
    shape: {
      borderRadius: 30
    },
    overrides: {
      MuiTextField: {
        root: {}
      },
      MuiButton: {
        root: {
          textTransform: "none",
          padding: "20px"
        },
        fullWidth: {
          maxWidth: "300px"
        }
      }
    },
    props: {
      MuiButton: {
        disableRipple: true,
        variant: "contained",
        color: "primary"
      },
      MuiCheckbox: {
        disableRipple: true
      },
      MuiTextField: {
        variant: "filled",
        InputLabelProps: {
          shrink: true
        }
      },
      MuiPaper: {
        elevation: 12
      },
      MuiCard: {
        elevation: 12
      }
    }
  });