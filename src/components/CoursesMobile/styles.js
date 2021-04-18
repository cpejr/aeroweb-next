import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cardButtons: {
    // posição
    position: 'absolute',
    left: '11.50vw',
    top: '80vh',

    // dimensionamento
    maxWidth: '80vw',
    zIndex: 300,
    height: '20vh',

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor:' #CCCCCC55',
    borderRadius: '6px',
    overflowY: 'scroll',
    display: 'none',

  },

  cardButtonsShow: {
    // posição
    position: 'absolute',
    left: '11.50vw',
    top: '80vh',

    // dimensionamento
    maxWidth: '80vw',
    zIndex: 300,
    height: '20vh',

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor:' #CCCCCC55',
    borderRadius: '6px',
    overflowY: 'scroll',

    // animação
    animation: '$showSlide 1000ms linear forwards'
  },

  cardButtonsHide: {
    // posição
    position: 'absolute',
    left: '11.50vw',
    top: '80vh',

    // dimensionamento
    maxWidth: '80vw',
    zIndex: 300,
    height: '20vh',

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor:' #CCCCCC55',
    borderRadius: '6px',
    overflowY: 'scroll',

    // animação
    animation: '$hideSlide 1000ms linear forwards'
  },

  cardButtonsFadeIn: {
    // posição
    position: 'absolute',
    left: '11.50vw',
    top: '80vh',

    // dimensionamento
    maxWidth: '80vw',
    zIndex: 300,
    height: '20vh',

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor:' #CCCCCC55',
    borderRadius: '6px',
    overflowY: 'scroll',

    // animação
    // animation: '$fadeInSlide 1000ms linear forwards'
  },

  cardButtonsFadeOut: {
    // posição
    position: 'absolute',
    left: '11.50vw',
    top: '80vh',

    // dimensionamento
    maxWidth: '80vw',
    zIndex: 300,
    height: '20vh',

    // estilo
    padding: 4,
    elevation: 8,
    backgroundColor:' #CCCCCC55',
    borderRadius: '6px',
    overflowY: 'scroll',

    // animação
    // animation: '$fadeOutSlide 250ms linear forwards'
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    border:'none',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    padding: '4px !important',
    '&:last-child': {
      paddingBottom: '4px !important'
    }
  },

  buttonsLine: {
    width: '75vw',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonsList: {
    marginTop: '10px',
    marginBottom: '10px',

    backgroundColor: 'inherit !important',

    flex: 9,
  },

  icon: {
    flex: 1,
  },
  
  text: {
    fontSize: '11.25px',
    lineHeight: '13px',
    
    // responsividade telas mobile e tablet
    '@media (min-width: 400px)' : {
      fontSize: '12.50px',
      lineHeight: '13.50px',
    },
    '@media (min-width: 600px)' : {
      fontSize: '14px',
      lineHeight: '16px',
    },
    '@media (max-width: 325px)' : {
      fontSize: '9.50px',
      lineHeight: '10.50px',
    },
  },

  line: {
    lineHeight: '13px',
  },

  cardVideo: {
    width: '100%',
    height: '15vh',

    display: 'flex',
    flexDirection: 'column',
    border: '1px solid white',
    marginTop: '24px',
    marginBottom: '4px'
  },

  "@keyframes showSlide": {
    "0%": {
      left: '100vw',
      opacity: '0%',
    },
    "100%": {
      left: '11.50vw',
      opacity: '100%',
    }
  },

  "@keyframes hideSlide": {
    "0%": {
      left: '11.50vw',
      opacity: '100%',
      display: 'initial',
      height: '20vh',
    },
    "99%": {
      left: '99vw',
      opacity: '1%',
      display: 'initial',
      height: '20vh',
    },
    "100%": {
      left: '100vw',
      opacity: '0%',
      height: '0px',
      display: 'none',
    },
  },

  "@keyframes fadeInSlide": {
    "0%": {
      opacity: '100%',
      display: 'initial',
    },
    "99%": {
      opacity: '1%',
      display: 'initial',
    },
    "100%": {
      opacity: '0%',
      display: 'none',
    },
  },

  "@keyframes fadeOutSlide": {
    "0%": {
      opacity: '0%',
    },
    "100%": {
      opacity: '100%',
    },
  },

}));