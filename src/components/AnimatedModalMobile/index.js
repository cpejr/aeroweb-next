import React, { useState, useEffect } from "react";
import { 
  Button, 
  Card, 
  CardContent, 
  CardActions, 
  Slide, 
  Typography 
} from "@material-ui/core";
import { ExpandMore, ExpandLess, SingleBedSharp } from "@material-ui/icons";
import { useStyles } from "./styles";
import LogomarcaAzul from "../../../public/assets/LogomarcaAzul.svg";

function AnimatedModalMobile({ index, openNthModal, openNthModalIndex, setOpenNthModal, setSlideCourses, title, text1, text2, text3, videoLink }) {
  const classes = useStyles();
  const [slideClass, setSlideClass] = useState(classes.card);

  useEffect(() => {
    if (openNthModalIndex === true) {
      setTimeout(() => { // espera a animação do coursesMobile
        setSlideClass(classes.cardUp);
      }, 750);
    } else {
      if (slideClass !== classes.card) {
        setSlideClass(classes.cardDown)
        setTimeout(() => { // espera o down
          setSlideClass(classes.card);
        }, 750);
      }
      
    }
  }, [openNthModal]);

  useEffect(() => console.log(slideClass), [slideClass])

  if (!openNthModalIndex && slideClass !== undefined) { // só renderiza se clicou no botão correspondente
    return null;
  } else {
    return (
      <Card className={slideClass} >
        <CardContent className={classes.cardContent} >
          <div className={classes.cardHeader}>
            <img className={classes.image} src={'/assets/LogomarcaAzul.svg'} />

            <ExpandMore
              fontSize='large'
              className={classes.icon}
              style={{ color: '#3467eb', cursor: 'pointer' }}
              onClick={() => {
                let updatedArray = [...openNthModal ];
                updatedArray[index] = false;
                setSlideClass(classes.cardDown);
                setTimeout(() => { // espera a animação de down
                  setOpenNthModal(updatedArray);
                  setSlideCourses('show');
                }, 1000); 
              }}
            />

          </div>
          
          <Typography 
            className={classes.title}
            style={{ color: "#3467eb", paddingBottom: '8px', flex: '9', textAlign: 'left', fontSize: '16px', cursor: 'pointer' }}
          >
            {title}
          </Typography>

          <Typography style={{ fontFamily: 'Roboto', color: 'black' }} className={classes.text} >
            {text1} <br/> <br className={classes.line} />
            {text2} <br/> <br className={classes.line} />
            {text3} <br/> <br className={classes.line} />
          </Typography>

          <div className={classes.cardVideo}>

          </div>

          <Typography 
            style={{ color: "#3467eb", marginTop: '16px', textAlign: 'left', fontSize: '16px' }}
          >
            Formas de Pagamento
          </Typography>

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
    );
  }
}

export default AnimatedModalMobile;
