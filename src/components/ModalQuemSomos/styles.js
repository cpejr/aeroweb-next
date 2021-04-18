import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    paddingTop: "5%",
  },

  root: {
    width: "100%",
    maxWidth: 360,
  },

  modalBackground: {
    backgroundColor: " #3467eb77",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  growContent: {
    backgroundColor: "#0E41C5",
    color: "white",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50vw",
    outline: "0",
  },

  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },

  card: {
    maxWidth: "50%",

    padding: 16,
    elevation: 8,
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

  Title: {
    marginRight: "3vw",
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
}));
