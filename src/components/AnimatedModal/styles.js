import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: '5%',
  },

  root: {
    width: '100%',
    maxWidth: 360,
  },

  modalBackground: {
    backgroundColor:' #3467eb77',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  growContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    outline: '0',
  },

  backDrop: {
    backdropFilter: 'blur(3px)',
    backgroundColor:'rgba(0,0,30,0.4)'
  },

  card: {
    maxWidth: '50%',

    padding: 16,
    elevation: 8
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
  },

  cardTitle: {
    width: '95%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 16
  },

  cardBody: {
    width: '95%',

    display: 'flex',
    flexDirection: 'column',
  },

  buttonContainer: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '2vh',
  },

  button: {
    backgroundColor: '#3467eb',
    color: 'white',
    '&:hover': {
      backgroundColor: '#3467eb'
    }
  },

  buttonOut: {
    '&:hover': {
      borderBottom: '4px solid'
    }
  },

  media: {
    height: "30%",
    width: "30%"
  },

  cardVideo: {
    width: '60%',
    height: '30vh',

    display: 'flex',
    flexDirection: 'column',

    border: '1px solid #3467eb',
    marginTop: '2vh',
  },

  cardPayments: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    marginTop: '24px',
  },

  cardPayments2: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2vw',
  },
  cardPayments3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& | &': {
      marginTop: '16px',
    },
    '& img': {
      width: '58px',
      height: '30px',
    }
  },
}));