import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  card: {
    width: "80vw",
    maxHeight: "80vh",

    position: "absolute",
    left: "10vw",
    top: "12.50vh",

    opacity: "0%",
    display: "none",
  },

  cardShow: {
    width: "80vw",
    maxHeight: "80vh",

    position: "absolute",
    left: "10vw",
    top: "65vh",

    backgroundColor: "#F9F9F922",

    animation: "$showContacts 1000ms linear forwards",
  },

  cardHide: {
    width: "80vw",
    maxHeight: "80vh",

    position: "absolute",
    left: "10vw",
    top: "65vh",

    backgroundColor: "#F9F9F922",

    animation: "$hideContacts 1000ms linear forwards",
  },

  cardUp: {
    width: "80vw",
    maxHeight: "80vh",

    position: "absolute",
    left: "10vw",

    backgroundColor: "#2234CCFF",
    overflowY: "scroll",

    animation: "$upContacts 1000ms linear forwards",
  },

  cardDown: {
    width: "80vw",
    maxHeight: "80vh",

    position: "absolute",
    left: "10vw",

    backgroundColor: "#2234CCFF",

    animation: "$downContacts 1000ms linear forwards",
  },

  cardContent: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    width: "100%",
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

  appBarIcons: {
    display: "flex",
    flexDirection: "center",
    justifyContent: "flex-start",

    width: "100%",
    marginTop: "16px",
  },

  icon: {
    fontSize: 32,
    color: "white",
  },

  "@keyframes showContacts": {
    "0%": {
      opacity: "0%",
      left: "100vw",
    },
    "100%": {
      opacity: "100%",
      left: "10vw",
    },
  },

  "@keyframes hideContacts": {
    "0%": {
      opacity: "100%",
      left: "10vw",
    },
    "100%": {
      opacity: "0%",
      left: "100vw",
    },
  },

  "@keyframes upContacts": {
    "0%": {
      backgroundColor: "#F9F9F922",
      top: "65vh",
    },
    "100%": {
      backgroundColor: " #3467ebEE",
      top: "10vh",
    },
  },

  "@keyframes downContacts": {
    "0%": {
      backgroundColor: " #3467ebEE",
      top: "10vh",
    },
    "100%": {
      backgroundColor: "#F9F9F922",
      top: "65vh",
    },
  },
}));
