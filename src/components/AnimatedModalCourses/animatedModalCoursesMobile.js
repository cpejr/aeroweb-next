import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useStyles } from "../../stylesJs/animatedModalCoursesMobileStyle";
import listaCursos from "../../../public/contents/listaCursos";

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
    if (animationControl === "up") {
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
          <img
            className={classes.image}
            src={"/assets/LogomarcaAzul.svg"}
            alt="Logomarca Azul da Tailwind Aviation"
          />
          <div className={classes.cardGoBack}>
            Voltar
            <ExpandMore
              fontSize="large"
              className={classes.icon}
              style={{ color: "#3467eb", cursor: "pointer" }}
              onClick={() => {
                setSlideClass(classes.cardDown);
                setTimeout(() => {
                  setCoursesMobileControl("fadeOut");
                  setOpenCurso({ open: false, index: indexCurso, style: "down" });
                }, 1000);
              }}
            />
          </div>
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

        <div className={classes.cardVideo}>
          <iframe
            width="258"
            height="315"
            src="https://www.youtube.com/embed/iDlxpk_8Ggc">
          </iframe>
        </div>

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
                src="/imgPagamentos/Visa.png" 
                alt="Forma de pagamento com cartão Visa" 
              />
              <img 
                src="/imgPagamentos/Mastercard.svg" 
                alt="Forma de pagamento com cartão Mastercard" 
              />
              <img 
                src="/imgPagamentos/Paypal.png" 
                alt="Forma de pagamento com Paypal" 
              />
            </div>
            <div className={classes.cardPayments3}>
              <img 
                src="/imgPagamentos/Hiper.png" 
                alt="Forma de pagamento com cartão Hiper" 
              />
              <img 
                src="/imgPagamentos/Hipercard.png" 
                alt="Forma de pagamento com cartão Hipercard" 
              />
              <img 
                src="/imgPagamentos/Googlepay.png" 
                alt="Forma de pagamento com GooglePay" 
              />
            </div>

            <div className={classes.cardPayments3}>
              <img 
                src="/imgPagamentos/Samsungpay.png" 
                alt="Forma de pagamento com SamsungPay" 
              />
              <img 
                src="/imgPagamentos/American.png" 
                alt="Forma de pagamento com cartão American Express" 
              />
              <img 
                src="/imgPagamentos/Diners.png" 
                alt="Forma de pagamento com cartão Diners" 
              />
              <img 
                src="/imgPagamentos/Elo.png" 
                alt="Forma de pagamento com cartão Elo" 
              />
            </div>
          </div>
        </div>

        <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.button}>
            Garanta sua vaga
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AnimatedModalCoursesMobile;
