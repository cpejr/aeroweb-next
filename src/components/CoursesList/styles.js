import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '175px'
  },

  cardButtons: {
    width: '100%',
    background: 'transparent', 
    backgroundColor: '#CCCCCCFF',

    //animation: '$downList 1000ms ease-in-out forwards'
  },

  cardButtonsUp: {
    width: '100%',
    background: 'transparent', 
    backgroundColor: '#CCCCCCFF',
    // height: '100%',

    animation: '$upList 1000ms ease-in-out forwards'
  },

  cardButtonsDown: {
    width: '100%',
    background: 'transparent', 
    backgroundColor: '#CCCCCCFF',
    backdropFilter: 'blur(5px)',
    // height: '100%',

    animation: '$downList 1000ms ease-in-out forwards'
  },

  cardContentButtons: {
    padding: 2,
    '&:last-child': {
      paddingBottom: 2
    },
    background: 'transparent'
  },

  buttonsList: {
    color: '#FFFFFF', 
    backgroundColor: '#CCCCCC77', 
    backdropFilter: 'blur(5px)',
    background: 'transparent'
  },

  // "@keyframes downList": {
  //   "0%": {
  //     height: 0,
  //   },
  //   "100%": {
  //     height: 200,
  //   }
  // },

  // "@keyframes upList": {
  //   "0%": {
  //     height: 90,
  //   },
  //   "100%": {
  //     height: 200,
  //   },
  // }
}));
