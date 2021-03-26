import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  cardContacts: {
    maxWidth: '50vw',

    position: 'relative',
    left: '25vw',
    top: '24vh',

    opacity: '0%',

    backgroundColor: '#2234CCBB',
  },

  cardContactsShow: {
    maxWidth: '50vw',

    position: 'relative',
    left: '25vw',
    top: '24vh',

    backgroundColor: '#2234CCBB',

    animation: "$showContacts 1500ms linear forwards",
  },

  cardContactsHide: {
    maxWidth: '50vw',

    position: 'relative',
    left: '25vw',
    top: '24vh',

    backgroundColor: '#2234CCBB',

    animation: "$hideContacts 1500ms linear forwards",
  },

  cardContentContacts: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  buttonContacts: {
    marginTop: '16px',
    backgroundColor: '#ffffff'
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
    },
    "100%": {
      opacity: '0%',
    },
  }

}));
