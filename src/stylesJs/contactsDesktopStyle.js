import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "50vw",
    height: "auto",

    position: "absolute",
    left: "25vw",
    top: "30vh",

    opacity: "0%",
    display: "none",
    zIndex: 400,
  },

  cardShow: {
    width: "50vw",
    height: "auto",

    position: "absolute",
    left: "25vw",
    top: "30vh",

    backgroundColor: "#3467ebEE",

    animation: "$showCard 1000ms linear forwards",
    zIndex: 400,
  },

  cardHide: {
    width: "50vw",
    height: "auto",

    position: "absolute",
    left: "25vw",
    top: "30vh",

    backgroundColor: "#3467ebEE",

    animation: "$hideCard 1000ms linear forwards",
    zIndex: 400,
  },

  cardContent: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    paddingTop: "4px",
  },

  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
  },

  icon: {
    minWidth: "75px",
    zIndex: 400
  },

  button: {
    marginTop: "16px",
    backgroundColor: "white",
    transition: "background-color 0.2s",

    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#ffffffbb",
    },
  },

  cssLabel: {
    color: "white",
  },

  textfield: {
    color: "white",
    height: 24,
  },

  textfieldMsg: {
    color: "white",
  },

  textfieldFont: {
    color: "white",
    fontSize: 12,
  },

  underline: {
    "&:before": {
      borderBottomColor: "#ffffff",
    },
    "&:after": {
      borderBottomColor: "#ffffff",
    },
    "&:hover:before": {
      borderBottomColor: "#ffffff",
    },
    "&:hover:after": {
      borderBottomColor: "#ffffff",
    },
  },

  "@keyframes showCard": {
    "0%": {
      opacity: "0%",
    },
    "100%": {
      opacity: "100%",
    },
  },

  "@keyframes hideCard": {
    "0%": {
      opacity: "100%",
      height: "auto",
    },
    "95%": {
      opacity: "5%",
      height: "auto",
    },
    "100%": {
      opacity: "0%",
      height: "0px",
    },
  },
}));
