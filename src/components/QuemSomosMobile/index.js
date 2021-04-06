import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

function QuemSomosMobile({ slideStyle }) {
  const classes = useStyles();
  const [slideClass, setSlideClass] = useState(classes.cardSlide);
  const [isUp, setIsUp] = useState(false);
  const [backdropClass, setBackdropClass] = useState(classes.backdrop)

  useEffect(() => {
    if(slideStyle === 'standby') setSlideClass(classes.cardSlide);
    else if(slideStyle === 'hide') setSlideClass(classes.cardSlideHide);
    else if(slideStyle === 'show') setSlideClass(classes.cardSlideShow);
    // console.log(slideStyle)
    setIsUp(false);
  }, [slideStyle]);

  function handleTitleClick() {
    if(isUp) {
      setSlideClass(classes.cardSlideDown);
      setBackdropClass(classes.backdrop);
      setIsUp(false);
    } else {
      setSlideClass(classes.cardSlideUp);
      setBackdropClass(classes.backdropUp);
      setIsUp(true);
    }
  }

  return (
    // <div className={backdropClass}>
      <Card className={slideClass} >
        <CardContent className={classes.cardContent} style={{ padding: '2px' }}>
          <div className={classes.titleSlide} >
            <Typography 
              variant="h5" 
              style={{ color: "white", paddingBottom: '8px', flex: '9', textAlign: 'center', cursor: 'pointer' }}
              onClick={ () => handleTitleClick() } 
            >
              Nossa história
            </Typography>
            {
              isUp ? (
                <ExpandMore
                  fontSize='large'
                  style={{ flex: '1', color: 'white', cursor: 'pointer' }}
                  onClick={ () => {
                    setSlideClass(classes.cardSlideDown);
                    setBackdropClass(classes.backdrop);
                    setIsUp(false);
                  }}
                />
              ) : (
                <ExpandLess
                  fontSize='large'
                  style={{ flex: '1', color: 'white', cursor: 'pointer' }}
                  onClick={ () => {
                    setSlideClass(classes.cardSlideUp);
                    setBackdropClass(classes.backdropUp);
                    setIsUp(true);
                  } }
                />
              )
            }
            
          </div>
          
          <Typography style={{ fontFamily: 'Roboto', color: 'white' }} className={classes.text} >
            A vontade de ajudar e difundir o conhecimento, assim como a 
            crescente demanda por mão de obra qualificada no mercado aeronáutico 
            resultou na reunião de esforços para a criação da Tailwind Aviation Courses. <br/> <br className={classes.line} />
            Com seu primeiro esboço tendo acontecido em 2020 e o início de suas atividades
            no ano de 2021 a Tailwind Aviation Courses tem como objetivo prover conteúdo 
            de forma fácil, direta, interativa, descomplicada para todos àqueles que buscam 
            aprimorar seus conhecimentos e alcançar uma melhor posição no mercado de trabalho, 
            priorizando sempre a qualidade em todos os serviços e materiais oferecidos. <br/> <br className={classes.line} />
            Para isso, nos dedicamos à elaboração de conteúdos completos e direcionados 
            para as operações enfrentadas no dia-a-dia de um piloto. Além disso, para garantir 
            a compreensão do conteúdo abordado, queremos que nossos alunos tenham uma experiência 
            diferenciada no ensino à distância através do contato facilitado com nosso corpo docente 
            para solução de dúvidas. <br/> <br className={classes.line} />
            Priorizamos ser reconhecidos pela qualidade de nossos produtos 
            e com isso alcançar um crescimento contínuo e sólido dentro do mercado aeronáutico.
          </Typography>

          <div className={classes.cardVideo}>

          </div>
        </CardContent>
      </Card>
    // </div>
  );
}

export default QuemSomosMobile;
