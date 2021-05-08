import { createMuiTheme } from "@material-ui/core/styles";

const buttonOverride = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        marginTop: "16px",
        backgroundColor: "white",

        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#ffffffbb",
        },
      },
    },
  },
});

export default buttonOverride;
