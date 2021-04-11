import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
  cardContactsMobile: {
    maxWidth: '80vw',
    height: 'auto',

    position: 'relative',
    left: '10vw',
    top: '12.50vh',

    opacity: '0%',
    display: 'none',
  },

  cardContactsMobileShow: {
    maxWidth: '80vw',
    height: 'auto',

    position: 'relative',
    left: '10vw',
    top: '80vh',

    backgroundColor: '#F9F9F922',
    overflowY: 'scroll',

    animation: "$showContacts 1000ms linear forwards",
  },

  cardContactsMobileHide: {
    maxWidth: '80vw',
    height: 'auto',

    position: 'relative',
    left: '10vw',
    top: '80vh',

    backgroundColor: '#F9F9F922',
    overflowY: 'scroll',

    animation: "$hideContacts 1000ms linear forwards",
  },

  cardContactsMobileUp: {
    maxWidth: '80vw',
    height: 'auto',

    position: 'relative',
    left: '10vw',

    backgroundColor: '#2234CCFF',
    overflowY: 'scroll',

    animation: "$upContacts 1000ms linear forwards",
  },

  cardContactsMobileDown: {
    maxWidth: '80vw',
    height: 'auto',

    position: 'relative',
    left: '10vw',

    backgroundColor: '#2234CCFF',
    overflowY: 'scroll',

    animation: "$downContacts 1000ms linear forwards",
  },

  cardContentContacts: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  titleContacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    width: '100%',
  },

  buttonContacts: {
    marginTop: '16px',
    backgroundColor: 'white',
    transition: 'background-color 0.2s',

    borderRadius: '8px',
    "&:hover": {
      backgroundColor: "#ffffffbb",
    },
  },

  cssLabel: {
    color : 'white',
  },

  textfield: {
    color: 'white',
    height: 24,
  },

  textfieldMsg: {
    color: 'white',
    // height: 24,
  },

  textfieldFont: {
    color: 'white', 
    fontSize: 12
  },

  underline: {
    '&:before': {
      borderBottomColor: '#ffffff',
    },
    '&:after': {
      borderBottomColor: '#ffffff',
    },
    '&:hover:before': {
      borderBottomColor: '#ffffff',
    },
    '&:hover:after': {
      borderBottomColor: '#ffffff',
    },
  },

  appBarIcons: {
    display: 'flex',
    flexDirection: 'center',
    justifyContent: 'flex-start',

    width: '100%',
    marginTop: '16px'
  },

  icon: {
    fontSize: 32,
    color: 'white',
  },

  "@keyframes showContacts": {
    "0%": {
      opacity: '0%',
      left: '100vw',
    },
    "100%": {
      opacity: '100%',
      left: '10vw',
    },
  },

  "@keyframes hideContacts": {
    "0%": {
      opacity: '100%',
      height: 'auto',
      left: '10vw'
    },
    "95%": {
      opacity: '5%',
      height: 'auto',
      left: '98vw'
    },
    "100%": {
      opacity: '0%',
      height: '0px',
      left: '100vw'
    },
  },

  "@keyframes upContacts": {
    "0%": {
      backgroundColor: '#F9F9F922',
      top: '80vh',
    },
    "100%": {
      backgroundColor:' #3467ebEE',
      top: '10vh',
    },
  },

  "@keyframes downContacts": {
    "0%": {
      backgroundColor:' #3467ebEE',
      top: '10vh',
    },
    "100%": {
      backgroundColor: '#F9F9F922',
      top: '80vh',
    },
  },

}));