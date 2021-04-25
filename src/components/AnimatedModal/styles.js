import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  background: {
    background: "#FFFFFF",
  },

  card: {
    // posição
    position: 'absolute',
    top: '2.5vh',
    left: '25vw',

    // dimensionamento
    maxWidth: "50vw",
    maxHeight: '95vh',

    // estilo
    zIndex: 300,
    padding: 16,
    elevation: 8,
    overflowY: 'scroll',

    // animação
    display: 'none',


    [theme.breakpoints.down('1000')]: {
      maxWidth: '75vw',
      left: '12.50vw'
    },
  },

  cardShow: {
    // posição
    position: 'absolute',
    top: '2.5vh',
    left: '25vw',

    // dimensionamento
    maxWidth: "50vw",
    maxHeight: '95vh',

    // estilo
    zIndex: 300,
    padding: 16,
    elevation: 8,
    overflowY: 'scroll',

    // animação
    animation: "$showModal 1500ms ease-out forwards",

    [theme.breakpoints.down('1000')]: {
      maxWidth: '75vw',
      left: '12.50vw'
    },

    // filter: 'blur(5px)',
  },

  cardHide: {
    // posição
    position: 'absolute',
    top: '2.5vh',
    left: '25vw',

    // dimensionamento
    maxWidth: "50vw",
    maxHeight: '95vh',

    // estilo
    zIndex: 300,
    padding: 16,
    elevation: 8,
    overflowY: 'scroll',

    // animação
    animation: "$hideModal 1000ms ease-in forwards",

    [theme.breakpoints.down('1000')]: {
      maxWidth: '75vw',
      left: '12.50vw'
    },
  },

  cardContentContainer: {
    paddingTop: '0px'
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",

    marginBottom: '16px',
  },

  cardTitle: {
    width: "95%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 16,
  },

  cardBody: {
    width: "95%",

    display: "flex",
    flexDirection: "column",
  },

  text: {
    fontSize: "13x",
    lineHeight: "20px",
  },

  buttonContainer: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "2vh",
  },

  button: {
    backgroundColor: "#3467eb",
    color: "white",
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

  cardVideo: {
    width: "60%",
    height: "30vh",

    display: "flex",
    flexDirection: "column",

    border: "1px solid #3467eb",
    marginTop: "2vh",
  },

  cardPayments: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',

    marginTop: "24px",
  },

  cardPayments2: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "2vw",
  },
  cardPayments3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& | &": {
      marginTop: "16px",
    },
    "& img": {
      width: "58px",
      height: "30px",
    },
  },
  cardPayments4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& | &": {
      marginTop: "16px",
    },
    "& img": {
      width: "58px",
      height: "30px",
    },

    marginTop: '24px',
  },

  "@keyframes showModal": {
    "0%": {
      opacity: "0%",
      transform: 'scale(0.75, 0.5)',
    },
    "100%": {
      opacity: "100%",
      transform: 'scale(1, 1)',
    },
  },

  "@keyframes hideModal": {
    "0%": {
      opacity: "100%",
      transform: 'scale(1, 1)',
    },
    "100%": {
      opacity: "0%",
      transform: 'scale(0.75, 0.5)',
    },
  },
}));
