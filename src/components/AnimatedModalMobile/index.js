import React from "react";
import { 
  Button, 
  Card, 
  CardContent, 
  CardActions, 
  Slide, 
  Typography 
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { useStyles } from "./styles";
import LogomarcaAzul from "../../../public/assets/LogomarcaAzul.svg";

function AnimatedModalMobile({ upStyle, openNthModal, title, text1, text2, text3, videoLink }) {
  const classes = useStyles();

  if (!openNthModal){
    return null;
  } else {
    return (
      <Card className={classes.card} >
        <CardContent className={classes.cardContent} >
          <div className={classes.cardHeader}>
            <img className={classes.image} src={'/assets/LogomarcaAzul.svg'} />

            <ExpandMore
              fontSize='large'
              className={classes.icon}
              style={{ color: '#3467eb', cursor: 'pointer' }}
            />

          </div>
          
          <Typography 
            variant="h5" 
            className={classes.title}
            style={{ color: "#3467eb", paddingBottom: '8px', flex: '9', textAlign: 'center', cursor: 'pointer' }}
          >
            Titulo
          </Typography>

          <Typography style={{ fontFamily: 'Roboto', color: 'black' }} className={classes.text} >
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
