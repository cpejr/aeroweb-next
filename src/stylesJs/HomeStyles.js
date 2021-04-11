import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "1700px",

    overflow: 'hidden'
  },
  homeContainerChildren: {
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url(/assets/ImagemDeFundo.svg)",
    backgroundSize: "cover",
    position: "absolute",

    overflow: 'hidden',
  },
  homeGeneral: {
    display: "flex",
  },

  buttonHome: {
    paddingTop: "15vh",
    paddingLeft: "12vw",
    width: "4.5",
    height: "24px",

    [theme.breakpoints.down("600")]: {
      paddingLeft: "5vw",
      width: "50px",
      height: "20px",
    },
  },

  button2: {
    paddingTop: "30vh",
    marginLeft: "18vw",
    width: "4rem",
    height: "20px",

    [theme.breakpoints.down("600")]: {
      marginLeft: "18vw",
      width: "50px",
      height: undefined,
    },
  },
  button3: {
    paddingTop: "48vh",
    marginLeft: "17vw",
    width: "4rem",
    height: "20px",
    [theme.breakpoints.down("600")]: {
      marginLeft: "5vw",
      width: "50px",
      height: "20px",
    },
  },
  button4: {
    paddingTop: "68vh",
    marginLeft: "28vw",

    width: "5.5rem",
    height: "22px",
    [theme.breakpoints.down("1050")]: {
      marginLeft: "5vw",
      width: "50px",
      height: "20px",
    },
  },
  flying: {
    animation: "fly 0.5s",
  },
  planeContainer: {
    left: 0,
    top: 0,
    transition:
      "top 1.5s ease-in-out, left 1.5s ease-in-out, width 1.5s ease-in-out, height 1.5s ease-in-out",
  },
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

  fadeRoot: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },

  card: {
    maxWidth: "50%",
    [theme.breakpoints.down("765")]: {
      maxWidth: "80%",
      maxHeight: "90%",
    },

    padding: 16,
    elevation: 8,

    overflow: "auto",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
  },

  cardTitle: {
    width: "95%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 16,
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
    "&:hover": {
      backgroundColor: "#3467eb",
    },
  },

  buttonOut: {
    "&:hover": {
      borderBottom: "4px solid",
    },
  },

  footerTitle1: {
    fontSize: '4.5vh',
    [theme.breakpoints.down("1000")]: {
      fontSize: '3.5vh',
    },
  },

  footerTitle2: {
    fontSize: '4.5vh',
    [theme.breakpoints.down("1000")]: {
      fontSize: '3.5vh',
    },
  },

  cardMobile: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    position: "relative",
    top: "75%",

    //animation: '$upCard 1500ms ease-in-out forwards'
  },

  cardMobileUp: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    position: "relative",
    top: "75%",
    animation: "$upCard 1500ms ease-in-out forwards",
  },

  cardMobileDown: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    position: "relative",
    top: "75%",
    animation: "$downCard 1500ms linear forwards",
  },

  

  // animações de transição dos modais
  "@keyframes upCard": {
    "0%": {
      transform: "translateY(0)"
    },
    "100%": {
      transform: "translateY(-75%)",
    }
  },

  "@keyframes downCard": {
    "0%": {
      transform: "translateY(-75%)"
    },
    "100%": {
      transform: "translateY(0)",
    }
  },
}));

export default useStyles;
