import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  divFeedInstagram: {
    // posição
    position: "relative",
    left: "62.50vw",
    top: "15vh",

    // dimensionamento
    maxWidth: "450px", // deixa em pxels porque as imagens estao em pixels
    height: "auto",

    // estilo
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center',
    alignItems: "center",
    borderRadius: "8px",
    zIndex: 250,
    backgroundColor: "#F9F9F922",
    padding: "4px !important",
  },

  logoTitle: {
    marginTop: "8px",
  },

  CarouselItem: {
    display: "flex",
    justifyContent: "center",
  },
}));
