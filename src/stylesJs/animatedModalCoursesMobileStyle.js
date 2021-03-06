import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  card: {
    // posição
    position: "absolute",
    top: "80vh",
    left: "11.50vw",

    // dimensionamento
    maxWidth: "80vw",
    zIndex: 300,

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: "6px",
    overflowY: "scroll",

    display: "none",
  },

  cardUp: {
    // posição
    position: "absolute",
    left: "11.50vw",

    // dimensionamento
    maxWidth: "80vw",
    zIndex: 300,
    maxHeight: "92.50vh",

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: "6px",
    overflowY: "scroll",
    marginTop: "16px",
    marginBottom: "16px",

    // animaçao
    animation: "$upSlide 750ms linear forwards",
  },

  cardDown: {
    // posição
    position: "absolute",
    left: "11.50vw",

    // dimensionamento
    maxWidth: "80vw",
    zIndex: 300,
    maxHeight: "92.50vh",

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: "6px",
    overflowY: "scroll",
    marginTop: "16px",

    // animaçao
    animation: "$downSlide 750ms linear forwards",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
  },

  cardGoBack:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#3467eb",
    marginLeft: "35%",
  },

  image: {},

  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
  },

  icon: {
    width: "100%",
  },

  text: {
    fontSize: "12px",
    lineHeight: "15px",
  },

  line: {
    lineHeight: "13px",
  },

  cardVideo: {
    width: "100%",
    height: "25vh",

    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",

    marginTop: "2vh",
  },

  cardBody: {
    width: "95%",

    display: "flex",
    flexDirection: "column",
  },

  buttonContainer: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#3467eb",
    color: "white",
    width: "80%",
    "&:hover": {
      backgroundColor: "#3467eb",
    },

    marginTop: "32px",
  },

  cardPayments: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "24px",
  },

  cardPayments2: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardPayments3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "& | &": {
      marginTop: "16px",
    },
    "& img": {
      width: "50px",
      height: "27px",
    },

    marginTop: "24px",
  },

  cardPayments4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "& | &": {
      marginTop: "16px",
    },
    "& img": {
      width: "50px",
      height: "27px",
    },

    marginTop: "24px",
    marginBottom: "24px",
  },

  "@keyframes upSlide": {
    "0%": {
      top: "80vh",
      opacity: "0%",
    },
    "100%": {
      top: "0vh",
      opacity: "100%",
    },
  },

  "@keyframes downSlide": {
    "0%": {
      top: "0vh",
      opacity: "100%",
    },
    "100%": {
      top: "80vh",
      opacity: "0%",
    },
  },
}));
