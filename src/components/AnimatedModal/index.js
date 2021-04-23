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
import React, { useState } from "react";

function AnimatedModal({ close, open, title, text1, text2, text3, videoLink }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
                    <img
                      src="/assets/Tailwind2.svg"
                      style={{ height: "75px", fontFamily: "Roboto" }}
                    />
                    <Typography
                      variant="h5"
                      style={{ color: "#3467eb", fontFamily: "Roboto" }}
                    >
                      {title}
                    </Typography>
                    <ExpandMore
                      onClick={close}
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  <div className={classes.cardBody}>
                    <Typography
                      style={{ fontSize: "12px", fontFamily: "Roboto" }}
                    >
                      {text1}
                      <br />
                      {text2}
                      <br />
                      {text3}
                    </Typography>
                  </div>

                  <div className={classes.cardVideo} />

                  <div className={classes.cardPayments}>
                    <Typography
                      style={{
                        fontSize: "18px",
                        fontFamily: "Roboto",
                        color: "#3467eb",
                        fontWeight: 500,
                      }}
                    >
                      Formas de pagamento
                    </Typography>
                    <div className={classes.cardPayments2}>
                      <div className={classes.cardPayments3}>
                        <img src="/assets/Visa.png" alt="Forma de pagamento" />
                        <img
                          src="/assets/Mastercard.svg"
                          alt="Forma de pagamento"
                        />
                        <img
                          src="/assets/Paypal.png"
                          alt="Forma de pagamento"
                        />
                        <img
                          src="/assets/Samsungpay.png"
                          alt="Forma de pagamento"
                        />
                        <img
                          src="/assets/Hipercard.png"
                          alt="Forma de pagamento"
                        />
                      </div>
                      <div className={classes.cardPayments3}>
                        <img
                          style={{ width: "4vw", height: "4vh" }}
                          src="/assets/Googlepay.png"
                        />
                        <img
                          style={{ width: "4vw", height: "4vh" }}
                          src="/assets/Hiper.png"
                        />
                        <img
                          style={{ width: "4vw", height: "4vh" }}
                          src="/assets/American.png"
                        />
                        <img
                          style={{ width: "4vw", height: "4vh" }}
                          src="/assets/Diners.png"
                        />
                        <img
                          style={{ width: "4vw", height: "4vh" }}
                          src="/assets/Elo.png"
                        />
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
