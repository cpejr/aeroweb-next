import React, { useState, useRef, useEffect } from "react";
import useStyles from "../stylesJs/HomeStyles";
import styles from "../styles/Home.module.css";
import buttonOverride from "../theme/buttonOverride";
import cardContentOverride from "../theme/cardContentOverride";
import { ThemeProvider } from "@material-ui/core/styles";

// imagens
import Background1 from "../../public/assets/GradienteHome.svg";
import Logo from "../../public/assets/Logomarca.svg";

// componentes
import AnimatedModal from "../components/AnimatedModal/index";
import AnimatedModalMobile from "../components/AnimatedModalMobile/index";
import Footer from "../components/Footer/index";
import Contacts from "../components/Contacts/index";
import ContactsMobile from "../components/ContactsMobile/index";
import ModalQuemSomos from "../components/ModalQuemSomos";
import QuemSomosMobile from "../components/QuemSomosMobile";
import CoursesList from "../components/CoursesList";
import CoursesMobile from "../components/CoursesMobile";
import isMobile from "./isMobile"; // usa para ver se é mobile ou não
import data from "../../public/data";

import { NextSeo } from "next-seo";
import InstagramCarousel from "../components/InstagramCarousel";

function Home() {
  <>
    <NextSeo
      title="Tailwind Aviation"
      description="Os melhores cursos de aviação."
      openGraph={{
        url: "https://www.twcourses.com.br",
        title: "Tailwind Aviation",
        description: "Cursos de Aviação, confira nossas redes sociais",
        images: [
          {
            url:
              "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 800,
            height: 600,
            alt: "Um avião",
          },
        ],
        site_name: "Tailwind Aviation",
      }}
      instagram={{
        handle: "@tailwindaviation_",
        site: "@twcourses.com.br",
        cardType: "Imagem",
      }}
    />
  </>;
  const classes = useStyles();

  // variaveis da animacao
  let x1 = 90;
  let selectedComp;
  let grad = Background1;
  const [responseSize, setResponseSize] = useState("");
  const [union, setUnion] = useState("");
  const [title1, setTitle1] = useState("INVISTA HOJE NO SEU FUTURO");
  const [title2, setTitle2] = useState("E DÊ ASAS AO SEU SONHO");
  const [posBackground, setPosBackground] = useState();
  const [selected, setSelected] = useState();
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
  const [open, setOpen] = useState(false);
  const [openQuemSomos, setOpenQuemSomos] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

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

  // variaveis da animacao dos modais
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [listStyle, setListStyle] = useState("standby");
  const [slideStyle, setSlideStyle] = useState("standby");
  const [contactStyle, setContactStyle] = useState("standby");
  const [contactMobileStyle, setContactMobileStyle] = useState("standby");
  const [slideCourses, setSlideCourses] = useState("standby");
  const [openNthModal, setOpenNthModal] = useState([]);

  // gambiarra do data.js
  data[0].open = openFirst;
  data[1].open = openSecond;
  data[2].open = openThird;

  // --------------------------------- //

  // reset do array dos modais ao carregar pagina
  useEffect(() => {
    let auxArray = [];
    for (let i = 0; i < data.length; ++i) {
      auxArray.push(false);
    }

    setOpenNthModal(auxArray);
  }, []);

  useEffect(() => console.log(openFirst), [openFirst]);

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

  function spin1(e) {
    //Para a animação da linha:
    x1 = 90;
    setPosBackground(x1);
    //Para saber em qual componente está:
    selectedComp = "HOME";
    setSelected(selectedComp);
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

    // controla dos modais
    if (listStyle !== "standby") setListStyle("hide");
    if (!isMobile && contactStyle !== "standby") setContactStyle("hide");
    if (isMobile && slideStyle !== "standby") setSlideStyle("hide");
    if (isMobile && contactMobileStyle !== "standby")
      setContactMobileStyle("hide");
    if (isMobile && slideCourses !== "standby") setSlideCourses("hide");
  }

  function spin2(e) {
    //Para a animação da linha:
    x1 = 60;
    setPosBackground(x1);
    //Para saber em qual componente está:
    selectedComp = "CURSOS";
    setSelected(selectedComp);
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

    //Para a animação do modalQuemSomos:
    setTimeout(() => {
      setOpen(true);
    }, 1200);

    // controle dos modais
    if (!isMobile && contactStyle !== "standby") setContactStyle("hide");
    if (isMobile && contactMobileStyle !== "standby")
      setContactMobileStyle("hide");
    if (isMobile && slideStyle !== "standby") setSlideStyle("hide");
    if (listStyle === "standby" || listStyle === "hide") {
      setListStyle("show");
    } else {
      setListStyle("hide");
    }
    if (isMobile && slideCourses !== "show") {
      setSlideCourses("show");
    } else {
      setSlideCourses("hide");
    }
  }

  function spin3(e) {
    //Para a animação da linha:
    x1 = 30;
    setPosBackground(x1);
    //Para saber em qual componente está:
    selectedComp = "QUEMSOMOS";
    setSelected(selectedComp);
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

    //Para a animação do modal:
    setTimeout(() => {
      setOpenQuemSomos(true);
    }, 1200);

    // controle dos modais
    if (listStyle !== "standby") setListStyle("hide");
    if (!isMobile && contactStyle !== "standby") setContactStyle("hide");
    if (isMobile && contactMobileStyle !== "standby")
      setContactMobileStyle("hide");
    if (isMobile && slideStyle !== "show") {
      setSlideStyle("show");
    } else {
      setSlideStyle("hide");
    }
    if (isMobile && slideCourses !== "standby") setSlideCourses("hide");
  }

  function spin4(e) {
    //Para a animação da linha:
    x1 = 0;
    setPosBackground(x1);
    //Para saber em qual componente está:
    selectedComp = "CONTATO";
    setSelected(selectedComp);
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

    // controle dos modais
    if (listStyle !== "standby") setListStyle("hide");
    if (isMobile && slideStyle !== "standby") setSlideStyle("hide");
    if ((!isMobile && contactStyle === "standby") || contactStyle === "hide") {
      setContactStyle("show");
    } else {
      setContactStyle("hide");
    }
    if (
      (isMobile && contactMobileStyle === "standby") ||
      contactMobileStyle === "hide"
    ) {
      setContactMobileStyle("show");
    } else {
      setContactMobileStyle("hide");
    }
    if (isMobile && slideCourses !== "standby") setSlideCourses("hide");
  }

  function closeModal() {
    setOpenFirst(false);
    setOpenSecond(false);
    setOpenThird(false);
  }

  return (
    <div className={classes.homeContainer}>
      {/* <InstagramCarousel /> */}
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
            <h1 className={classes.footerTitle1}>INVISTA HOJE NO SEU FUTURO</h1>
            <h1 className={classes.footerTitle2}>E DÊ ASAS AO SEU SONHO</h1>
          </div>
          <div
            className={classes.homeContainerChildren}
            style={{
              backgroundPositionX: posBackground,
              transitionDuration: "2.5s",
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
            <img className={styles.logo} src={responseSize}></img>
          </div>

          <div className={classes.buttonHome} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin1}
              style={
                selected === "HOME"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              HOME
            </p>
          </div>
          <div className={classes.button2} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin2}
              style={
                selected === "CURSOS"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              CURSOS
            </p>
          </div>

          <div className={classes.button3} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin3}
              style={
                selected === "QUEMSOMOS"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              QUEM SOMOS
            </p>
          </div>
          <div className={classes.button4} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin4}
              style={
                selected === "CONTATO"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              CONTATO
            </p>
          </div>
        </div>
      </div>

      {isMobile ? (
        <ThemeProvider theme={cardContentOverride}>
          <CoursesMobile
            slideCourses={slideCourses}
            openNthModal={openNthModal}
            setOpenNthModal={setOpenNthModal}
            setSlideCourses={setSlideCourses}
          />
        </ThemeProvider>
      ) : (
        <CoursesList
          listStyle={listStyle}
          // feito estaticamente: implementar via .map igual no cursos do mobile
          openFirst={() => setOpenFirst(true)}
          openSecond={() => setOpenSecond(true)}
          openThird={() => setOpenThird(true)}
        />
      )}

      {isMobile ? (
        <QuemSomosMobile
          slideStyle={slideStyle}
          close={() => setSlideStyle("hide")}
        />
      ) : (
        <ModalQuemSomos open={openQuemSomos} setOpen={setOpenQuemSomos} />
      )}

      {isMobile ? (
        <ThemeProvider theme={buttonOverride}>
          <ContactsMobile
            contactMobileStyle={contactMobileStyle}
            close={() => setContactMobileStyle("hide")}
          />
        </ThemeProvider>
      ) : (
        <Contacts
          contactStyle={contactStyle}
          close={() => setContactStyle("hide")}
        />
      )}

      {!isMobile && <Footer />}

      {
        // Modais de transição DESKTOP
        !isMobile &&
          data.map((object, index) => {
            return (
              <AnimatedModal
                key={index}
                open={object.open}
                close={closeModal}
                title={object.title}
                text1={object.text1}
                text2={object.text2}
                text3={object.text3}
              />
            );
          })
      }

      {
        // Modais de transição MOBILE
        isMobile &&
          data.map((object, index) => {
            return (
              <AnimatedModalMobile
                key={index}
                index={index} // precisa desse pq key é impossível acessar, 'key' é palavra reservada
                openNthModal={openNthModal}
                openNthModalIndex={openNthModal[index]} // precisa desse para evitar crash
                setOpenNthModal={setOpenNthModal}
                setSlideCourses={setSlideCourses}
                title={object.title}
                text1={object.text1}
                text2={object.text2}
                text3={object.text3}
              />
            );
          })
      }
    </div>
  );
}

export default Home;
