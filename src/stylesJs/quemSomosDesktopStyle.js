import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  background: {
    background: "#FFFFFF",
  },

  card: {
    // posição
    position: "absolute",
    top: "2.5vh",
    left: "25vw",

    // dimensionamento
    maxWidth: "50vw",
    maxHeight: "95vh",

    // estilo
    zIndex: 300,
    padding: 16,
    elevation: 8,
    overflowY: "scroll",
    backgroundColor: "#3467ebEE",

    // animação
    display: "none",

    [theme.breakpoints.down("1000")]: {
      maxWidth: "75vw",
      left: "12.50vw",
    },
  },

  cardShow: {
    // posição
    position: "absolute",
    top: "2.5vh",
    left: "25vw",

    // dimensionamento
    maxWidth: "50vw",
    maxHeight: "95vh",

    // estilo
    zIndex: 300,
    padding: 16,
    elevation: 8,
    overflowY: "scroll",
    backgroundColor: "#3467ebEE",

    // animação
    animation: "$showModal 1500ms ease-out forwards",

    [theme.breakpoints.down("1000")]: {
      maxWidth: "75vw",
      left: "12.50vw",
    },
    //scrollbar
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-track:hover": {
      backgroundColor: "#f4f4f4",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
      borderRadius: "20px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#a0a0a5",
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
  },

  cardHide: {
    // posição
    position: "absolute",
    top: "2.5vh",
    left: "25vw",

    // dimensionamento
    maxWidth: "50vw",
    maxHeight: "95vh",

    // estilo
    zIndex: 300,
    padding: 16,
    elevation: 8,
    overflowY: "scroll",
    backgroundColor: "#3467ebEE",

    // animação
    animation: "$hideModal 1000ms ease-in forwards",

    [theme.breakpoints.down("1000")]: {
      maxWidth: "75vw",
      left: "12.50vw",
    },
    //scrollbar
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-track:hover": {
      backgroundColor: "#f4f4f4",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
      borderRadius: "20px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#a0a0a5",
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
  },

  cardContentContainer: {
    paddingTop: "0px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: {
    width: "95%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 16,
  },

  text: {
    fontSize: "13x",
    lineHeight: "20px",
  },

  cardBody: {
    width: "95%",

    display: "flex",
    flexDirection: "column",
  },

  cardVideo: {
    width: "95%",
    height: "43vh",

    display: "flex",
    flexDirection: "column",
    border: "1px solid white",
    marginTop: "2vh",
  },

  buttonContainer: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#3467eb",
    "&:hover": {
      backgroundColor: "#3467eb",
    },
  },

  buttonOut: {
    "&:hover": {
      borderBottom: "4px solid",
    },
  },

  media: {
    height: "30%",
    width: "30%",
  },

  "@keyframes showModal": {
    "0%": {
      opacity: "0%",
      transform: "scale(0.75, 0.5)",
    },
    "100%": {
      opacity: "100%",
      transform: "scale(1, 1)",
    },
  },

  "@keyframes hideModal": {
    "0%": {
      opacity: "100%",
      transform: "scale(1, 1)",
    },
    "100%": {
      opacity: "0%",
      transform: "scale(0.75, 0.25)",
    },
  },
}));
