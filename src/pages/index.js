import React, { useState, useRef, useEffect } from "react";
import useStyles from "../styles/HomeStyles";
import Background1 from "../../public/assests/GradienteHome.svg";

import AnimatedModal from "../components/AnimatedModal";
import Footer from "../components/Footer";
import {
  Button,
  ButtonGroup,
  Modal,
  Fade,
  Grow,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Slide,
  Typography,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import styles from "../styles/Home.module.css";
import zIndex from "@material-ui/core/styles/zIndex";

function Home() {
  let x1 = 90;
  let grad = Background1;
  const [posBackground, setPosBackground] = useState();
  const [gradiente, setGradiente] = useState(grad);
  const [posX, setPosX] = useState("15vw");
  const [posXAngle, setPosXAngle] = useState(0);
  const [posY, setPosY] = useState("30vh");
  const [posYAngle, setPosYAngle] = useState(0);
  const [angle, setAngle] = useState(0);
  const [colorHome, setColorHome] = useState("#100554");
  const [colorCursos, setColorCursos] = useState("#100554");
  const [colorQuemSomos, setColorQuemSomos] = useState("#100554");
  const [colorContato, setColorContato] = useState("#100554");
  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  // Parâmetros para o novo gradiente:
  const [newGradient, setNewGradient] = useState();
  const [oldGradient, setOldGradient] = useState(
    "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)"
  );

  const [change, setChange] = useState(false);

  const home = "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)";
  const cursos = "linear-gradient(258.81deg, #78CBEE -18.81%, #0E41C5 109.84%)";
  const quemSomos =
    "linear-gradient(346.31deg, #78CBEE 16.62%, #0E41C5 99.07%)";
  const contato = "linear-gradient(83.83deg, #78CBEE 3.06%, #0E41C5 96.88%)";
  //--------------------------

  const [size, setSize] = useState(null);

  function windowSize() {
    let proposedWidth = window.innerWidth / 40;
    if (proposedWidth < 20) proposedWidth = 20;
    return proposedWidth;
  }

  useEffect(() => {
    setSize(windowSize());
  });

  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });

  function spin1(e) {
    //Para a animação da linha:
    x1 = 90;
    setPosBackground(x1);
    // Para a animação do gradiente:
    setNewGradient(
      "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)"
    );
    setChange(true);
    setTimeout(() => {
      setOldGradient(
        "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)"
      );
      console.log("cabou Home");
    }, 1000);

    // Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    setPosX("15vw");
    setPosY("30vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);
  }

  function spin2(e) {
    //Para a animação da linha:
    x1 = 60;
    setPosBackground(x1);
    //Para a animação do gradiente:
    setNewGradient(cursos);
    setChange(true);
    setTimeout(() => {
      setOldGradient(cursos);
      console.log("cabou Cursos");
    }, 1000);

    //Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    setPosX("30vw");
    setPosY("40vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    //Para a animação do modal:
    setTimeout(() => {
      setOpen(true);
    }, 1200);
  }

  function spin3(e) {
    //Para a animação da linha:
    x1 = 30;
    setPosBackground(x1);

    //Para a animação do gradiente:
    setNewGradient(quemSomos);
    setChange(true);
    setTimeout(() => {
      setOldGradient(quemSomos);
      console.log("cabou quem somos");
    }, 1000);

    //Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    setPosX("43vw");
    setPosY("65vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    setOpenMobile(true);
  }

  function spin4(e) {
    //Para a animação da linha:
    x1 = 0;
    setPosBackground(x1);

    //Para a animação do gradiente:
    setNewGradient(contato);
    setChange(true);
    setTimeout(() => {
      setOldGradient(contato);
      console.log("cabou contato");
    }, 1000);

    //Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    setPosX("69vw");
    setPosY("82vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);
  }

  const classes = useStyles();
  const [slideStyle, setSlideStyle] = useState(classes.cardMobile);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeContainerChildren}>
        <div
          className={classes.planeContainer}
          style={{
            position: "absolute",
            left: posX,
            top: posY,
            transform: `rotate(${angle}deg)`,
            transformOrigin: "center",
            width: size,
            height: size,
            zIndex: "200",
          }}
        >
          <img
            className={"plane" + (flying ? " flying" : "")}
            src="/assests/AviaoIcon.svg"
            width={size}
            height={size}
            onAnimationEnd={(e) => {
              setFlying(false);
            }}
          />
        </div>
        <div
          className={styles.gradientVelho}
          style={{ backgroundImage: oldGradient }}
        >
          <div
            className={
              change ? styles.gradienteMutavel : styles.gradienteImutavel
            }
            onAnimationEnd={() => {
              setChange(false);
            }}
            style={{ backgroundImage: newGradient }}
          ></div>
          <div
            className={classes.homeContainerChildren}
            style={{
              backgroundPositionX: posBackground,
              backgroundPositionY: -200,
              height: "100vh",
            }}
          ></div>

          <div className={classes.buttonHome} style={{ zIndex: "100" }}>
            <p
              onClick={spin1}
              style={{ color: colorCursos, cursor: "pointer" }}
            >
              HOME
            </p>
          </div>
          <div className={classes.button2} style={{ zIndex: "100" }}>
            <p
              onClick={spin2}
              style={{ color: colorCursos, cursor: "pointer" }}
            >
              CURSOS
            </p>
          </div>
          <div className={classes.button3} style={{ zIndex: "100" }}>
            <p
              onClick={spin3}
              style={{ color: colorQuemSomos, cursor: "pointer" }}
            >
              QUEM SOMOS
            </p>
          </div>
          <div className={classes.button4} style={{ zIndex: "100" }}>
            <p
              onClick={spin4}
              style={{ color: colorContato, cursor: "pointer" }}
            >
              CONTATO
            </p>
          </div>
        </div>
      </div>

      <Footer />

      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        classNme={classes.modalBackground}
      >
        <Grow in={open} timeout={2500}>
          <Fade in={open} timeout={2500}>
            <div className={classes.fadeRoot}>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                      <Typography variant="h4" style={{ color: "#3467eb" }}>
                        Título do Curso
                      </Typography>
                      <ExpandMore
                        onClick={() => setOpen(false)}
                        fontSize="large"
                      />
                    </div>
                    <div className={classes.cardBody}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam auctor in mi ut egestas. Phasellus mi neque,
                        viverra sed pulvinar sit amet, eleifend non ante.
                        Phasellus vel nibh tempor, tincidunt tortor nec,
                        molestie nibh. Morbi nec odio volutpat, mollis quam a,
                        fringilla urna. Cras iaculis velit risus, convallis
                        vestibulum urna sollicitudin et. Aenean id ex finibus,
                        rutrum enim sed, semper ante. In aliquam, arcu id
                        consectetur euismod, purus turpis tincidunt felis, vitae
                        dapibus erat sem quis turpis. Mauris non scelerisque
                        lorem, ac ornare nulla. Mauris venenatis elit id tellus
                        convallis tempus. In blandit vulputate eros, a rutrum
                        purus. Aliquam eu mi at diam bibendum mollis convallis
                        et sem.
                      </Typography>
                    </div>
                  </div>
                </CardContent>

                <CardActions>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      onClick={() => setOpen(false)}
                    >
                      Garanta sua vaga
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </div>
          </Fade>
        </Grow>
      </Modal>

      <Modal
        open={openMobile}
        onBackdropClick={() => setOpenMobile(false)}
        classNme={classes.modalBackground}
      >
        <Slide direction="left" in={openMobile} timeout={1500}>
          <div className={slideStyle}>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.cardContent}>
                  <div className={classes.cardTitle}>
                    <Typography variant="h4" style={{ color: "#3467eb" }}>
                      Quem Somos
                    </Typography>
                    {slideStyle === classes.cardMobileUp && (
                      <ExpandMore
                        onClick={() => {
                          setSlideStyle(classes.cardMobileDown);
                          setTimeout(() => {
                            setSlideStyle(classes.cardMobile);
                          }, 1500); // epsera a animação acaba
                        }}
                        fontSize="large"
                      />
                    )}
                    {slideStyle !== classes.cardMobileUp && (
                      <ExpandLess
                        onClick={() => setSlideStyle(classes.cardMobileUp)}
                        fontSize="large"
                      />
                    )}
                  </div>

                  <div className={classes.cardBody}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam auctor in mi ut egestas. Phasellus mi neque,
                      viverra sed pulvinar sit amet, eleifend non ante.
                      Phasellus vel nibh tempor, tincidunt tortor nec, molestie
                      nibh. Morbi nec odio volutpat, mollis quam a, fringilla
                      urna. Cras iaculis velit risus, convallis vestibulum urna
                      sollicitudin et. Aenean id ex finibus, rutrum enim sed,
                      semper ante. In aliquam, arcu id consectetur euismod,
                      purus turpis tincidunt felis, vitae dapibus erat sem quis
                      turpis. Mauris non scelerisque lorem, ac ornare nulla.
                      Mauris venenatis elit id tellus convallis tempus. In
                      blandit vulputate eros, a rutrum purus. Aliquam eu mi at
                      diam bibendum mollis convallis et sem.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Slide>
      </Modal>
    </div>
  );
}

export default Home;
