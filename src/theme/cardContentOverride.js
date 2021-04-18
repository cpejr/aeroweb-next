import { createMuiTheme } from "@material-ui/core/styles";

const cardContentOverride = createMuiTheme({
  overrides: {
    MuiCardContent: {
      root: {
        padding:'4px',
        "&:last-child": {
          paddingBottom: '4px'
        }
      },
    },
  },
});

export default cardContentOverride;
