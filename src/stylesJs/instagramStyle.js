import { makeStyles } from "@material-ui/core";
import isMobile from "../utils/isMobile";

export const useStyles = makeStyles(theme => ({
  card: isMobile
    ? {
        // posição
        position: "absolute",
        bottom: "2.5vh",
        left: "5vw",
        height: `calc(88vh - ((100vw / 332) * 373))`,
        minHeight: "15vh",
        maxHeight: "25vh",
        width: "90vw",

        // estilo
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
        zIndex: 250,
        backgroundColor: "#F9F9F922",
        padding: "4px !important",
      }
    : {
        // posição
        position: "absolute",
        right: "5vw",
        top: "25vh",

        // dimensionamento
        width: "30vw",

        [theme.breakpoints.down(1200)]: {
          height: "28vh",
          width: "32vw",
          top: "20vh",
        },

        [theme.breakpoints.down(1000)]: {
          height: "25vh",
          width: "33vw",
          top: "20vh",
        },

        [theme.breakpoints.down(850)]: {
          height: "25vh",
          width: "33vw",
        },

        [theme.breakpoints.down(765)]: {
          display: "none",
        },

        // estilo
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
        zIndex: 250,
        backgroundColor: "#F9F9F922",
        padding: "4px !important",
      },

  cardShow: isMobile
    ? {
        // posição
        position: "absolute",
        bottom: "2.5vh",
        left: "5vw",
        height: `calc(88vh - ((100vw / 332) * 373))`,
        minHeight: "15vh",
        maxHeight: "25vh",
        width: "90vw",

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
      }
    : {
        // posição
        position: "absolute",
        right: "5vw",
        top: "25vh",

        // dimensionamento
        width: "30vw",
        height: "30vh",

        [theme.breakpoints.down(1200)]: {
          height: "28vh",
          width: "32vw",
          top: "20vh",
        },

        [theme.breakpoints.down(1000)]: {
          height: "25vh",
          width: "33vw",
          top: "20vh",
        },

        [theme.breakpoints.down(850)]: {
          height: "25vh",
          width: "20vw",
        },

        [theme.breakpoints.down(765)]: {
          display: "none",
        },

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

  cardHide: isMobile
    ? {
        // posição
        position: "absolute",
        bottom: "2.5vh",
        left: "5vw",
        height: `calc(88vh - ((100vw / 332) * 373))`,
        minHeight: "15vh",
        maxHeight: "25vh",
        width: "90vw",

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
      }
    : {
        // posição
        position: "absolute",
        right: "5vw",
        top: "25vh",

        // dimensionamento
        width: "30vw",
        height: "30vh",

        [theme.breakpoints.down(1200)]: {
          height: "28vh",
          width: "32vw",
          top: "20vh",
        },

        [theme.breakpoints.down(1000)]: {
          height: "25vh",
          width: "33vw",
          top: "20vh",
        },

        [theme.breakpoints.down(850)]: {
          height: "25vh",
          width: "20vw",
        },

        [theme.breakpoints.down(765)]: {
          display: "none",
        },

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
    position: "absolute",
    marginTop: "8px",
    width: "60%",
    minWidth: "200px",
  },

  CarouselItem: {
    display: "flex",
    justifyContent: "center",
  },

  carouselContainer: {
    width: "auto",
    height: "auto",
    overflow: "hidden",
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
      height: "auto",
    },
    "99%": {
      opacity: "1%",
      height: "auto",
    },
    "100%": {
      opacity: "0%",
      height: "0px",
    },
  },
}));
