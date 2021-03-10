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
      body1: {
        fontSize: "1.5rem",
      },
      h1: {
        fontSize: "3.5rem",
        fontWeight: "700",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: "700",
      }
    },
    shape: {
      borderRadius: 30
    },
    overrides: {
      MuiPaper: {
        root: {
          padding: "4rem",
        }
      },
      MuiList: {
        root: {
          padding: 0,
        }
      },
      MuiAppBar: {
        root: {
          boxShadow: "none",
          padding: "1rem 0",
        }
      },
      MuiToolbar: {
        root: {
          justifyContent: "space-between",
        }
      },
      MuiIconButton: {
        root: {
          padding: "1rem",
        }
      },
      MuiSvgIcon: {
        root: {
          fontSize: "2.5rem",
        }
      },
      MuiListItem: {
        button: {
          width: "100%",
          padding: "1.5rem 2.5rem",
          border: "0.3rem solid #f4976c",
          color: "#f4976c",
          fontWeight: "700",
          borderRadius: 100,
          justifyContent: "space-between",
          marginBottom: "2rem",
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