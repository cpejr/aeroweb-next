import React from "react";
import { AppBar } from "@material-ui/core";
import { Instagram, YouTube, Facebook } from "@material-ui/icons";
import { useStyles } from "../../stylesJs/footerStyle";

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <div className={classes.appBarContainer}>
        <div className={classes.appBarSubContainer}>
          <div className={classes.appBarInfo}>
            <p className={classes.text}>contato@twcourses.com.br</p>
            <p className={classes.text}>31 0000-0000</p>
          </div>

          <div className={classes.appBarInfo}>
            <p className={classes.text}>Endereço n°0</p>
            <p className={classes.text}>Bairro, Belo Horizonte, MG</p>
          </div>
        </div>

        <div className={classes.appBarIcons}>
          <a
            href="https://www.instagram.com/tailwindaviation_/?igshid=e1xunf1mbnxw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className={classes.icon} />
          </a>
          <a
            href="https://www.facebook.com/tailwindaviation_-101677271700685/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className={classes.icon} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCKyRogxlGFKulDlpBgfnokA/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube className={classes.icon} />
          </a>
        </div>
      </div>
    </AppBar>
  );
}

export default Footer;
