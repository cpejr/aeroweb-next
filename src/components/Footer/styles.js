import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,

    background: "transparent",
    boxShadow: "none",

    marginBottom: 16,

    [theme.breakpoints.down("600")]: {
      height: "0%",
      display: 'none'
    },
  },

  appBarContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  appBarSubContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    [theme.breakpoints.down("600")]: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  appBarInfo: {
    marginLeft: 16,
    marginRight: 16,

    textAlign: "left",

    [theme.breakpoints.down("600")]: {
      marginLeft: 0,
      marginRight: 0,
      textAlign: "center",
    },
  },

  appBarIcons: {
    marginRight: 32,

    [theme.breakpoints.down("600")]: {
      marginRight: 0,
    },
  },

  icon: {
    fontSize: 32,
    marginLeft: 12,
    color: "#FFFFFF",

    [theme.breakpoints.down("600")]: {
      height: 0,
      fontSize: 0,
    },
  },

  text: {
    margin: 2,

    [theme.breakpoints.down("600")]: {
      height: 0,
      margin: 0,
    },
  },
}));
