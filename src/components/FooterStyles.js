import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,

    background: 'transparent',
    boxShadow: 'none'
  },

  appBarContainer: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.down("600")]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  appBarSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    [theme.breakpoints.down("600")]: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  appBarInfo: {
    marginLeft: 32,
    marginRight: 32,

    textAlign: 'left',

    [theme.breakpoints.down("600")]: {
      marginLeft: 0,
      marginRight: 0,
      textAlign: 'center',
    },
  },

  appBarIcons: {
    marginRight: 32,

    [theme.breakpoints.down("600")]: {
      marginRight: 0,
    },
  },

  icon: {
    fontSize: 40,
  },
}));