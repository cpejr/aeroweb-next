import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: 'contents',
  },

  backdropUp: { // evita clicar nos botões de fundo
    zIndex: 400
  },
  
  cardSlide: {
    // posição
    position: 'relative',
    top: '80vh',
    left: '11.50vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 200,

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: '#F9F9F922',
    borderRadius: '6px',
    // overflow: 'scroll',

    display: 'none',
  },

  cardSlideShow: {
    // posição
    position: 'relative',
    top: '80vh',
    left: '11.50vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 200,

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: '#F9F9F922',
    borderRadius: '6px',
    // overflow: 'scroll',

    // animação
    animation:' $showSlide 1000ms linear forwards'
  },

  cardSlideHide: {
    // posição
    position: 'relative',
    top: '80vh',
    left: '11.50vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 300,

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor: '#F9F9F922',
    borderRadius: '6px',
    // overflow: 'scroll',

    // animação
    animation:' $hideSlide 1000ms linear forwards'
  },

  cardSlideUp: {
    // posição
    position: 'relative',
    left: '11.50vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 300,

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor:' #3467ebEE',
    borderRadius: '6px',
    overflowY: 'scroll',

    // animação
    animation: '$upSlide 1000ms linear forwards'
  },

  cardSlideDown: {
    // posição
    position: 'relative',
    left: '11.50vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 300,

    // estilo
    padding: 16,
    paddingTop: 8,
    elevation: 8,
    backgroundColor:' #3467ebEE',
    borderRadius: '6px',
    // overflow: 'scroll',

    // animação
    animation: '$downSlide 1000ms linear forwards'
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    border:'none',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    padddingLeft: '2px !important',
  },

  titleSlide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    width: '100%',
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
      display: 'initial'
    },
    "99%": {
      left: '99vw',
      opacity: '1%',
      display: 'initial'
    },
    "100%": {
      left: '100vw',
      opacity: '0%',
      display: 'none'
    },
  },

  "@keyframes upSlide": {
    "0%": {
      top: '80vh',
      backgroundColor: '#F9F9F922',
    },
    "100%": {
      top: '10vh',
      backgroundColor:' #3467ebEE',
    }
  },

  "@keyframes downSlide": {
    "0%": {
      top: '10vh',
      backgroundColor:' #3467ebEE',
    },
    "100%": {
      top: '80vh',
      backgroundColor: '#F9F9F922',
    },
  }


}));