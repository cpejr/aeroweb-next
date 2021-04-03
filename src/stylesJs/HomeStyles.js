import { makeStyles } from "@material-ui/core";

import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "1700px",
    [theme.breakpoints.down("500")]: {
      position: "fixed",
    },

    overflow: "hidden",
  },
  homeContainerChildren: {
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url(/assets/ImagemDeFundo.svg)",
    backgroundSize: "cover",
    position: "absolute",
    [theme.breakpoints.down("500")]: {
      position: "absolute",
    },

    overflow: "hidden",
  },
  homeGeneral: {
    display: "flex",
  },

  buttonHome: {
    paddingTop: "15vh",
    paddingLeft: "12vw",
    width: "4.5",
    height: "24px",

    [theme.breakpoints.down("765")]: {
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

    [theme.breakpoints.down("765")]: {
      paddingLeft: "5vw",
      width: "50px",
      height: "20px",
      marginLeft: "15vw",
    },
  },
  button3: {
    paddingTop: "48vh",
    marginLeft: "17vw",
    width: "4rem",
    height: "20px",
    [theme.breakpoints.down("765")]: {
      paddingLeft: "5vw",
      width: "50px",
      height: "20px",
      marginLeft: "14vw",
    },
  },
  button4: {
    paddingTop: "68vh",
    marginLeft: "28vw",

    width: "5.5rem",
    height: "22px",
    [theme.breakpoints.down("765")]: {
      width: "50px",
      height: "20px",
    },
    [theme.breakpoints.down("500")]: {
      marginLeft: "0vw",
    },
  },
  flying: {
    animation: "fly 0.5s",
  },
  planeContainer: {
    position: "absolute",
    left: "44vw",
    top: "0.1vh",

    transformOrigin: "center",
    zIndex: "200",
    transition:
      "top 1.5s ease-in-out, left 1.5s ease-in-out, width 1.5s ease-in-out, height 1.5s ease-in-out",
    [theme.breakpoints.down("500")]: {
      left: "28vw",
      top: "6vh",
    },
    [theme.breakpoints.down("376")]: {
      left: "24vw",
      top: "6vh",
    },
  },
  planeContainerMobile: {
    position: "absolute",
    left: "30vw",
    top: "0.1vh",
    [theme.breakpoints.down("500")]: {
      left: "4.5rem",
      top: "6vh",
    },
    [theme.breakpoints.down("376")]: {
      left: "2.9rem",
      top: "6vh",
    },
    [theme.breakpoints.down("361")]: {
      left: "2.6rem",
      top: "6vh",
    },
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
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(-75%)",
    },
  },

  "@keyframes downCard": {
    "0%": {
      transform: "translateY(-75%)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
}));

export default useStyles;
