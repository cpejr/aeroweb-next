import React from "react";
import {
  Button,
  Modal,
  Fade,
  Grow,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useStyles } from "./styles";

function AnimatedModal({ open, close, title, text1, text2, text3, videoLink }) {
  const classes = useStyles();

  return (
    <div className={classes.container} >
      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        className={classes.modalBackground}
      >
        <Grow in={open} timeout={2500} className={classes.growContent}>
          <Fade in={open} timeout={2500}>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                      <img src="/assets/Tailwind2.svg" style={{height:'75px', fontFamily: 'Roboto'}}></img>
                      <Typography variant="h5" style={{ color: "#3467eb", fontFamily: 'Roboto' }}>
                        { title }
                      </Typography>
                      <ExpandMore
                        onClick={close}
                        fontSize="large"
                        style={{cursor: "pointer"}}
                      />
                    </div>

                    <div className={classes.cardBody}>
                      <Typography style={{ fontSize: '12px', fontFamily: 'Roboto' }} >
                        { text1 }
                        <br />
                        { text2 }
                        <br />
                        { text3 }
                      </Typography>
                    </div>

                    <div className={classes.cardVideo}>

                    </div>

                    <div className={classes.cardPayments}>
                      <Typography style={{ fontSize: '18px', fontFamily: 'Roboto', color: "#3467eb", fontWeight: 500 }} >
                        Formas de pagamento
                      </Typography>
                      <div className={classes.cardPayments2}>
                        <div className={classes.cardPayments3}>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Visa.png"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Mastercard.svg"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Paypal.png"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Samsungpay.png"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Hipercard.png"></img>
                        </div>
                        <div className={classes.cardPayments3}>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Googlepay.png"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Hiper.png"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/American.png"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Diners.png"></img>
                          <img style={{width: '4vw', height: '4vh'}} src="/assets/Elo.png"></img>
                        </div>
                      </div>
                    </div>

                  </div>
                </CardContent>

                <CardActions>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      onClick={close}
                    >
                      Garanta sua vaga
                    </Button>
                    
                  </div>
                </CardActions>
              </Card>
          </Fade>
        </Grow>
      </Modal>
    </div>
  );
}

export default AnimatedModal;
