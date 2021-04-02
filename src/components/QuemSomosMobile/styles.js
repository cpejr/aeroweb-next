import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  slideDiv: {
    display: 'contents'
  },
  
  cardSlide: {
    display: 'none'
  },

  cardSlideShow: {
    // posição
    position: 'relative',
    top: '70vh',
    left: '10vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 200,

    // estilo
    padding: 16,
    paddingTop: 4,
    elevation: 8,
    backgroundColor: '#F9F9F922',
    borderRadius: '6px',

    // animação
    animation:' $showSlide 1000ms linear forwards'
    
  },

  cardSlideHide: {
    // posição
    position: 'relative',
    top: '70vh',
    left: '10vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 300,

    // estilo
    padding: 16,
    paddingTop: 4,
    elevation: 8,
    backgroundColor: '#F9F9F922',
    borderRadius: '6px',

    // animação
    animation:' $hideSlide 1000ms linear forwards'
  },

  cardSlideUp: {
    // posição
    position: 'relative',
    left: '10vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 300,

    // estilo
    padding: 16,
    paddingTop: 4,
    elevation: 8,
    backgroundColor:' #3467ebEE',
    borderRadius: '6px',

    // animação
    animation:' $upSlide 1000ms linear forwards'
  },

  cardSlideDown: {
    // posição
    position: 'relative',
    left: '10vw',

    // dimensionamento
    maxWidth: '80%',
    zIndex: 300,

    // estilo
    padding: 16,
    paddingTop: 4,
    elevation: 8,
    backgroundColor:' #3467ebEE',
    borderRadius: '6px',

    // animação
    animation:' $downSlide 1000ms linear forwards'
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    border:'none',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    padddingLeft: '2px !important'
  },

  titleSlide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    width: '100%',
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
      left: '10vw',
      opacity: '100%',
    }
  },

  "@keyframes hideSlide": {
    "0%": {
      left: '10vw',
      opacity: '100%',
    },
    "100%": {
      left: '100vw',
      opacity: '0%',
    },
  },

  "@keyframes upSlide": {
    "0%": {
      top: '70vh',
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
      top: '70vh',
      backgroundColor: '#F9F9F922',
    },
  }


}));