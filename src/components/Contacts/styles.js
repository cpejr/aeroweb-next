import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cardContacts: {
    maxWidth: "50vw",
    height: "auto",

    position: "absolute",
    left: "25vw",
    top: "30vh",

    opacity: "0%",
    display: "none",
  },

  cardContactsShow: {
    width: "50vw",
    height: "auto",

    position: "absolute",
    left: "25vw",
    top: "30vh",

    backgroundColor: "#0E41C5",

    animation: "$showContacts 1000ms linear forwards",
  },

  cardContactsHide: {
    width: "50vw",
    height: "auto",

    position: "absolute",
    left: "25vw",
    top: "30vh",

    backgroundColor: "#0E41C5",

    animation: "$hideContacts 1000ms linear forwards",
  },

  cardContentContacts: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    paddingTop: '4px',
  },

  titleContacts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
  },

  icon: {
    minWidth: '100px',
  },

  buttonContacts: {
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
    // height: 24,
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

  "@keyframes showContacts": {
    "0%": {
      opacity: "0%",
    },
    "100%": {
      opacity: "100%",
    },
  },

  "@keyframes hideContacts": {
    "0%": {
      opacity: "100%",
      height: "auto",
    },
    "50%": {
      opacity: "50%",
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
