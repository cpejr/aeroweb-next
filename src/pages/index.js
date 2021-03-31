import React, { useState, useRef, useEffect } from "react";
import Background1 from "../../public/assets/GradienteHome.svg";

import AnimatedModal from "../components/AnimatedModal/index";
import AnimatedModalMobile from "../components/AnimatedModalMobile/index";
import Footer from "../components/Footer/index";
import Logo from "../../public/assets/Logomarca.svg";
import Feed from "react-instagram-authless-feed";
import FeedInstagram from "../components/FeedInstagram/index";

import useStyles from "../stylesJs/HomeStyles";
import styles from "../styles/Home.module.css";

function Home() {
  let x1 = 90;
  let grad = Background1;
  const [responseSize, setResponseSize] = useState("");
  const [union, setUnion] = useState("");
  const [title1, setTitle1] = useState("INVISTA HOJE NO SEU FUTURO");
  const [title2, setTitle2] = useState("E DÊ ASAS AO SEU SONHO");
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
  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const classes = useStyles();
  const [slideStyle, setSlideStyle] = useState(classes.cardMobile);

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

  useEffect(() => {
    var aux = window.innerWidth;
    if (aux < 500) {
      setResponseSize("/assets/TAILWINDAVIATION.svg");
      setUnion("/assets/Union.svg");
      setTitle1("");
      setTitle2("");
    } else {
      setResponseSize("/assets/Logomarca.svg");
      setUnion("");
    }
    return responseSize;
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

    setPosX("55vw");
    setPosY("48vh");
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

    setPosX("85vw");
    setPosY("68vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);
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
            width={40}
            height={40}
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
            <h1>{title1}</h1>
            <h1>{title2}</h1>
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
            className={classes.planeContainerMobile}
            style={{
              width: size,
              height: size,
            }}
          >
            <img className={styles.logo2} src={union} />
          </div>
          <div
            className={classes.planeContainer}
            style={{
              width: size,
              height: size,
            }}
          >
            <img className={styles.logo} src={responseSize} />
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
      <AnimatedModal open={open} setOpen={setOpen} />
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
