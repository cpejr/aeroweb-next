import React, { useState, useEffect } from "react";
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
import { useStyles } from "./styles";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

function QuemSomosMobile({ slideStyle, close }) {
  const classes = useStyles();
  const [slideClass, setSlideClass] = useState(classes.cardSlide);

  useEffect(() => {
    if(slideStyle === 'standby') setSlideClass(classes.cardSlide);
    else if(slideStyle === 'hide') setSlideClass(classes.cardSlideHide);
    else if(slideStyle === 'show') setSlideClass(classes.cardSlideShow);
    console.log(slideStyle)
  }, [slideStyle]);

  return (
    <Card className={slideClass}>
      <CardContent className={classes.cardContent} style={{ padding: '2px' }}>
        <div className={classes.titleSlide}>
          <Typography variant="h5" style={{ color: "white", paddingBottom: '8px', flex: '9', textAlign: 'center' }}>
            Nossa história
          </Typography>
          <ExpandMore
            fontSize='large'
            style={{ flex: '1', color: 'white', cursor: 'pointer' }}
            onClick={ close }
          />
        </div>
        
        <Typography style={{ fontSize: '10.5px', fontFamily: 'Roboto', color: 'white' }}>
          A vontade de ajudar e difundir o conhecimento, assim como a 
          crescente demanda por mão de obra qualificada no mercado aeronáutico 
          resultou na reunião de esforços para a criação da Tailwind Aviation Courses. <br/>
          Com seu primeiro esboço tendo acontecido em 2020 e o início de suas atividades
          no ano de 2021 a Tailwind Aviation Courses tem como objetivo prover conteúdo 
          de forma fácil, direta, interativa, descomplicada para todos àqueles que buscam 
          aprimorar seus conhecimentos e alcançar uma melhor posição no mercado de trabalho, 
          priorizando sempre a qualidade em todos os serviços e materiais oferecidos. <br/> 
          Para isso, nos dedicamos à elaboração de conteúdos completos e direcionados 
          para as operações enfrentadas no dia-a-dia de um piloto. Além disso, para garantir 
          a compreensão do conteúdo abordado, queremos que nossos alunos tenham uma experiência 
          diferenciada no ensino à distância através do contato facilitado com nosso corpo docente 
          para solução de dúvidas.<br/> 
          Priorizamos ser reconhecidos pela qualidade de nossos produtos 
          e com isso alcançar um crescimento contínuo e sólido dentro do mercado aeronáutico.
        </Typography>

        <div className={classes.cardVideo}>

        </div>
      </CardContent>
    </Card>
  );
}

export default QuemSomosMobile;
