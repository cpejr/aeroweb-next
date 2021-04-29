import { makeStyles } from "@material-ui/core";

import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "1700px",
    [theme.breakpoints.down("500")]: {
      position: "fixed",
    },

    overflow: "hidden",
    // filter: 'blur(5px)',
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
    // filter: 'blur(5px)',
  },
  homeGeneral: {
    display: "flex",
  },

  buttonHome: {
    paddingTop: "15vh",
    paddingLeft: "18vw",
    width: "4.5",
    height: "24px",

    [theme.breakpoints.down("415")]: {
      paddingTop: "30vh",
      paddingLeft: "23vw",
      width: "50px",
      height: "20px",
    },

    [theme.breakpoints.between("415", "800")]: {
      paddingTop: "20vh",
      paddingLeft: "29vw",
      width: "50px",
      height: "20px",
    },

    [theme.breakpoints.between("800", "1000")]: {
      paddingTop: "27vh",
      paddingLeft: "20vw",
      width: "50px",
      height: "20px",
    },
  },

  button2: {
    paddingTop: "26vh",
    marginLeft: "18vw",
    width: "4rem",
    height: "20px",

    [theme.breakpoints.down("415")]: {
      paddingTop: "39vh",
      marginLeft: "20vw",
      width: "50px",
      height: undefined,
    },

    [theme.breakpoints.between("415", "800")]: {
      paddingTop: "35vh",
      marginLeft: "16vw",
      width: "50px",
      height: undefined,
    },

    [theme.breakpoints.between("800", "1000")]: {
      paddingTop: "33vh",
      marginLeft: "20vw",
      width: "50px",
      height: "20px",
      marginLeft: "15vw",
    },
  },
  button3: {
    paddingTop: "53vh",
    marginLeft: "11vw",
    width: "8rem",
    height: "20px",
    [theme.breakpoints.down("415")]: {
      paddingTop: "51vh",
      marginLeft: "0vw",
      width: "60px",
      height: "20px",
    },

    [theme.breakpoints.between("415", "800")]: {
      paddingTop: "51vh",
      marginLeft: "0vw",
      width: "60px",
      height: "20px",
    },

    [theme.breakpoints.between("800", "1000")]: {
      paddingTop: "50vh",
      marginLeft: "12vw",
      width: "8rem",
      height: "20px",
      marginLeft: "14vw",
    },
  },
  button4: {
    paddingTop: "70vh",
    marginLeft: "8vw",

    width: "5.5rem",
    height: "22px",
    [theme.breakpoints.down("415")]: {
      paddingTop: "65vh",
      marginLeft: "0vw",
      width: "50px",
      height: "20px",
    },

    [theme.breakpoints.between("415", "800")]: {
      paddingTop: "70vh",
      marginLeft: "1vw",
      width: "50px",
      height: "20px",
    },

    [theme.breakpoints.between("800", "1000")]: {
      paddingTop: "62vh",
      marginLeft: "1vw",
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

  footerTitle1: {
    fontSize: "4.5vh",
    [theme.breakpoints.down("1000")]: {
      fontSize: "3.5vh",
    },
  },

  footerTitle2: {
    fontSize: "4.5vh",
    [theme.breakpoints.down("1000")]: {
      fontSize: "3.5vh",
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
