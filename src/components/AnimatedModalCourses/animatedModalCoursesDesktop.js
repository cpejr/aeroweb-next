import {
  Button,
  Modal,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useStyles } from "../../stylesJs/animatedModalCoursesDesktopStyle";
import React, { useState, useEffect } from "react";
import listaCursos from "../../../public/contents/listaCursos";

function AnimatedModalCoursesDesktop({
  close,
  animationControl,
  indexCurso,
}) {
  const classes = useStyles();
  const curso = listaCursos[indexCurso];
  const [cardClass, setCardClass] = useState(classes.card);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (animationControl === "standby") {
      setCardClass(classes.card);
    } else if (animationControl === "show") {
      setCardClass(classes.cardShow);
      setOpen(true);
    } else if (animationControl === "hide") {
      setCardClass(classes.cardHide);
      setOpen(false);
    }
  }, [animationControl]);

  const handleClose = () => {
    setCardClass(classes.cardHide);
    setTimeout(() => {
      close();
    }, 1000);
  };

  return (
    <Modal open={open} onClose={handleClose} onBackdropClick={handleClose}>
      <Card className={cardClass}>
        <CardContent className={classes.cardContentContainer}>
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <img
                src="/assets/Tailwind2.svg"
                style={{
                  height: "100px",
                  width: "100px",
                  fontFamily: "Roboto",
                }}
                alt="Logomarca da Tailwind Aviation"
              />
              <Typography
                variant="h5"
                style={{
                  color: "#3467eb",
                  fontFamily: "Roboto",
                  flex: 10,
                  textAlign: "center",
                }}
              >
                {curso.title} {curso.subtitle}
              </Typography>
              <ExpandMore
                onClick={handleClose}
                fontSize="large"
                style={{ cursor: "pointer", flex: 2 }}
              />
            </div>

            <div className={classes.cardBody}>
              <Typography
                style={{ fontFamily: "Roboto", color: "black" }}
                className={classes.text}
              >
                {curso.text1} <br /> <br />
                {curso.text2} <br /> <br />
                {curso.text3} <br /> <br />
                {curso.text4} 
              </Typography>
            </div>

            <div className={classes.cardVideo} >
              <iframe width="364" height="316"
                src={`https://www.youtube.com/embed/${curso.videoLink}`}>
              </iframe>
            </div>

            <div className={classes.cardPayments}>
              <Typography
                style={{
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  color: "#3467eb",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Formas de pagamento
              </Typography>
              <div className={classes.cardPayments2}>
                <div className={classes.cardPayments3}>
                  <img src="/imgPagamentos/Visa.png" alt="Forma de pagamento com cartão Visa" />
                  <img src="/imgPagamentos/Mastercard.svg" alt="Forma de pagamento com cartão Mastercard" />
                  <img src="/imgPagamentos/Paypal.png" alt="Forma de pagamento com Paypal" />
                  <img src="/imgPagamentos/Samsungpay.png" alt="Forma de pagamento com SamsungPay" />
                  <img src="/imgPagamentos/Hipercard.png" alt="Forma de pagamento com cartão Hipercard" />
                </div>
                <div className={classes.cardPayments4}>
                  <img
                    style={{ width: "4vw", height: "4vh" }}
                    src="/imgPagamentos/Googlepay.png"
                    alt="Forma de pagamento com GooglePay"
                  />
                  <img
                    style={{ width: "4vw", height: "4vh" }}
                    src="/imgPagamentos/Hiper.png"
                    alt="Forma de pagamento com cartão Hiper"
                  />
                  <img
                    style={{ width: "4vw", height: "4vh" }}
                    src="/imgPagamentos/American.png"
                    alt="Forma de pagamento com cartão American Express"
                  />
                  <img
                    style={{ width: "4vw", height: "4vh" }}
                    src="/imgPagamentos/Diners.png"
                    alt="Forma de pagamento com cartão Diners"
                  />
                  <img
                    style={{ width: "4vw", height: "4vh" }}
                    src="/imgPagamentos/Elo.png"
                    alt="Forma de pagamento com cartão Elo"
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
              href={curso.href}
            >
              Garanta sua vaga
            </Button>
          </div>
        </CardActions>
      </Card>
    </Modal>
  );
}

export default AnimatedModalCoursesDesktop;
