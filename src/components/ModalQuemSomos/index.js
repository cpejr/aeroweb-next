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
import { useStyles } from "./styles";

function ModalQuemSomos({ open, setOpen }) {
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
                      <Typography className={classes.Title} variant="h7" style={{ color: "white" }}>
                          <b>
                            Nossa História
                          </b>
                      </Typography>
                      <div
                        className={classes.close}
                        onClick={() => setOpen(false)}
                        fontSize="large"
                        style={{cursor: "pointer"}}>
                        X
                      </div>
                    </div>
                    <div className={classes.cardBody}>
                      <Typography variante="p" style={{fontSize: '12px'}}>
                      A vontade de ajudar e difundir o conhecimento, assim como a 
                      crescente demanda por mão de obra qualificada no mercado aeronáutico 
                      resultou na reunião de esforços para a criação da Tailwind Aviation Courses <br/>
                      Com seu primeiro esboço tendo acontecido em 2020 e o início de suas atividades
                      no ano de 2021 a Tailwind Aviation Courses tem como objetivo prover conteúdo 
                      de forma fácil, direta, interativa, descomplicada para todos àqueles que buscam 
                      aprimorar seus conhecimentos e alcançar uma melhor posição no mercado de trabalho, 
                      priorizando sempre a qualidade em todos os serviços e materiais oferecidos. <br/> 
                      Para isso, nos dedicamos à elaboração de conteúdos completos e direcionados 
                      para as operações enfrentadas no dia-a-dia de um piloto. Além disso, para garantir 
                      a compreensão do conteúdo abordado, queremos que nossos alunos tenham uma experiência 
                      diferenciada no ensino à distância através do contato facilitado com nosso corpo docente 
                      para solução de dúvidas.<br/> Priorizamos ser reconhecidos pela qualidade de nossos produtos 
                      e com isso alcançar um crescimento contínuo e sólido dentro do mercado aeronáutico.
                      </Typography>
                    </div>
                    <div className={classes.cardVideo}>

                    </div>
                  </div>
                </CardContent>
              </Card>
          </Fade>
        </Grow>
      </Modal>
    </div>
  );
}

export default ModalQuemSomos;
