import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#3467eb",
      },
      text: {
        padding: 0,
      },
    },

    MuiCardContent: {
      root: {
        padding: '4px'
      }
    }
  },

  palette: {
    secondary: {
      light: "#9E9D9D",
      main: "#333333",
      dark: "#000000",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: `"Rawline", "Raleway", sans-serif`,
    fontSize: 12,
    lineHeight: 1.5,
    letterSpacing: 0.32,
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: fontWeightBold,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
