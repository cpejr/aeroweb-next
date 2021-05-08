import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    // posição
    position: "absolute",
    left: "62.50vw",
    top: "15vh",
    [theme.breakpoints.down("xs")]: {
      top: "0vh",
      left: "10vw",
      maxWidth: "80%",
      marginTop: "75vh",
    },

    // dimensionamento
    maxWidth: "30%",

    // estilo
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "8px",
    zIndex: 250,
    backgroundColor: "#F9F9F922",
    padding: "4px !important",
  },

  cardShow: {
    // posição
    position: "absolute",
    left: "62.50vw",
    top: "15vh",
    [theme.breakpoints.down("xs")]: {
      top: "0vh",
      left: "10vw",
      maxWidth: "80%",
      marginTop: "75vh",
    },

    // dimensionamento
    maxWidth: "30%",

    // estilo
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "8px",
    zIndex: 250,
    backgroundColor: "#F9F9F922",
    padding: "4px !important",

    // animation
    animation: "$showCarousel 1000ms linear forwards",
  },

  cardHide: {
    // posição
    position: "absolute",
    left: "62.50vw",
    top: "15vh",
    [theme.breakpoints.down("xs")]: {
      top: "0vh",
      left: "10vw",
      maxWidth: "80%",
      marginTop: "75vh",
    },

    // dimensionamento
    maxWidth: "30%",

    // estilo
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "8px",
    zIndex: 250,
    backgroundColor: "#F9F9F922",
    padding: "4px !important",

    // animation
    animation: "$hideCarousel 500ms linear forwards",
  },

  logoTitle: {
    position: 'absolute',
    marginTop: "8px",
    width: "60%",
    minWidth: "200px",
  },

  CarouselItem: {
    display: "flex",
    justifyContent: "center",
  },

  "@keyframes showCarousel": {
    "0%": {
      opacity: "0%",
    },
    "100%": {
      opacity: "100%",
    },
  },

  "@keyframes hideCarousel": {
    "0%": {
      opacity: "100%",
      height: 'auto',
    },
    "99%": {
      opacity: "1%",
      height: 'auto',
    },
    "100%": {
      opacity: "0%",
      height: '0px',
    },
  },
}));
