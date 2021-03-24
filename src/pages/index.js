import React, { useState, useRef, useEffect } from "react";
import Background1 from "../../public/assets/GradienteHome.svg";

import AnimatedModal from "../components/AnimatedModal/index";
import AnimatedModalMobile from "../components/AnimatedModalMobile/index";
import Footer from "../components/Footer/index";
import Logo from "../../public/assets/Logomarca.svg";

import useStyles from "../stylesJs/HomeStyles";
import styles from "../styles/Home.module.css";

import CoursesList from "../components/CoursesList";

function Home() {
  const classes = useStyles();

  // variaveis da animacao
  let x1 = 90;
  let grad = Background1;
  const [posBackground, setPosBackground] = useState();
  const [gradiente, setGradiente] = useState(grad);
  const [posX, setPosX] = useState("12vw");
  const [posXAngle, setPosXAngle] = useState(0);
  const [posY, setPosY] = useState("15vh");
  const [posYAngle, setPosYAngle] = useState(0);
  const [angle, setAngle] = useState(0);
  const [colorHome, setColorHome] = useState("#100554");
  const [colorCursos, setColorCursos] = useState("#100554");
  const [colorQuemSomos, setColorQuemSomos] = useState("#100554");
  const [colorContato, setColorContato] = useState("#100554");
  
  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });

  // variaveis dos modais
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [slideStyle, setSlideStyle] = useState(classes.cardMobile);
  const [listStyle, setListStyle] = useState(classes.cardButtons);

  // Parâmetros para o novo gradiente:
  const [newGradient, setNewGradient] = useState();
  const [oldGradient, setOldGradient] = useState(
    "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
  );

  const [change, setChange] = useState(false);

  const home = "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)";
  const cursos = "linear-gradient(258.81deg, #78CBEE -18.81%, #0E41C5 109.84%)";
  const quemSomos =
    "linear-gradient(346.31deg, #78CBEE 16.62%, #0E41C5 99.07%)";
  const contato = "linear-gradient(83.83deg, #78CBEE 3.06%, #0E41C5 96.88%)";

  const [size, setSize] = useState(null);

  // vetor de objetos com os dados a serem mostrados nos modais do Cursos
  const data = [ 
    {
      open: openFirst,
      setOpen: () => setOpenFirst(true),
      title: "Simulados ICAO",
      text: "Texto Simulados ICAO Texto Simulados ICAO Texto Simulados ICAO Texto Simulados ICAO Texto Simulados ICAO ",
      videoLink: "youtube.com"
    },

    {
      open: openSecond,
      setOpen: () => setOpenSecond(true),
      title: "Curso Ingles ICAO",
      text: "Texto Curso Ingles ICAO Texto Curso Ingles ICAO Texto Curso Ingles ICAO Texto Curso Ingles ICAO Texto Curso Ingles ICAO ",
      videoLink: "youtube.com"
    },

    {
      open: openThird,
      setOpen: () => setOpenThird(true),
      title: "Curso Cartas Jappesen",
      text: "Texto Curso Cartas Jappesen Texto Curso Cartas Jappesen Texto Curso Cartas Jappesen Texto Curso Cartas Jappesen Texto Curso Cartas Jappesen ",
      videoLink: "youtube.com"
    }
  ]

  //--------------------------

  function windowSize() {
    let proposedWidth = window.innerWidth / 40;
    if (proposedWidth < 20) proposedWidth = 20;
    return proposedWidth;
  }

  useEffect(() => {
    setSize(windowSize());
  });


  function spin1(e) {
    //Para a animação da linha:
    x1 = 90;
    setPosBackground(x1);
    // Para a animação do gradiente:
    setNewGradient(
      "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
    );
    setChange(true);
    setTimeout(() => {
      setOldGradient(
        "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
      );
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

    setPosX("12vw");
    setPosY("15vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    if(listStyle === classes.cardButtonsDown){
      setListStyle(classes.cardButtonsUp);
    }
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

    setPosX("33vw");
    setPosY("30vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    if(listStyle === classes.cardButtons || listStyle === classes.cardButtonsUp) {
      setListStyle(classes.cardButtonsDown);
    } else {
      setListStyle(classes.cardButtonsUp);
    }
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

    setPosX("55vw");
    setPosY("48vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    setOpenMobile(true);

    if(listStyle === classes.cardButtonsDown){
      setListStyle(classes.cardButtonsUp);
    }
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

    setPosX("85vw");
    setPosY("68vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    if(listStyle === classes.cardButtonsDown){
      setListStyle(classes.cardButtonsUp);
    }
  }

  function closeModal() {
    setOpenFirst(false);
    setOpenSecond(false);
    setOpenThird(false);
  }

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
            src="/assets/AviaoIcon.svg"
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
            className={classes.planeContainer}
            style={{
              position: "absolute",
              left: "4vw",
              top: "65vh",
              margin: "0",
              transformOrigin: "center",
              width: "38vw",
              zIndex: "200",
              color: "#fff",
            }}
          >
            <h1>INVISTA HOJE NO SEU FUTURO</h1>
            <h1>E DÊ ASAS AO SEU SONHO</h1>
          </div>
          <div
            className={classes.homeContainerChildren}
            style={{
              backgroundPositionX: posBackground,
              backgroundPositionY: -200,
              height: "100vh",
            }}
          ></div>
          <div
            className={classes.planeContainer}
            style={{
              position: "absolute",
              left: "44vw",
              top: "0.1vh",

              transformOrigin: "center",
              width: size,
              height: size,
              zIndex: "200",
            }}
          >
            <img className={styles.logo} src="/assets/Logomarca.svg"></img>
          </div>

          <div className={classes.buttonHome} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin1}
              style={{ cursor: "pointer" }}
            >
              HOME
            </p>
          </div>
          <div className={classes.button2} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin2}
              style={{ cursor: "pointer" }}
            >
              CURSOS
            </p>
            
            <CoursesList
              listStyle={ listStyle }
              openFirst={ () => setOpenFirst(true) }
              openSecond={ () => setOpenSecond(true) }
              openThird={ () => setOpenThird(true) }
            />

          </div>

          <div className={classes.button3} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin3}
              style={{ cursor: "pointer" }}
            >
              QUEM SOMOS
            </p>
          </div>
          <div className={classes.button4} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin4}
              style={{ cursor: "pointer" }}
            >
              CONTATO
            </p>
          </div>
        </div>
      </div>

      <Footer />

      { // Modais de transição DESKTOP
        data.map((object) => {
          return (
            <AnimatedModal 
              open={object.open} 
              setOpen={object.setOpen} 
              close={closeModal}
              title={object.title} 
              text={object.text}
            />
          )
        })
      }

      <AnimatedModalMobile
        open={openMobile}
        setOpen={setOpenMobile}
        slideStyle={slideStyle}
        setSlideStyle={setSlideStyle}
      />
    </div>
  );
}

export default Home;
