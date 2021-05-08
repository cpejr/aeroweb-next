import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  card: {
    // posição
    position: "absolute",
    top: "80vh",
    left: "11.50vw",

    // dimensionamento
    width: "80vw",
    zIndex: 200,
    maxHeight: "90vh",

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: "#F9F9F922",
    borderRadius: "6px",
    overflow: "hidden",

    display: "none",
  },

  cardShow: {
    // posição
    position: "absolute",
    top: "80vh",
    left: "11.50vw",

    // dimensionamento
    width: "80vw",
    zIndex: 200,
    maxHeight: "90vh",

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: "#F9F9F922",
    borderRadius: "6px",
    overflow: "hidden",

    // animação
    animation: " $showSlide 1000ms linear forwards",
  },

  cardHide: {
    // posição
    position: "absolute",
    top: "80vh",
    left: "11.50vw",

    // dimensionamento
    width: "80vw",
    zIndex: 300,

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: "#F9F9F922",
    borderRadius: "6px",
    overflow: "hidden",

    // animação
    animation: " $hideSlide 1000ms linear forwards",
  },

  cardUp: {
    // posição
    position: "absolute",
    left: "11.50vw",

    // dimensionamento
    maxWidth: "80%",
    zIndex: 300,
    maxHeight: "90vh",

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: " #3467ebEE",
    borderRadius: "6px",
    overflowY: "scroll",

    // animação
    animation: "$upSlide 1000ms linear forwards",
  },

  cardDown: {
    // posição
    position: "absolute",
    left: "11.50vw",

    // dimensionamento
    maxWidth: "80%",
    zIndex: 300,
    maxHeight: "90vh",

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: " #3467ebEE",
    borderRadius: "6px",

    // animação
    animation: "$downSlide 1000ms linear forwards",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    border: "none",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    padddingLeft: "4px !important",
    padding: '4px !important'
  },

  titleSlide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",

    width: "100%",
  },

  text: {
    fontSize: "11.25px",
    lineHeight: "13px",

    // responsividade telas mobile e tablet
    "@media (min-width: 400px)": {
      fontSize: "12.50px",
      lineHeight: "13.50px",
    },
    "@media (min-width: 600px)": {
      fontSize: "14px",
      lineHeight: "16px",
    },
    "@media (max-width: 325px)": {
      fontSize: "9.50px",
      lineHeight: "10.50px",
    },
  },

  line: {
    lineHeight: "13px",
  },

  cardVideo: {
    width: "100%",
    height: "25vh",

    display: "flex",
    flexDirection: "column",
    border: "1px solid white",
    marginTop: "24px",
    marginBottom: "16px",
  },

  "@keyframes showSlide": {
    "0%": {
      left: "100vw",
      opacity: "0%",
    },
    "100%": {
      left: "11.50vw",
      opacity: "100%",
    },
  },

  "@keyframes hideSlide": {
    "0%": {
      left: "11.50vw",
      opacity: "100%",
    },
    "100%": {
      left: "100vw",
      opacity: "0%",
    },
  },

  "@keyframes upSlide": {
    "0%": {
      top: "80vh",
      backgroundColor: "#F9F9F922",
    },
    "100%": {
      top: "10vh",
      backgroundColor: " #3467ebEE",
    },
  },

  "@keyframes downSlide": {
    "0%": {
      top: "10vh",
      backgroundColor: " #3467ebEE",
    },
    "100%": {
      top: "80vh",
      backgroundColor: "#F9F9F922",
    },
  },
}));
