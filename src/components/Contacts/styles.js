import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  cardContacts: {
    maxWidth: '30vw',

    position: 'relative',
    left: '35vw',
    top: '75vh',

    opacity: '0%',

    backgroundColor: '#2596be',
    opacity: '50%',
  },

  cardContactsShow: {
    maxWidth: '30vw',
    position: 'relative',
    left: '35vw',
    top: '75vh',

    backgroundColor: '#2596be',
    opacity: '50%',

    animation: "$showContacts 1500ms linear forwards",
  },

  cardContactsHide: {
    maxWidth: '30vw',
    position: 'relative',
    left: '35vw',
    top: '75vh',

    backgroundColor: '#2596be',
    opacity: '50%',

    animation: "$hideContacts 1500ms linear forwards",
  },

  "@keyframes showContacts": {
    "0%": {
      opacity: '0%',
    },
    "100%": {
      opacity: '50%',
    },
  },

  "@keyframes hideContacts": {
    "0%": {
      opacity: '50%',
    },
    "100%": {
      opacity: '0%',
    },
  }

}));
