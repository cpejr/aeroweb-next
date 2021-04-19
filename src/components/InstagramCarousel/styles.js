import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  divFeedInstagram: {
    // posição
    position: "relative",
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
    // justifyContent: 'center',
    alignItems: "center",
    borderRadius: "8px",
    zIndex: 250,
    backgroundColor: "#F9F9F922",
    padding: "4px !important",
  },

  logoTitle: {
    marginTop: "8px",
    width: "60%",
    minWidth: "200px",
    position: "relative",
    top: "10px",
  },

  CarouselItem: {
    display: "flex",
    justifyContent: "center",
  },
}));
