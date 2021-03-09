import React from 'react'
import { AppBar, makeStyles } from "@material-ui/core";
import { Instagram, YouTube, Facebook } from "@material-ui/icons"
//import {useStyles} from './FooterStyles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,

    background: 'transparent', 
    boxShadow: 'none',

    marginBottom: 16,

    [theme.breakpoints.down("600")]: {
      height: '0%'
    },
  },

  appBarContainer: {
    width: '100%',
    
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginLeft: 16,
    marginRight: 16,

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
    fontSize: 32,
    marginLeft: 12,
    color: '#FFFFFF',

    [theme.breakpoints.down("600")]: {
      height: 0,
      fontSize: 0,
    },
  },

  text: {
    margin: 2,

    [theme.breakpoints.down("600")]: {
      height: 0,
      margin: 0
    },
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar} >
      <div className={classes.appBarContainer}>
        <div className={classes.appBarSubContainer}>
          <div className={classes.appBarInfo}>
            <p className={classes.text}>contato@tailwindaviation.com</p>
            <p className={classes.text}>31 0000-0000</p>
          </div>

          <div className={classes.appBarInfo}>
            <p className={classes.text}>Endereço n°0</p>
            <p className={classes.text}>Bairro, Belo Horizonte, MG</p>
          </div>
        </div>
        
        <div className={classes.appBarIcons}>
          <a href="https://www.instagram.com/?hl=pt-br" target="_blank" rel="noopener noreferrer" >
            <Instagram className={classes.icon} />
          </a>
          <a href="https://pt-br.facebook.com/" target="_blank" rel="noopener noreferrer" >
            <Facebook className={classes.icon} />
          </a>
          <a href="https://www.youtube.com/?hl=pt&gl=BR" target="_blank" rel="noopener noreferrer" >
            <YouTube className={classes.icon} />
          </a>
        </div>

      </div>
    </AppBar>
  );
};

export default Footer;