import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Slide,
  Typography,
} from "@material-ui/core";
import { ExpandMore, ExpandLess, SingleBedSharp } from "@material-ui/icons";
import { useStyles } from "./styles";
import LogomarcaAzul from "../../../public/assets/LogomarcaAzul.svg";
import listaCursos from "../../../public/listaCursos";

function AnimatedModalMobile({
  indexCurso,
  styleModal,
  index,
  openNthModal,
  openNthModalIndex,
  setOpenNthModal,
  setSlideCourses,
  videoLink,
}) {
  const classes = useStyles();
  const curso = listaCursos[indexCurso];
  const [slideClass, setSlideClass] = useState(classes.card);

  useEffect(() => {
    if (styleModal === 'up') {
      setSlideClass(classes.cardUp);
    } else {
      if (slideClass !== classes.card) {
        setSlideClass(classes.cardDown);
        setTimeout(() => {
          // evita bug de piscar
          setSlideClass(classes.card);
        }, 1000);
      }
    }
  }, [styleModal]);

  if (!openNthModalIndex && slideClass !== undefined) {
    // só renderiza se clicou no botão correspondente
    return null;
  } else {
    return (
      <Card className={slideClass}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <img className={classes.image} src={"/assets/LogomarcaAzul.svg"} />

            <ExpandMore
              fontSize="large"
              className={classes.icon}
              style={{ color: "#3467eb", cursor: "pointer" }}
              onClick={() => {
                // let updatedArray = [...openNthModal];
                // updatedArray[index] = false;
                setSlideClass(classes.cardDown);
                setTimeout(() => {
                  // espera a animação de down
                  // setOpenNthModal(updatedArray);
                  close();
                  setSlideCourses("fadeOut");
                }, 1000);
              }}
            />
          </div>

          <Typography
            className={classes.title}
            style={{
              color: "#3467eb",
              paddingBottom: "8px",
              flex: "9",
              textAlign: "left",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {curso.title}
          </Typography>

          <Typography
            style={{ fontFamily: "Roboto", color: "black" }}
            className={classes.text}
          >
            {curso.text1} <br /> <br className={classes.line} />
            {curso.text2} <br /> <br className={classes.line} />
            {curso.text3} <br /> <br className={classes.line} />
          </Typography>

          <div className={classes.cardVideo}></div>

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
                <img 
                  src="/assets/Visa.png" 
                  alt="Forma de pagamento" 
                />
                <img
                  src="/assets/Mastercard.svg"
                  alt="Forma de pagamento"
                />
                <img
                  src="/assets/Paypal.png"
                  alt="Forma de pagamento"
                />
              </div>
              <div className={classes.cardPayments3}>
                <img
                  alt="Forma de pagamento"
                  src="/assets/Hiper.png"
                />
                <img
                  src="/assets/Hipercard.png"
                  alt="Forma de pagamento"
                />
                <img
                  alt="Forma de pagamento"
                  src="/assets/Googlepay.png"
                />
              </div>
              <div className={classes.cardPayments3}>
                <img
                  src="/assets/Samsungpay.png"
                  alt="Forma de pagamento"
                />
                <img
                  alt="Forma de pagamento"
                  src="/assets/American.png"
                />
                <img
                  alt="Forma de pagamento"
                  src="/assets/Diners.png"
                />
                <img
                  alt="Forma de pagamento"
                  src="/assets/Elo.png"
                />
              </div>
            </div>
          </div>

          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.button}
              // onClick={close}
            >
              Garanta sua vaga
            </Button>
          </div>
        </CardContent>

      </Card>
    );
  }
}

export default AnimatedModalMobile;
