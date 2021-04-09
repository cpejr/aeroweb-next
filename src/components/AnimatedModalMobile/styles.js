import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    // posição
    position: 'relative',
    top: '-10vh',
    left: '11.50vw',

    // dimensionamento
    maxWidth: '80vw',
    zIndex: 300,

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: '6px',
    overflowY: 'scroll',
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
  },

  image: {
 
  },

  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
  },

  icon: {
    width: '20%',
  },

  text: {
    fontSize: '12px',
    lineHeight: '15px',
  },

  line: {
    lineHeight: '13px',
  },

  cardVideo: {
    width: '100%',
    height: '25vh',

    display: 'flex',
    flexDirection: 'column',

    border: '1px solid #3467eb',
    marginTop: '2vh',
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
    color: 'white',
    width: '80%',
    "&:hover": {
      backgroundColor: "#3467eb",
    },
  },
}));
