import { makeStyles } from "@material-ui/core";
import isMobile from "../utils/isMobile";

export const useStylesHome = (props) => makeStyles(theme => ({

  homeContainer: {
    width: "100vw",
    height: "100vh",
    overflow: 'hidden'
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
    position: "absolute",
    width: '100vw',
    height: '30vh',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down(900)]: {
      height: '28vh',
    },

    [theme.breakpoints.down(750)]: {
      height: '25vh',
    },
  },

  logoImgDesktop: {
    position: "absolute",
    height: '100%'
  },

  logoMobile: {
    position: "absolute",
    width: '100vw',
    height: '5vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5vh'
  },

  logoImgMobile: {
    position: "absolute",
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
    zIndex: 90,
    height: '70vh',
    maxHeight: isMobile ? `calc((100vw / 332) * 373)` : `calc((100vw / 1641) * 716)`,
    width: '90vw',
    maxWidth: isMobile ? `calc((70vh / 373) * 332)` : `calc((70vh / 716) * 1641)`,
    marginTop: isMobile ? '12vh' : '25vh',
    position: 'absolute'
  },
  rotasImg: {
    width: '100%',
  },
  buttonHomeContainer: {
    height: '70vh',
    maxHeight: isMobile ? `calc((100vw / 332) * 373)` : `calc((100vw / 1641) * 716)`,
    width: '90vw',
    maxWidth:  isMobile ? `calc((70vh / 373) * 332)` : `calc((70vh / 716) * 1641)`,
    marginTop: isMobile ? '12vh' : '25vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute'
  },
  buttonHome:
    isMobile?
      {
        marginLeft: "28%",
        marginTop: "9%",
        width: "fit-content",
        height: "1rem",
        position: 'relative',
      } : {
        marginLeft: "22%",
        marginTop: "1.5%",
        width: "fit-content",
        height: "2rem",
        position: 'relative',

        [theme.breakpoints.down(1370)]: {
          marginTop: 0,
        },

        [theme.breakpoints.down(850)]: {
          marginTop: '-1%',
        },
      },

  buttonCursos:
    isMobile ?
      {
        width: 'fit-content',
        position: 'relative',
        marginLeft: '53%',
        marginTop: '16%',
        height: "1rem",
      } : {
        width: 'fit-content',
        position: 'relative',
        marginLeft: '48.5%',
        marginTop: '4%',
        height: "2rem",

        [theme.breakpoints.down(1370)]: {
          marginTop: '2.75%',
        },

        [theme.breakpoints.down(1000)]: {
          marginTop: '2%',
        },

        [theme.breakpoints.down(900)]: {
          marginTop: '1.5%',
        },

        [theme.breakpoints.down(730)]: {
          marginTop: '1%',
        },

        [theme.breakpoints.down(630)]: {
          marginTop: '0%',
        },

        [theme.breakpoints.down(600)]: {
          marginTop: '-1%',
        },

        [theme.breakpoints.down(550)]: {
          marginTop: '-2%',
        },
      },
  buttonQuemSomos:
    isMobile ?
      {
        width: 'max-content',
        height: "1rem",
        position: 'relative',
        marginLeft: '61%',
        marginTop: '27%',
      } : {
        width: 'max-content',
        height: "2rem",
        position: 'relative',
        marginLeft: '68.25%',
        marginTop: '14.25%',

        [theme.breakpoints.down(1370)]: {
          marginTop: '13.25%',
        },

        [theme.breakpoints.down(1170)]: {
          marginTop: '12%',
        },

        [theme.breakpoints.down(780)]: {
          marginTop: '11%',
        },

        [theme.breakpoints.down(680)]: {
          marginTop: '10%',
        },

        [theme.breakpoints.down(550)]: {
          marginTop: '9%',
        },
      },

  buttonContato:
    isMobile ?
      {
        width: 'fit-content',
        height: "1rem",
        position: 'relative',
        marginLeft: '84%',
        marginTop: '25%',
      } : {
        width: 'fit-content',
        height: "2rem",
        position: 'relative',
        marginLeft: '89%',
        marginTop: '9.5%',

        [theme.breakpoints.down(1370)]: {
          marginTop: '7.75%',
        },

        [theme.breakpoints.down(980)]: {
          marginTop: '7%',
        },

        [theme.breakpoints.down(880)]: {
          marginTop: '6.5%',
        },

        [theme.breakpoints.down(720)]: {
          marginTop: '5.5%',
        },

        [theme.breakpoints.down(530)]: {
          marginTop: '4.5%',
        },
      },

  buttonPageHome: {
    color: '#100554',
    fontWeight: 500,
    fontSize: '1.15rem',
    letterSpacing: '0.15rem',
    margin: 0,
    textAlign: 'center',
    transition: 'color 0.5s, font-size 1.5s, border-bottom 1.5s',
    cursor: "pointer",
    [theme.breakpoints.down(850)]: {
      fontSize: '1.05rem',
    },
    [theme.breakpoints.down(700)]: {
      fontSize: '0.95rem',
    },
    [theme.breakpoints.down(600)]: {
      fontSize: '0.85rem',
    },
    [theme.breakpoints.down(501)]: {
      fontSize: '0.75rem',
    },
  },

  selectedButtonPageHome: {
    color: '#fff',
    fontWeight: 500,
    fontSize: "1.25rem",
    letterSpacing: '0.15rem',
    margin: 0,
    textAlign: 'center',
    cursor: "pointer",
    transition: "color 0.5s, font-size 1.5s, border-bottom 1.5s",
    borderBottom: '3px solid #fff',
    [theme.breakpoints.down(850)]: {
      fontSize: '1.15rem',
    },
    [theme.breakpoints.down(700)]: {
      fontSize: '1.05rem',
      borderBottom: '2.5px solid #fff',
    },
    [theme.breakpoints.down(600)]: {
      fontSize: '0.95rem',
      borderBottom: '2.25px solid #fff',
    },
    [theme.breakpoints.down(501)]: {
      fontSize: '0.85rem',
      borderBottom: '2px solid #fff',
    },
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

  aviaoHomeShow: {
    position: "absolute",
    zIndex: "100",
    maxHeight: "77.50vh",
    maxWidth: "70vw",
    opacity: 1,
    bottom: 0,
    left: 0,
    transition: "opacity 1s",
    [theme.breakpoints.down(600)]: {
      display: 'none'
    },
  },

  aviaoHomeHide: {
    position: "absolute",
    zIndex: "100",
    maxHeight: "77.50vh",
    maxWidth: "70vw",
    opacity: 0,
    bottom: 0,
    left: 0,
    transition: "opacity 1s",
    [theme.breakpoints.down(600)]: {
      display: 'none'
    },
  },

  aviaoHomeTitleShow: {
    position: "absolute",
    left: "4vw",
    top: "65vh",
    margin: "0",
    transformOrigin: "center",
    // width: "38vw",
    maxWidth: "70vw",
    zIndex: "200",
    color: "#fff",
    opacity: 1,

    transition: "opacity 1s",

    [theme.breakpoints.down(600)]: {
      display: 'none'
    },
  },

  aviaoHomeTitleHide: {
    position: "absolute",
    left: "4vw",
    top: "65vh",
    margin: "0",
    transformOrigin: "center",
    // width: "38vw",
    maxWidth: "70vw",
    zIndex: "200",
    color: "#fff",
    opacity: 0,

    transition: "opacity 1s",

    [theme.breakpoints.down(600)]: {
      display: 'none'
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
}));


export const useStylesAirPlane = (props) => makeStyles(theme => ({
  planeContainer: {
    position: "absolute",
    left: props.posX,
    top: props.posY,
    transform: `rotate(${props.angle}deg)`,
    width: 40,
    height: 40,
    transformOrigin: "center",
    zIndex: "200",
    transition:
      "top 1.5s ease-in-out, left 1.5s ease-in-out, width 1.5s ease-in-out, height 1.5s ease-in-out",

    [theme.breakpoints.down(850)]: {
      width: 35,
      height: 35,
    },
    [theme.breakpoints.down(700)]: {
      width: 32,
      height: 32,
    },
    [theme.breakpoints.down(600)]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.down(501)]: {
      width: 28,
      height: 28,
    },
  },

  plane: {
    width: '100%',
    height: '100%',
  },
}));
