import { createMuiTheme } from "@material-ui/core/styles";

const buttonOverride = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        marginTop: '16px',
        backgroundColor: 'white',
        // transition: 'background-color 0.2s',

        borderRadius: '8px',
        "&:hover": {
          backgroundColor: "#ffffffbb",
        },
      },
    },
  },
});

export default buttonOverride;
