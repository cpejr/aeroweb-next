import { makeStyles } from "@material-ui/core";

export const useStylesHome = (props) => makeStyles(theme => ({

  homeContainer: {
    width: "100vw",
    height: "100vh",
  },

  homeContainerOldGradient: {
    position: 'relative',
    zIndex: 1,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    backgroundImage: props.oldGradient
  },

  homeGradienteMutavel: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    display: 'flex',
    opacity: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    animation:'$sumiu 1s',
    animationIiterationCount: 1,
    animationFillMode: 'forwards',
    backgroundImage: props.newGradient
  },

  "@keyframes sumiu": {
    "from": {
      opacity: '0%'
    },
    "to": {
      opacity: '100%'
    },
  },

  homeGradienteImutavel: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    display: 'flex',
    opacity: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: props.newGradient
  },

  logoDesktop: {
    width: '40vw',
    alignSelf: 'center'
  },

  homeContainerChildren: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url(/assets/ImagemDeFundo.svg)",
    backgroundSize: "auto 100%",
    backgroundRepeat: 'repeat',
    backgroundPosition: "left top",
    position: "absolute",
    overflow: "hidden",
  },

  rotaContainer: {
    // backgroundImage: "url(/assets/RotaDesktop.svg)",
    // backgroundSize: "contain",
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: "left top",
    zIndex: 90,
    height: '70vh',
    width: '100vw',
    maxWidth: `calc((70vh / 716) * 1641)`,
    marginTop: '20vh',
    position: 'absolute'

  },
  rotasImg: {
    width: '100%',
  },
  buttonHomeContainer: {
    height: '70vh',
    width: '100vw',
    maxWidth: `calc((70vh / 716) * 1641)`,
    marginTop: '20vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute'
  },
  buttonHome: {
    marginLeft: "22%",
    width: "fit-content",
    height: "2rem",
    marginTop: '0.5%',
    // [theme.breakpoints.down("415")]: {
    //   paddingTop: "20vh",
    //   paddingLeft: "23vw",
    //   width: "50px",
    //   height: "20px",
    // },
    //
    // [theme.breakpoints.between("415", "800")]: {
    //   paddingTop: "10vh",
    //   paddingLeft: "29vw",
    //   width: "50px",
    //   height: "20px",
    // },
    //
    // [theme.breakpoints.between("800", "1000")]: {
    //   paddingTop: "27vh",
    //   paddingLeft: "20vw",
    //   width: "50px",
    //   height: "20px",
    // },
  },

  buttonCursos: {
    width: 'fit-content',
    position: 'relative',
    marginLeft: '48.5%',
    marginTop: '2.75%',
    height: "2rem",
    // [theme.breakpoints.down("415")]: {
    //   paddingTop: "29vh",
    //   marginLeft: "20vw",
    //   width: "50px",
    //   height: undefined,
    // },
    //
    // [theme.breakpoints.between("415", "800")]: {
    //   paddingTop: "25vh",
    //   marginLeft: "16vw",
    //   width: "50px",
    //   height: undefined,
    // },
    //
    // [theme.breakpoints.between("800", "1000")]: {
    //   paddingTop: "33vh",
    //   width: "50px",
    //   height: "20px",
    //   marginLeft: "15vw",
    // },
  },
  buttonQuemSomos: {
    width: 'fit-content',
    height: "2rem",
    marginLeft: '68%',
    marginTop: '13.25%',
    // [theme.breakpoints.down("415")]: {
    //   paddingTop: "41vh",
    //   marginLeft: "0vw",
    //   width: "60px",
    //   height: "20px",
    // },
    //
    // [theme.breakpoints.between("415", "800")]: {
    //   paddingTop: "41vh",
    //   marginLeft: "0vw",
    //   width: "60px",
    //   height: "20px",
    // },
    //
    // [theme.breakpoints.between("800", "1000")]: {
    //   paddingTop: "50vh",
    //   width: "8rem",
    //   height: "20px",
    //   marginLeft: "14vw",
    // },
  },
  buttonContato: {
    width: 'fit-content',
    height: "2rem",
    position: 'relative',
    marginLeft: '89%',
    marginTop: '7.75%',
    // [theme.breakpoints.down("415")]: {
    //   paddingTop: "55vh",
    //   marginLeft: "0vw",
    //   width: "50px",
    //   height: "20px",
    // },
    //
    // [theme.breakpoints.between("415", "800")]: {
    //   paddingTop: "60vh",
    //   marginLeft: "1vw",
    //   width: "50px",
    //   height: "20px",
    // },
    //
    // [theme.breakpoints.between("800", "1000")]: {
    //   paddingTop: "62vh",
    //   marginLeft: "1vw",
    //   width: "50px",
    //   height: "20px",
    // },
    // [theme.breakpoints.down("500")]: {
    //   marginLeft: "0vw",
    // },
  },

  buttonPageHome: {
    color: '#100554',
    fontWeight: 500,
    fontSize: '1.15rem',
    margin: 0,
    textAlign: 'center',
    transition: 'color 0.5s, font-size 1.5s, border-bottom 1.5s',
    cursor: "pointer"
  },

  selectedButtonPageHome: {
    color: '#fff',
    fontWeight: 530,
    fontSize: "1.25rem",
    margin: 0,
    textAlign: 'center',
    cursor: "pointer",
    transition: "color 0.5s, font-size 1.5s, border-bottom 1.5s",
    borderBottom: '3px solid #fff',
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


export const useStylesAirPlane = (props) => makeStyles(theme => ({

  flying: {
    animation: "fly 0.5s",
  },
  planeContainer: {
    position: "absolute",
    left: props.posX,
    top: props.posY,
    transform: `rotate(${props.angle}deg)`,

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

}));
