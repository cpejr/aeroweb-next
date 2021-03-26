import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
  cardContacts: {
    maxWidth: '50vw',
    height: 'auto',

    position: 'relative',
    left: '25vw',
    top: '35vh',

    opacity: '0%',
    display: 'none',
    

    backgroundColor: '#2234CCBB',
  },

  cardContactsShow: {
    maxWidth: '50vw',
    height: 'auto',

    position: 'relative',
    left: '25vw',
    top: '35vh',

    backgroundColor: '#2234CCBB',

    animation: "$showContacts 1000ms linear forwards",
  },

  cardContactsHide: {
    maxWidth: '50vw',
    height: 'auto',

    position: 'relative',
    left: '25vw',
    top: '35vh',

    backgroundColor: '#2234CCBB',

    animation: "$hideContacts 1000ms linear forwards",
  },

  cardContentContacts: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  buttonContacts: {
    marginTop: '16px',
    backgroundColor: '#bbbbb4',

    borderRadius: '8px',
    "&:hover": {
      backgroundColor: "#bbbbb4",
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

  "@keyframes showContacts": {
    "0%": {
      opacity: '0%',
    },
    "100%": {
      opacity: '100%',
    },
  },

  "@keyframes hideContacts": {
    "0%": {
      opacity: '100%',
      height: 'auto',
    },
    "50%": {
      opacity: '50%',
      height: 'auto',
    },
    "95%": {
      opacity: '5%',
      height: 'auto',
    },
    "100%": {
      opacity: '0%',
      height: '0px',
    },
  }

}));