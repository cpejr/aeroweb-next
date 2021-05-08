import React, { useState, useEffect } from "react";
import { useStyles } from "./quemSomosDesktopStyle";
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

function QuemSomosDesktop({ animationControl, close }) {
  const classes = useStyles();
  const [quemSomosClass, setQuemSomosClass] = useState(classes.card);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (animationControl === 'standby') {
      setQuemSomosClass(classes.card);
    }
    else if (animationControl === 'show') {
      setQuemSomosClass(classes.cardShow);
      setOpen(true);
    }
    else if (animationControl === 'hide') {
      setQuemSomosClass(classes.cardHide);
      setOpen(false);     
    }
  }, [animationControl])

  const handleClose = () => {
    setQuemSomosClass(classes.cardHide);
    setTimeout(() => {
      close();
    }, 1000)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
    >
      <Card className={quemSomosClass}>
        <CardContent>
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <img
                src="/assets/Tailwind3.svg"
                style={{ width: '100px', fontFamily: "Roboto", transition: 'width 0.5s', objectFit: 'cover' }}
              ></img>
              <Typography
                style={{ color: "white", fontSize: '24px', fontWeight: 400, flex: 10, textAlign: 'center' }}
              >
                <b>Nossa História</b>
              </Typography>
              <div
                className={classes.close}
                onClick={handleClose}
                fontSize="large"
                style={{ cursor: "pointer", flex: 1 }}
              >
                <img
                  src="/assets/Close.svg"
                  style={{ height: "3vh", fontFamily: "Roboto" }}
                ></img>
              </div>
            </div>
            <div className={classes.cardBody}>
              <Typography
                style={{ fontFamily: "Roboto", color: 'white' }}
                className={classes.text}
              >
                A vontade de ajudar e difundir o conhecimento, assim como
                a crescente demanda por mão de obra qualificada no mercado
                aeronáutico resultou na reunião de esforços para a criação
                da Tailwind Aviation Courses. <br /> <br />
                Com seu primeiro esboço tendo acontecido em 2020 e o
                início de suas atividades no ano de 2021 a Tailwind
                Aviation Courses tem como objetivo prover conteúdo de
                forma fácil, direta, interativa, descomplicada para todos
                àqueles que buscam aprimorar seus conhecimentos e alcançar
                uma melhor posição no mercado de trabalho, priorizando
                sempre a qualidade em todos os serviços e materiais
                oferecidos. <br /> <br />
                Para isso, nos dedicamos à elaboração de conteúdos
                completos e direcionados para as operações enfrentadas no
                dia-a-dia de um piloto. Além disso, para garantir a
                compreensão do conteúdo abordado, queremos que nossos
                alunos tenham uma experiência diferenciada no ensino à
                distância através do contato facilitado com nosso corpo
                docente para solução de dúvidas.
                <br /> <br /> 
                Priorizamos ser reconhecidos pela qualidade de
                nossos produtos e com isso alcançar um crescimento
                contínuo e sólido dentro do mercado aeronáutico.
              </Typography>
            </div>
            <div className={classes.cardVideo}></div>
          </div>
        </CardContent>
      </Card>

    </Modal>
    
  );
}

export default QuemSomosDesktop;
