import { makeStyles } from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";

export const useStyles = makeStyles((theme) => ({
  cardButtons: {
    // posição
    position: "absolute",
    top: "42vh",
    left: "26.5vw",
    zIndex: "200",

    // dimensionamento
    maxWidth: "30vw",
    height: "0px", // começa sem nada
  },

  cardButtonsUp: {
    // posição
    position: "absolute",
    top: "42vh",
    left: "26.5vw",
    zIndex: "200",

    // dimensionamento
    width: "20vw",
    [theme.breakpoints.down("1000")]: {
      width: "40vw",
    },

    // estilo
    background: "transparent",
    backgroundColor: "#CCCCCC55",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#CCCCCCAA",
    },

    // animação
    animation: "$upList 1000ms ease-in-out forwards",
    transition: "background-color 0.5s",
  },

  cardButtonsDown: {
    // posição
    position: "absolute",
    top: "42vh",
    left: "26.5vw",
    zIndex: "200",

    // dimensionamento
    width: "20vw",
    [theme.breakpoints.down("1100")]: {
      width: "40vw",
      left: "18vw",
    },

    // estilo
    background: "transparent",
    backgroundColor: "#CCCCCC55",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#CCCCCCAA",
    },

    // animação
    animation: "$downList 1000ms ease-in-out forwards",
    transition: "background-color 1s",
  },

  cardContentButtons: {
    padding: '4px !important',
    '&:last-child': {
      paddingBottom: '4px !important'
    },
  },

  buttonsGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
  },

  buttonsListFirst: {
    marginTop: "8px",
    marginBottom: "24px",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonsList: {
    marginTop: "24px",
    marginBottom: "24px",
  },

  buttonsListLast: {
    marginTop: "24px",
    marginBottom: "8px",
  },

  "@keyframes downList": {
    "0%": {
      height: "0%",
    },
    "99%": {
      overflowY: "hidden",
    },
    "100%": {
      height: "26vh",
      overflowY: "auto",
    },
  },

  "@keyframes upList": {
    "0%": {
      height: "26vh",
      overflowY: "hidden",
    },
    "100%": {
      height: "0%",
      overflowY: "hidden",
    },
  },
}));
