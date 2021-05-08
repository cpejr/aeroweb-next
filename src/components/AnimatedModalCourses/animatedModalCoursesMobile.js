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
import { useStyles } from "../../stylesJs/animatedModalCoursesMobileStyle";
import LogomarcaAzul from "../../../public/assets/LogomarcaAzul.svg";
import listaCursos from "../../../public/listaCursos";

function AnimatedModalCoursesMobile({
  indexCurso,
  setOpenCurso,
  animationControl,
  setCoursesMobileControl,
  videoLink,
}) {
  const classes = useStyles();
  const curso = listaCursos[indexCurso];
  const [slideClass, setSlideClass] = useState(classes.card);

  useEffect(() => {
    if (animationControl === 'up') {
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
  }, [animationControl]);

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
              setSlideClass(classes.cardDown);
              setTimeout(() => {
                setCoursesMobileControl("fadeOut");
                setOpenCurso({open: false, index: indexCurso, style: 'down'});
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
          >
            Garanta sua vaga
          </Button>
        </div>
      </CardContent>

    </Card>
  );
}

export default AnimatedModalCoursesMobile;
