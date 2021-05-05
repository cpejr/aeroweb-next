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
import { ExpandMore } from "@material-ui/icons";
import { useStyles } from "./styles";
import React, { useState, useEffect } from "react";

function ModalQuemSomos({ styleModal, close }) {
  const classes = useStyles();
  const [cardClass, setCardClass] = useState(classes.card);
  const [open, setOpen] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    if (styleModal === 'standby') {
      setCardClass(classes.card);
    }
    else if (styleModal === 'show') {
      setCardClass(classes.cardShow);
      setOpen(true);

      setImgWidth(0)
      setTimeout(() => setImgWidth(100), 1000);
    }
    else if (styleModal === 'hide') {
      setCardClass(classes.cardHide);
      setOpen(false);     
    }
  }, [styleModal])

  const handleClose = () => {
    setCardClass(classes.cardHide);
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
      <Card className={cardClass}>
        <CardContent>
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>
              <img
                src="/assets/Tailwind3.svg"
                style={{ width: '100px', fontFamily: "Roboto", transition: 'width 0.5s', objectFit: 'cover' }}
              ></img>
              <Typography
                className={classes.Title}
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

export default ModalQuemSomos;
